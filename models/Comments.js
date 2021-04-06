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
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            comment: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }
    );
    return Comments
}