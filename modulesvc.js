app.service('ModuleService', ['$q', function($q) {
//    $scope.products = [
//        
//        ]
    var _modules = [
        {
            name: 'Dynamic-Timeline',
            type: 'Calendar',
            sharepointVersion: 'O365',
            screenshot: 'img/dynamic-timeline.png',
            buildType: 'Custom',
            difficulty: '4 - Hard but resources existed to aid development',
            explain: 'This was difficult because it does not exist in O365. Maria had to build a custom control from scratch in order to help track construction progress.',
            serverPath: 'smb://prod-data/Creative/WORK/MCC_McCarthy/McCarthy_revised.psd'
  },
        {
            name: 'Tabbed-Filters',
            type: 'Filter',
            sharepointVersion: 'O365',
            screenshot: 'img/tabbed-filter.png',
            buildType: 'Custom',
            difficulty: '4 - Hard but resources existed to aid development',
            explain: 'This was difficult because it does not exist in O365. Maria had to build a custom control from scratch in order to help track construction progress.',
            serverPath: 'smb://prod-data/Creative/WORK/MCC_McCarthy/McCarthy_revised.psd'
  },
        {
            name: 'Tabbed-Filters1',
            type: 'Filter',
            sharepointVersion: 'O365',
            screenshot: 'img/tabbed-filter.png',
            buildType: 'Custom',
            difficulty: '4 - Hard but resources existed to aid development',
            explain: 'This was difficult because it does not exist in O365. Maria had to build a custom control from scratch in order to help track construction progress.',
            serverPath: 'smb://prod-data/Creative/WORK/MCC_McCarthy/McCarthy_revised.psd'
  },
        {
            name: 'Tabbed-Filters2',
            type: 'Filter',
            sharepointVersion: 'O365',
            screenshot: 'img/tabbed-filter.png',
            buildType: 'Custom',
            difficulty: '4 - Hard but resources existed to aid development',
            explain: 'This was difficult because it does not exist in O365. Maria had to build a custom control from scratch in order to help track construction progress.',
            serverPath: 'smb://prod-data/Creative/WORK/MCC_McCarthy/McCarthy_revised.psd'
  },
        {
            name: 'Tabbed-Filters3',
            type: 'Filter',
            sharepointVersion: 'O365',
            screenshot: 'img/tabbed-filter.png',
            buildType: 'Custom',
            difficulty: '4 - Hard but resources existed to aid development',
            explain: 'This was difficult because it does not exist in O365. Maria had to build a custom control from scratch in order to help track construction progress.',
            serverPath: 'smb://prod-data/Creative/WORK/MCC_McCarthy/McCarthy_revised.psd'
  },
        {
            name: 'Tabbed-Filters4',
            type: 'Filter',
            sharepointVersion: 'O365',
            screenshot: 'img/tabbed-filter.png',
            buildType: 'Custom',
            difficulty: '4 - Hard but resources existed to aid development',
            explain: 'This was difficult because it does not exist in O365. Maria had to build a custom control from scratch in order to help track construction progress.',
            serverPath: 'smb://prod-data/Creative/WORK/MCC_McCarthy/McCarthy_revised.psd'
  },
        {
            name: 'Tabbed-Filters5',
            type: 'Filter',
            sharepointVersion: 'O365',
            screenshot: 'img/tabbed-filter.png',
            buildType: 'Custom',
            difficulty: '4 - Hard but resources existed to aid development',
            explain: 'This was difficult because it does not exist in O365. Maria had to build a custom control from scratch in order to help track construction progress.',
            serverPath: 'smb://prod-data/Creative/WORK/MCC_McCarthy/McCarthy_revised.psd'
  }

];
    this.getModules = function(){
        return $q.when(_modules);      
    };
    
    this.add = function(module){
        _modules.unshift(module);
      return $q.when(module);  
    };
}]);