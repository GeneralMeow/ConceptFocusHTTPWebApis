# Concept Focus: HTTP & Web APIs

## Challenge Rating

This goal will likely be within your ZPD if you...

- Can choose a goal that fits your ZPD
- Have set up a web server with Node.js and Express
- Are familiar with the concept of web servers and clients
- Are comfortable jumping into a new codebase
- Are interested in learning more about HTTP
- Are interested in learning more about how the web works
- Are interested in working with web APIs

## Description

Explore the inner workings of **HTTP**, and apply your knowledge to interact with an external **web API**.

_Concept focus_ goals like this one have some unique characteristics. If this is your first time working on one, read the [Context](#context) for more information.

In working on this goal, you should explore concepts like:

- The HTTP request-response cycle
- HTTP verbs
- URL components: host, path, query string
- Routing web requests
- Serving static resources
- Interacting with an external web API

For guidance and support, start with the [Resources](#resources) provided.

## Context

This goal is a _concept focus_ goal, which means that it is not specific about the project you build, but rather the concepts that you apply in building it.

You will have to choose _what to build_. The details of the project are up to you. The project can be pre-written (so long as you have permission to use it) or a new one of your own choosing. You can even choose projects from other goals.

For inspiration, review the [list of project ideas][project-ideas].

The advantage of this is that you can work on whatever kind of project you like, so long as you focus on building your skills and knowledge of the concept in question.

The disadvantage is that it is very easy to get distracted or to waste time on non-essential tasks like making decisions about project design. It is also likely that you won't have as much support available, since other learners and coaches won't have worked on the same project as you. If you prefer to have more structure and deterministic outcomes, you may not enjoy this goal.

That being said, if you have the self-discipline, motivation, and resolve, you will likely benefit from choosing this goal.

An added benefit of working on a concept-focus goal is that you'll have a project with lots of great _examples_ that you can reference later.

## Specifications

- [X] Artifact produced is a GitHub repo.
- [X] GitHub repo contains a web server.
- [X] Can run the command `npm start` to start the web server at port 3000.
- [X] The web server source code is written using the [Express][express] library.
- [X] The web server handles routes for the following HTTP verbs 
  - [X] `GET`
  
  
   `// get homepage
    router.get('/', (request, response) => {
      response.render('index')
    .then(() => {
    response.status(200)
  })
})`
    https://github.com/GeneralMeow/ConceptFocusHTTPWebApis/blob/master/routes/routes.js
  - [X] `POST`
  
  `//create new-itinerary
router.post('/create-itinerary', (request, response, next) => {
  const {airline, hotel, budget} = request.body
    db.saveItinerary(airline, hotel, budget)
    .then(() => {
      response.redirect(201, 'itinerary')
    })
    .catch((error) => {
      return next(error)
    })
})`
  https://github.com/GeneralMeow/ConceptFocusHTTPWebApis/blob/master/routes/routes.js
  - [X] `PUT/PATCH`
  
  `router.put('/itinerary/:id', (request, response, next) => {
  const {item} = request.body
  const {id} = request.params
  db.updateSuitcase(id, item)
  .then(() => {
    response.sendStatus(201)
  })
  .catch((error) => {
    return next(error)
  })
})`
    https://github.com/GeneralMeow/ConceptFocusHTTPWebApis/blob/master/routes/routes.js
  - [X] `DELETE`
- [X] Examples of each HTTP verb usage are listed and linked to in the README
- [X] The web server makes use of the following response status codes
  - [x] `200` (OK)
  
    `// get homepage
    
    router.get('/', (request, response) => {
      response.render('index')
    .then(() => {
    response.status(200)
  })
})`
    https://github.com/GeneralMeow/ConceptFocusHTTPWebApis/blob/master/routes/routes.js
  - [x] `201` (Created)
   `//create new-itinerary
router.post('/create-itinerary', (request, response, next) => {
  const {airline, hotel, budget} = request.body
    db.saveItinerary(airline, hotel, budget)
    .then(() => {
      response.redirect(201, 'itinerary')
    })
    .catch((error) => {
      return next(error)
    })
})`
  https://github.com/GeneralMeow/ConceptFocusHTTPWebApis/blob/master/routes/routes.js
  
  - [X] `400` (Bad Request)
  
 
  - [x] `301` (Moved Permanently)
  
  `router.get('/about', (request, response) => {
  response.status(301).send("<div>Error 301: Organization information has been moved to the dark side of the moon. Please turn on sound to hear a message from our sponsors!</div>")
})`
  https://github.com/GeneralMeow/ConceptFocusHTTPWebApis/blob/master/routes/routes.js
  - [x] `403` (Forbidden)
  
  `router.get('/contact', (request, response) => {
  response.status(403).send("<div>Error 403: You are not authorized to contact this organization.</div>")
})`
   https://github.com/GeneralMeow/ConceptFocusHTTPWebApis/blob/master/routes/routes.js
  - [x] `404` (Not Found)
  
  `router.get('/404', (request, response) => {
  response.render('404')
})`
  - [X] `500` (Internal Server Error)
  https://github.com/GeneralMeow/ConceptFocusHTTPWebApis/blob/master/routes/routes.js
  
- [X] Examples of each status code usage are listed and linked to in the README
- [X] The web server uses URL components in routing and responding
  - [x] Different paths trigger different routes
  - [X] Values from the URL query string are used in a route
- [X] Examples of routing and query string usage are listed and linked to in the README

  `router.put('/itinerary/:id', (request, response, next) => {
  const {item} = request.body
  const {id} = request.params
  db.updateSuitcase(id, item)
  .then(() => {
    response.sendStatus(201)
  })
  .catch((error) => {
    return next(error)
  })
})`
- [X] The web server makes use of the following request headers
  - [X] `Accept`
  
  `function clicky(i) {

  let it = document.getElementById(i);

  it.setAttribute('contentEditable', true);
  it.addEventListener('keypress', function(e) {
      let key = e.which || e.keyCode;
      if (key === 13) {
          it.setAttribute("contentEditable", false)

          fetch( `/itinerary/${i}`, {
            method: 'PUT',
            body: JSON.stringify({ item: it.innerText, id: i }),
            headers: new Headers({
              "Content-Type": "application/json",
              "Accept": "application/json"
            })
          })
          .then(jsonRes => {
            return jsonRes.text()
          })
        }
    })
}
`
  - [ ] `Origin`
  - [X] `Content Type`
  - [ ] `Authorization`
  - [ ] `Cookie`
- [X] Examples of each request header usage are listed and linked to in the README
- [ ] The web server makes use of the following response headers
  - [ ] `Location`
  - [ ] `Set-Cookie`
  - [ ] `Refresh`
  - [ ] `Access-Control-Allow-Origin`
  - [ ] `Content-Length`
- [ ] Examples of each response header usage are listed and linked to in the README
- [X] The web server serves different types of resources
  - [x] Asset files (CSS, images)
  - [x] Static HTML
  - [X] Static JSON
  - [x] Dynamic resources (content of response changes based on query params, request headers, and/or application state)
- [ ] Examples of each response type are listed and linked to in the README
- [ ] Example of a raw HTTP request and the server's raw HTTP response are included in the README
  - [ ] Examples show full HTTP message header
  - [ ] Examples show full HTTP message body
- [X] The web server makes the following request types to an external API
  - [X] Get a resource
  
  `const fetchWeather = () => {
  const fetchUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=2154624&APPID=253e1c4d472cec6a63788025b1f71efb'
  return fetch(fetchUrl)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
      }
      // Examine the text in the response
      return response.json()
        .then(function(data) {
          const weather = data.list[0].weather
          return weather
          // console.log(weather);
        })
      }
    )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}
`
https://github.com/GeneralMeow/ConceptFocusHTTPWebApis/blob/master/routes/routes.js
  - [ ] Create a resource
  - [ ] Update a resource
  - [ ] Delete a resource
- [X] Examples of each request type to the external API are listed and linked to in the README
- [X] The best resources you find for learning testing are added to a file `resources.md`
- [X] The artifact produced is properly licensed, preferably with the [MIT license][mit-license]

