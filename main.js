function pizza(getSize, getQuantity, getCrust, getTopping, getType) {
    this.getSize = getSize;
    this.getQuantity = getQuantity;
    this.getCrust = getCrust;
    this.getTopping = getTopping;
    this.getType = getType;
}
var userInput = new Order(getSize(), getQuantity(), getCrust(), getTopping());

function getSize() {
    var size = document.getElementById("sizePizza").value;
    return parseInt(size);
}

function getQuantity() {
    var number = document.getElementById("quantityPizza").value;
    return parseInt(number);
}

function getCrust() {
    var crust = document.getElementById("pizzaCrust").value;
    return parseInt(crust);
}

function getTopping() {
    var topping = document.getElementById("pizzaTopping").value;
    return parseInt(topping);
}

function getType() {
    var type = document.getElementById("pizzaFlavour").value;
}

function totalAmount() {
    var total = (getSize() + getCrust() + getTopping()) * getQuantity();
    alert(
        "You have ordered " +
        getQuantity("") +
        " pizza" +
        "" +
        " amounting to ksh. " +
        total +
        "" +
        " We appreciate your ordering with us"
    );


    var delivery = prompt("would you like your pizza delivered.Only costs an additional ksh 200.If you do not want it delivered then cancel.");
    if (delivery !== "") {
        alert("Your pizza will be delivered shortly.");
    }
    if (delivery === "") {
        alert("Your pizza awaits you")
    }
}