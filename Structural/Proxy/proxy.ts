interface API {
    fetchData(): Promise<any>;
}

class APIReal implements API {
    fetchData(): Promise<any> {

        return fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json());
    }
}

class Proxy implements API {
    private apiReal: APIReal;
    private cache: any;

    constructor(apiReal: APIReal) {
        this.apiReal = apiReal;
        this.cache = {};
    }

    async fetchData() {
        if (this.cache["data"]) {
            console.log("Data return from API");
            return this.cache["data"];
        } else {
            const data = await this.apiReal.fetchData();
            console.log("New Data return from API");
            this.cache["data"] = data;
            return data;
        }
    }
}


const apiReal: APIReal = new APIReal();
const proxy: Proxy = new Proxy(apiReal);

proxy.fetchData().then((data) => {
    console.log(data);
});

proxy.fetchData().then((data) => {
    console.log(data);
});
