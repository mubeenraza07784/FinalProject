$(document).ready(function () {
        $(".loader").fadeIn("slow");

        setTimeout(function () {
            $(".loader").fadeOut("slow", function () {
                $(".container").fadeIn("slow");
            });
        }, 3000);
    });