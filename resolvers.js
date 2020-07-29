const user = {
    _id: "1",
    name: "test",
    email: "test@aol.com",
    picture: "picture"

}
module.exports = {
    Query: {
        me: () => user
    }
}