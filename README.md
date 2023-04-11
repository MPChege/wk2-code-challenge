# wk2-code-challenge
## Animal List App
This is a simple web application that allows users to view a list of animals and their details. Users can view a list of all animals, click on an animal's name to view its details, and add votes for each animal.

## Technologies Used
This application was built using HTML, CSS, and JavaScript. It utilizes the Fetch API to retrieve data from a local server running on http://localhost:3000.

## How to Use
To use this application, you will need to have a local server running on http://localhost:3000 with the following endpoints:

GET /characters: This endpoint should return an array of animal objects, each with an id, name, image, and votes property.
GET /characters/:id: This endpoint should return a single animal object, identified by its id.
Once you have the server running, simply open the index.html file in your browser to view the Animal List App.

## Features
Viewing Animal List
Upon loading the application, a list of all animals is displayed. Each animal is represented by its name, and clicking on an animal's name will display its details.

## Viewing Animal Details
When viewing an animal's details, its image and number of votes are displayed. Users can add votes for the animal by clicking on the "Vote" button.

## Adding Votes
Clicking on the "Vote" button will add one vote to the animal's vote count and update the number of votes displayed.

## Future Improvements
In the future, the Animal List App could be improved by adding persistence for the votes, allowing the vote count to persist even after the page is refreshed or closed. Additionally, more information could be added to the animal details page, such as a description or fun facts about each animal.

## Credits
This application was built by Mark Paul. The animal images used in this application were sourced from http://localhost:3000/characters.