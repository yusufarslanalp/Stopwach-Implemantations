angular.module("user").component("user", {
  template: `<div class="user-card">
              <img
                class="user-avatar"
                src="https://via.placeholder.com/200/"
                alt="user avatar"
              />
              <div class="user-card-content">
                <span class="user-name">{{$ctrl.name}}</span>
                <span class="text">{{$ctrl.email}}</span>
                <span class="text">{{$ctrl.phone}}</span>
              </div>
            </div>`,
  bindings: {
    id: "=?",
    name: "=?",
    email: "=?",
    phone: "=?",
    onPress: "=?",
  },
  controller: function ($scope) {},
});
