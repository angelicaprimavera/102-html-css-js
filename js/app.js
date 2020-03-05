var username;
function askName (){
    username = prompt ('What is your name?');
    var homeTown = prompt ('Where are you from?');

    return document.write('<h4> Welcome' + username </h4>);
}

function tellThem (){
    var homeTown = prompt ('Where are you from?');
    
    return document.write ('<h3> You are joining us from ' + homeTown + ' to meet us here. </h3>');

}
