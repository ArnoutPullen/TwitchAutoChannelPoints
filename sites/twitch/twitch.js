var interval = setInterval(function() {
    var pointsSummary = document.querySelector(".community-points-summary");

    if (pointsSummary) {
        var buttons = pointsSummary.querySelectorAll("button");

        if (buttons) {
            if (buttons.length > 1) {
                buttons[1].click();
            }
        }
    }
}, 1000);

// clearInterval(interval);