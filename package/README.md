```javascript

const ModelMapper = require('j-mapper');

class Plant {

    constructor(plant) {
        this.id = plant.id;
        this.name = plant.name;
        this.description = plant.description;
        this.price = plant.price;
        this.image = plant.image;
        this.isSold = plant.isSold;
        this.suns = plant.suns;
        this.water = plant.water;
        this.id_category = plant.id_category;
    }


}


class PlantDto {
    id
    name
    description
    price
    image
    isSold
    suns
    water
    id_category
}


class ClientDto {
    name
    firstname
}

const jsonPlant = {
    //plant info
    id: 1,
    description: "test",
    price: 1,
    image: "test",
    isSold: true,
    //client info
    nameClient: "jhon",
    firstname : "doe"
}

// 3 types of intelligence
// 1. strict : maps only the same properties that are in the model
// 2. loose : maps the same properties that are in the model and the properties that are not in the model like (nameBlabla instead of name )
// 3. smart : maps intelligently the properties that are in the model , and avoids properties that are composed like nameClient , it would reserve the name property for Client class 

const resp1 = new ModelMapper(jsonPlant, new PlantDto).do().get();
const resp2 = new ModelMapper(jsonPlant, new PlantDto).setIntelligence(1).do().get();
const resp3 = new ModelMapper(jsonPlant, new PlantDto).setIntelligence(2).do().get();
const obj = new ModelMapper(jsonPlant, new ClientDto,2).do();
const resp4 = obj.get();
const resp5 = obj.setClass(new PlantDto).do().get();

console.log("resp2, ", resp2);
console.log("resp1, ", resp1);
console.log("resp3, ", resp3);
console.log("resp4, ", resp4);
console.log("resp5, ", resp5);


```

## License
ISC

## Author
author: "abderox <"

## Keywords

mapper  
model

## Dependencies

No dependencies.

## Dev Dependencies

No devDependencies.

## Repository

[j-mapper](https://github.com/abderox/mapper-dto-js.git)

