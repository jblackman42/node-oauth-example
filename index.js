// Import the express lirbary
const express = require('express')

// Import the axios library, to make HTTP requests
const axios = require('axios')

// This is the client ID and client secret that you obtained
// while registering the application
const clientID = 'c398e17e424893287876'
const clientSecret = 'a128b3cd49bde8952f1f1a249218609245445fc3'

// Create a new express application and use
// the express static middleware, to serve all files
// inside the public directory
const app = express()
app.use(express.static(__dirname + '/public'))

app.get('/oauth/redirect', (req, res) => {
  console.log(req)
  res.redirect(`/welcome.html`)
})

// Start the server on port 8080
app.listen(8080)
