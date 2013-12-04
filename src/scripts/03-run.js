app.run(['$window', '$rootScope', function ($window, scope) {
    if (scope._stickyElements === undefined) {
        var $win = angular.element($window);

        $win.bind('scroll.sticky', function (e) {
            var pos = $win.scrollTop();
            for (var i = 0; i < scope._stickyElements.length; i++) {

                var item = scope._stickyElements[i];

                if (!item.isStuck && pos > item.start) {
                    item.element.addClass('bz-sticky');
                    item.isStuck = true;

                    if (item.placeholder) {
                        item.placeholder = angular.element('<div></div>')
                            .css({height: item.element.outerHeight() + 'px'})
                            .insertBefore(item.element);
                    }
                }
                else if (item.isStuck && pos < item.start) {
                    item.element.removeClass('bz-sticky');
                    item.isStuck = false;

                    if (item.placeholder) {
                        item.placeholder.remove();
                        item.placeholder = true;
                    }
                }
            }
        });

        var recheckPositions = function () {
            for (var i = 0; i < scope._stickyElements.length; i++) {
                var item = scope._stickyElements[i];
                if (!item.isStuck) {
                    item.start = item.element.offset().top;
                } else if (item.placeholder) {
                    item.start = item.placeholder.offset().top;
                }
            }
        };
        $win.bind('load', recheckPositions);
        $win.bind('resize', recheckPositions);
    }
}]);