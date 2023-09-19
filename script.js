var doGet = function(url) {
  axios.get(url)
    .then(function(response) {
      // handle success
      return response;
    })
    .catch(function(error) {
      // handle error
      return error;
    })
    .finally(function() {
      // always executed
    });
}

var testFunction = function(str) {
  return str;
}