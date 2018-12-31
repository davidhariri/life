class Post {
  constructor(
    id,
    slug,
    comment,
    date_created,
    date_updated,
    location_lat,
    location_lon,
    location_name,
    media
  ) {
    this.id = id;
    this.slug = slug;
    this.comment = comment;
    this.date_created = date_created;
    this.date_updated = date_updated;
    this.location_lat = location_lat;
    this.location_lon = location_lon;
    this.location_name = location_name;
    this.media = media;
  }
}

export default Post;
