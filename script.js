// Initialize Firebase
var config = {
    apiKey: "AIzaSyBMtMfVhb7_T0YujONY-b3PePjB-X7uz6Y",
    authDomain: "database-for-username.firebaseapp.com",
    databaseURL: "https://database-for-username.firebaseio.com",
    projectId: "database-for-username",
    storageBucket: "database-for-username.appspot.com",
    messagingSenderId: "584344017129"
  };
  firebase.initializeApp(config);
  
    var database = firebase.database();
    console.log(database);
  
    $(".btn").on("click", function(event) {
      event.preventDefault();
    
      // Get values from form inputs
      var name = $("#inputName")
        .val()
        .trim();
      var email = $("#inputEmail")
        .val()
        .trim();
      var subject = $("#inputSubject")
        .val()
        .trim();
      var message = $("#inputMessage")
        .val()
        .trim();
    
    
      // Creates local "temporary" object for holding order data
      var contactInfo = {
        name: name,
        email: email,
        subject: subject,
        message: message
        }
    
  
    
      // Uploads contact data to the database
      database.ref().push(contactInfo);
    
    
      $("#inputName").val("");
      $("#inputEmail").val("");
      $("#inputSubject").val("");
      $("#inputMessage").val("");
  
      swal("We will get back to you shortly in the order of inquiry", "success");
  
    });
    