Meteor.startup(function () {
	// bootstrap the admin user if they exist -- You'll be replacing the id later
	if (Meteor.users.findOne("h9PfdZb6BCPadwvA9"))
		Roles.addUsersToRoles("h9PfdZb6BCPadwvA9", ['admin']);
});