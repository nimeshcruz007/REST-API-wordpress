# Wordpress REST-API

This is a basic introduction to wordpress REST-API. This repo shows how to access posts and create new post(s).

## Astra-child

By creating a child theme for astra made me exploring the REST Api in wordpress. Inside the child theme there is a folder named js, it contains a javascript file (main.js) which makes the ajax call to the rest api and fetch the posts based on the header passed to it.

### Fetching Posts

Javascript's XMLHttpRequest() is used to retrieve the posts and displays the content on a button click in portfolio page.The GET method is used for the post requests.

### Creating a Post

The posts are made via a form on a portfolio page's front end.401 Unauthorised access occurred when I first tried to create a posts from the front end of the portfolio page. The plugin( JWT Authentication for WP-API ) resolved the unauthorised access error and helped publishing posts.