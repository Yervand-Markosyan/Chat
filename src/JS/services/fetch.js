import SECRET from '..//secrets.js'
const url = SECRET.URL_LOCAL_SERVER;

class Fetch {
  constructor(url) {
    this.url = url;
  }
  async get(path) {
    const url = `${this.url}/${path}`;
    const data = await this.request("GET", url);
    if (data.token) {
      localStorage.removeItem('token');
      localStorage.setItem('token', data.token )
    }
  }

  async put(path, body) {
    const url = `${this.url}/${path}`;
    const data = await this.request("PUT", url, body);
    if (data.token) {
      localStorage.removeItem('token');
      localStorage.setItem('token', data.token );
    }
  }

  async post(path, body) {
    const url = `${this.url}/${path}`;
    const data = await this.request("POST", url, body);
    if (data.token) {
      localStorage.removeItem('token');
      localStorage.setItem('token', data.token )
    }
  }

  async delete(path, body) {
    const url = `${this.url}/${path}`;
    const data = await this.request("DELETE", url, body);
    if (data.token) {
      localStorage.removeItem('token');
      localStorage.setItem('token', data.token )
    }
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