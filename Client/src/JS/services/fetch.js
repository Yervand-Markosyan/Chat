import SECRET from '..//secrets.js'
const url = SECRET.URL_LOCAL_SERVER;

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
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      xhr.setRequestHeader("authorization", `Bearer ${localStorage.getItem('token')}`);
      xhr.onload = () => {xhr.status >= 400 ? reject("not found") : resolve(xhr.response)};
      xhr.send(JSON.stringify(body));
    });
  }
}
const fetch = new Fetch(url);
export default fetch;