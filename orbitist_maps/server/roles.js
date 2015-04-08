Meteor.startup(function () {
	// bootstrap the admin user if they exist -- You'll be replacing the id later
	if (Meteor.users.findOne("bT3QReJMvriQj4Rpp"))
		Roles.addUsersToRoles("bT3QReJMvriQj4Rpp", ['admin']);
});