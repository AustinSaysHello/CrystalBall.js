# Build Log

## Sep 19, 2023

### Before dev

* Main idea browser based platform to test and monitor APIs one would normally use in an application made up of modular services (CMS, ecommerce, search, etc.)

* Firstly, going to find a library for making JSON requests in the browser, here's what I've found so far
  * https://github.com/axios/axios - this looks good, and it's compatible across browsers
  * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch - this is the modern replacement for XMLHTTPRequest, come with promises and callbacks
  * I suppose I could use jQuery or any number of its modern replacements, they have their own HTTP libraries, would prefer to minimize bloat for now.
* Think I'm gonna go with Axios for now just to get started

* Secondly, long term I want this to be a little more structured than just a viewer for JSON viewing, something with a bit more strucutre, will write more about this later

### After dev 

* I decided to work with Alpine and Axios, managed to make a nice little wrapper to get them to work together
* Got a nice little use out of a promise, but need to be careful about which x-data value I'm changing

### Ideas

* Most impoartant: what can I call, and what do I get when I call?
  * API docs help here, and then the schema / types from the actual call
  * Then also how to structure the call (endpoints, auth, ect.)
* Other ideas
  * Could make a low-fi digital ops center in Google Sheets or Airtabble

## Sep 22, 2023

### Before Dev

* Past few days I've been working on a blog post about why's a good time to launch your own software
* Finished that, and reached out to a few other bloggers who put out Jamstack content so I can talk to them about my idea, will see if they reply
* Wanted to work on the code a little bit to keep the momentum going
* In the theme of API observability, I think something that reads the docs and breaks down the schema of the response would be good to work on next, going to start with that.

### After Dev

* Looks like if an API is built with OpenAPI specifications you can get the docs in json format, similar to this: https://catfact.ninja/docs/api-docs.json
* This is actually insanely useful, could store all docs in one place or at least the links, could store doc versions and track changes over time
* Since the documentation endpoint returns JSON, the code used to parse the json of the data responses could also be used for the documentation, 2 for one right there.
* Lots of APIs don't use the OpenAPI specification, but if they are adherenent to REST getting around from the entry point should be all you need, will have to test and see

## Sep 23, 2023

### Ideas

* For this project, I want to focus first on the subset of API functionality that actually serves content. That's the bare minimum functionality that has to be used if someones is making a composeable app with a cms or ecommerce tool, so it would be a good place to start. The management functionality can come next.
* Also go the idea to automatically add analytics code via middleware or edge functions, will keep that in the back of my mind for now. 

## Spetmeber 27, 2023

### Before Dev

* Tried setting up some self hosted solutions to test my library on, but was running into issues with Google Cloud run and docker, thing I'll just host them locally and expose them to the internet with ngrok, that way my projects on here can access them
* I kind of don't want to do that right now though, I'll probably just try some free services to test it with in the mean time
* Could try a number of sources like:
  * Airtable (they have a great API, they already have a query builder but that's not the point) *
  * Twitter
  * Stripe
  * Contentful (is free for 1 user) 
  * Builder.io (has a great free tier)
  * Snipcart (has a great free tier)
  * Storyblok (has a great free tier)
  * CommerceJs (has a great free tier)
* Another idea, could be used for exploring APIs for data science projects, and staging to landing zones