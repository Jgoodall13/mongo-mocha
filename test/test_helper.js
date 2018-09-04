const mongoose = require('mongoose');

console.log('In main file')
mongoose.connect('mongodb://localhost/users_test', { useNewUrlParser: true });
mongoose.connection
    .once('open', () => console.log('Good to go!'))
    .on('error', (error) => {
        console.log('WE IN THIS ERRRRRRRRRRRRRRRRRRRRRRROR')
        console.warn("Warning", error)
    });

beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
        done();
    })
})