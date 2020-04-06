class Config {
    constructor() {
        this._config = {
            API_URL: 'https://rickandmortyapi.com/api'
        };
    }

    get(key) {
        return this._config[key];
    }
}

export default Config;
