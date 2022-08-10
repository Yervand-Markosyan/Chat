const {URL_LOCAL_SERVER} = require("..//secrets_io/config") 
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
class Fetch {
  constructor(url) {
    this.url = url;
  }
  get(path) {
    const url = `${this.url}/${path}`;
    return this.request("GET", url);
  }

  put(path, body) {
    const url = `${this.url}/${path}`;
    return this.request("PUT", url, body);
  }

 post(path, body) {
    const url = `${this.url}/${path}`;
    return this.request("POST", url, body);
  }

  delete(path, body) {
    const url = `${this.url}/${path}`;
    return this.request("DELETE", url, body);
  }

  refreshToke(){
    
  }

  request(method, url, body) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.responseType = "json";
      xhr.setRequestHeader("Accept", 'application/json',)
      xhr.setRequestHeader("authorization", `Bearer`);
      xhr.onload = () => {xhr.status >= 400 ? reject("not found") : resolve(xhr.response)};
      xhr.send(JSON.stringify(body));
    });
  }
}
const fetch = new Fetch(URL_LOCAL_SERVER);
module.exports = fetch