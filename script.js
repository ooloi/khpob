$(document).ready(function(){

    //hide result area
    $('#result').hide();

    //on clicking play again, fade result and refresh
    $('#again').click(function(){
        $('#result').fadeOut('slow', function(){
            location.reload();
        });
     });

    //get opponent's choice
    function getOC(num){
        if(num<=0.2){
            return('helikitty');
        }else if(num<=0.4){
            return('hairball flower');
        }else if(num<=0.6){
            return('piggy');
        }else if(num<=0.8){
            return('focusing orb');
        }else if(num<=1){
            return('bureaucroc');
        }
    }
    
    var oppC = getOC(Math.random());

    //on clicking any choice
    $('.choose').click(function(){

        //hide all choices
        $('#choices').hide();

        //show results with play again button
        $('#result').show();          
    });

    //if player chooses helikitty
    $('#kitty').click(function(){
        if(oppC==='helikitty'){
            $('#result').prepend('<h2>Too many kitties! Try again</h2>');
        }else if(oppC==='hairball flower'){
            $('#result').prepend('<h2>Your opponent\'s hairball flower chokes your helikitty</h2><div id="box"><img src="hairball_flower_wins.png"> &#8669; <img src="kitty_loses.gif" class="flip"></div>');
        }else if(oppC==='piggy'){
            $('#result').prepend('<h2>Your helikitty makes your opponent\'s piggy sneeze</h2><div id="box"><img src="kitty_wins.gif"> &#8669; <img src="piggy_loses.gif" class="flip"></div>');
        }else if(oppC==='focusing orb'){
            $('#result').prepend('<h2>Your helikitty\'s purr calms better than your opponent\'s focusing orb</h2><div id="box"><img src="kitty_wins.gif"> &#8669; <img src="focusing_orb.gif" class="flip" height="84px" width="80px"></div>');
        }else if(oppC==='bureaucroc'){
            $('#result').prepend('<h2>Your opponent\'s bureaucroc fines your helikitty</h2><div id="box"><img src="bureaucroc.gif" width="80px" height="72px"> &#8669; <img src="kitty_loses.gif" class="flip"></div>');
        }
    });

    //if player chooses hairball flower
    $('#hairball').click(function(){
        if(oppC==='helikitty'){
            $('#result').prepend('<h2>Your hairball flower chokes your opponent\'s helikitty</h2><div id="box"><img src="hairball_flower_wins.png"> &#8669; <img src="kitty_loses.gif" class="flip"></div>');
        }else if(oppC==='hairball flower'){
            $('#result').prepend('<h2>Too many flowers! Try again</h2>');
        }else if(oppC==='piggy'){
            $('#result').prepend('<h2>Your opponent\'s piggy snacks on your hairball flower</h2><div id="box"><img src="piggy_wins.gif"> &#8669; <img src="hairball_flower_loses.png"></div>');
        }else if(oppC==='focusing orb'){
            $('#result').prepend('<h2>Your hairball flower-enhanced speed dizzies your opponent\'s focusing orb</h2><div id="box"><img src="hairball_flower_wins.png"> &#8669; <img src="focusing_orb.gif" class="flip" height="84px" width="80px"></div>');
        }else if(oppC==='bureaucroc'){
            $('#result').prepend('<h2>Your opponent\'s bureaucroc bores your hairball flower</h2><div id="box"><img src="bureaucroc.gif" width="80px" height="72px"> &#8669; <img src="hairball_flower_loses.png"></div>');
        }                        
    });

    //if player chooses piggy
    $('#piggy').click(function(){
        if(oppC==='helikitty'){
            $('#result').prepend('<h2>Your opponent\'s helikitty makes your piggy sneeze</h2><div id="box"><img src="kitty_wins.gif"> &#8669; <img src="piggy_loses.gif" class="flip"></div>');
        }else if(oppC==='hairball flower'){ 
            $('#result').prepend('<h2>Your piggy snacks on your opponent\'s hairball flower</h2><div id="box"><img src="piggy_wins.gif"> &#8669; <img src="hairball_flower_loses.png"></div>');
        }else if(oppC==='piggy'){
            $('#result').prepend('<h2>Too many piggies! Try again</h2>');
        }else if(oppC==='focusing orb'){
            $('#result').prepend('<h2>Your opponent\'s focusing orb soothes your savage piggy</h2><div id="box"><img src="focusing_orb.gif" height="84px" width="80px"> &#8669; <img src="piggy_loses.gif" class="flip"></div>');
        }else if(oppC==='bureaucroc'){
            $('#result').prepend('<h2>Your piggy plops on your opponent\'s bureaucroc</h2><div id="box"><img src="piggy_wins.gif"> &#8669; <img src="bureaucroc.gif" class="flip" width="80px" height="72px"></div>');
        }
    });

    //if player chooses focusing orb
    $('#orb').click(function(){
        if(oppC==='helikitty'){
            $('#result').prepend('<h2>Your opponent\'s helikitty\'s purr calms better than your focusing orb</h2><div id="box"><img src="kitty_wins.gif"> &#8669; <img src="focusing_orb.gif" class="flip" height="84px" width="80px"></div>');
        }else if(oppC==='hairball flower'){ 
            $('#result').prepend('<h2>Your opponent\'s hairball flower-enhanced speed dizzies your focusing orb</h2><div id="box"><img src="hairball_flower_wins.png"> &#8669; <img src="focusing_orb.gif" class="flip" height="84px" width="80px"></div>');
        }else if(oppC==='piggy'){
            $('#result').prepend('<h2>Your focusing orb soothes your opponent\'s savage piggy</h2><div id="box"><img src="focusing_orb.gif" height="84px" width="80px"> &#8669; <img src="piggy_loses.gif" class="flip"></div>');
        }else if(oppC==='focusing orb'){
            $('#result').prepend('<h2>Too many orbs! Try again</h2>');
        }else if(oppC==='bureaucroc'){
            $('#result').prepend('<h2>Your focusing orb befuddles your opponent\'s bureaucroc</h2><div id="box"><img src="focusing_orb.gif" height="84px" width="80px"> &#8669; <img src="bureaucroc.gif" class="flip" width="80px" height="72px"></div>');
        }
    });

    //if player chooses bureaucroc
    $('#bureaucroc').click(function(){
        if(oppC==='helikitty'){
            $('#result').prepend('<h2>Your bureaucroc fines your opponent\'s helikitty</h2><div id="box"><img src="bureaucroc.gif" width="80px" height="72px"> &#8669; <img src="kitty_loses.gif" class="flip"></div>');
        }else if(oppC==='hairball flower'){
            $('#result').prepend('<h2>Your bureaucroc bores your opponent\'s hairball flower</h2><div id="box"><img src="bureaucroc.gif" width="80px" height="72px"> &#8669; <img src="hairball_flower_loses.png"></div>');
        }else if(oppC==='piggy'){
            $('#result').prepend('<h2>Your opponent\'s piggy plops on your bureaucroc</h2><div id="box"><img src="piggy_wins.gif"> &#8669; <img src="bureaucroc.gif" class="flip" width="80px" height="72px"></div>');
        }else if(oppC==='focusing orb'){
            $('#result').prepend('<h2>Your opponent\'s focusing orb befuddles your bureaucroc</h2><div id="box"><img src="focusing_orb.gif" height="84px" width="80px"> &#8669; <img src="bureaucroc.gif" class="flip" width="80px" height="72px"></div>');
        }else if(oppC==='bureaucroc'){
            $('#result').prepend('<h2>Too many crocs! Try again</h2>');
        }
    });
});
