# The Scoop - Codecademy Project

## Project Overview

In this project, you will build all of the routing and database logic for an article submission web app called The Scoop.

The Scoop allows users to:
- Create and log in to custom username handles
- Submit, edit, and delete articles containing a link and description
- Upvote and downvote articles
- Create, edit, and delete comments on articles
- Upvote and downvote comments
- View all of a user's articles and comments

You can view all of this functionality in action in the video below:

The current implementation of The Scoop contains all of the server logic for users and articles, but does not have the necessary database and route logic for comments. You can see all of the current server logic in **server.js**. The two main objects to pay attention to are `database` and `routes`.

- `database` is a JavaScript object containg all of the stored model instances. The `users` and `articles` properties contain JavaScript objects which will contain all of your created users and articles. Each of these objects will have keys representing the ID of the saved resource and values of the whole resource. For example if we created an article with ID `1`, the `articles` object would look like this `{1: {id: 1, url: 'article url', ...}}`. Additionally the `database` object contains a property for keeping track of the ID of the next article to create (to ensure no two articles have the same ID)
- `routes` is a JavaScript object containing all of the route's needed for The Scoop. The keys of this object are the path of the request, and the values are objects containing all of the possible HTTP verbs for that path. Each of those verbs map to a function to call if that route is hit and will be passed the path of the request and the request object (containing the request body)
