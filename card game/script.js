cards = new Array(10);
for(let i = 0; i < cards.length; i++){
 cards[i] = new Array(3);
}
let values = 0;
let colour = 0;
for(let i = 0; i< 10; i++){
    for(let index = 0; index< 3; index++){
        values = i;
        colour = index;
        cards[i][index] = (colour + "" + values );
    }
}
console.log(cards);