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
    this.src = function(){
        return this.imageSource;
    };
}

function printBurgers(){
    var a = new Item("Originalburgare",1337, true, false, "pics/Burgers-Max-Original.jpg");
    var b = new Item("Cheese'n'Bacon",2000, true, true, "pics/Burgers-GDL-Cheese-n-bacon.jpg");	
    var c = new Item("Hallomiburgare",400, false, false, "pics/Burgers-GDL-BBQ-Halloumi-2017.jpg");
    var arr = [a,b,c];
    var name = document.getElementById("name");
    var imageRow = document.getElementById("image");
    
    name.setAttribute("align", "left");
    var i = 0;
    for (i = 0; i<arr.length; i++){
        var th = document.createElement("th");
        var txt = document.createTextNode(arr[i].infoName());
        th.appendChild(txt);
        name.appendChild(th);

        var imageColumn = document.createNewElement("td");
        var image = document.createNewElement("img");
        image.setAttribute("src", arr[i].imageSource());
        image.setAttribute("title", arr[i].infoName());
        image.setAttribute("width", 250);
        imageColumn.appendChild(image);
        imageRow.appendChild(imageColumn);

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


