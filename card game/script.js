let Create_2D_Array = function(){
    cards = new Array(10);                          // creates original array
    for(let i = 0; i < cards.length; i++){
     cards[i] = new Array(3);                       // creates the second dimension of the array by making each element an array
    }
    for(let i = 0; i< 10; i++){                     
        for(let index = 0; index< 3; index++){      // embedded for loop to fill the array
            cards[i][index] = (index + "" + i );
        }
    }
    console.log(cards);                             // print array to console to check it works
}
Create_2D_Array();                                  // call the function



//Development
//Creating 2d array
//Created a 2d array by having each element in the array be an array.
//Then added a string to each element which was a number indicating the value and a number indicating the colour by using an embedded for loop.
//
//At first i tried to store the values at integers but struggled to have two separate integers for one element so changed it to strings.
