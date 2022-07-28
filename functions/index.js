const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());


app.get("/test", (req, res) => {
    res.send("Passed the test")
});

app.get("/another", (req, res) => {
    res.send("It's still working")
});

app.delete('/delete-one', (req, res) => {
    Array.splice(3,1)
})

exports.hello = functions.https.onRequest((req, res) =>{
    res.send('Im on firebase')
});


exports.api = functions.https.onRequest(app);




// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
