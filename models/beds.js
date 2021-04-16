/* eslint-disable indent */
/* eslint-disable linebreak-style */
export default (sequelize, DataTypes) => {
    const Beds = sequelize.define(
        'beds',
        {
            bed_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true,
                primaryKey: true
            },
            bed_type: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        }, 
        { freezeTableName: true, timestamps: false }
    );
    return Beds;
}