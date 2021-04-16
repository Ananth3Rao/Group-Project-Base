/* I found the following code online @ https://sequelize.org/master/manual/assocs.html#creating-the-standard-relationships
this is my best interpreation of it */
export default (sequelize, DataTypes) => {
  const Hotels = sequelize.define('hotel_overview', { name: DataTypes.INTEGER });
  const Amenities = sequelize.define('hotels_amenities_join', { name: DataTypes.INTEGER });
  const amenitiesJoinHotels = sequelize.define('amenitiesJoinHotels', {
    hotel_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Hotels,
        key: 'id'
      }
    },
    amenities_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Amenities
      }
    }
  },
  { freezeTableName: true, timestamps: false });
  return amenitiesJoinHotels;
};
Hotels.belongsToMany(Hotels, { through: amenitiesJoinHotels });
Amenities.belongsToMany(Amenities, { through: amenitiesJoinHotels });