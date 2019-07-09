myApp.directive('sliderContainer', function() {
  var heirarchySliderContainerCtrl = function($scope, $filter) {
    var vm = this;
    vm.response = $scope.response;
    vm.onSlideEnd = $scope.onSlideEnd;

    vm.slidersData = [];
    vm.hierarchies = []; // INFO:  Array of hierarchy

    formatRespose();

    //  INFO: Format the response as per slider directive input
    function formatRespose() {
      if (vm.response) {
        //  INFO: Check hierarchies object exists
        if (vm.response && vm.response.data && vm.response.data.hierarchies) {
          // INFO:  Get keys ( or properties) of hierarchies. Keys are hierarchies.
          // INFO:  hierarchiesNames = ["CUSTOMER", "PRODUCT", "DC"]
          var hierarchiesNames = Object.keys(vm.response.data.hierarchies);
          console.log(hierarchiesNames);

          if (hierarchiesNames) {
            //  INFO: Create hierarchies array.
            hierarchiesNames.forEach(key => {
              var hierarchy = vm.response.data.hierarchies[key];
              hierarchy.key = key; //  INFO: Storing key value in case we need later. key is "CUSTOMER" or "PRODUCT" or "DC", etc
              vm.hierarchies.push(hierarchy);
            });

            // INFO: since we have "order" property in  hierarchy object. We may need to sort with "order"
            if (vm.hierarchies) {
              vm.hierarchies.sort((x, y) => x.order - y.order); // INFO:  now we sorted hierarchies w.r.t order property
            }

            // INFO: Get data for slider directives
            //  INFO: We need array of value and options, as we need to to display multiple sliders.
            //  {
            //      value : 6    // selected value for each slider.
            //      options: {}  // slider options for each slider.
            //  }

            vm.hierarchies.forEach(hierarchyObj => {
              var sliderData = {};
              sliderData.value = hierarchyObj.fields[0].name; //  INFO: By default we set the selected value as 1. Because we dont have this value.
              sliderData.options = getOptionsForHierarchy(hierarchyObj);
              vm.slidersData.push(sliderData);
            });
          }
        }
      }
    }

    function getHierarchyFields(hierarchyObj) {
      //  INFO: lets sort fields based on level
      hierarchyObj.fields.sort((x, y) => x.level - y.level);

      //  INFO: Change the level of ALL to fields.length + 1
      hierarchyObj.fields.push({ ...hierarchyObj.all, level: hierarchyObj.fields.length + 1 });
      return hierarchyObj.fields;
    }

    //  INFO: Called from HTML template, on "on-slide-end"
    vm.slideEnded = function(data) {
      var sliderResult = getSliderResultAfterSlide(data.sliderId, data.modelValue);

      //  INFO: Trigger event for parent. i.e. TestController
      vm.onSlideEnd({ data: { ...sliderResult } });
    };

    //  INFO: Create a object with properties which properly describe the selected value after slide.
    function getSliderResultAfterSlide(sliderId, modelValue) {
      var currentHierarchyResult = {
        value: modelValue, //  INFO: Selected text value
        hierarchyName: '', //  INFO: hierarchyName is "CUSTOMER" or "PRODUCT" or "DC", etc
        hierarchy: null //  INFO: hierarchy is hierarchy object itself
      };

      var filterredHierarchies = vm.hierarchies.filter(h => h.key === sliderId);
      if (filterredHierarchies && filterredHierarchies.length === 1) {
        var hierarchy = filterredHierarchies[0];
        currentHierarchyResult.hierarchy = hierarchy;
        currentHierarchyResult.hierarchyName = sliderId;
      }
      return currentHierarchyResult;
    }

    // INFO: create proper options for rzslider directive
    function getOptionsForHierarchy(hierarchyObj) {
      hierarchyObj.fields = getHierarchyFields(hierarchyObj);
      var fieldsNames = [];
      hierarchyObj.fields.forEach(field => {
        fieldsNames.push(field.name);
      });

      //   var high = hierarchyObj.fields.length; // Since we need to include ALL option, we are adding 1 more
      //   var low = 1;

      return {
        // floor: low,
        // ceil: high,
        vertical: true,
        showSelectionBar: true,
        showTicksValues: true,
        id: hierarchyObj.key,
        stepsArray: fieldsNames,

        //  After slide action done in UI , this will get called.
        // onEnd: function(sliderId, modelValue, highValue, pointerType) {
        //   vm.onEnd(sliderId, modelValue, highValue, pointerType);
        // },

        //  INFO: For translating the numbers (displayed beside slider) into text.
        translate: function(value) {
          return value; //  INFO: Use translate to conver to user friendly text. i.e.   SUB_FAMILY => Sub Family
        }
      };
    }
  };

  return {
    restrict: 'E',
    templateUrl: './app/directive/slider-container.directive.html',
    scope: {
      response: '=response',
      onSlideEnd: '&'
    },
    link: function() {},
    controller: heirarchySliderContainerCtrl,
    controllerAs: 'vm'
  };
});
