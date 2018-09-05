const assert = require('assert')
const User = require('../src/user')

describe('updating a user', () => {
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
    function assertName (operation, done) {
        operation
        .then(() => User.find({}))
            .then((users) => {
                assert(users.length === 1);
                assert(users[0].name === "Jacob");
                done();
            })
    }
    it('instance set n save', (done) => {
        joe.name = "Jacob"
        assertName(joe.save(), done)        
    })
    it('a model instance can update', (done) => {
        assertName(joe.update({name: 'Jacob'}), done)
    })
    it('a model class can update', (done) => {
        assertName(
            User.update({name: 'Joe'}, {name: 'Jacob'}),
            done
        )
    })
    it('a model class can update one record', (done) => {
        assertName(
            User.findOneAndUpdate({name: 'Joe'}, {name: 'Jacob'}),
            done
        )
    })
    it('a model class can update record with an Id and update', (done) => {
        assertName(
            User.findByIdAndUpdate(joe._id, {name: 'Jacob'}),
            done
        )
    })
})