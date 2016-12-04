/**
 * Created by MatanHuja on 02/12/2016.
 */
//mhMessageBox display a list of unread messages filtered by status
myApp.directive('mhMessageBox', function(){
    return{
        restrict:'E',
        scope: {
            listMessages: '='
        },
        templateUrl:'script/messageDirective/messageBoxDirectiveView.html',
        controller:function($scope) {
            //Have unread messages
            if (angular.isArray($scope.listMessages) && $scope.listMessages.length > 0) {
                $scope.unreadCount = $scope.listMessages.filter(function (a) {
                    return a.unread == true;
                }).length;
            }
            //No unread messages
            else{
                $scope.unreadCount = 0;
            }
        }
    }
});

//mhMessage display each message
myApp.directive('mhMessage',function(){
    return{
        restrict:'E',
        scope:{
            message: '='
        },
        templateUrl: 'script/messageDirective/messageDirectiveView.html'
    }
});