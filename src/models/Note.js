class Note {
  constructor(
    id,
    created,
    slug,
    text = '',
    html = '<p></p>',
    location,
    location_friendly
  ) {
    this.id = id;
    this.created = created;
    this.slug = slug;
    this.text = text;
    this.html = html;
    this.location = location;
    this.location_friendly = location_friendly;
  }
}

export default Note;
