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
    media,
    tweet_id
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
    this.tweet_id = tweet_id;

    if (this.media != null) {
      this.media = this.media.map(m => {
        m = {
          url: m
        };

        // Check for old style of files
        if (m.url.split('_').length === 1) {
          m.url_optimized = m.url;
          m.url_poster = m.url;
          m.media_type = 'img';
          m.aspect = 1.33;
          m.avg_color = '#eff1f3';

          return m;
        }

        if (m.url.includes('.gif')) {
          const parts = m.url.split('.gif');
          m.url_optimized = parts[0] + '.thumb.mp4';
          m.url_poster = parts[0] + '.poster.jpeg';
          m.media_type = 'video';
        } else {
          const parts = m.url.split('.jpeg');
          m.url_optimized = parts[0] + '.thumb.jpeg';
          m.url_poster = m.url_optimized;
          m.media_type = 'img';
        }

        const fn = m.url.split('/')[4];
        m.aspect = parseFloat(fn.split('_')[0]);
        m.avg_color = '#' + fn.split('_')[1];

        return m;
      });
    }
  }
}

export default Post;
