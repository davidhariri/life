class Note {
  constructor(id, created, text = '', location, location_friendly, images) {
    this.id = id;
    this.created = created;
    this.text = text;
    this.location = location;
    this.location_friendly = location_friendly;
    this.images = images;
  }
}

export default Note;
