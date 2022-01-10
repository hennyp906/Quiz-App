const mongoose = require('mongoose');

const DB = process.env.MONGODB_URL

mongoose.connect(DB, {
    useNewUrlParser: true,
}).then(() => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
})
