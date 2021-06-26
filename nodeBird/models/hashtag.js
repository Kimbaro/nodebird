//해시태그
module.exports = (sequelize, DataTypes) => {
    const Hashtag = sequelize.define('Hashtag', {
        commnet: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci', //이모티콘 저장
    });
    Hashtag.associate = (db) => {
        db.Hashtag.belongsTo(db.Post);
        db.Hashtag.belongsTo(db.User);
        //belongsToMany의 경우 양 테이블간 서로 의존하기 때문에 양 테이블의 고유 아이디의 매핑테이블이 생성된다.
        db.Hashtag.belongsToMany(db.Post, {through: 'PostHashtag'});
    };
    return Hashtag;
};