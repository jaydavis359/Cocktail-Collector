
# Testing

## Code Validators

* [W3C HTML Validator](https://validator.w3.org/) was used to check all HTML content, this raised errors in my recipe page because the images of the cocktails did not have 'ALT' attributes, because of this I had to add an image description field in my 'Add Recipe' form, make an image description addition to my app.py and mongodb collection and manually input descriptions for existing recipes! once this was done, no more errors were found.

* [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) was used to test the CSS content, this passed with no errors.

* [JSHint](https://jshint.com/) was used to check the javaScript content, this returned no errors, but a number of 'Undefined variable' messages, which I think were because of using Jquery.

* [PEP8](http://pep8online.com/) was used to check for PEP8 compliance in the python file, this flagged multiple 'trailing whitespace' issues in my app.py file, once these were fixed using the 'trim trailing whitespace' command in gitpod no further errors were found.

## Responsiveness

* Chrome dev. tools was used at every stage of designing the website to ensure that the core structure and style of the website remained the same across all devices.

## User Stories Testing

* As a visitor to this website, I would like the navagation to be instantly understandable.
    - This has been achieved by using the materialize navagation bar and footer, these are tried and tested components. 
* As a visitor to this website, I would like a catalogue of recipes to browse through.
    - This is addressed on the recipe page where simple columns of cocktail photos can be scrolled through.
* As a visitor to this website, I would like the ability to search for cocktails, by name or by ingredients.
    - The search bar on the recipe page fills this functionality in a user friendly way.
* As a visitor to this website, I would like the ability to register an account so I can start sharing my own recipes.
    - the Register button on the home page and the register option in the navagation bar bring you to the register page which lets you register to the site. 
* As a visitor to this website, I would like an email sign up option, to be kept up to date with site news.
    - The email sign up form in the footer allows the user to this, the email is then handled by emailjs.
* As a visitor to this webiste, I would like the option to follow the site on social media platforms.
    - The social media icons in the footer allow the user to be directed in a separate tab to that platform.

* As a member of the website, I would like to Login and view the recipes I have posted.
    - This functionality is served by the 'login' option and by viewing the recipes on the recipe page.
* As a member of the webiste, I would like the ability to add, edit and delete recipes.
    - This can be achieved using the add recipe option in the navbar, and the edit and delete options can be found on the recipe cards themselves. note: a user can only edit and delete recipes they have uploaded themselves.

* As an Admin of the website, I would like all of the above capabilities, but also the ability to add, edit and delete categories of recipes.
    - This can be done through the manage catagories option on the navbar.

## Aditional Testing

* Navagation bar elements tested and functional across all device sizes, each link directing to the appropriate page
and from each page back.
* Website title heading in the navagetion bar acts as alternate home button link as intended.
* Hamburger navagation menu, expands correctly, without affecting other elements, in all screen sizes.
* Email sign up box will only accept a valid email address and returns a confirmation when the submit button is pressed, as intended.
* Social media icons in the footer all direct to their respective websites in a new tab as intended.

## Bugs 

* I ran into a lot of css issues as the materalize template was overriding most commands, this has let to some alignment issues on smaller devices.

## Devices 

In addition to emulated devices in chrome dev tools the Website was inspected on the following physical devices:
* Surface pro 4 12" screen
* Surface pro 4 connected to 27" monitor.
* Samsung Galaxy S9 Plus
* Apple Macbook Air 2017

## Browsers used
* Google Chrome on Windows 10
* Microsoft Edge on Windows 10
* Firefox on Windows 10
* Safari on Mac OS