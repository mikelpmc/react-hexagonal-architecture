import { FetcherFactory } from '../../Fetcher/factory';
import { CharactersMapperFactory } from '../Mappers/factory';
import HTTPCharacterRepository from './HTTPCharacterRepository';

class CharactersRepositoryFactory {
    static httpCharacterRepository = ({ config }) =>
        new HTTPCharacterRepository({
            fetcher: FetcherFactory.httpFetcher(),
            characterMapperFactory: CharactersMapperFactory.characterMapper,
            config
        });
}

export { CharactersRepositoryFactory };
