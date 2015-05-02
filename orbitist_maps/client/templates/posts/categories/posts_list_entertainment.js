Template.postsListEntertainment.helpers({
  posts: function() {
    return Posts.find({category: 'entertainment'}, {sort: {submitted: -1}});
  }
});