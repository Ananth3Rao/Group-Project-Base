export default (sequelize, DataTypes) => {
  const amenitiesJoinHotels = sequelize.define(
    'hotels_amenities_join',
    {
      hotel_id: {
        type: DataTypes.INTEGER, /* this is a foreing key*/
        allowNull: false,
      },
      amenities_id: {
        type: DataTypes.INTEGER, /*this is a foreign key */
        allowNull: false,
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return amenitiesJoinHotels;
};