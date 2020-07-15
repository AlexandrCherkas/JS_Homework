function Animal(name) {
    this.name = name;
    var foodAmount = 50;
    var self = this;

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }

    this.dailyNorm = function (amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 50 || amount > 500) {
            return 'Пушисты. Переел или не поел';
        }
        foodAmount = amount;
    };

    self.feed = function () {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };
}
function Cat(name) {
    Animal.apply(this, arguments);
    var animalFeed = this.feed;
    this.feed = function() {
        animalFeed();
        console.log('Пушистый доволен ^_^');
        return this;
    };

    this.stroke = function () {
        console.log('Гладим пушистика');
        return this;
    };
}


function Animal(name) {
    this._name = name;
    this._foodAmount = 50;
}

Animal.prototype._formatFoodAmount = function() {
    return this._foodAmount + ' гр.';
}

Animal.prototype.dailyNorm = function (amount) {
    if (!arguments.length) return this._formatFoodAmount();
    if (amount < 50 || amount > 500) {
        return 'Пушисты. Переел или не поел';
    }
    this.foodAmount = amount;
};

Animal.prototype.feed = function () {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
}
function Cat(name) {
    Animal.apply(this, arguments);
    // this.animalFeed = this.feed;
}
Cat.prototype.feed = function() {

    console.log('Пушистый доволен ^_^');
    return this;
}

Cat.prototype.stroke = function () {
    console.log('Гладим пушистика');
    return this;
}
var cat = new Animal('Per');
console.log(cat);
cat.dailyNorm(600);
cat.feed();