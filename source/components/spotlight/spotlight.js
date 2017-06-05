module.exports = function(attr) {
    $(attr.el).on('mousemove', function(e) {
        if (e.clientX <= 400) {
            var evalUnitX = (e.clientX / 42) + 42;
            $(attr.el).css('background-position-x', evalUnitX + '%');
        } else if (e.clientX >= 900) {
            var evalUnitY = (e.clientX / 93) + 50;
            $(attr.el).css('background-position-x', evalUnitY + '%');
        } else {
            $(attr.el).css('background-position-x', 'center');
        }
    });
}
