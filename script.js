var testObj = "";

var doGetPromise = function(url) {
  return new Promise(function(resolve, reject) {
    /// code
    axios.get(url)
      .then(function(response) {
        // handle success
        testObj = response;
        console.log(testObj);
        resolve(response)
      })
      .catch(function(error) {
        // handle error
        reject(error)
      })
  })
}

// have been using this url to test: https://catfact.ninja/fact
