Assignment One
PurposeLinks to an external site.
The purpose of this assignment is to set up your GitHub and Render instances for future assignments. You will create an Echo server, setup auto-deployment on Render, and test the server using Postman.

PrerequisitesLinks to an external site.
Sign up for a free GitHubLinks to an external site. account if you don’t already have one.
Clone - https://github.com/AliceNN-ucdenver/CSC3916_Assignment1Links to an external site.
Sign up for a free account on RenderLinks to an external site..
StepsLinks to an external site.
Step 1: Creating an Echo ServerLinks to an external site.
Navigate to the cloned repository on your GitHub Classroom repository.
Create a new file server.js.
Implement an Echo server using Node.js and Express.js. This server should respond with the same string it receives in a POST request.
Step 2: Setting up Auto-deployment on RenderLinks to an external site.
Follow the steps in the Render guideLinks to an external site. to setup auto-deployment from your GitHub repository.
Step 3: Creating a Postman RequestLinks to an external site.
Open Postman and create a new POST request to your Render-deployed Echo server.

Create an environment variable echo_body for the body of your request.

In the ‘Tests’ tab, write tests to validate the response such as status code, response body, and response time.

// Check if the status code of the response is 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Check if the response time is less than 200ms
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

// Check if the response body is equal to the echo_body environment variable
pm.test("Response body is correct", function () {
    pm.expect(pm.response.text()).to.equal(pm.environment.get("echo_body"));
});
Step 4: Creating readme and Sharing CollectionLinks to an external site.
Create a readme.md file at the root of your GitHub repository.
Share your Postman collection and include it in your readme. Make sure to include your environment settings.
Step 5: SubmissionLinks to an external site.
Commit and push all your changes to your GitHub repository.
Submit the GitHub repository URL to Canvas.
RubricLinks to an external site.
-5: Not deployed to Render.
-5: Missing Postman Test.
-1: For each missing assert (test).
ResourcesLinks to an external site.
Node.jsLinks to an external site.
Passport.js Documentation - Basic DigestLinks to an external site.
Render Documentation - Deploy Node.js & Express.js appLinks to an external site.
Creating an Echo Server in Node.js (YouTube Video)Links to an external site.