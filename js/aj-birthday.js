// Aj-Birthday v1.0.0
// Author:Allen J
// Blog: http://www.allenj.net

;(function($) {
    $.fn.ajbirthday = function(settings) {
        var _defaultSettings = {};
        
        //18 ~ 65 years-old
        var d = new Date();
        var startYear = d.getFullYear() - 65;
        var endYear = d.getFullYear() - 18;        
        _defaultSettings.startYear = startYear;
        _defaultSettings.endYear = endYear;
        
        var _settings = $.extend(_defaultSettings, settings);
        var _handler = function() {
            
            //init
            var container = this;
            var year = $(".year", container);
            var month = $(".month", container);
            var day = $(".day", container);
            var defaultCount = $(".day option", container).length;
                        
            for(;_settings.startYear <= _settings.endYear; _settings.startYear++){
                year
                    .append($("<option></option>")
                    .attr("value", _settings.startYear)
                    .text(_settings.startYear));
            }
            
            for(var i = 1; i <= 12; i++){
                month
                    .append($("<option></option>")
                    .attr("value", i)
                    .text(i));
            }
            
            year.bind("change", dateChange);
            month.bind("change", dateChange);
            
            function dateChange(){
                var dayCount = new Date(year.val(), month.val(), 0).getDate();                
                day.children("option:gt(" + defaultCount + ")").remove();
                day.children("option:eq(" + defaultCount + ")").remove();
                
                for(var i = 1; i <= dayCount; i++){
                    day
                        .append($("<option></option>")
                        .attr("value", i)
                        .text(i));
                }
            }
            
            dateChange();
        };
        return this.each(_handler);
    };
})(jQuery);