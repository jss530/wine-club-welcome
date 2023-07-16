# Wine Club Welcome Page

A sample wine club signup page using Fresh and Deno Deploy.

Users are instructed to create a username and password to sign up for the club.
Client-side form validation has been added using HTML's built-in form validation.
With this in mind, users will not be able to click on the 'Join Us' button until all fields are correctly filled.
However, a '404 error' page has been created to handle any API response errors that may arise. It can be found by navigating to  https://wine-club-welcome.deno.dev/oops.
An item from the Extra Challenge section has also been added: namely, responsiveness. The form should display correctly regardless of screen size. 

Note that the success/error pages (https://wine-club-welcome.deno.dev/thank-you and https://wine-club-welcome.deno.dev/oops, respectively) contain navigation buttons that link back to the index.
If this were a real signup page, the success page would then link to the main Wine Cellar member homepage. 

### Usage

The project has been deployed to production. It can be found at: https://wine-club-welcome.deno.dev.

Otherwise, if you'd like to run it locally, make sure to install Deno: https://deno.land/manual/getting_started/installation

Then start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.
