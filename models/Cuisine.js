export default (sequelize, DataTypes) => {
  const Cuisine = sequelize.define(
    'cuisine_type',
    {
      cuisine_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      cuisine_name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Cuisine;
};