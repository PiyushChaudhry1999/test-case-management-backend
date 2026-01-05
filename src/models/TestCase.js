module.exports = (sequelize, DataTypes) => {
  const TestCase = sequelize.define("TestCase", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    status: {
      type: DataTypes.ENUM("pending", "passed", "failed"),
      defaultValue: "pending",
    },
  });

  return TestCase;
};
