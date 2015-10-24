Template.postsListPolitics.helpers({
  posts: function() {
    return Posts.find({category: 'politics'}, {sort: {submitted: -1}});
  }
});