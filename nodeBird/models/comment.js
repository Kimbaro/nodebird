//게시글에 남긴 글
module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        commnet: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci', //이모티콘 저장
    });
    Comment.associate = (db) => {
        //db.comment 테이블에 userID, postID 생성
        db.Comment.belongsTo(db.User);
        db.Comment.belongsTo(db.Post);

    };
    return Comment;
};