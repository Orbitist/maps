Template.postEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentPostId = this._id;

    var postProperties = {
      title: $(e.target).find('[name=title]').val(),
      description: $(e.target).find('[name=description]').val(),
      category: $(e.target).find('[name=category]').val(),
      image: $(e.target).find('[name=image]').val(),
      geojson: $(e.target).find('[name=geojson]').val(),
      tileLayer: $(e.target).find('[name=tileLayer]').val(),
      marker: $(e.target).find('[name=marker]').val(),
      cartodb: $(e.target).find('[name=cartodb]').val()
    }

    Posts.update(currentPostId, {$set: postProperties}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        Router.go('postPage', {_id: currentPostId});
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this post?")) {
      var currentPostId = this._id;
      Posts.remove(currentPostId);
      Router.go('postsList');
    }
  }
});