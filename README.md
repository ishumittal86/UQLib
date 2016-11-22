UQ Library App:

This is a simple library app which displays a list of libraries and display the details for the libraries. This application uses Angular framwork and Angular material for styling.
Grunt is used as a task runner to minify js files and run a local server for the application. Karma-jasmine is used as Unit testing framework.

How to run the application:

To run the application, install corsproxy and karma-cli globally using the following commands on terminal:

npm install -g corsproxy

npm install -g karma-cli

After this, go to project directory and run the following commands:

npm install

grunt (will run the server on localhost:8000)

corsproxy (will start the proxy server to eliminate CORS issues)

Access the application using the url: localhost:8000

Issues:

1. Key matching for both the APIs is done using name field and that is also not consistent. In different instances, '&' , 'and' , '&amp;' have been used interchangeably without any definite pattern which caused issues in comparing the json objects from the different APIs.

2. Accessing the API caused CORS issues. Tried resolving using jsonp, but both the APIs were returning different content-type which was causing MIME issues. I guess if an API needs to be accessed publically and privacy also needs to be maintained, then it would have been better to possibly include some authentication in headers.

WCAG 2.0 guidelines:

1. Ideally, all the images should use an alt attribute.

2. All the input, select, textareas, other relevant elements in form or HTMl should have proper aria-labels associated with them.

3. To handle interactions, aria-live should be used to reflect the changes in the application.
