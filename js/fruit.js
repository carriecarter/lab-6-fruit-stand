
var fruits = [ 
    {
      apple = {
          img: 'apple.png',
          origin: 'usa',
          color: 'green',
          season: 'fall',
    createApple: function() {
        var li = document.createElement('li');
        li.textContent = 'origin: ' + this.origin + ' peak season: ' + this.season;
        return li;
    }
     },
      cherry = {
          img: 'cherry.png',
          origin: 'usa',
          color: 'green',
          season: 'summer',
    createCherry: function() {
        var li = document.createElement('li');
        li.textContent = 'origin: ' + this.origin + ' peak season ' + this.season;
        return li;
    }
     },
      grapes = {
          img: 'grapes.png',
          origin: 'france',
          color: 'purple',
          season: 'spring',
    createGrapes: function() {
        var li = document.createElement('li');
        li.textContent = 'origin: ' + this.origin + ' peak season ' + this.season;
        return li; 
    }
      },
      banana = {
          img: 'banana.png',
          origin: 'brazil',
          color: 'yellow',
          season: 'summer',
    createBanana: function() {
        var li = document.createElement('li');
        li.textContent = 'origin: ' + this.origin + ' peak season ' + this.season;
        return li;
    }
      },  
    }




]