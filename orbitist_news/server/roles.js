Meteor.startup(function () {
	// admin users on nick's local
	if (Meteor.users.findOne("tAQmnyhTj9D9aLjqp"))
		Roles.addUsersToRoles("tAQmnyhTj9D9aLjqp", ['admin']);
		
	// on meteor.com	
	if (Meteor.users.findOne("feXiQj26E5PvXXAGZ"))
		Roles.addUsersToRoles("feXiQj26E5PvXXAGZ", ['admin']);
		
	// on production
	if (Meteor.users.findOne("Q7K7pkA5E3NPGQo5v"))
		Roles.addUsersToRoles("Q7K7pkA5E3NPGQo5v", ['admin']);
});