var myApp = angular.module('myapp', ['rzSlider']);

myApp.controller('TestController', TestController);

function TestController() {
  var vm = this;
  vm.response = getResponse();

  vm.onSlideEnd = function(sliderData) {
    console.log('APP JS  =>  sliderData', sliderData);
  };

  // // for directive
  // vm.student = {
  //   name: 'test',
  //   rollno: '2'
  // };

  // vm.show = function(sliderId, modelValue, highValue, pointerType) {
  //   console.log('sliderId', sliderId);
  //   console.log('modelValue', modelValue);
  //   console.log('highValue', highValue);
  //   console.log('pointerType', pointerType);
  //   console.log('vm', vm);
  // };

  // vm.verticalSlider6 = getOptions();

  // function getOptions() {
  //   var high = 4;
  //   var low = 1;
  //   return {
  //     value: 4,
  //     options: {
  //       floor: low,
  //       ceil: high,
  //       vertical: true,
  //       showSelectionBar: true,
  //       showTicksValues: true,

  //       onChange: function(sliderId, modelValue, highValue, pointerType) {
  //         vm.show(sliderId, modelValue, highValue, pointerType);
  //       },

  //       ticksValuesTooltip: function(v) {
  //         return 'Tooltip for ' + v;
  //       },
  //       translate: function(value) {
  //         switch (value) {
  //           case 1:
  //             return 'AKSHI.';
  //             break;
  //           case 2:
  //             return 'YOU';
  //             break;
  //           case 3:
  //             return 'LOVE';
  //             break;
  //           case 4:
  //             return 'I';
  //             break;
  //         }
  //       }
  //     }
  //   };
  // }

  // function a() {
  //   if (a && a.data && a.data.hierarchies) {
  //     var entitiesArray = Object.keys(a.data.hierarchies);
  //     console.log(entitiesArray);

  //     var entities = [];
  //     if (entitiesArray) {
  //       entitiesArray.forEach(key => {
  //         var entity = {};
  //         var entityObj = a.data.hierarchies[key];

  //         if (entityObj) {
  //           entity.display = entityObj.display;
  //           if (entityObj.fields) {
  //             entity.fields = entityObj.fields;

  //             entityObj.fields.forEach(() => {
  //               // If you want you use it.
  //             });
  //           }

  //           entities.push(entity);
  //           console.log(entities);
  //         }
  //       });
  //     }
  //   }
  // }

  function getResponse() {
    return {
      data: {
        hierarchies: {
          CUSTOMER: {
            non_hierarchial_fields: [
              {
                hc_id: 2,
                non_hierarchical: true,
                name: 'CUSTOMER_OPEN_4',
                dataIndex: 'HC2_LEVEL6_CD',
                leaf: false,
                ha_id: 20
              },
              {
                hc_id: 2,
                non_hierarchical: true,
                name: 'CUSTOMER_OPEN_3',
                dataIndex: 'HC2_LEVEL7_CD',
                leaf: false,
                ha_id: 21
              },
              {
                hc_id: 2,
                non_hierarchical: true,
                name: 'CUSTOMER_OPEN_2',
                dataIndex: 'HC2_LEVEL8_CD',
                leaf: false,
                ha_id: 22
              },
              {
                hc_id: 2,
                non_hierarchical: true,
                name: 'CUSTOMER_OPEN_1',
                dataIndex: 'HC2_LEVEL9_CD',
                leaf: false,
                ha_id: 23
              }
            ],
            order: 2,
            display: 'Customer',
            all: {
              hc_id: 2,
              level: 10,
              name: 'ALL',
              dataIndex: 'HC2-ALL_CD',
              leaf: false,
              ha_id: -1
            },
            fields: [
              {
                hc_id: 2,
                level: 1,
                non_hierarchical: false,
                name: 'GEO',
                dataIndex: 'HC2_LEVEL1_CD',
                leaf: false,
                ha_id: 24
              },
              {
                hc_id: 2,
                level: 2,
                non_hierarchical: false,
                name: 'COUNTRY',
                dataIndex: 'HC2_LEVEL2_CD',
                leaf: false,
                ha_id: 25
              },
              {
                hc_id: 2,
                level: 3,
                non_hierarchical: false,
                name: 'REGION',
                dataIndex: 'HC2_LEVEL3_CD',
                leaf: false,
                ha_id: 26
              },
              {
                hc_id: 2,
                level: 4,
                non_hierarchical: false,
                name: 'TERRITORY',
                dataIndex: 'HC2_LEVEL4_CD',
                leaf: false,
                ha_id: 27
              },
              {
                hc_id: 2,
                level: 5,
                non_hierarchical: false,
                name: 'CUSTOMER',
                dataIndex: 'HC2_LEVEL5_CD',
                leaf: true,
                ha_id: 28
              }
            ]
          },
          SOURCE: {
            non_hierarchial_fields: [
              {
                hc_id: 4,
                non_hierarchical: true,
                name: 'SOURCE_OPEN_4',
                dataIndex: 'HC4_LEVEL4_CD',
                leaf: false,
                ha_id: 40
              },
              {
                hc_id: 4,
                non_hierarchical: true,
                name: 'SOURCE_OPEN_3',
                dataIndex: 'HC4_LEVEL5_CD',
                leaf: false,
                ha_id: 41
              },
              {
                hc_id: 4,
                non_hierarchical: true,
                name: 'SOURCE_OPEN_2',
                dataIndex: 'HC4_LEVEL6_CD',
                leaf: false,
                ha_id: 42
              },
              {
                hc_id: 4,
                non_hierarchical: true,
                name: 'SOURCE_OPEN_1',
                dataIndex: 'HC4_LEVEL7_CD',
                leaf: false,
                ha_id: 43
              }
            ],
            order: 4,
            display: 'Source',
            all: {
              hc_id: 4,
              level: 8,
              name: 'ALL',
              dataIndex: 'HC4-ALL_CD',
              leaf: false,
              ha_id: -1
            },
            fields: [
              {
                hc_id: 4,
                level: 1,
                non_hierarchical: false,
                name: 'SITE_REGION',
                dataIndex: 'HC4_LEVEL1_CD',
                leaf: false,
                ha_id: 44
              },
              {
                hc_id: 4,
                level: 2,
                non_hierarchical: false,
                name: 'SITE',
                dataIndex: 'HC4_LEVEL2_CD',
                leaf: false,
                ha_id: 45
              },
              {
                hc_id: 4,
                level: 3,
                non_hierarchical: false,
                name: 'SOURCE',
                dataIndex: 'HC4_LEVEL3_CD',
                leaf: true,
                ha_id: 46
              }
            ]
          },
          DC: {
            non_hierarchial_fields: [
              {
                hc_id: 3,
                non_hierarchical: true,
                name: 'DISTRIBUTION_OPEN_4',
                dataIndex: 'HC3_LEVEL3_CD',
                leaf: false,
                ha_id: 30
              },
              {
                hc_id: 3,
                non_hierarchical: true,
                name: 'DISTRIBUTION_OPEN_3',
                dataIndex: 'HC3_LEVEL4_CD',
                leaf: false,
                ha_id: 31
              },
              {
                hc_id: 3,
                non_hierarchical: true,
                name: 'DISTRIBUTION_OPEN_2',
                dataIndex: 'HC3_LEVEL5_CD',
                leaf: false,
                ha_id: 32
              },
              {
                hc_id: 3,
                non_hierarchical: true,
                name: 'DISTRIBUTION_OPEN_1',
                dataIndex: 'HC3_LEVEL6_CD',
                leaf: false,
                ha_id: 33
              }
            ],
            order: 3,
            display: 'DC',
            all: {
              hc_id: 3,
              level: 7,
              name: 'ALL',
              dataIndex: 'HC3-ALL_CD',
              leaf: false,
              ha_id: -1
            },
            fields: [
              {
                hc_id: 3,
                level: 1,
                non_hierarchical: false,
                name: 'DC_GEO',
                dataIndex: 'HC3_LEVEL1_CD',
                leaf: false,
                ha_id: 34
              },
              {
                hc_id: 3,
                level: 2,
                non_hierarchical: false,
                name: 'DC',
                dataIndex: 'HC3_LEVEL2_CD',
                leaf: true,
                ha_id: 35
              }
            ]
          },
          PRODUCT: {
            non_hierarchial_fields: [
              {
                hc_id: 1,
                non_hierarchical: true,
                name: 'PRODUCT_OPEN_4',
                dataIndex: 'HC1_LEVEL6_CD',
                leaf: false,
                ha_id: 10
              },
              {
                hc_id: 1,
                non_hierarchical: true,
                name: 'PRODUCT_OPEN_3',
                dataIndex: 'HC1_LEVEL7_CD',
                leaf: false,
                ha_id: 11
              },
              {
                hc_id: 1,
                non_hierarchical: true,
                name: 'PRODUCT_OPEN_2',
                dataIndex: 'HC1_LEVEL8_CD',
                leaf: false,
                ha_id: 12
              },
              {
                hc_id: 1,
                non_hierarchical: true,
                name: 'PRODUCT_OPEN_1',
                dataIndex: 'HC1_LEVEL9_CD',
                leaf: false,
                ha_id: 13
              }
            ],
            order: 1,
            display: 'Product',
            all: {
              hc_id: 1,
              level: 10,
              name: 'ALL',
              dataIndex: 'HC1-ALL_CD',
              leaf: false,
              ha_id: -1
            },
            fields: [
              {
                hc_id: 1,
                level: 1,
                non_hierarchical: false,
                name: 'BU',
                dataIndex: 'HC1_LEVEL1_CD',
                leaf: false,
                ha_id: 14
              },
              {
                hc_id: 1,
                level: 2,
                non_hierarchical: false,
                name: 'SERIES',
                dataIndex: 'HC1_LEVEL2_CD',
                leaf: false,
                ha_id: 15
              },
              {
                hc_id: 1,
                level: 3,
                non_hierarchical: false,
                name: 'FAMILY',
                dataIndex: 'HC1_LEVEL3_CD',
                leaf: false,
                ha_id: 16
              },
              {
                hc_id: 1,
                level: 4,
                non_hierarchical: false,
                name: 'SUB_FAMILY',
                dataIndex: 'HC1_LEVEL4_CD',
                leaf: false,
                ha_id: 17
              },
              {
                hc_id: 1,
                level: 5,
                non_hierarchical: false,
                name: 'PRODUCT',
                dataIndex: 'HC1_LEVEL5_CD',
                leaf: true,
                ha_id: 18
              }
            ]
          }
        },
        metrics: [
          {
            aggregation:
              '\\n CASE WHEN (SUM(CATALOG_DETAIL_INFO.NUMERIC_16)+SUM(CATALOG_DETAIL_INFO.NUMERIC_17)+SUM(CATALOG_DETAIL_INFO.NUMERIC_18))>0 THEN ABS(((((SUM(CATALOG_DETAIL_INFO.NUMERIC_13)+SUM(CATALOG_DETAIL_INFO.NUMERIC_14)+SUM(CATALOG_DETAIL_INFO.NUMERIC_15)) - (SUM(CATALOG_DETAIL_INFO.NUMERIC_16)+SUM(CATALOG_DETAIL_INFO.NUMERIC_17)+SUM(CATALOG_DETAIL_INFO.NUMERIC_18)))/(SUM(CATALOG_DETAIL_INFO.NUMERIC_16)+SUM(CATALOG_DETAIL_INFO.NUMERIC_17)+SUM(CATALOG_DETAIL_INFO.NUMERIC_18)))*100)) \\n ELSE \\n 0 \\n END',
            name:
              'MAPE : Equals MAPE (Mean Absolute Percent Error) of last 3 months Forecast (Units) divided by Last months Actuals (Units)',
            dataIndex: 'PERIOD_MAPE'
          },
          {
            aggregation: '\\nSUM(CATALOG_DETAIL_INFO.NUMERIC_01)',
            name: 'Last 3 months Actual Rev',
            dataIndex: 'L3M_SALES'
          },
          {
            aggregation: '\\nSUM(CATALOG_DETAIL_INFO.NUMERIC_05)',
            name: 'Future 3 Months Sales Mgr Forecast',
            dataIndex: 'F3M_FCST'
          },
          {
            aggregation:
              '\\nCASE WHEN (SUM(CATALOG_DETAIL_INFO.NUMERIC_19) = 0) THEN 0 \\n ELSE \\n(SUM(CATALOG_DETAIL_INFO.NUMERIC_02)/SUM(CATALOG_DETAIL_INFO.NUMERIC_19))*100 \\nEND',
            name: 'Actuals (Rev) divided Account Manager Forecast (Rev) for the current quarter, expressed in %.',
            dataIndex: 'QTR_TRACKING'
          },
          {
            aggregation:
              '\\nCASE WHEN (SUM(CATALOG_DETAIL_INFO.NUMERIC_10) = 0) THEN 0 \\n ELSE \\n(SUM(CATALOG_DETAIL_INFO.NUMERIC_09)/SUM(CATALOG_DETAIL_INFO.NUMERIC_10))*100 \\nEND',
            name: '[Current Sales Manager Fcst (Rev) divided by prior Sales Manager Fcst (Rev)], for next 2 quarters.',
            dataIndex: 'SALES_VS_PRIOR'
          },
          {
            aggregation:
              '\\nCASE WHEN (SUM(CATALOG_DETAIL_INFO.NUMERIC_06) = 0) THEN 0 \\n ELSE \\n(SUM(CATALOG_DETAIL_INFO.NUMERIC_04)/SUM(CATALOG_DETAIL_INFO.NUMERIC_06))*100 \\nEND',
            name: 'Constrained Plan (Rev) divided by Finance Plan (Rev) for the next 2 quarters, expressed in %.',
            dataIndex: 'CONS_VS_FIN'
          },
          {
            aggregation:
              '\\nCASE WHEN (SUM(CATALOG_DETAIL_INFO.NUMERIC_08) = 0) THEN 0 \\n ELSE \\n(SUM(CATALOG_DETAIL_INFO.NUMERIC_07)/SUM(CATALOG_DETAIL_INFO.NUMERIC_08))*100 \\nEND',
            name: 'Equal to  Production Plan (Hrs)  for rolling 3 Quarters divided by  Capacity Limit (Hrs)  for rolling 3 Quarters',
            dataIndex: 'UTILIZATION'
          },
          {
            aggregation:
              '\\nCASE WHEN (SUM(CATALOG_DETAIL_INFO.NUMERIC_12)-SUM(CATALOG_DETAIL_INFO.NUMERIC_11) > 0) THEN 1 \\n WHEN \\n(SUM(CATALOG_DETAIL_INFO.NUMERIC_12)-SUM(CATALOG_DETAIL_INFO.NUMERIC_11) = 0) THEN 0  WHEN \\n(SUM(CATALOG_DETAIL_INFO.NUMERIC_12)-SUM(CATALOG_DETAIL_INFO.NUMERIC_11) < 0) THEN -1 \\nEND',
            name: '4 months of Consensus Plan against Actuals.',
            dataIndex: 'BIAS'
          }
        ]
      }
    };
  }
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
