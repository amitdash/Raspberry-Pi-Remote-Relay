// Function to control relays
function buttonClick(clicked_id){

    if (clicked_id == "on"){
        $.get( "command.php", {
        state: "on"} );  
    } 

    if (clicked_id == "off"){
        $.get( "command.php", {
        state: "off"} );  
    }
}












































