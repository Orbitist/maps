Meteor.startup(function () {
	// bootstrap the admin user if they exist -- You'll be replacing the id later
	if (Meteor.users.findOne("LRRCHrmBT3qPHuzbW"))
		Roles.addUsersToRoles("LRRCHrmBT3qPHuzbW", ['admin']);
});