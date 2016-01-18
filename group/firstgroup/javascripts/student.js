var app = angular.module("myapp",["ngRoute"]);
app.config(function($routeProvider){
  $routeProvider.when("/classList",{
    templateUrl:"pages/classList.html",
    controller:"classCtrl"
  }).when("/student",{
    templateUrl:"pages/student.html",
    controller:"stuCtrl"
  }).when("/teacher",{
            templateUrl:"pages/teacher.html",
            controller:"teacherCtrl"
          })  
})

app.controller("classCtrl",function($scope,$http){
  $http({
    method:"get",
    url:"data/classList.json"
  }).success(function(data){
    console.log(data),
    $scope.user = data.classList
  })
})
app.controller("stuCtrl",function($scope,$http){
  $http({
    method:"get",
    url:"data/student.json"
  }).success(function(data){
    console.log(data),
    $scope.user = data.studentList
  })
})
 app.controller("teacherCtrl",function($scope,$http){
          $http({
            method:"get",
            url:"data/teacher.json"   
          }).success(function(data){
            $scope.user=data.teacher
          })
      })
