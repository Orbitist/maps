Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      title: $(e.target).find('[name=title]').val(),
      description: $(e.target).find('[name=description]').val(),
      category: $(e.target).find('[name=category]').val(),
      image: $(e.target).find('[name=image]').val(),
      geojson: $(e.target).find('[name=geojson]').val(),
      tileLayer: $(e.target).find('[name=tileLayer]').val(),
      marker: $(e.target).find('[name=marker]').val(),
      cartodb: $(e.target).find('[name=cartodb]').val(),
      mp3: $(e.target).find('[name=mp3]').val(),
      ogg: $(e.target).find('[name=ogg]').val(),
      timeline: $(e.target).find('[name=timeline]').val()
    };

    Meteor.call('postInsert', post, function(error, result) {
      // display the error to the user and abort
      if (error)
        return alert(error.reason);
      Router.go('postPage', {_id: result._id});  
    });
  }
});