import CharacterRepository from './CharacterRepository';

class HTTPCharacterRepository extends CharacterRepository {
    constructor({ fetcher, config, characterMapperFactory }) {
        super();

        this._fetcher = fetcher;
        this._config = config;
        this._characterMapperFactory = characterMapperFactory;
    }

    async list() {
        const API_URL = this._config.get('API_URL');

        const { data } = await this._fetcher.get(`${API_URL}/character`);

        const { results } = data;

        return this._characterMapperFactory.map({ data: results });
    }
}

export default HTTPCharacterRepository;
