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

