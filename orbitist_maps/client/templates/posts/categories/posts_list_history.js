Template.postsListHistory.helpers({
  posts: function() {
    return Posts.find({category: 'history'}, {sort: {submitted: -1}});
  }
});