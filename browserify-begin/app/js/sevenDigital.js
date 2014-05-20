// require the 7digital npm module
var api = require('7digital-api'),
    artists = new api.Artists();

// get releases from artist with id 1
artists.getReleases({ artistid: 1 }, function(err, data) {
    console.dir(data);
});