Meteor.startup(function () {
	// bootstrap the admin user if they exist -- You'll be replacing the id later
	if (Meteor.users.findOne("gLBpt9wcfC2QMLJEh"))
		Roles.addUsersToRoles("gLBpt9wcfC2QMLJEh", ['admin']);
});