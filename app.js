(function() {
    'use strict';
    angular
        .module('ng-copyToClipboard', [])
        .directive('ng-copyToClipboard', '$window', ngCopyToClipboard);

    function ngCopyToClipboard ($window) 
    {
            var body = angular.element($window.document.body);
            var textarea = angular.element('<textarea/>');
            textarea.css(
                {
                    position: 'fixed',
                    opacity: '0'
                });

            function copy(toCopy) 
            {
                textarea.val(toCopy);
                body.append(textarea);
                textarea[0].select();

                try 
                {
                    var successful = document.execCommand('copy');
                    if (!successful) throw successful;
                } catch (err) 
                {
                    console.log('failed to copy', toCopy);
                }
                textarea.remove();
            }
            return {
                restrict: 'A',
                scope: {
                    afterCopy: '&'
                },
                link: function (scope, element, attrs) 
                {
                    console.log(scope);
                    element.bind('click', function (e) 
                    {                	
                        try 
                        {
                            copy(attrs.copyToClipboard);
                            if (typeof scope.afterCopy === 'function') scope.afterCopy();
                        } catch (err) 
                        {
                            console.log('failed to copy');
                        }
                    });
                }
            };
        
    };

})();
