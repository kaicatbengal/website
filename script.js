
const button = document.querySelector(".adder1button");
const counterLabel = document.getElementById("counter-label");
const upgradeButton1 = document.querySelector(".upgrade1");
const upgradeButton2 = document.querySelector(".upgrade2");
const upgradeButton3 = document.querySelector(".upgrade3")
const buyGenerator1 = document.querySelector(".buygenerator1")

let upgrade1cost = 50;
let upgrade2cost = 1000;
let upgrade3cost = 250000;
let buygenerator1cost = 200000;
let addValue = 1;
let counter = 0;

button.addEventListener("click", function() {
    counter = counter + addValue
});

upgradeButton1.addEventListener("click", function() {
    if (counter >= upgrade1cost) {  /* inside here is for what the button does */
        counter = counter - upgrade1cost
        addValue = addValue + 1
        button.textContent = `+ ${addValue}`
        upgrade1cost = upgrade1cost + 10
        upgradeButton1.textContent = `upgrade button (cost: ${upgrade1cost})`
    }
});

upgradeButton2.addEventListener("click", function() {
    if (counter >= upgrade2cost) {  /* inside here is for what the button does */
        counter = counter - upgrade2cost
        addValue = addValue + 100
        button.textContent = `+ ${addValue}`
        upgrade2cost = Math.round(upgrade2cost * 1.5)
        upgradeButton2.textContent = `upgrade button 2 (cost: ${upgrade2cost})`
    }
});

upgradeButton3.addEventListener("click", function() {
    if (counter >= upgrade3cost) {  /* inside here is for what the button does */
        counter = counter - upgrade3cost
        addValue = Math.round(addValue * 1.8)
        button.textContent = `+ ${addValue}`
        upgrade3cost = Math.round(upgrade3cost * 1.65)
        upgradeButton3.textContent = `upgrade button (cost: ${upgrade3cost})`
    }
});

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function generate1() {
    while (true) {
        await delay(250);
        counter = counter + 2500
        counterLabel.textContent = counter
    }
}

buyGenerator1.addEventListener("click", function() {
    if (counter >= buygenerator1cost) {  /* inside here is for what the button does */
        counter = counter - buygenerator1cost
        buyGenerator1.style.display = "none"
        generate1()
    }
});

function checkup() {
    if (counter >= 100000) {
        upgradeButton3.hidden = false;
    }
    counterLabel.textContent = counter
}

setInterval(checkup, 7)