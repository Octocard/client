/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;(function() {

  angular
    .module('boilerplate')
    .controller('MainController', MainController);

  MainController.$inject = ['LocalStorage', 'QueryService', '$scope'];


  function MainController(LocalStorage, QueryService, $scope) {

    // 'controller as' syntax
    var self = this;
    $scope.thing = [
      {
        "org": "hapijs",
        "repo": "joi",
        "contributions": [
          {
            "startDayOfWeek": "2015-03-01T00:00:00.000Z",
            "numCommits": 1,
            "linesDeleted": 2,
            "linesAdded": 518
          },
          {
            "startDayOfWeek": "2015-03-08T00:00:00.000Z",
            "numCommits": 3,
            "linesDeleted": 301,
            "linesAdded": 1216
          },
          {
            "startDayOfWeek": "2016-02-28T00:00:00.000Z",
            "numCommits": 1,
            "linesDeleted": 0,
            "linesAdded": 7
          }
        ],
        "totalCommits": 5
      }
    ]
    $scope.title = "Contributors";
    $scope.parseError = "";
    var chartData = {
      series: [{
        type: 'pie',
        name: 'Browser share',
        data: [
          ['Firefox',   45.0],
          ['IE',       26.8],
          {
            name: 'Chrome',
            y: 12.8,
            sliced: true,
            selected: true
          },
          ['Safari',    8.5],
          ['Opera',     6.2],
          ['Others',   0.7]
        ]
      }]
    };

    $scope.chart1Json = angular.toJson(chartData, true);
    $scope.chartData1 = chartData;
    $scope.updateChart = function() {
      $scope.parseError = "";
      try {
        $scope.chartData1 = angular.fromJson($scope.chart1Json);
      } catch (e) {
        console.log(e.message);
        $scope.parseError = e.message;
      }
    }
    /**
     * Load some data
     * @return {Object} Returned object
     */
    // QueryService.query('GET', 'posts', {}, {})
    //   .then(function(ovocie) {
    //     self.ovocie = ovocie.data;
    //   });
  }


})();