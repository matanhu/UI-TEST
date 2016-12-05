/**
 * Created by MatanHuja on 01/12/2016.
 */
var myApp = angular.module('uiTest', []);

myApp.controller('mainController', function ($scope, $window) {
    $scope.menuDisplay = true;

    //Json object of menu buttons
    $scope.listMenuButton = [{
        name: 'Home',
        icon: 'images/navbar-icons/home.png'
    }, {
        name: 'Worklow',
        icon: 'images/navbar-icons/workflow.png'
    }, {
        name: 'Statistics',
        icon: 'images/navbar-icons/statistics.png'
    }, {
        name: 'Calendar',
        icon: 'images/navbar-icons/calendar.png'
    }, {
        name: 'Users',
        icon: 'images/navbar-icons/users.png'
    }, {
        name: 'Settings',
        icon: 'images/navbar-icons/settings.png'
    },];

    //List of Tasks
    $scope.listTasks = [{
        img: 'images/user.png',
        describe: 'New website for Symu.co',
        alert: '5 days',
        delays: true,
    }, {
        img: 'images/user.png',
        describe: 'Free bussiness PSD Template',
        alert: '2 days',
        delays: true,
    }, {
        img: 'images/user.png',
        describe: 'New logo for JCD.pl',
        alert: '5 days',
        delays: false,
    }, {
        img: 'images/user.png',
        describe: 'Free Icons Set vol. 3',
        alert: '10 days',
        delays: false,
    }];

    //List of messages
    $scope.listMessages = [{
        img:'images/profile/nina.png',
        name: 'Nina Jones' ,
        time: '5 minutes',
        unread: true,
        message: 'Hey You! it\'s me again :-) I attached new bla bla bla'
    },{
        img:'images/profile/nina.png',
        name: 'Nina Jones' ,
        time: '5 minutes',
        unread: true,
        message: 'Hey You! it\'s me again :-) I attached new bla bla bla'
    },{
        img:'images/profile/james.png',
        name: 'Nina Jones' ,
        time: '5 minutes',
        unread: false,
        message: 'Hey You! it\'s me again :-) I attached new bla bla bla'
    },{
        img:'images/profile/nina.png',
        name: 'Nina Jones' ,
        time: '5 minutes',
        unread: false,
        message: 'Hey You! it\'s me again :-) I attached new bla bla bla'
    }];

    //List of activities
    $scope.listActivity =[{
        img:'images/profile/nina.png',
        name:'Nina Jones',
        subject:'add a new project',
        project: 'Free UI Kit',
        time: 'Just now'

    },{
        img:'images/profile/james.png',
        name:'Nina Jones',
        subject:'add a new project',
        project: 'Free UI Kit',
        time: 'Just now'

    },{
        img:'images/profile/alex.png',
        name:'Nina Jones',
        subject:'add a new project',
        project: 'Free UI Kit',
        time: 'Just now'

    },{
        img:'images/profile/alexandra.png',
        name:'Nina Jones',
        subject:'add a new project',
        project: 'Free UI Kit',
        time: 'Just now'

    }];

    $scope.contact = {
        name: 'Matan',
        email: 'sd2ds.com',
        img: 'images/user.png'
    }

});