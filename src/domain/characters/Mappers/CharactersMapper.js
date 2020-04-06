class CharactersMapper {
    map({ data }) {
        const mappedData = data.map(({ id, name, species, image }) => ({
            id,
            name,
            species,
            image
        }));

        return mappedData;
    }
}

export default CharactersMapper;
