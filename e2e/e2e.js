const appDev = angular.module("appDev", ["app", "ngMockE2E"]);

appDev.run(function ($httpBackend) {
  const users = [
    { name: "name1", email: "email1", phone: "phone1" },
    { name: "name2", email: "email2", phone: "phone2" },
  ];

  $httpBackend.whenGET("./user/user.template.html").passThrough();

  $httpBackend
    .whenGET("https://jsonplaceholder.typicode.com/users")
    .respond(users);
});
