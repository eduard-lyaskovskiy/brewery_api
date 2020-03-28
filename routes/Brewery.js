class Brewery {
    constructor (data) {
        this.id = data.id;
        this.name = data.name;
        this.brewery_type = data.brewery_type;
        this.street = data.street;
        this.city = data.city;
        this.state = data.state;
        this.postal_code = data.postal_code;
        this.country = data.country;
        this.longitude = data.longitude;
        this.latitude = data.latitude;
        this.phone = data.phone;
        this.website_url = data.website_url;
        this.updated_at = data.updated_at;
        this.tag_list = data.tag_list;
    }
    getFullAddress () {
        return `${this.postal_code}<br>${this.country}<br>${this.state}<br>${this.city}<br>${this.street}`
    }
}
module.exports = Brewery;