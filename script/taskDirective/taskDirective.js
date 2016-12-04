/**
 * Created by MatanHuja on 02/12/2016.
 */

//mhTaskBox display box of tasks
myApp.directive('mhTaskBox', function(){
   return{
       restrict:'E',
       scope: {
           listTasks: '='
       },
       templateUrl:'script/taskDirective/taskBoxDirectiveView.html',
       controller:function($scope){
           //Calculate a count of delay Tasks
           $scope.delaysCount = $scope.listTasks.filter(function(a){
                   return a.delays == true;}
           ).length;

           //Calculate a count of left tasks
           $scope.leftCount = $scope.listTasks.filter(function(a){
               return a.delays == false;
           }).length;
       }
   }
});

//mhTask display each task
myApp.directive('mhTask', function(){
    return{
        restrict:'E',
        scope: {
            task: '='
        },
        templateUrl:'script/taskDirective/taskDirectiveView.html'
    }
});
