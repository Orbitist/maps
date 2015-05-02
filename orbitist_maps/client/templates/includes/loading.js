Template.loading.rendered = function () {
  if ( ! Session.get('loadingSplash') ) {
    this.loading = window.pleaseWait({
      logo: 'http://orbitist.s3.amazonaws.com/_toplevel/images/logos/orbitist-helmet.png',
      backgroundColor: '#2675a2',
      loadingHtml: message + spinner
    });
    Session.set('loadingSplash', true); // just show loading splash once
  }
};

Template.loading.destroyed = function () {
  if ( this.loading ) {
    this.loading.finish();
  }
};

var message = '';
var spinner = '<div class="sk-spinner sk-spinner-rotating-plane"></div>';