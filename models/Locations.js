export default (sequelize, DataTypes) => {
    const Locations = sequelize.define(
        'Locations',
        {
            sub_region_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true,
                primaryKey: true
            },
            sub_region: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        }
    );
    return Locations
}