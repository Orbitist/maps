Meteor.startup(function () {
	// bootstrap the admin user if they exist -- You'll be replacing the id later
	if (Meteor.users.findOne("Lu9ZBKaij6NE6rAQP"))
		Roles.addUsersToRoles("Lu9ZBKaij6NE6rAQP", ['admin']);
});