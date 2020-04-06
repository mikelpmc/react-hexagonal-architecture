import axios from 'axios';
import HTTPFetcher from './HttpFetcher';

class FetcherFactory {
    static httpFetcher = () => {
        return new HTTPFetcher({ fetcher: axios });
    };
}

export { FetcherFactory };
