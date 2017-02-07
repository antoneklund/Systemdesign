// js file


function burger(name, kcal, gluten, lactose){
    this.burgerName = name;
    this.burgerKcal = kcal;
    this.contGluten = gluten;
    this.contLactose = lactose;
    this.info = function(){
        return this.burgerName + ' ' + this.burgerKcal;
    };
}
