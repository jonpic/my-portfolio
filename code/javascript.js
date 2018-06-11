$(document).ready(function() {
    $(".btn").on("click", function (){
        switch(this.id) {
            case "penn-button":
                $("#penn-container").show();
                $("#about-container").hide();
                $("#connect-container").hide();
                $("#portfolio-container").hide();
                break;
            case "more-button":
                $("#penn-container").hide();
                $("#about-container").show();
                $("#connect-container").hide();
                $("#portfolio-container").hide();
                break;
            case "connect-button":
                $("#penn-container").hide();
                $("#about-container").hide();
                $("#connect-container").show();
                $("#portfolio-container").hide();
                break;
            case "portfolio-button":
                $("#penn-container").hide();
                $("#about-container").hide();
                $("#connect-container").hide();
                $("#portfolio-container").show();
                break;
            default:
                
        };
            

            
    });
});