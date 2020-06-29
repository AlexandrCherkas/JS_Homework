function Animal(name) {
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }

    this.dailyNorm = function(amount) {
        if (foodAmount > 50 && foodAmount < 500) return formatFoodAmount();
        if(foodAmount < 50 || foodAmount > 500) {
            alert('Ошибка! Пушистый недоел или переел!')
        }
        foodAmount = amount;
    };

    this.name = name;
    this.feed = function() {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма');
    };

    var self = this;
    this.animalFeed = function () {
        return self.feed();
    };
}

function Cat(name) {
    Animal.apply(this, arguments);

    var chain = this;

    chain.feed = function() {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.' + '\r\n' + 'Пушистый доволен ^_^');
        return chain;
    };

    chain.stroke = function () {
        console.log('Гладим кота.');
        return chain;
    };
}

var catname = new Cat ('Барсик');
catname.stroke().feed().feed();

console.log(catname .name);

console.log(catname.dailyNorm(600));
console.log(catname.animalFeed());

catname = null;