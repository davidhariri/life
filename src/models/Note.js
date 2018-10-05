class Note {
  constructor(id, created, text = '', location, location_friendly) {
    this.id = id;
    this.created = created;
    this.text = text;
    this.location = location;
    this.location_friendly = location_friendly;
  }
}

export default Note;
