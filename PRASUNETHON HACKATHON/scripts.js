// Scrolling functions for event and community boxes
function scrollLeft() {
    document.getElementById('eventBoxes').scrollBy({
        left: -200,
        behavior: 'smooth'
    });
}

function scrollRight() {
    document.getElementById('eventBoxes').scrollBy({
        left: 200,
        behavior: 'smooth'
    });
}

function scrollCommunityLeft() {
    document.getElementById('communityBoxes').scrollBy({
        left: -200,
        behavior: 'smooth'
    });
}

function scrollCommunityRight() {
    document.getElementById('communityBoxes').scrollBy({
        left: 200,
        behavior: 'smooth'
    });
}
