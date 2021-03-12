let shuffle = function(){  
    shuffled = new Array(30);                     
    let colour, num, value, different, i;                             
    different = true;                               //boolean to check wether the random number generated is
    i = 0;                                          
    colour = Math.floor(Math.random() * 3);           
    num = Math.floor(Math.random() * 10);
    shuffled[0] = (colour + "" + num);               // gives shuffled array a start value for the first pass through to avoid errors
    while(i < 30){                                  // while loop to make sure it completes this process 30 times
        different = true;                           //reset boolean to true by default to make sure a new number can be identified as new
        colour = Math.floor(Math.random() * 3);       
        num = Math.floor(Math.random() * 10);
        value = (colour + "" + num);                
        for(let index = 0; index< 30; index++){
            if(value === shuffled[index]){           // check to see if number has been used before
                different = false;                  // different set to false to indetify that this is not a new number so don't add it to array
            }
        }
        if(different === true){
            shuffled[i] = value;                    // if different is still true then it must be a new number so add it to the shuffled array
            i++;                                    // add 1 to i so that a new combination is found and added 30 times
        }              
    }
    return shuffled;                                // so the array can be accessed globally
    
}
 

let card1 = document.querySelector('.card1');
let num1 = document.querySelector('.num1');
let card2 = document.querySelector('.card2');
let num2 = document.querySelector('.num2');
let button = document.querySelector('.cardbtn');

let cards = shuffle();
console.log(cards);
//let value = cards[0];
//let colour = value.charAt(0);
//let number = value.charAt(1);
//card.src = 'images/' + colour + '.jpg';
//num.src = 'images/num_' + number + '.png';

let i = 0;
document.querySelector('.cardbtn').addEventListener('click', function (){
    let value1 = cards[i];
    let colour1 = value1.charAt(0);
    let number1 = value1.charAt(1);
    let value2 = cards[i+1];
    let colour2 = value2.charAt(0);
    let number2 = value2.charAt(1);
    card1.src = 'images/' + colour1 + '.jpg';
    num1.src = 'images/num_' + number1 + '.png'; 
    card2.src = 'images/' + colour2 + '.jpg';
    num2.src = 'images/num_' + number2 + '.png';
    if(colour1 == colour2){
        if(number1 > number2){
            pl1Win(i);
        } else {
            pl2Win(i);
        }
    } else {
        if(colour1 == 0){
            if(colour2==2){
                pl1Win(i);
            } else {
                pl2Win(i);
            }
        } 
        if(colour1 == 1){
            if(colour2 == 0){
                pl1Win(i);
            } else {
                pl2Win(i);
            }
        }
        if(colour1 == 2){
            if(colour2 == 1){
                pl1Win(i);
            } else {
                pl2Win(i);
            }
        }
    }
    if(i>=28){
        button.disabled = true;
        console.log(pl1Cards);
        console.log(pl2Cards);
        if(pl1Cards.length > pl2Cards.length){
            console.log("player 1 has won");
        } else {
            console.log("player 2 has won");
        }
    }
    i = i+2;    
})
let pl1Cards = [];
let pl1Win = function(index){
    console.log("player 1 wins");
    let card1 = (cards[index]);
    let card2 = (cards[index+1]);
    pl1Cards.push(card1);
    pl1Cards.push(card2);
}
let pl2Cards = [];
let pl2Win = function(index){
    console.log("player 2 wins");
    let card1 = (cards[index]);
    let card2 = (cards[index+1]);
    pl2Cards.push(card1);
    pl2Cards.push(card2);
}
            // 0 = black    1=red   2=yellow
/*var card = document.querySelector('.card');
card.style.display = 'block';
card.src = 'image/0.jpg';*/
/*button.addEventListener("click", function (){


    
});*/

                               
//shuffle();                                          // call the functions



/*var diceDOM2 = document.querySelector('.dice2');
diceDOM2.style.display = 'block';
diceDOM2.src = 'dice-' + dice2 + '.png';*/
               

//Development
//Creating 2d array
//Created a 2d array by having each element in the array be an array.
//Then added a string to each element which was a number indicating the value and a number indicating the colour by using an embedded for loop.
//
//At first i tried to store the values at integers but struggled to have two separate integers for one element so changed it to strings.
//realised i didn't need this so got rid of it



//Shuffling cards
//missing line 10
