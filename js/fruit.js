'use strict';
/* exported fruits createLi */

var fruits = [
    {
        img: 'images/apple.png',
        name: 'apple',
        origin: 'usa',
        color: 'green',
        season: 'fall',
        
        createLi: function() {
            var li = document.createElement('li');
            li.textContent = 'origin: ' + this.origin + ' peak season: ' + this.season;
            li.style.color = this.color;
            return li;
        },
        fruitImage: function () {
            var img = document.createElement('img');
            img.setAttribute('src' , this.image);
            return img;
        }    
    }
    // {
    //     img: 'images/cherry.png',
    //     name: 'cherry',
    //     origin: 'usa',
    //     color: 'green',
    //     season: 'summer',
        
    //     createLi: function() {
    //     var li = document.createElement('li');
    //     li.textContent = 'origin: ' + this.origin + ' peak season ' + this.season;
    //     return li;
    //     }
    // }
    // {
    //     img: 'images/grapes.png',
    //     name: 'grapes',
    //     origin: 'france',
    //     color: 'purple',
    //     season: 'spring',
        
    //     createLi: function() {
    //     var li = document.createElement('li');
    //     li.textContent = 'origin: ' + this.origin + ' peak season ' + this.season;
    //     return li; 
    //     }
    // },
    // {
    //     img: 'images/banana.png',
    //     name: 'banana',
    //     origin: 'brazil',
    //     color: 'yellow',
    //     season: 'summer',
        
    //     createLi: function() {
    //     var li = document.createElement('li');
    //     li.textContent = 'origin: ' + this.origin + ' peak season ' + this.season;
    //     return li;
    //     }
    // },  
];