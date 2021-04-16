/* eslint-disable indent */
/* eslint-disable linebreak-style */
export default (sequelize, DataTypes) => {
    const Restaurants = sequelize.define(
        'restaurant',
        {
            restaurant_id: {
                type: DataTypes, INTERGER,
                allowNull: false,
                unique: true,
                primaryKey: true
            },
            sub_region_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            price_range: {
                type: DataTypes.VARCHAR,
                allowNull: false
            },
            cuisine_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            rating: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            open_time: {
                type: DataTypes.TIME,
                allowNull: false
            },
            close_time: {
                type: DataTypes.TIME,
                allowNull: false
            },
            phone_number: {
                type: DataTypes.VARCHAR,
                allowNull: false
            },
            street_address:{
                type: DataTypes.VARCHAR,
                allowNull: false
            },
            city: {
                type: DataTypes.VARCHAR,
                allowNull: false
            },
            zip_code: {
                type: DataTypes.VARCHAR,
                allowNull: false
            },
            state: {
                type: DataTypes.CHAR,
                allowNull: false
            },
            atmosphere: {
                type: DataTypes.VARCHAR,
                allowNull: false
            },
            payment_accepted: {
                type: DataTypes.VARCHAR,
                allowNull: false
            },
        },
        { freezeTableName: true, timestamps: false }
        
    );
    return Restaurants;
}



        






