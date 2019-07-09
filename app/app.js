var myApp = angular.module('myapp', ['rzSlider']);

myApp.controller('TestController', TestController);

function TestController() {
  var vm = this;

  vm.verticalSlider6 = {
    value: 6,
    options: {
      floor: 0,
      ceil: 6,
      vertical: true,
      showSelectionBar: true,
      showTicksValues: true,
      ticksValuesTooltip: function(v) {
        return 'Tooltip for ' + v;
      }
    }
  };
}

// var mainApp = angular.module('mainApp', ['rzslider']);

// mainApp.controller('studentController', function($scope) {
//   $scope.student = {
//     firstName: 'Mahesh',
//     lastName: 'Parashar',

//     fullName: function() {
//       var studentObject;
//       studentObject = $scope.student;
//       return studentObject.firstName + ' ' + studentObject.lastName;
//     }
//   };
// });

// var myApp = angular.module('myapp');

// myApp.controller('myCtrl', function($scope) {
//   $scope.abc = 'test';
// });

// myApp.controller('TestController', TestController);

// function TestController($scope) {
//   var vm = this;
//   vm.abc = 'test';

//   vm.verticalSlider6 = {
//     value: 6,
//     options: {
//       floor: 0,
//       ceil: 6,
//       vertical: true,
//       showSelectionBar: true,
//       showTicksValues: true,
//       ticksValuesTooltip: function(v) {
//         return 'Tooltip for ' + v;
//       }
//     }
//   };
// }
