class MyService {
    axios
    baseUrl

    constructor(axios) {
        this.axios = axios
        this.baseUrl = 'https://rickandmortyapi.com/api/'
    }

    getCharacters() {
        return this.axios.get(`${this.baseUrl}character`);
    }

    getCharacter(id) {
        return this.axios.get(`${this.baseUrl}character/${id}`);
    }
}

export default MyService;