/* eslint-disable indent */
/* eslint-disable linebreak-style */
export default (sequelize, DataTypes) => {
    const Rooms = sequelize.define(
        'rooms',
        {
            room_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true,
                primaryKey: true
            },
            bed_type: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            hotel_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            num_guest: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            room_view_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            kitchenette: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            cost_per_night: {
                type: DataTypes.FLOAT, // FLOAT HERE
                allowNull: false,
            },
            balcony: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            sofa_bed: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }

        }, 
        { freezeTableName: true, timestamps: false }
    );
    return Rooms;
}