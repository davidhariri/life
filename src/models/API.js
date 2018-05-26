import Note from './Note';

class APIError {
  constructor(code, text = null) {
    this.code = code;
    this.text = text;
  }
}

class API {
  constructor(baseURL = 'https://api.dhariri.com') {
    this.baseURL = baseURL;
  }

  getNotes() {
    return new Promise((resolve, reject) => {
      fetch(`${this.baseURL}/notes/`)
        .then(response => {
          if (response.ok) {
            response.json().then(d => {
              resolve(d.notes.map(n => new Note(n._id, n.text)));
            });
          } else {
            // TODO: Add message from API if available
            reject(new APIError(response.status));
          }
        })
        .catch(e => reject(e)); // Return native JS Error
    });
  }
}

export default API;