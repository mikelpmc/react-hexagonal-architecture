import Fetcher from './Fetcher';

class HTTPFetcher extends Fetcher {
    constructor({ fetcher }) {
        super();

        this._fetcher = fetcher;
    }

    get(url, params) {
        return this._fetcher.get(url, params);
    }
}

export default HTTPFetcher;
