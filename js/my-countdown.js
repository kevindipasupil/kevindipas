// define what options to use
var options = {
    autostart: true,
    m: 1,
    S: 30,
    // show a message after the countdown timer once the countdown has ended
    done: function() {
        $('#my-countdown').after("<p>Time's up!</p>");
    },
    // el and opts will refer to the element the countdown is running on and opts are the options assigned to it
    tpl: function(el,opts) {
        // use underscore to generate the markup to be displayed from the countdown-tpl template
        var template = _.template(
            $('#countdown-tpl').html()
        );
        // display the template
        $(el).html(template(opts));
    }
}
// instantiate the countdown
$("#my-countdown").countdown(options);