'use strict';

angular.module('ngTestApp')
  .controller('MainCtrl', function ($scope, $cookieStore) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if($cookieStore.get('SESSION')) {
      console.log('SESSION ACTIVE')
    } else if (!$cookieStore.get('SESSION')) {
      console.log('SESSION NOT ACTIVE');
    }

    $cookieStore.put('SESSION', 'ACTIVE');
  });

//New Session no pharamcy,
//Current session - saved pharamcy
//New created session - saved pharamcyP