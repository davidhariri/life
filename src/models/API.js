import Note from './Note';
import * as contentful from 'contentful';

class API {
  constructor(authToken, baseURL = 'https://cdn.contentful.com') {
    this.baseURL = baseURL;
    this.authToken = authToken;
    this.contentfulClient = contentful.createClient({
      space: '7gys616l8vcm',
      accessToken:
        '485ac0870a61ea2ff9326e105590400cc1654c866bddfa2cfcd244ee544f67a3'
    });
    this.noteContentID = 'post';
  }

  createNotesFromContentfulEntries(entries) {
    return entries.map(e => {
      return new Note(
        e.sys.id,
        e.fields.dateCreated || e.sys.createdAt,
        e.fields.textContent,
        [e.fields.location.lat, e.fields.location.lon],
        e.fields.place,
        e.fields.images
      );
    });
  }

  makePromiseFromEntriesQuery(query) {
    return new Promise((resolve, reject) => {
      this.contentfulClient.getEntries(query).then(response => {
        resolve(this.createNotesFromContentfulEntries(response.items));
      });
    });
  }

  getNote(id) {
    return this.makePromiseFromEntriesQuery({
      content_type: this.noteContentID,
      limit: 1,
      'sys.id': id
    });
  }

  getNotes() {
    return this.makePromiseFromEntriesQuery({
      content_type: this.noteContentID
    });
  }
}

export default API;
