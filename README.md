# Note Taker Starter Code

## Description

### User Story

AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
### Acceptance Criteria

GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
WHEN I click on the "New Note" button in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears

## Installation

Installed the following packages to assist the building of the note taker-app:
a. uuid
b.nomdemon
c.express

To start the application, run "npm start".

## Contributing

To assist me with understanding the path files, I watched the Express part of Node.js, Express, MongoDB & More: The Complete Bootcamp 2023 from Udemy to gain a deeper understand of how to approach file paths. This helped me develope a sense of the file strucutre along with the notes from the NU Bootcamp.

I also feel like there is an easier way to delete the note. After much trial and error, it will work, but you have to press delete, and then refresh the page. I tried to do a forced window load after the delete path, but it didn't work. Although it will delete the task after pressing delete and then refreshing, I couldn't get it to do it after clicking the trash icon.


## License

MIT License

## Questions

For any questions, please contact me at mj.justmann@gmail.com
