//사용자정보
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING(30), //STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
            allowNull: false, //null 허용 여부
            unique: true //고유값 여부
        },
        nickname: {
            type: DataTypes.STRING(30),
            allowNull: false, //null 허용 여부
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false, //null 허용 여부
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
    User.associate = (db) => { //db 관계도 설정, 1:N , N:1, N:N..
        db.User.hasMany(db.Post); //user 한명은 여러개의 post를 가질 수 있다. 1:N
        db.User.hasMany(db.Comment); // 마찬가지
        db.User.hasMany(db.Hashtag);
        db.User.hasMany(db.Image);

        db.User.belongsToMany(db.Post, {
            through: 'Like',
            as: 'Likes'
        });
        //구독 도메인 구성  (양측 모두 UserID, UserID 컬럼으로 구성되므로 foreignKey 옵션으로 컬럼명을 지정해준다.)
        db.User.belongsToMany(db.User,{through: 'Follow', as: 'Publisher', foreignKey:'SubscriberId'});
        db.User.belongsToMany(db.User,{through: 'Follow', as: 'Subscriber', foreignKey:'PublisherId'})
    };
    return User;
};