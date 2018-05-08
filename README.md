# Fruit Stand

Write an fruit stand app that dynamically displays fruit information including name, an image, 
and color of fruit based on fruit data

## Project structure

Your project should have an `index.html` file and normal config (`.eslintrc`, `.gitignore`) at the root. 
In addition, you should have the following folders: `js`, `css`, `images`.

You'll need to find images of each fruit to put in `images` folder.

## Requirements

1. Use the name of the fruit as a header of some sort
1. Set the `img.src` to that image in your images folder
1. Set the `.style.color` property of one of your elements to the color property of the fruit

## Process Guidence

1. In your `index.html` use a template element to describe the base html for an individual fruit list item (`li`)
1. In `app.js`:
    1. "import" (`globals`) `fruits` from `fruit.js`
    1. "export" (`exported`) the `App` class
    1. Before the class definition, create a template variable and assign it the template content from the 
    template element in `index.html` (Don't forget to use the `.content` property to get the document fragment!)
    1. Define your `App` class (more below)
1. In your `App` class:
    1. Define a constructor that assigns the fruit data to `this.fruits`
    1. Define a render method that will
        1. Create the `ul` element
        1. Loop the fruit data and clone the template, then update the clone with the data from the fruit
            1. Clone
            1. `.querySelect` each element on which you need to set property(ies)
            1. Modify those elements
            1. Append to `ul`
        1. return the `ul` element
