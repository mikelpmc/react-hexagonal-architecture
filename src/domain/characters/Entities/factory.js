import CharacterEntity from './CharacterEntity';

class CharacterEntitiesFactory {
    static characterEntity = ({ id, name, species, image }) =>
        new CharacterEntity({ id, name, species, image });
}

export { CharacterEntitiesFactory };
