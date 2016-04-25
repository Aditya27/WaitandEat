(function () {
    'use strict';
    
    angular
        .module('app.auth')
        .directive('gzAuthForm', gzAuthForm)
    
    function gzAuthForm() {
        return {
            templateUrl: 'app/auth/authForm.html',
            restrict: 'E',
            scope: {
                error: '=',
                formTitle: '@',
                submitAction: '&'
            },
            controller: AuthFormController,
            controllerAs: 'vm',
            bindToController: true
        };
    }
    
    function AuthFormController() {
        var vm = this;
        
        vm.user = {
            email: '',
            password: ''
        };
    }
    
}());