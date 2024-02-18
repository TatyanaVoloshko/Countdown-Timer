$(document).ready(function () {
    let audio = new Audio("audio/timer.mp3");
     

    function timerStart() {
        let timer2 = $("#countdown").html();
    
        var interval = setInterval(function () {
            var timer = timer2.split(":");
  
            var minutes = parseInt(timer[0], 10);
            var seconds = parseInt(timer[1], 10);
            --seconds;
            minutes = seconds < 0 ? --minutes : minutes;
            seconds = seconds < 0 ? 59 : seconds;
            seconds = seconds < 10 ? "0" + seconds : seconds;
   
            $("#countdown").html(minutes + ":" + seconds);
            if (minutes < 0) clearInterval(interval);
   
            if (seconds <= 0 && minutes <= 0) clearInterval(interval);
           
            timer2 = minutes + ":" + seconds;
            if (minutes == 0 && seconds == 0) {
               audio.play();
             }
           
        }, 1000);

      
          // Reset button click event
          $(".btn-reset").on("click", function () {
            clearInterval(interval);
            $("#countdown").html();
            let timer = $("#timer2").text();
            $("#countdown").text(timer);
          });
        
       

        
    }
    


    // Start button click event
    $(".btn-start").on("click", function () {
        timerStart();
    
    });

    //Edit time
    $(".edit-icon").click('click', function () {
        $("#edit-out").fadeOut();
        let timerTime = prompt("Enter timer time, maximum 25", '15');
        if (timerTime > 25) {
          $("#timer2").html("25:00");  
        } else {
          $("#timer2").html(timerTime + ":00"); 
       }

        
        let timer = $('#timer2').text()
        $("#countdown").text(timer);


        
       
        
    })
})
