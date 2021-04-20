/* I found the following code online @ https://sequelize.org/master/manual/assocs.html#creating-the-standard-relationships
this is my best interpreation of it */
export default (sequelize, DataTypes) => {
  const Hotels2 = sequelize.define('hotel_overview', { name: DataTypes.STRING });
  const Amenities2 = sequelize.define('amenities', { name: DataTypes.STRING });
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
        key: 'id'
      }
    }
  },
  { freezeTableName: true, timestamps: false });
  return amenitiesJoinHotels;
};
Hotels2.belongsToMany(Hotels2, { through: amenitiesJoinHotels });
Amenities2.belongsToMany(Amenities2, { through: amenitiesJoinHotels });