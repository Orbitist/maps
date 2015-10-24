Template.postsListScience.helpers({
  posts: function() {
    return Posts.find({category: 'science'}, {sort: {submitted: -1}});
  }
});