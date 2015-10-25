Meteor.startup(function () {
	// bootstrap the admin user if they exist -- You'll be replacing the id later
	if (Meteor.users.findOne("tAQmnyhTj9D9aLjqp"))
		Roles.addUsersToRoles("tAQmnyhTj9D9aLjqp", ['admin']);
		
	// on meteor.com	
	if (Meteor.users.findOne("feXiQj26E5PvXXAGZ"))
		Roles.addUsersToRoles("feXiQj26E5PvXXAGZ", ['admin']);
});