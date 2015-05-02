Template.postsListCulture.helpers({
  posts: function() {
    return Posts.find({category: 'culture'}, {sort: {submitted: -1}});
  }
});