const app = angular.module("app", ["user"]);

app.controller("MainController", [
  "$scope",
  "$http",
  async function ($scope, $http) {
    const getUsers = async () => {
      const response = await $http.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return await response.data;
    };

    $scope.users = await getUsers();
    $scope.$apply();
  },
]);
