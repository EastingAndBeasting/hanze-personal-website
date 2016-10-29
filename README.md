# hanze-personal-website
A school project. Create a personal website for a studet, following design guidelines different student has created.

To make this a bit more interesting than just HTML/CSS, I've added npm + gulp to create an easy to use template system:

Source files from the src folder are compiled from html + .nunjucks templates using gulp-nunjucks-render and gulp-data.
Afterwards they are beautified using gulp-html-beautify and placed in the root directory.

# How to use
2. Clone this repository
1. Install node.js and npm
3. Run `npm install` in the root directory
4. Run `gulp` to build the project
