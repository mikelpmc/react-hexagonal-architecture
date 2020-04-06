class Fetcher {
    get() {
        throw new Error('[Fetcher#get] must be implemented');
    }
}

export default Fetcher;
