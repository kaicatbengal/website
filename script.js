
const button = document.querySelector(".adder1button");
const counterLabel = document.getElementById("counter-label");
const upgradeButton1 = document.querySelector(".upgrade1");
const upgradeButton2 = document.querySelector(".upgrade2");
const upgradeButton3 = document.querySelector(".upgrade3")
const buyGenerator1 = document.querySelector(".buygenerator1")
const powerlabel = document.querySelector("#power-label")
const ps1 = document.querySelector(".ps1")

let upgrade1cost = 50;
let upgrade2cost = 1000;
let upgrade3cost = 250000;
let buygenerator1cost = 200000;
let addValue = 1;
let counter = 0;
let power = 0;
let powersupplys = [
    ["old", 10, 1, 1000],
    ["normal", 30, 0, 2500],
    ["average", 45, 5000],
    ["slightly-good", 55, 0, 7000],
    ["good", 70, 0, 12000],
    ["better", 110, 0, 15000],
    ["very-good", 230, 0, 20000],
    ["extremely-good", 360, 0, 50000],
]

button.addEventListener("click", function() {
    counter = counter + addValue
    if (power - ((addValue / 3).toFixed(1)) >= 0) {
        power = power - (addValue / 3).toFixed(1);
    }
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
    }
}

buyGenerator1.addEventListener("click", function() {
    if (counter >= buygenerator1cost) {  /* inside here is for what the button does */
        counter = counter - buygenerator1cost
        buyGenerator1.style.display = "none"
        generate1()
    }
});
ps1amountleft = powersupplys[0][2]
ps1.textContent = `buy ${powersupplys[0][0]} power supply for $${powersupplys[0][3]}`
ps1.addEventListener("click", function() {
    if (counter >= powersupplys[0][3]) {  /* inside here is for what the button does */
        counter = counter - powersupplys[0][3]
        powersupplys[0][2] = powersupplys[0][2] + 1
        ps1amountleft = ps1amountleft + 1
    }
});

function poweriter1() {
    setInterval(() => {
        power = power + powersupplys[0][1]
    }, 1000)
}
setInterval(() => {
    for (let i = 0; i < ps1amountleft; i++) {
        ps1amountleft--
        poweriter1()
    }
}, 0);
let enoughpowerforcounterdisplay = false
setInterval(() => {
    if ((power - 0.1) >= 0) {
        enoughpowerforcounterdisplay = true;
        power = parseFloat((power - 0.1));
        console.log(power)
    } else {
        console.log(enoughpowerforcounterdisplay)
        enoughpowerforcounterdisplay = false
    }
}, 100);

function checkup() {
    if (counter >= 100000) {
        upgradeButton3.hidden = false;
    }
    if (enoughpowerforcounterdisplay) {
       counterLabel.textContent = `$${counter}`
    } else {
    counterLabel.textContent = ""
    }
    if (power - ((addValue / 3).toFixed(1)) >= 0) {
        button.textContent = `+ ${addValue}`
    }
    powerlabel.textContent = `${power.toFixed(1)} power`
    console.log(typeof power,  power)
    power = Math.round(power * 10) / 10
}

setInterval(checkup, 10)

