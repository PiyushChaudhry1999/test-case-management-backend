const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = require("./User")(sequelize, DataTypes);
const Project = require("./Project")(sequelize, DataTypes);

// Associations
User.belongsToMany(Project, { through: "UserProjects" });
Project.belongsToMany(User, { through: "UserProjects" });

module.exports = {
  sequelize,
  User,
  Project,
};
