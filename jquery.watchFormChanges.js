(function($) {
    $.fn.watchFormChanges = function(options) {
        var forms = $(this);
        var defaults = {
            'submit': 'input[type=submit]',
            'fieldSelector': ':input:not(input[type=submit]):not(input[type=button])',
            'fieldEvents': 'change keyup propertychange input'
        };
        
        options = $.extend(defaults, options);
        
        forms.each(function() {
            var form = $(this);
            
            // This seems to resolve an issue in ie where a submit triggers the beforeunload event.
            form.submit(function() {
                $(window).off('beforeunload');
            });
            
            $(options.fieldSelector, form).on(options.fieldEvents, function() {
                if (form.hasFormChanged()) {
                    registerUnloadEvent();
                }
                else {
                    removeUnloadEvent();
                }
            });
            
            form.each(function() {
                var _form = $(this);
                _form.data('formHash', _form.serialize());
                
                $(options.submit, _form).on('click', function() {
                    var eventData = jQuery._data($(window)[0], 'events')['beforeunload'];
                    if (eventData != undefined) {
                        $(window).off('beforeunload');
                    }
                });
            });
        });
        
        function registerUnloadEvent() {
            var eventData = jQuery._data($(window)[0], 'events')['beforeunload'];
            if (eventData == undefined) {
                $(window).on('beforeunload', function() { 
                    return 'Are you sure that you want to exist before saving your changes?';
                });
            }
        }
        
        function removeUnloadEvent() {
            var eventData = jQuery._data($(window)[0], 'events')['beforeunload'];
            if (eventData != undefined) {
                $(window).off('beforeunload');
            }
        };
    };

    $.fn.hasFormChanged = function() {
        var hasChanged = false;

        this.each(function () {
            var formHash = $.data(this, 'formHash');
            if ((formHash != null) && (formHash !== $(this).serialize())) {
                hasChanged = true;
                return false;
            }
        });

        return hasChanged;
    };
})(jQuery);