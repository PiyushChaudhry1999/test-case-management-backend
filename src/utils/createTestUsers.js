require("dotenv").config();
const bcrypt = require("bcrypt");
const { sequelize, User } = require("../models");

const createUsers = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB connected for seeding");

    const users = [
      {
        username: "Admin User",
        email: "admin@test.com",
        password: "admin123",
        role: "admin",
      },
      {
        username: "Manager User",
        email: "manager@test.com",
        password: "manager123",
        role: "test-lead",
      },
      {
        username: "Tester User",
        email: "tester@test.com",
        password: "tester123",
        role: "tester",
      },
    ];

    for (const u of users) {
      const existing = await User.findOne({ where: { email: u.email } });

      if (existing) {
        console.log(`User already exists: ${u.email}`);
        continue;
      }

      const hashedPassword = await bcrypt.hash(u.password, 10);

      await User.create({
        username: u.username,
        email: u.email,
        password: hashedPassword,
        role: u.role,
      });

      console.log(`Created user: ${u.email}`);
    }

    console.log("Seeding completed");
    process.exit(0);
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
};

createUsers();
