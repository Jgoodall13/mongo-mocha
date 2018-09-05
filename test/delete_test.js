const assert = require('assert')
const User = require('../src/user')

describe("Delete a user from database", () => {
    let joe;

    beforeEach((done) => {
        joe = new User({
            name: 'Joe'
        })
        joe.save()
            .then(() => {
                done();
            })
    })
    it('Model Remove', (done) => {
        joe.remove()
            .then(() => User.findOne({
                name: "Joe"
            }))
            .then((user) => {
                assert(user === null);
                done();
            })
    })
    it('class remove', (done) => {
        User.deleteOne({
                name: 'Joe'
            })
            .then(() => User.findOne({
                name: "Joe"
            }))
            .then((user) => {
                assert(user === null);
                done();
            })
    })
    it('class find and remove', (done) => {
        User.findOneAndDelete({
            name: 'Joe'
        })
        .then(() => User.findOne({
            name: "Joe"
        }))
        .then((user) => {
            assert(user === null);
            done();
        })
    })
    it('class id and remove', (done) => {
        User.findByIdAndDelete(joe._id)
        .then(() => User.findOne({
            name: "Joe"
        }))
        .then((user) => {
            assert(user === null);
            done();
        })
    })
})