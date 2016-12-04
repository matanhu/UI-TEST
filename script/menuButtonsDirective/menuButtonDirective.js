/**
 * Created by MatanHuja on 02/12/2016.
 */
//mhMenuButton display each button of menu
myApp.directive('mhMenuButton', function(){
    return{
        restrict: 'E',
        scope:{
            icon: '@',
            name: '@'
        },
        template: '<img ng-src="{{icon}}"> {{name}}',
        link: function(scope, element, attrs) {
            //Add an active class to active button
            element.bind('click', function ($event) {
                element.parent().parent().children('il').removeClass('active');
                element.parent().addClass('active');
            });
        }
    }
});