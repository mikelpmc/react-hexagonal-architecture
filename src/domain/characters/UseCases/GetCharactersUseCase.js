class GetCharactersUseCase {
    constructor({ repository }) {
        this._repository = repository;
    }

    async execute() {
        const characters = await this._repository.list();

        return characters;
    }
}

export default GetCharactersUseCase;
