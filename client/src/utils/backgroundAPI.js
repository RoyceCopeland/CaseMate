import axios from "axios";

export default {
    getBackground: function() {
      return axios.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=4e1b5dd257d91ee4aca2dd1ee1132456&tags=archery&per_page=100&page=1&format=json&nojsoncallback=1&auth_token=72157661279339738-9d8179d17f6c4b30&api_sig=07ac09038de4da4cb1e1a4bf5c505f82");
      // .then(response => {this.results = response.data.results})
      // console.log(response.data.results.photos.photo[0].farm);
      // console.log(response.data.results.photos.photo[0].server);
      // console.log(response.data.results.photos.photo[0].id);
      // console.log(response.data.results.photos.photo[0].secret);
  
      // var farmId = response.data.results.photos.photo[0].farm;
      // var serverId = response.data.results.photos.photo[0].server;
      // var photoId =  response.data.results.photos.photo[0].id;
      // var secret = response.data.results.photos.photo[0].secret;
      // //Need to build the url of the background image from the returned results
      // return `https://farm${farmId}.staticflickr.com/${serverId}/${photoId}_${secret}.jpg`
    }
};