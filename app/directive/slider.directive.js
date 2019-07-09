myApp.directive('slider', function() {
  var heirarchySliderCtrl = function($scope, $filter) {
    var vm = this;
    vm.sliderModel = $scope.sliderModel;
    vm.onSlideEnd = $scope.onSlideEnd;

    vm.onEnd = function(sliderId, modelValue, highValue, pointerType) {
      vm.sliderModel = modelValue;
      $scope.sliderModel = modelValue;
      vm.onSlideEnd({ data: { sliderId: sliderId, modelValue: modelValue, highValue: highValue, pointerType: pointerType } });
    };

    if ($scope.sliderOptions) {
      $scope.sliderOptions.onEnd = vm.onEnd;
    }

    vm.sliderOptions = $scope.sliderOptions;
  };

  return {
    restrict: 'E',
    templateUrl: './app/directive/slider.directive.html',
    scope: {
      sliderModel: '=',
      sliderOptions: '=',
      onSlideEnd: '&'
    },
    link: function() {},
    controller: heirarchySliderCtrl,
    controllerAs: 'vm'
  };
});

// vm.heirarchyOptions = [
//   $filter('translate')('daily'),
//   $filter('translate')('weekly'),
//   $filter('translate')('monthly'),
//   $filter('translate')('yearly')
// ];
// vm.heirarchyOptionsData = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

// // vm.heirarchyOptions = $vm.$parent.occuranceOptions;
// vm.rpSlider = {
//   value: 0,
//   options: {
//     showTicks: true,
//     stepsArray: vm.heirarchyOptions,
//     showTicksValues: true,
//     vertical: true,
//     draggableRange: true
//   }
// };

// // vm.selectedRecurrenceType = vm.recurrenceOptions[vm.rpSlider.value];

// // $scope.$watch('', function(newValue) {
// //     if (newValue !== '') {

// //     }
// // }, true);}
