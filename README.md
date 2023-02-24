# Introductory Offer component with Sign-up Form

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot
![Screen Shot 2023-02-22 at 10 28 51 PM](https://user-images.githubusercontent.com/75948442/220815264-c498f38c-bb1b-483a-b9f9-78efef10cb46.png)
![Screen Shot 2023-02-22 at 10 29 18 PM](https://user-images.githubusercontent.com/75948442/220815330-804dd1de-0b91-458f-a41c-da5739033312.png)

### Links

- Solution URL: [code here](https://github.com/gp0710/intro-signup-form)
- Live Site URL: [live site here](https://gp0710.github.io/intro-signup-form/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

I finally started using SCSS. It was confusing at first, but it started to become easier as I kept going at it. It really makes writing CSS easier since it compiles into CSS for you. 

In this project, I've also incorporated CSS Grid for larger screens.

I utilized JavaScript form validation, rather than HTML form validation. 
When required is added to an input element in HTML, the browser automatically validates the form for you. 


### Continued development

Writing SCSS wasn't so bad. I will continue brushing up on that and maximizing its utility.

For some reason, my background images are not showing in github pages. I also had trouble with that initially, while building out the project. If I add a . or ~ in front of the file path, the image will not load.

Since I'm up to speed on SCSS, I might build my next frontend project on Webpack, or React. 

### Useful resources
- [Multia Media Queries SCSS](https://stackoverflow.com/questions/42160426/multiple-media-queries-issue-when-using-sass-mixin-and-content) - There are not a lot of SCSS resources compared to CSS, however this solution explains how to utilize media queries in SCSS.
- [SCSS Cheatsheet](https://devhints.io/sass) - Good reference guide for quickly adding mixins, nesting, map, etc,.
- [Regex Email Validation](https://regexr.com/3e48o) - quick regex email validation 
