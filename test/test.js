const ModelMapper = require('j-mapper');

const json = {
    "id": 1,
    "name": "John",
    "surname": "Doe",
    "age": 25,
    "address": {
        "street": "Main Street",
        "number": 1,
    },
    "phone": "1234567890",
    "email": "dddddd"
}


class UserDto {
    id
    name
    surname
    age
    address

    constructor() {
    }
}


const userDto = new UserDto();

const mapper = new ModelMapper(json, userDto, 2);

console.log(mapper.do().get());