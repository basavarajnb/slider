// // Copyright 2017 Steelwedge Software, Inc.
// /**
//  * @ngdoc
//  * @description
//  */
// (function() {
//   'use strict';
//   var module = angular.module('myapp', ['rzSlider']);
//   module.directive('heirarchySlider', function() {
//     var heirarchySliderCtrl = function($scope, $filter) {
//       var vm = this;
//       vm.heirarchyOptions = [
//         $filter('translate')('daily'),
//         $filter('translate')('weekly'),
//         $filter('translate')('monthly'),
//         $filter('translate')('yearly')
//       ];
//       vm.heirarchyOptionsData = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

//       // vm.heirarchyOptions = $vm.$parent.occuranceOptions;
//       vm.rpSlider = {
//         value: 0,
//         options: {
//           showTicks: true,
//           stepsArray: vm.heirarchyOptions,
//           showTicksValues: true,
//           vertical: true,
//           draggableRange: true
//         }
//       };

//       // vm.selectedRecurrenceType = vm.recurrenceOptions[vm.rpSlider.value];

//       // $scope.$watch('', function(newValue) {
//       //     if (newValue !== '') {

//       //     }
//       // }, true);}
//     };

//     return {
//       restrict: 'E',
//       templateUrl: 'app/html/a.html',
//       scope: {},
//       link: function() {},
//       controller: heirarchySliderCtrl,
//       controllerAs: 'vm'
//     };
//   });
// })();
