/* eslint-disable indent */
/* eslint-disable linebreak-style */
export default (sequelize, DataTypes) => {
    const Comments = sequelize.define(
        'Comments',
        {
            comment_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true,
                primaryKey: true
            },
            hotel_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            comment: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        { freezeTableName: true, timestamps: false }
    );
    return Comments;
}