//게시글정보
module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci', //이모티콘 저장
    });
    Post.associate = (db) => {
        //A.belongsTo( B )는 A 테이블은 B 테이블을 참조한다는 의미이다.
        //포스팅을 작성했을때 어느 사용자가 작성했는지 여부를 알아야하는 전제라면,
        //db.user 테이블을 참조해야한다.
        //생성 시 db.post 테이블에 userID 인덱스가 생성되어 PK값이 참조됨.
        db.Post.belongsTo(db.User);
        db.Post.belongsToMany(db.Hashtag, {through: 'PostHashtag'});
        db.Post.hasMany(db.Comment); // 하나의 게시글에 여러개의 comment가 붙을 수 있다. 1:N
        db.Post.hasMany(db.Image);
        db.Post.belongsToMany(db.User, {
            through: 'Like', //생성할 테이블 명
            as: 'Likers'
        });
        db.Post.belongsTo(db.Post, { as:'RetweerId' });
    };
    return Post;
};