/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore,previousPlayer,gamePlaying,sixSum;
init();
document.querySelector('.btn-roll').addEventListener('click',()=>{
   if (gamePlaying){

        var dice1,dice2;
        dice1=Math.floor(Math.random()*6)+1;
        dice2=Math.floor(Math.random()*6)+1;
    
        console.log(dice1)
    //add the dice image
        var diceDOM1=document.querySelector('#dice1');
        var diceDOM2=document.querySelector('#dice2');

        diceDOM1.style.display='block';
        diceDOM2.style.display='block';
        diceDOM1.src=(`dice-${dice1}.png`);
        diceDOM2.src='dice-'+dice2+'.png'
        
        if (dice1===6 && dice2===6){
            
            sixSum+=dice1+dice2;
        
        
        
            console.log(sixSum);
            if (sixSum===12){
                scores[activePlayer]=0;
                document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
                roundScore=0;
                activePlayerf();
                sixSum=0;
                dice1=0
                dice2=0;
                
            } 
               
        } 
         
        

         if(dice1!==1 && dice2!==1 ){
            roundScore+=dice1+dice2;

            document.querySelector('#current-'+activePlayer).textContent=roundScore;

    
   
        } else 
    
    
    //Next player
            activePlayerf();
    

            
        }
   
    
    
    
    //document.querySelector('#current-'+activePlayer).innerHTML=roundScore;
        //console.log(scores);
      
            


});
//add score and pass it to next player when 'hold' button is clicked
document.querySelector('.btn-hold').addEventListener('click',()=>{
    if(gamePlaying){

    
        //Add current score to the global score
     scores[activePlayer]+=roundScore;
        //update UI
        document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
        //check if player won the game
        if (scores[activePlayer]>=document.querySelector('#your-score').value){
            document.querySelector('#name-'+activePlayer).textContent='Winner!';
            document.querySelector('.dice1').style.display='none';
            document.querySelector('.dice2').style.display='none';
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
    document.querySelector('#current-'+activePlayer).textContent='0';
    document.querySelector('#current-'+previousPlayer).textContent='0';
    roundScore=0;
    document.querySelector('.player-'+previousPlayer+'-panel').classList.toggle('active');
    document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active');
    document.querySelector('.dice1').style.display='none';
    document.querySelector('.dice2').style.display='none';

}
//start a new game when btn-new is selected
document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    sixSum=0;
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    gamePlaying=true;
    
    //also try innertext & textContent
    
    //initally disable the dice
    document.querySelector('.dice1').style.display='none';
    document.querySelector('.dice2').style.display='none';
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