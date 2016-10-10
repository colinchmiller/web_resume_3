var mainApp = angular.module('mainApp', []);

mainApp.controller('RevealController', ['$scope', function($scope){
  $scope.showTech = false;
  $scope.showExperience = false;
  $scope.showEducation = false;
  $scope.showProjects = false;
  $scope.toggleShow = function(target){
    console.log(target);
    switch(target){
      case 'techSkills':
      $scope.showExperience = false;
      $scope.showEducation = false;
      $scope.showProjects = false;
      if ($scope.showTech == false){
        $scope.showTech = true;
      } else if ($scope.showTech == true){
        $scope.showTech = false;
      } break;

      case 'pastJobs':
      $scope.showTech = false;
      $scope.showEducation = false;
      $scope.showProjects = false;
      if ($scope.showExperience == false){
        $scope.showExperience = true;
      } else if ($scope.showExperience == true){
        $scope.showExperience = false;
      } break;

      case 'pastSchools':
      $scope.showTech = false;
      $scope.showExperience = false;
      $scope.showProjects = false;
      if ($scope.showEducation == false){
        $scope.showEducation = true;
      } else if ($scope.showEducation == true){
        $scope.showEducation = false;
      } break;

      case 'projects':
      $scope.showTech = false;
      $scope.showExperience = false;
      $scope.showEducation = false;
      if ($scope.showProjects == false){
        $scope.showProjects = true;
      } else if ($scope.showProjects == true){
        $scope.showProjects = false;
      } break;

      default:
      $scope.showTech = false;
      $scope.showExperience = false;
      $scope.showEducation = false;
      $scope.showProjects = false;

    }
  }
}]);

mainApp.controller('TechSkillsController', ['$scope', function($scope){
  $scope.techSkills = ['HTML', 'CSS', 'javascript', 'jQuery', 'angular', 'PHP', 'SQL', 'mongoDB',
 'node.js', 'express', 'Grunt', 'bootstrap', 'XAAMP', 'wordpress'];
}]);

mainApp.controller('ExperienceController', ['$scope', function($scope){
  $scope.pastJobs = ['Eleven Design Co', 'Braun Intertec', 'Geek Squad', 'StoryStick Marketing'];
}]);

mainApp.controller('EducationController', ['$scope', function($scope){
  $scope.pastSchools = ['Prime Digital Academy', 'DePaul University'];
}]);

mainApp.controller('ProjectController', ['$scope', function($scope){
  $scope.projects = ['Conscious Shopper', 'PHP CMS Blog', 'Old Version Resume'];
}])
