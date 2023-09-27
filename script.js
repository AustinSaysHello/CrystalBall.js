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
};

// have been using this url to test: https://catfact.ninja/fact

// trying the contenful API after this 
// base url: https://cdn.contentful.com
// spaceID: hw2cgkmjcfcb
// environemtID: master

var space = "hw2cgkmjcfcb";
var environment = "master";

var contentObj = "";


var apiUrl = `https://cdn.contentful.com/spaces/${space}/environments/${environment}/entries?access_token=${accessToken}`;

console.log(apiUrl);

axios.get(apiUrl).then(function (response) {
  contentObj = response;
  console.log(contentObj.data.items)
});

// trying the snipcart API next
// nevermind, makes you add product in code, which is good if you already have 
// a cms, going to try commercejs insteadS

var apiUrl2 = "https://api.chec.io/v1/products/"

axios.get(apiUrl2, {
  headers: {
    "X-Authorization": accessToken2
  }
}).then(function(response){
  console.log(response.data)
});
