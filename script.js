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
            $('#result').prepend('<h2>Your opponent\'s hairball flower chokes your helikitty</h2><div id="box"><img src="https://cloud.githubusercontent.com/assets/8074915/3530411/3efe3bd2-07a4-11e4-870e-3d67eb7a15ce.png"> &#8669; <img src="https://cloud.githubusercontent.com/assets/8074915/3530412/3eff42c0-07a4-11e4-928e-e871f4f74785.gif" class="flip"></div>');
        }else if(oppC==='piggy'){
            $('#result').prepend('<h2>Your helikitty makes your opponent\'s piggy sneeze</h2><div id="box"><img src="https://cloud.githubusercontent.com/assets/8074915/3530415/3f0904ea-07a4-11e4-8acd-4c6217738193.gif"> &#8669; <img src="https://cloud.githubusercontent.com/assets/8074915/3530414/3f060100-07a4-11e4-8ed6-19d6bc9fc634.gif" class="flip"></div>');
        }else if(oppC==='focusing orb'){
            $('#result').prepend('<h2>Your helikitty\'s purr calms better than your opponent\'s focusing orb</h2><div id="box"><img src="https://cloud.githubusercontent.com/assets/8074915/3530415/3f0904ea-07a4-11e4-8acd-4c6217738193.gif"> &#8669; <img src="https://cloud.githubusercontent.com/assets/8074915/3530417/3f0f4698-07a4-11e4-89f3-eb6091171e05.gif" class="flip" height="84px" width="80px"></div>');
        }else if(oppC==='bureaucroc'){
            $('#result').prepend('<h2>Your opponent\'s bureaucroc fines your helikitty</h2><div id="box"><img src="https://cloud.githubusercontent.com/assets/8074915/3530418/3f127fac-07a4-11e4-9c09-5f18a5cda268.gif" width="80px" height="72px"> &#8669; <img src="https://cloud.githubusercontent.com/assets/8074915/3530412/3eff42c0-07a4-11e4-928e-e871f4f74785.gif" class="flip"></div>');
        }
    });

    //if player chooses hairball flower
    $('#hairball').click(function(){
        if(oppC==='helikitty'){
            $('#result').prepend('<h2>Your hairball flower chokes your opponent\'s helikitty</h2><div id="box"><img src="https://cloud.githubusercontent.com/assets/8074915/3530411/3efe3bd2-07a4-11e4-870e-3d67eb7a15ce.png"> &#8669; <img src="https://cloud.githubusercontent.com/assets/8074915/3530412/3eff42c0-07a4-11e4-928e-e871f4f74785.gif" class="flip"></div>');
        }else if(oppC==='hairball flower'){
            $('#result').prepend('<h2>Too many flowers! Try again</h2>');
        }else if(oppC==='piggy'){
            $('#result').prepend('<h2>Your opponent\'s piggy snacks on your hairball flower</h2><div id="box"><img src="https://cloud.githubusercontent.com/assets/8074915/3530413/3f0200b4-07a4-11e4-99bb-2211ef52654f.gif"> &#8669; <img src="https://cloud.githubusercontent.com/assets/8074915/3530410/3efa94fa-07a4-11e4-95d1-8cc384cf976d.png"></div>');
        }else if(oppC==='focusing orb'){
            $('#result').prepend('<h2>Your hairball flower-enhanced speed dizzies your opponent\'s focusing orb</h2><div id="box"><img src="https://cloud.githubusercontent.com/assets/8074915/3530411/3efe3bd2-07a4-11e4-870e-3d67eb7a15ce.png"> &#8669; <img src="https://cloud.githubusercontent.com/assets/8074915/3530417/3f0f4698-07a4-11e4-89f3-eb6091171e05.gif" class="flip" height="84px" width="80px"></div>');
        }else if(oppC==='bureaucroc'){
            $('#result').prepend('<h2>Your opponent\'s bureaucroc bores your hairball flower</h2><div id="box"><img src="https://cloud.githubusercontent.com/assets/8074915/3530418/3f127fac-07a4-11e4-9c09-5f18a5cda268.gif" width="80px" height="72px"> &#8669; <img src="https://cloud.githubusercontent.com/assets/8074915/3530410/3efa94fa-07a4-11e4-95d1-8cc384cf976d.png"></div>');
        }                        
    });

    //if player chooses piggy
    $('#piggy').click(function(){
        if(oppC==='helikitty'){
            $('#result').prepend('<h2>Your opponent\'s helikitty makes your piggy sneeze</h2><div id="box"><img src="https://cloud.githubusercontent.com/assets/8074915/3530415/3f0904ea-07a4-11e4-8acd-4c6217738193.gif"> &#8669; <img src="https://cloud.githubusercontent.com/assets/8074915/3530414/3f060100-07a4-11e4-8ed6-19d6bc9fc634.gif" class="flip"></div>');
        }else if(oppC==='hairball flower'){ 
            $('#result').prepend('<h2>Your piggy snacks on your opponent\'s hairball flower</h2><div id="box"><img src="https://cloud.githubusercontent.com/assets/8074915/3530413/3f0200b4-07a4-11e4-99bb-2211ef52654f.gif"> &#8669; <img src="https://cloud.githubusercontent.com/assets/8074915/3530410/3efa94fa-07a4-11e4-95d1-8cc384cf976d.png"></div>');
        }else if(oppC==='piggy'){
            $('#result').prepend('<h2>Too many piggies! Try again</h2>');
        }else if(oppC==='focusing orb'){
            $('#result').prepend('<h2>Your opponent\'s focusing orb soothes your savage piggy</h2><div id="box"><img src="https://cloud.githubusercontent.com/assets/8074915/3530417/3f0f4698-07a4-11e4-89f3-eb6091171e05.gif" height="84px" width="80px"> &#8669; <img src="https://cloud.githubusercontent.com/assets/8074915/3530414/3f060100-07a4-11e4-8ed6-19d6bc9fc634.gif" class="flip"></div>');
        }else if(oppC==='bureaucroc'){
            $('#result').prepend('<h2>Your piggy plops on your opponent\'s bureaucroc</h2><div id="box"><img src="https://cloud.githubusercontent.com/assets/8074915/3530413/3f0200b4-07a4-11e4-99bb-2211ef52654f.gif"> &#8669; <img src="https://cloud.githubusercontent.com/assets/8074915/3530418/3f127fac-07a4-11e4-9c09-5f18a5cda268.gif" class="flip" width="80px" height="72px"></div>');
        }
    });

    //if player chooses focusing orb
    $('#orb').click(function(){
        if(oppC==='helikitty'){
            $('#result').prepend('<h2>Your opponent\'s helikitty\'s purr calms better than your focusing orb</h2><div id="box"><img src="https://cloud.githubusercontent.com/assets/8074915/3530415/3f0904ea-07a4-11e4-8acd-4c6217738193.gif"> &#8669; <img src="https://cloud.githubusercontent.com/assets/8074915/3530417/3f0f4698-07a4-11e4-89f3-eb6091171e05.gif" class="flip" height="84px" width="80px"></div>');
        }else if(oppC==='hairball flower'){ 
            $('#result').prepend('<h2>Your opponent\'s hairball flower-enhanced speed dizzies your focusing orb</h2><div id="box"><img src="https://cloud.githubusercontent.com/assets/8074915/3530411/3efe3bd2-07a4-11e4-870e-3d67eb7a15ce.png"> &#8669; <img src="https://cloud.githubusercontent.com/assets/8074915/3530417/3f0f4698-07a4-11e4-89f3-eb6091171e05.gif" class="flip" height="84px" width="80px"></div>');
        }else if(oppC==='piggy'){
            $('#result').prepend('<h2>Your focusing orb soothes your opponent\'s savage piggy</h2><div id="box"><img src="https://cloud.githubusercontent.com/assets/8074915/3530417/3f0f4698-07a4-11e4-89f3-eb6091171e05.gif" height="84px" width="80px"> &#8669; <img src="https://cloud.githubusercontent.com/assets/8074915/3530414/3f060100-07a4-11e4-8ed6-19d6bc9fc634.gif" class="flip"></div>');
        }else if(oppC==='focusing orb'){
            $('#result').prepend('<h2>Too many orbs! Try again</h2>');
        }else if(oppC==='bureaucroc'){
            $('#result').prepend('<h2>Your focusing orb befuddles your opponent\'s bureaucroc</h2><div id="box"><img src="https://cloud.githubusercontent.com/assets/8074915/3530417/3f0f4698-07a4-11e4-89f3-eb6091171e05.gif" height="84px" width="80px"> &#8669; <img src="https://cloud.githubusercontent.com/assets/8074915/3530418/3f127fac-07a4-11e4-9c09-5f18a5cda268.gif" class="flip" width="80px" height="72px"></div>');
        }
    });

    //if player chooses bureaucroc
    $('#bureaucroc').click(function(){
        if(oppC==='helikitty'){
            $('#result').prepend('<h2>Your bureaucroc fines your opponent\'s helikitty</h2><div id="box"><img src="https://cloud.githubusercontent.com/assets/8074915/3530418/3f127fac-07a4-11e4-9c09-5f18a5cda268.gif" width="80px" height="72px"> &#8669; <img src="https://cloud.githubusercontent.com/assets/8074915/3530412/3eff42c0-07a4-11e4-928e-e871f4f74785.gif" class="flip"></div>');
        }else if(oppC==='hairball flower'){
            $('#result').prepend('<h2>Your bureaucroc bores your opponent\'s hairball flower</h2><div id="box"><img src="https://cloud.githubusercontent.com/assets/8074915/3530418/3f127fac-07a4-11e4-9c09-5f18a5cda268.gif" width="80px" height="72px"> &#8669; <img src="https://cloud.githubusercontent.com/assets/8074915/3530410/3efa94fa-07a4-11e4-95d1-8cc384cf976d.png"></div>');
        }else if(oppC==='piggy'){
            $('#result').prepend('<h2>Your opponent\'s piggy plops on your bureaucroc</h2><div id="box"><img src="https://cloud.githubusercontent.com/assets/8074915/3530413/3f0200b4-07a4-11e4-99bb-2211ef52654f.gif"> &#8669; <img src="https://cloud.githubusercontent.com/assets/8074915/3530418/3f127fac-07a4-11e4-9c09-5f18a5cda268.gif" class="flip" width="80px" height="72px"></div>');
        }else if(oppC==='focusing orb'){
            $('#result').prepend('<h2>Your opponent\'s focusing orb befuddles your bureaucroc</h2><div id="box"><img src="https://cloud.githubusercontent.com/assets/8074915/3530417/3f0f4698-07a4-11e4-89f3-eb6091171e05.gif" height="84px" width="80px"> &#8669; <img src="https://cloud.githubusercontent.com/assets/8074915/3530418/3f127fac-07a4-11e4-9c09-5f18a5cda268.gif" class="flip" width="80px" height="72px"></div>');
        }else if(oppC==='bureaucroc'){
            $('#result').prepend('<h2>Too many crocs! Try again</h2>');
        }
    });
});
