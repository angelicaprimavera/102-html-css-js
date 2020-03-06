var username;
function askName() {
    username = prompt('What is your name?');

    return document.write('<h4> Welcome ' + username + '</h4>');
}

function tellThem() {
    var homeTown = prompt('Where are you from?');

    return document.write('<h3> You are joining us from ' + homeTown + ' to meet us here. </h3>');
}

function addGreeting() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good morning!';
    } else {
        greeting = 'Welcome!';
    }
    return document.write('<h3>' + greeting + '</h3>');
}
