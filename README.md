# hanze-personal-website
A school project. After a moodboard has been made of a student, it's your job to design and create the actual website for him/her based on the feel of the moodboard.

To make this a bit more interesting than just HTML/CSS, I've added npm + gulp to create a straight forward and easy to use template system.

Source files from the src folder are compiled from html + .nunjucks templates using `gulp-nunjucks-render` and `gulp-data`.
Afterwards all indentions are fixed using `gulp-html-beautify` and the built .html files are placed in the app directory.

# How to use
2. Clone this repository
1. Install node.js and npm
3. Run `npm install` in the root directory
4. Run `gulp compile` to build the project.

You can also run `gulp` to start watching project files, which compiles the project whenever a file is changed.
