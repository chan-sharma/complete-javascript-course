/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore,previousPlayer,gamePlaying;
init();
document.querySelector('.btn-roll').addEventListener('click',()=>{
   if (gamePlaying){

        var dice;
        dice=Math.floor(Math.random()*6)+1;
    
        console.log(dice)
    //add the dice image
        var diceDOM=document.querySelector('.dice');
        diceDOM.style.display='block';
        diceDOM.src=(`dice-${dice}.png`);
   
    
    
    //document.querySelector('#current-'+activePlayer).innerHTML=roundScore;
        console.log(scores);
        if(dice!==1){
        roundScore+=dice;

        document.querySelector('#current-'+activePlayer).textContent=roundScore;

        
       
        } else {
        
        
        //Next player
        activePlayerf();
        
    
        }
   }


});
//add score and pass it to next player when 'hold' button is clicked
document.querySelector('.btn-hold').addEventListener('click',()=>{
    if(gamePlaying){

    
        //Add current score to the global score
     scores[activePlayer]+=roundScore;
        //update UI
        document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
        //check if player won the game
        if (scores[activePlayer]>=100){
            document.querySelector('#name-'+activePlayer).textContent='Winner!';
            document.querySelector('.dice').style.display='none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlaying=false;
        
        //document.getElementById('current-0').textContent='0';
        //document.getElementById('current-1').textContent='0';
        
        }else{

            activePlayerf();
        
       
    

        
        //roundScore=0;
       // if(activePlayer===0){
        //activePlayer=1;
        //document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
       // } else {
        //activePlayer=0;
        //document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
     
        
        }
    }
});
function activePlayerf(){
    activePlayer==0?previousPlayer=0:previousPlayer=1;
    //set previous player's score to  Zero
    activePlayer===0?activePlayer=1:activePlayer=0;
    document.querySelector('#current-'+previousPlayer).textContent='0';
    roundScore=0;
    document.querySelector('.player-'+previousPlayer+'-panel').classList.toggle('active');
    document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';

}
//start a new game when btn-new is selected
document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    gameplaying=true;
    
    //also try innertext & textContent
    
    //initally disable the dice
    document.querySelector('.dice').style.display='none';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}