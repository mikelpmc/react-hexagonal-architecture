import Config from './Config';
import { CharactersUseCasesFactory } from './characters/UseCases/factory';

const config = new Config();

class Domain {
    useCases = {
        list_all_characters: CharactersUseCasesFactory.getCharactersUseCase({
            config
        })
    };

    get(useCase) {
        return this.useCases[useCase];
    }
}

const instance = new Domain();

export default instance;
