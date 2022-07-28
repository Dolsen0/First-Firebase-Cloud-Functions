const functions = require("firebase-functions");


exports.hello = functions.https.onRequest((req, res) =>{
    res.send('Im on firebase')
}
)



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
