/* export fruits */

var fruits = [
    {
        name: 'apple',
        img: 'apple.png',
        origin: 'usa',
        color: 'green',
        season: 'fall',
        
        createLi: function() {
        var li = document.createElement('li');
        li.textContent = 'origin: ' + this.origin + ' peak season: ' + this.season;
        return li;
        }
    },
    {
        name: 'cherry',
        img: 'cherry.png',
        origin: 'usa',
        color: 'green',
        season: 'summer',
        
        createLi: function() {
        var li = document.createElement('li');
        li.textContent = 'origin: ' + this.origin + ' peak season ' + this.season;
        return li;
        }
    },
    {
        name: 'grapes',
        img: 'grapes.png',
        origin: 'france',
        color: 'purple',
        season: 'spring',
        
        createLi: function() {
        var li = document.createElement('li');
        li.textContent = 'origin: ' + this.origin + ' peak season ' + this.season;
        return li; 
        }
    },
    {
        name: 'banana',
        img: 'banana.png',
        origin: 'brazil',
        color: 'yellow',
        season: 'summer',
        
        createLi: function() {
        var li = document.createElement('li');
        li.textContent = 'origin: ' + this.origin + ' peak season ' + this.season;
        return li;
        }
    },  
]