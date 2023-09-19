var doGet = function(url) {
  axios.get(url)
    .then(function(response) {
      // handle success
      console.log("success");
      console.log(response);
      return "success";
    })
    .catch(function(error) {
      // handle error
      console.log("error");
      console.log(error);
      return "error";
    })
    .finally(function() {
      // always executed
    });
}

var testFunction = function(str) {
  return str;
}