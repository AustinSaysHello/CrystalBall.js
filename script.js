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

var doGetPromise = function(url){
  var myResponse = "";
  return new Promise(function (resolve,reject) {
    axios.get(url)
    .then(function(response) {
      myResponse = response
    })
    .catch(function(error) {
      myResponse = error
    })
    if(myResponse != ""){
      resolve(myResponse);
    }
    else{
      reject("it didn't work");
    }
  })
}

var doGetPromise2 = function (url){
  return new Promise (function (resolve, reject) {
    /// code
    if( url != ""){
      resolve(url)
    }
    else{
      reject("invalid url")
    }
  })
}

var doGetPromise3 = function (url){
  return new Promise (function (resolve, reject) {
    /// code
    axios.get(url)
    .then(function(response) {
      // handle success
      resolve(response)
    })
    .catch(function(error) {
      // handle error
      reject(error)
    })
  })
}
