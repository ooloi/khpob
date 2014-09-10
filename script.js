$(document).ready(function(){

    //hide result area
    $('#result').hide();

    //on clicking play again, fade result and refresh
    $('#again').click(function(){
        $('#result').fadeOut('slow', function(){
            location.reload();
        });
     });
    
    //check for saved win total
    if(localStorage.winTotal===undefined){
        //initialize at 0
        var pCount = 0;
        localStorage.setItem('winTotal', '0');
    }else{
        //set pCount equal to saved win total
        var pCount = parseInt(localStorage.getItem('winTotal'), 10);
    }
    
    //check for saved loss total
    if(localStorage.lossTotal===undefined){
        //initialize at 0
        var oCount = 0;
        localStorage.setItem('lossTotal', '0');
    }else{
        //set oCount equal to saved loss total
        var oCount = parseInt(localStorage.getItem('lossTotal'), 10);
    }
    
    //set visible win/loss totals
    $('#wins').append('Wins: ' + pCount);
    $('#losses').append('Losses: ' + oCount);
    
    //reset button to clear wins/losses
    $('#reset').click(function(){
        localStorage.removeItem('winTotal');
        localStorage.removeItem('lossTotal');
        location.reload();
    });
    
    //all possible outcomes
    var outcomes = [
        ['kitty', 'kitty', '<h2>Too many kitties! Try again.</h2>'],
        ['hairball', 'hairball', '<h2>Too many flowers! Try again.</h2>'],
        ['piggy', 'piggy', '<h2>Too many piggies! Try again</h2>'],
        ['orb', 'orb', '<h2>Too many orbs! Try again.</h2>'],
        ['bureaucroc', 'bureaucroc', '<h2>Too many crocs! Try again.</h2>'],
        ['kitty', 'piggy', '<h2>Helikitty makes piggy sneeze.</h2><div id="box"><img src="kitty_wins.gif"> &#8669; <img src="piggy_loses.gif" class="flip"> </div>'],
        ['kitty', 'orb', '<h2>Helikitty\'s purr calms better than focusing orb.</h2><div id="box"><img src="kitty_wins.gif"> &#8669; <img src="focusing_orb.gif" class="flip" height="84px" width="80px"></div>'],
        ['hairball', 'kitty', '<h2>Helikitty chokes on hairball flower.</h2><div id="box"><img src="hairball_flower_wins.png"> &#8669; <img src="kitty_loses.gif" class="flip"></div>'],
        ['hairball', 'orb', '<h2>Hairball flower-enhanced speed dizzies focusing orb.</h2><div id="box"><img src="hairball_flower_wins.png"> &#8669; <img src="focusing_orb.gif" class="flip" height="84px" width="80px"></div>'],
        ['piggy', 'hairball', '<h2>Piggy snacks on hairball flower.</h2><div id="box"><img src="piggy_wins.gif"> &#8669; <img src="hairball_flower_loses.png"></div>'],
        ['piggy', 'bureaucroc', '<h2>Piggy plops on bureaucroc.</h2><div id="box"><img src="piggy_wins.gif"> &#8669; <img src="bureaucroc.gif" class="flip" width="80px" height="72px"></div>'],
        ['orb', 'piggy', '<h2>The focusing orb soothes the savage piggy.</h2><div id="box"><img src="focusing_orb.gif" height="84px" width="80px"> &#8669; <img src="piggy_loses.gif" class="flip"></div>'],
        ['orb', 'bureaucroc', '<h2>Focusing orb befuddles bureaucroc.</h2><div id="box"><img src="focusing_orb.gif" height="84px" width="80px"> &#8669; <img src="bureaucroc.gif" class="flip" width="80px" height="72px"></div>'],
        ['bureaucroc', 'kitty', '<h2>Bureaucroc fines helikitty.</h2><div id="box"><img src="bureaucroc.gif" width="80px" height="72px"> &#8669; <img src="kitty_loses.gif" class="flip"></div>'],
        ['bureaucroc', 'hairball', '<h2>Bureaucroc bores hairball flower.</h2><div id="box"><img src="bureaucroc.gif" width="80px" height="72px"> &#8669; <img src="hairball_flower_loses.png"></div>']
    ];

    //get opponent's choice
    function getOC(num){
        if(num<=0.2){
            return('kitty');
        }else if(num<=0.4){
            return('hairball');
        }else if(num<=0.6){
            return('piggy');
        }else if(num<=0.8){
            return('orb');
        }else if(num<=1){
            return('bureaucroc');
        }
    }
    
    var oppC = getOC(Math.random());

    //core gameplay
    function khpob(pc, oc){
        //loop through possible outcomes
        for(var i=0; i<outcomes.length; i++){
            //check for matching choice pairs
            if((pc===outcomes[i][0] && oc===outcomes[i][1]) || 
               (oc===outcomes[i][0] && pc===outcomes[i][1])){
                //add outcome to page
                $('#result').prepend(outcomes[i][2]);
                //show results with play again button
                $('#result').show();
                //supplement & update win & loss counts
                if(pc !== oc){
                    if(pc===outcomes[i][0] && oc===outcomes[i][1]){
                        pCount++;
                        localStorage['winTotal'] = pCount;
                        $('#result h2').append(' You win!');
                        document.getElementById('wins').innerHTML = 'Wins: ' + pCount;
                    }else if(oc===outcomes[i][0] && pc===outcomes[i][1]){
                        oCount++;
                        localStorage['lossTotal'] = oCount;
                        $('#result h2').append(' Aw, you were just about to win the game!');
                        document.getElementById('losses').innerHTML = 'Losses: ' + oCount;
                    }
                }                
                //stop loop
                i = outcomes.length;
            }
        }
    }     
    
    //on clicking any choice
    $('.choose').click(function(){
        
        //hide all choices
        $('#choices').hide();
    
        //run khpob with clicked item for player & oppC
        khpob(this.id, oppC);
    });
});