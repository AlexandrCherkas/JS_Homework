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