class CharacterEntity {
    constructor({ id, name, species, image }) {
        this._id = id;
        this._name = name;
        this._species = species;
        this._image = image;
    }

    toJSON() {
        return {
            id: this._id,
            name: this._name,
            species: this._species,
            image: this._image
        };
    }
}

export default CharacterEntity;
