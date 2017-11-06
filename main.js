Parse.Cloud.define("sendEmail", function(request, response) {
  var sendgrid = require("sendgrid");
  sendgrid.initialize("your_sendgrid_username", "your_sendgrid_password");
 
  var name = request.params.name;
  var email = request.params.email;
  var message = request.params.message;
 
  sendgrid.sendEmail({
   to: "portregaleri@gmail.com",
   from: email,
   fromname: name,
   subject: "Email from my website",
   text: "Name: "+name+"\nEmail: "+email+"\nMessage:\n\n"+message
   }, {
     success: function(httpResponse) {
       console.log(httpResponse);
       response.success("Email sent!");
    },
     error: function(httpResponse) {
       console.error(httpResponse);
       response.error("Uh oh, something went wrong");
    }
  });
});

