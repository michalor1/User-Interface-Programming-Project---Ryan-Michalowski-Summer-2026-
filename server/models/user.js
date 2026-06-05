const users = [
    {
        username: "cathy123",
        password: "icecream"
    },
    {
        username: "bobbi",
        password: "badpassword"
    },
    {
        username: "petey",
        password: "bestcat"
    }
]
function getUsers () {
    return users;
}

module.exports = { getUsers };