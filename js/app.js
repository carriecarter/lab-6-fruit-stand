'use-strict';
/* globals fruits */

function allFruits() {
    var fruits = document.getElementById("fruit-list");
    for(var i = 0; i < fruits.length; i++){
        var li = fruits[i].createLi();
        list.appendChild(li);
        
    }
}

// function fruitStand() {
//     var firstFruit = fruits[0];
//     var fruitList = document.getElementById("fruit-list");
    
//     fruitList.appendChild(createLi());
    
//     //fruitList.appendChild(fruitStand.createLi());
//     console.log('cat' , fruits[0].createLi());
// }

allFruits();
