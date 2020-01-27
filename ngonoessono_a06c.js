
/*Gertrude Vanessa Ngono Essono
ngonoessono_a06b.js
INFO2124
Thoendel
01/25/2020*/

//winning numbers: 22, 42, 43, 47, 61;

let lottoPicks = [];
let powerBallPick = getLottoNumber(); 
let winnings = 0; 

/* WRITE YOUR SOLUTION BETWEEN THIS LINE */
let n = 0;
    while(n < 5){
        lottoPicks.push(powerBallPick);
        n++
  
    }
    for(let i = 0; i<lottoPicks.length; i++){
    
    switch(i){
        case 22: 
        console.log(`Matched 22`)
        winnings= winnings + 10;
        break;
        case 42: 
        console.log(`Matched 42`)
        winnings= winnings + 10;
        break;
        case 43: 
        console.log(`Matched 43`)
        winnings= winnings + 10;
        break;
        case 47: 
        console.log(`Matched 47`)
        winnings= winnings + 10;
        break;
        case 61: 
        console.log(`Matched 61`)
        winnings= winnings + 10;
        break;
        case powerBallPick: 
        console.log(`Matched poerBallPick`)
        winnings= winnings + 100;
    }
 
    } 
    
    if(winnings!== 0) {
        console.log(`congratulations! you won ${winnings}`)
    }  else {
        console.log(`sorry you did not win anything. Better Luck next time!`);
    }       
      
  
    
  
/* AND THIS LINE */

function getLottoNumber() {
    //returns a random number between 1 and 100;
    const min = Math.ceil(1);       //Minimum value;
    const max = Math.floor(100);    //Maximum value;
    return Math.floor(Math.random() * (max - min)) + min;
}