/**
 * Created by MatanHuja on 02/12/2016.
 */

//mhActivityBox display box of Activity jobs
myApp.directive('mhActivityBox', function(){
   return{
       restrict:'E',
       scope: {
           listActivity: '='
       },
       templateUrl:'script/activityDirective/activityBoxDirectiveView.html'
   }
});

//mhActivity display each activity
myApp.directive('mhActivity',function(){
    return{
        restrict:'E',
        scope:{
            activity: '=',
            lastActivity: '='
        },
        templateUrl: 'script/activityDirective/activityDirectiveView.html'
    }
});