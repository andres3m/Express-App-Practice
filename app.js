const express = require("express"); // Import express
const app = express ();             // Initialize our express app
const port = 3000;                  // Set the port the server listens on 

app.use(express.json()); // To make PATCH work: Parse the JSON body

app.get("/", function (req, res) { // Create a route handler for a Get request / root path 
    console.log(req.query.text);   // Console.log the query if we use (req.query) = { text: 'hello' } else (req.query.text)= hello
    
    const myObject = {             // Create an object 
        name: "Andres Espin "
    };
    res.json(myObject)              // Return a response in JSON
});


app.post("/", function (req, res) { // Create a route handler for a POST request / path 
    const myObject = {              // Create an object 
    text: "This message is from the POST request handler",
    };
    res.status(418).json(myObject); // return a JSON response and set the status code
});


app.patch("/api/quotes/:id", function (req, res) {  // Create a PATCH request handler /api/quotes/:id 
    console.log(req.params.id);                     // Log out the id / query parameter
    console.log(req.body.quoteText);                // Log out the quoteText from the body 
    res.json({                                      // Return a JSON response with an object we created on the fly
        text: "This Patch request was hit up!",
    });
});

app.delete("/api/quotes/:id", function (req, res) { // Create a DELETE request handler / quotes that take in an id as a URL parameter
    console.log(req.params.id);                     // Accessing and logging out an id from the url parameters
    res.json ({                                     // send a json response with an object created on the fly
        text: "This is the DELETE handler",
    });
});



app.listen(port, function () {                      // Set up the listener
    console.log(`Server is listening on port ${port}`);
});

