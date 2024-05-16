$(document).ready(function() {
    $('#github-icon').hover(
        function() {
            $(this).attr('src', 'app/assets/images/over_github.png');
        },
        function() {
            $(this).attr('src', 'app/assets/images/github.png');
        }
    );
});