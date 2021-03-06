# Cocktail Collector

![Heading Responsive image](Testing.md/Cocktail-responsive.jpg)

[View the Live website here](https://cocktail-collector.herokuapp.com/)

### Cocktail Collector is a website where users can add and share cocktail recipes.

Cocktail collector is a recipe website where users, mostly cocktail fans, can search for and post their favourite recipes, it has a recipe page where all users recipes can be viewed, it has a menber login function with ability to edit and delete recipes, and also an email sign up in the footer of the page so that users can recieve news updates.



## UX

### This website is for:

* Visitors to the website are looking for a resource to explore their interest in making cocktails, they are looking for recipes they perhaps have not heard of, and also a place to store the recipes that are their favourites.
* Hosting this website at the base level offers a service to fellow cocktail enthusiasts. It also has revenue stream possibilities once the number of users grows, this could be through advertising, but the sale of cocktail making products is also a possibility, this could be glasses, shakers etc.

### User Stories

* As a visitor to this website, I would like the navagation to be instantly understandable.
* As a visitor to this website, I would like a catalogue of recipes to browse through.
* As a visitor to this website, I would like the ability to search for cocktails, by name or by ingredients.
* As a visitor to this website, I would like the ability to register an account so I can start sharing my own recipes.
* As a visitor to this website, I would like an email sign up option, to be kept up to date with site news.
* As a visitor to this webiste, I would like the option to follow the site on social media platforms.

* As a member of the website, I would like to Login to my profile and view the recipes I have posted.
* As a member of the webiste, I would like the ability to add, edit and delete recipes.

* As an Admin of the website, I would like all of the above capabilities, but also the ability to add, edit and delete categories of recipes.

## Design 

* Colors - The entire site is rendered in black and white(apart from flash messages, which are a light blue), This was a deliberate design choice, I thought that the subject matter of the site, the cocktails, were quite colourful and vibrant themselves, which made them the main focus of the page, any other color elements would only serve to distract. 

* Font - The font I have used for the site is [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono), this font covers all text elements, I selected this font because of its typewriter like text appearance, I think this gives the site that kind of 'old world' apperence which is often associated with cocktails.

* Icons - The icons used in this project are taken from [Font Awesome](https://fontawesome.com/), I used font awesome for its diverse range of icons.

## Defensive Design

* Deleting - When a user clicks on the delete icon of one of their recipes a pop up modal appears, asking for comfirmation of that deletion, this prevents accidental deletion of their recipes.
Also a user can only delete recipes that they have uploaded themselves, the delete option does not appear for other users recipes.

### Wireframes 

* [Homepage](https://github.com/jaydavis359/Cocktail-Collector/blob/main/wireframes/Home%20Wireframe.pdf)
* [Recipes](https://github.com/jaydavis359/Cocktail-Collector/blob/main/wireframes/Recipes%20Wireframe.pdf)
* [Login/Register](https://github.com/jaydavis359/Cocktail-Collector/blob/main/wireframes/Login%20Register%20Wireframe.pdf)
* [Add/Edit Recipe](https://github.com/jaydavis359/Cocktail-Collector/blob/main/wireframes/Add%20Edit%20Recipe%20Wireframe.pdf)
* [Profile](https://github.com/jaydavis359/Cocktail-Collector/blob/main/wireframes/Profile%20Wireframe.pdf)


## Features

* The navagation bar and footer with sign up and social links extend across all pages.

### Home Page

* The home page features an almost full screen 'hero image' which gives visitors a good idea what the site is about.
* Under the image appears a welcome message and buttons, which let the visitor go straight to the recipe page, or register to become a member of the site.

### Recipes Page

* A gallery type section is the focus of this page, which show picture cards of cocktails which have been added to the site.
* Above this image gallery is a search bar where users can search for cocktails by name or ingredient.

### Register, Login and Logout

* A small form card is at the center of these pages, here users can either register using a username and password, or login using a previously registered username and password.
* The logout option does not have its own page, but redirects to the login page.

### Profile

* This is where uers are directed once they login to the site, and their registered username will appear at the top of the page.

### Manage Catagories

* This page is only accessible to the 'admin' of the site, here categories of cocktails, e.g. vodka, brandy etc. can be added, edited and deleted.

### Features left to implement

* Allowing users to 'favourite' other users recipes, and have them appear on their own profile page.
* Adding a comments section where users can leave reviews and tips for the cocktails.
* Add a rating system to the recipe cards, to show how popular they are.

## Technologies used

### Languages uses

* [HTML5](https://en.wikipedia.org/wiki/HTML5)
* [CSS3](https://en.wikipedia.org/wiki/CSS)
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
* [Python](https://www.python.org/)
* [Jquery](https://jquery.com/)

### Frameworks, libraries etc.

* [Gitpod](https://gitpod.io/) - Developer environment was used to write the code.
* [Github](https://github.com/) - Used to host the project.
* [Heroku](https://heroku.com/) - Used to deploy the finished project.
* [Materialize](https://materializecss.com/) - Used for responsive grid system, utilizing components for navagation, cards and forms etc.
* [MongoDB](https://www.mongodb.com/) - The database used to manage recipe and user data.
* [Flask](https://flask.palletsprojects.com/en/2.0.x/) - Web framework utilized in the project.
* [Jinja](https://jinja.palletsprojects.com/en/3.0.x/) - Used for python templating.
* [Werkzeug](https://werkzeug.palletsprojects.com/en/2.0.x/) - Used for passwords and authentication.
* [emailJs](https://www.emailjs.com/) - Used to foward email from email sign up in footer.
* [Google Fonts](https://fonts.google.com/) - Used for the websites various fonts.
* [Font Awsome](https://fontawesome.com/) - The Font Awesome library was used for the icons the website.
* [favicon.io](favicon.io) - Was used to create the favicon for the browser tab.
* [TinyJPG](https://tinyjpg.com/) - Used to compress the websites images.
* [Balsamiq](https://balsamiq.com/) - Used to create wireframes.

## Testing

* Details can be found in a separate [Testing](Testing.md/testing.md) page.

## Deployment

### Deploy with Heroku

* In the terminal of your IDE type 'pip3 freeze --local > requirements.txt 
* In the terminal of your IDE type 'python app.py > Procfile
* Login to Heroku and create a new app
* In the apps top menu click on the 'deploy' tab, then scroll down and select the 'Connect to Github' option.
* Search for your Github repository and when found, connect to it.
* Go to the settings tab in Heroku and scroll down to the 'Config Vars' option, then click on 'Reveal Config Vars'.
* Enter the variables contained in your 'env.py' file i.e IP, PORT, SECRET_KEY, MONGO_URL and MONGO_DBNAME.
* Go to the deploy tab in Heroku and scroll down again to the 'Automatic Deployment' section, click on 'Enable Automatic Deploys'.
* Heroku is now linked to your github repository and will host your app, the live app can be viewed by clicking the 'Open App' button at the top of the page.

### To run the Website locally

* It can be 'Forked' which makes an editable copy of the repository, without affecting the original. This can be done from the [repository homepage](https://github.com/jaydavis359/Cocktail-Collector),
In the top right of the page there is a 'Fork' button which will create a copy of the repository in your own GitHub account.
  
* It can also be 'Cloned' which creates a 'remote' repository which can be synced with the main one. To do this:
> open the [repository homepage](https://github.com/jaydavis359/Cocktail-Collector)
> Click on the 'Code' button near the top right of the screen.
> Under 'Clone' with the HTTPS option selected, copy the url link.
> Open your own IDE and switch to the directory where you want the cloned directory.
> Type 'git clone', and then paste the URL you copied earlier.
> Press enter and the repository will be cloned.

## Credits

* [W3Schools](https://www.w3schools.com/) and [Stack Overflow](https://stackoverflow.com/) for all kinds of help during the project.

### Images

* The home page hero image was taken from [unsplash](https://unsplash.com/) and was taken by @proriat_hospitality.

* The cocktail pictures on the recipe page were taken from [BBC Goodfood](https://www.bbcgoodfood.com/) and [Liquor.com](https://www.liquor.com/)

### Acknowledgements

* I would like to thank my mentor Excellence Ilesanmi for all his support.


## This website is for educational purposes only.


