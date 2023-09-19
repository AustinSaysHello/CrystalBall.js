# Build Log

## Sep 19, 2023

* Main idea browser based platform to test and monitor APIs one would normally use in an application made up of modular services (CMS, ecommerce, search, etc.)

* Firstly, going to find a library for making JSON requests in the browser, here's what I've found so far
  * https://github.com/axios/axios - this looks good, and it's compatible across browsers
  * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch - this is the modern replacement for XMLHTTPRequest, come with promises and callbacks
  * I suppose I could use jQuery or any number of its modern replacements, they have their own HTTP libraries, would prefer to minimize bloat for now.
* Think I'm gonna go with Axios for now just to get started

* Secondly, long term I want this to be a little more structured than just a viewer for JSON viewing, something with a bit more strucutre, will write more about this later