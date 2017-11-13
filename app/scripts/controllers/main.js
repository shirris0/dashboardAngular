'use strict';

/**
 * @ngdoc function
 * @name dashboardIwilsonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dashboardIwilsonApp
 */
angular.module('dashboardIwilsonApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


     Highcharts.chart('grafica', {
            chart: {
                type: 'area'
            },
            title: {
                text: 'Ingresos / Egresos'
            },
            xAxis: {
                categories: ['Junio 2017','', 'Julio 2017','', 'Agosto 2017']
            },
            credits: {
                enabled: true
            },
            series: [{
                name: 'Ingresos',
                data: [0, 1, 0.5,2,0]
            }, {
                name: 'Egresos',
                data: [0, -1,-0.5,-2,0]
            }]
        });

  });
