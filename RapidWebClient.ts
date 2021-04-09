#Type script
class RapidClient {
    private method: string;
    get Method() {
        return this.method;
    }
    set Method(m:string) {
        this.method = m;
    }
    private url: string;
    get Url() {
        return this.url;
    }
    set Url(u: string) {
        this.url = u;
    }
    private params:object;
    get Params() {
        return this.params;
    }
    set Params(p:object) {
        this.params = p;
    }
    private headers:object;
    get Headers() {
        return this.headers;
    }
    set Headers(h:object) {
        this.headers = h;
    }
    private values:any;
    get Values() {
        return this.values;
    }

  
    constructor(method: string, url: string, params, headers: object) {
        this.Method = method;
        this.Url = url;
        this.Params = params;
        this.Headers = headers;
    }
    public  GetResponse() {
        const options = {
            method: `${this.Method}`,
            url: `${this.Url}`,
            params: this.Params,
            headers: this.Headers,    
        }
        return axios.request(options);
     
    }
 
    
}
