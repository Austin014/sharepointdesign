app.controller('MainController', ['$scope','ModuleService', function ($scope, ModuleService) {
    (function activate(){
        ModuleService.getModules().then(function(modules){
            $scope.products = modules;
        });
        $scope.newModule = emptyModule();
    })();
    
    $scope.toggleEditing = function(){
        $scope.editing = !$scope.editing;
    }
    
    $scope.createNew = function(){
        ModuleService.add($scope.newModule).then(function(){
            $scope.newModule = emptyModule();
            $scope.toggleEditing();
        });
        
    }
    
    function emptyModule(){
        return Object.create(null);
        
    }

}]);