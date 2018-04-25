let database = {
  users: {},
  articles: {},
  nextArticleId: 1,
  comments: {},
  nextCommentId: 1
};

comments - an object with keys of IDs and values of the corresponding comments

id - Number, unique to each comment
body - String
username - String, the username of the author
articleId - Number, the ID of the article the comment belongs to
upvotedBy - Array of usernames, corresponding to users who upvoted the comment
downvotedBy - Array of usernames, corresponding to users who downvoted the comment
nextCommentId - a number representing the ID of the next comment to create (to ensure all comments have unique IDs), initializes to 1

'/comments': {
  'POST': newComment
},
'/comments/:id': {
  'PUT': editComment,
  'DELETE': removeComment
},
'/comments/:id/upvote': {
  'PUT': upvoteComment
}
'/comments/:id/downvote': {
  'PUT': downvoteComment
}

function deleteArticle(url, request) {
  const id = Number(url.split('/').filter(segment => segment)[1]);
  const savedArticle = database.articles[id];
  const response = {};

  if (savedArticle) {
    database.articles[id] = null;
    savedArticle.commentIds.forEach(commentId => {
      const comment = database.comments[commentId];
      database.comments[commentId] = null;
      const userCommentIds = database.users[comment.username].commentIds;
      userCommentIds.splice(userCommentIds.indexOf(id), 1);
    });
    const userArticleIds = database.users[savedArticle.username].articleIds;
    userArticleIds.splice(userArticleIds.indexOf(id), 1);
    response.status = 204;
  } else {
    response.status = 400;
  }

  return response;
}
