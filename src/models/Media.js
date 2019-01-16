class Media {
    constructor(url) {
        // Example:
        // https://static.dhariri.com/media/1.76_e0e1e7_2e5f9e6b-683a-440e-992c-cc5c48a0b229.jpeg
        this.url = url

        // Split up the url into it's components
        const splitByDots = url.split('.');

        // Set type to the last string in splitByDots
        // Should be 'gif' or 'jpeg'
        this.type = splitByDots[splitByDots.length - 1];

        // Set the optimized url from the url
        if (this.type === 'gif') {
            this.url_optimized = this.url.replace(this.type, 'thumb.mp4');
            this.url_poster = this.url.replace(this.type, 'poster.jpeg');
        } else if (['jpeg', 'png', 'jpg'].includes(this.type)) {
            this.url_optimized = this.url.replace(this.type, 'thumb.jpeg');
            this.url_poster = null;
        }

        // Split up file name into parts (without static.dhariri etc...)
        const fileName = this.url.split("/")[4];
        const fileNameParts = fileName.split("_");

        // Set aspect ratio (width / height)
        this.aspect = parseFloat(fileNameParts[0]);

        // Set domainant colour (hex value)
        this.avg_color = `#${fileNameParts[1]}`;
    }
}

export default Media;