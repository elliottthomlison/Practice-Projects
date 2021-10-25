const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.db_local_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(con => {
    console.log(`MongoDB connected with host: ${con.connection.host}`)
})
}

module.exports = connectDatabase