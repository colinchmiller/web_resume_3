var mainApp = angular.module('mainApp', []);

mainApp.controller('TechSkillsController', ['$scope', function($scope){
  $scope.showTech = false;
  $scope.techSkills = ['HTML', 'CSS', 'javascript', 'jQuery', 'angular', 'PHP', 'SQL', 'mongoDB',
 'node.js', 'express', 'Grunt', 'bootstrap', 'XAAMP', 'wordpress'];
  $scope.toggleShow = function(){
    if ($scope.showTech == false){
      $scope.showTech = true;
    } else if ($scope.showTech == true){
      $scope.showTech = false;
    }
  }
}]);

mainApp.controller('ExperienceController', ['$scope', function($scope){
  $scope.showExperience = false;
  $scope.pastJobs = ['Eleven Design Co', 'Braun Intertec', 'Geek Squad', 'StoryStick Marketing'];
  $scope.toggleShow = function(){
    if ($scope.showExperience == false){
      $scope.showExperience = true;
    } else if ($scope.showExperience == true){
      $scope.showExperience = false;
    }
  }
}]);

mainApp.controller('EducationController', ['$scope', function($scope){
  $scope.showEducation = false;
  $scope.pastSchools = ['Prime Digital Academy', 'DePaul University'];
  $scope.toggleShow = function(){
    if ($scope.showEducation == false){
      $scope.showEducation = true;
    } else if ($scope.showEducation == true){
      $scope.showEducation = false;
    }
  }
}]);

mainApp.controller('ProjectController', ['$scope', function($scope){
  $scope.showProjects = false;
  $scope.projects = ['Conscious Shopper', 'PHP CMS Blog', 'Old Version Resume'];
  $scope.toggleShow = function(){
    if ($scope.showProjects == false){
      $scope.showProjects = true;
    } else if ($scope.showProjects == true){
      $scope.showProjects = false;
    }
  }
}])
