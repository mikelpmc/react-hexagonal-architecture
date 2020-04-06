import { CharactersRepositoryFactory } from '../Repositories/Factory';
import GetCharactersUseCase from './GetCharactersUseCase';

class CharactersUseCasesFactory {
    static getCharactersUseCase = ({ config }) => {
        return new GetCharactersUseCase({
            repository: CharactersRepositoryFactory.httpCharacterRepository({
                config
            })
        });
    };
}

export { CharactersUseCasesFactory };
