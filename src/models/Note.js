class Note {
  constructor(id, text = '', html = '<p></p>') {
    this.id = id;
    this.text = text;
    this.html = html;
  }
}

export default Note;
