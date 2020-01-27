/*Gertrude Vanessa Ngono Essono
ngonoessono_a06b.js
INFO2124
Thoendel
01/25/2020*/



const standardInput = process.stdin;
standardInput.setEncoding('utf-8');

const story = 
    `You're walking along Dodge Street minding your own business
and your suddenly run into the Wizard of Benson standing
in on the corner of 50th and Dodge.

Do you (C)ontinue walking? (S)top and ask for some magical help?
(T)rip and fall into a pot hole?
`;

clearScreen();
console.log(story);

standardInput.on('data', function(text) {
    //This line will remove line breaks 
    //\n\r in window, \r in macOS
    text = text.replace('\n', '').replace('\r', '');
    /* WRITE YOUR SOLUTION BETWEEN THIS LINE */
    
    if(text ==="C"){
        clearScreen();
        console.log(`you non-challantly walk past the wizard of Benson with the smug 
        confidence of a person who don't need no stinkin'wizard, lest a 
        wizard of beNSon.`)
    }else if(text==="S") {
        clearScreen();
        console.log(`you walk up to the wizard, hands sweaty with anticipation. As
    you approach, you note the wizard is wearing a HAWkeyes hat. Your disappointment
    proves more powerful than your desire to engage a wizard and instead you 
    turn left to buy a nice, warm Runza.`)
    } else if(text==="T"){
        clearScreen();
        console.log(`You begin approaching the wizard, hands sweaty with anticipation,
    mouth dry with general dehydration. as you take one step forward, you place
    your entire weight upon the forward leg but your foot fails to make contact
    with solid ground. as the entirely of your uncontrolled body's weight continues
    forward and downward simultaneously your mind begins considering what
    precisely the $50,000 increase in your homes's assessment and matching tax 
    increase is paying for.`)
    }else {
        clearScreen();
        console.log(`The wizard watches as you approach. Determining you're not 
        cool enough to hang with him, the wizard smugly smiles and 
        walks into a vape shop. You blew your chance.`)
    }
    endGame();


    
    /* AND THIS LINE */
});

function endGame() {
    console.log("Game Over\n\n\n");
    process.exit();
}

function clearScreen() {
    console.log('\033[2J');
}