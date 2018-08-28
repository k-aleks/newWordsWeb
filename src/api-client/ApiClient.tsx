export interface IWordDefinitionResponse {
    word: string;
    definition: string;
}

export class ApiClient {
    public async getWordDefinition(wordToLookup: string): Promise<IWordDefinitionResponse> {
        await sleepAsync(1000);
        return {
            word: wordToLookup,
            definition: "This is a word definition mock for '" + wordToLookup + "'"
        };
    }
}

async function sleepAsync(ms: number) {
    await _sleep(ms);
}

function _sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
