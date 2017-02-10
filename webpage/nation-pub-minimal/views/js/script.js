// js file


function Item(name, kcal, gluten, lactose, src){
    this.itemName = name;
    this.itemKcal = kcal;
    this.contGluten = gluten;
    this.contLactose = lactose;
    this.imageSource = src;
    this.infoName = function(){
        return this.itemName;
    }
    this.infoKcal = function(){
        return this.itemKcal;
    }
    this.source = function(){
        return this.imageSource;
    }
    this.infoGluten = function(){
        if (this.contGluten){
            return "Gluten"
        }else{
            return "Glutenfri"
        }
    }
    this.infoLactose = function(){
        if (this.contLactose){
            return "Laktos"
        }else{
            return "Laktosfri"
        }
    };
    
}

function printBurgers(){
    var a = new Item("Originalburgare",1337, true, false, "pics/Burgers-Max-Original.jpg");
    var b = new Item("Cheese'n'Bacon",2000, true, true, "pics/Burgers-GDL-Cheese-n-bacon.jpg");	
    var c = new Item("Hallomiburgare",400, false, false, "pics/Burgers-GDL-BBQ-Halloumi-2017.jpg");
    var burgers = [a,b,c];
    var name = document.getElementById("name");
    var imageRow = document.getElementById("images");
    var infoRow = document.getElementById("info");
    var boxesRow = document.getElementById("boxes");
    
    name.setAttribute("align", "left");
    var i = 0;
    for (i = 0; i<burgers.length; i++){
        var th = document.createElement("th");
        var txt = document.createTextNode(burgers[i].infoName());
        th.appendChild(txt);
        name.appendChild(th);

        var imageColumn = document.createElement("td");
        var image = document.createElement("img");
        image.setAttribute("src", burgers[i].source());
        //image.setAttribute("title", burgers[i].infoName());
        image.setAttribute("width", "250");
        imageColumn.appendChild(image);
        imageRow.appendChild(imageColumn);

        var infoColumn = document.createElement("td");
        var dl = document.createElement("dl");
        var dt = document.createElement("dt");
        var dd = document.createElement("dd");
        var ul = document.createElement("ul");
        var section = document.createElement("section");
        var liKcal = document.createElement("li");
        var liGlut = document.createElement("li");
        var liLact = document.createElement("li");
        var iKcal = document.createTextNode(burgers[i].infoKcal());
        var iGlut = document.createTextNode(burgers[i].infoGluten());
        var iLact = document.createTextNode(burgers[i].infoLactose());
        var inneh = document.createTextNode("Innehåll: ");
        section.setAttribute("class", "ingredients");
        liKcal.appendChild(iKcal);
        liGlut.appendChild(iGlut);
        liLact.appendChild(iLact);
        section.appendChild(liKcal);
        section.appendChild(liGlut);
        section.appendChild(liLact);
        ul.appendChild(section);
        dd.appendChild(ul);
        dt.appendChild(inneh);
        dt.appendChild(dd);
        dl.appendChild(dt);
        infoColumn.appendChild(dl);
        infoRow.appendChild(infoColumn);

        var boxesColumn = document.createElement("td");
        var input = document.createElement("input");
        var boxText = document.createTextNode("Klicka för att välja");
        input.setAttribute("type", "checkbox");
        input.setAttribute("name", "choices");
        input.setAttribute("value", burgers[i].infoName());
        boxesColumn.appendChild(input);
        boxesColumn.appendChild(boxText);
        boxesRow.appendChild(boxesColumn);
        
        
        
    }


}
function docLoaded(fn){
    if (document.readyState !== 'loading'){
        fn();
    }else{
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function indexPageLoaded(){
    printBurgers();
}


function gatherOrders(){
    //var orderButton = document.getElementById("order");
    var sodas = document.getElementById("val");
    var sodaOption = sodas.options[sodas.selectedIndex].text;
    var coffeeChoices = document.getElementsByName("option");
    var coffeeOption;
    var burgerChoices = document.getElementsByName("choices");
    var burgerOption = [];
    for (var i = 0; i<coffeeChoices.length; i++){
        if (coffeeChoices[i].checked){
            coffeeOption = coffeeChoices[i].value;
        }
    }
    for (var i = 0; i<burgerChoices.length; i++){
        if (burgerChoices[i].checked){
        //    burgerOption[i] = burgerChoices[i].value;
            console.log(burgerChoices[i].value);
        }
    }

    console.log(sodaOption);
    console.log(coffeeOption);
}

function gatherOrderss(){
}

function orderTrigger(){
    var orderButton = document.getElementById("order");
    orderButton.addEventListener("click", gatherOrders());
}
