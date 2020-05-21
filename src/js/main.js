$(document).ready(function () {
    const person = {
        name: {
            first: 'Peter',
            last: 'Smith',
        },
        age: 27,
        role: 'admin'
    }
    const {
        role = 'user'
    } = person;
    console.log(role);
})