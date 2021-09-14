const MongoConnection = () => {

    const MongoClient = require('mongodb').MongoClient;
        const uri = 'mongodb+srv://sansivenyopmail:'+process.env.MONGO_PASSWORD+'@cluster0.3g1es.mongodb.net/?retryWrites=true&w=majority';
/* { useNewUrlParser: true, useUnifiedTopology: true } */
    function getByEmail(email, callback) {
        
        MongoClient.connect(uri,function (err) {
          if (err) return callback(err);
      
          const db = client.db('atc');
          const users = db.collection('users');
      
          users.findOne({ email: email }, function (err, user) {
            client.close();
      
            if (err) return callback(err);
            if (!user) return callback(null, null);
      
            return callback(null, {
              user_id: user._id.toString(),
              nickname: user.nickname,
              email: user.email
            });
          });
        });
      }
}