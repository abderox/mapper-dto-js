
class ModelMapper {

    json
    dto
    intelligence

    constructor(json, dto, intelligence = 0) {
        this.json = json;
        this.dto = dto;
        this.intelligence = intelligence;
    }

    setIntelligence(intelligence) {
        if (intelligence >= 0 && intelligence <= 2) {
            this.intelligence = intelligence;
        }
        return this;
    }

    setClass(dto) {
        this.dto = dto;
        return this;
    }

    do() {
        if (Object.keys(this.dto).length === 0 || Object.keys(this.json).length === 0 || Object.values(this.json).length === 0) {
            throw new Error("Can't map empty object");
        }
        for (const [key, value] of Object.entries(this.json)) {
            if (this.intelligence == 0) {
                if (this.dto.hasOwnProperty(key)) {
                    this.dto[key] = value;
                }
            }
            else if (this.intelligence == 1) {

                const objectDto = Object.getOwnPropertyNames(this.dto);

                for (let i = 0; i < objectDto.length; i++) {
                    if (objectDto[i].toLowerCase() == key.toLowerCase() || (objectDto[i].length > key.length && objectDto[i].substring(0, key.length) === key) || (key.length > objectDto[i].length && key.substring(0, objectDto[i].length) === objectDto[i])) {
                        this.dto[objectDto[i]] = value;
                    }
                }
            }

            else if (this.intelligence == 2) {

                const objectDto = Object.getOwnPropertyNames(this.dto);

                for (let i = 0; i < objectDto.length; i++) {
                    if (objectDto[i].toLowerCase() == key.toLowerCase() || (objectDto[i].length > key.length && objectDto[i].substring(key.length, objectDto[i].length).toLowerCase() === this.dto.constructor.name.toLowerCase().replace("dto", "") || key.length > objectDto[i].length && key.substring(objectDto[i].length, key.length).toLowerCase() === this.dto.constructor.name.toLowerCase().replace("dto", ""))) {
                        this.dto[objectDto[i]] = value;
                    }
                }
            }

        }
        return this;
    }

    get() {
        return this.dto;
    }
    fuck() {
        return "كفاك".split("").reverse().join("");
    }

}


module.exports = ModelMapper;