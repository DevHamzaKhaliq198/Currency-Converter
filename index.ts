import inquirer from "inquirer";
let converter={
    "PKR":{
        "PKR":1,
        "USD":0.0036,
        "Eur":0.033,
        "INR":0.30
    },
    "USD":{
        "PKR":279.57,
        "USD":1,
        "Eur":0.93,
        "INR":82.99
    },
    "Eur":{
        "PKR":300.86,
        "USD":1.08,
        "Eur":1,
        "INR":89.31
    },
    "INR":{
        "PKR":3.37,
        "USD":0.012,
        "Eur":0.011,
        "INR":1
    }
}
const answer:{to:"PKR"|"USD"|"Eur"|"INR",from:"PKR"|"USD"|"Eur"|"INR",Amount:number}=await inquirer.prompt([
    {
        name:"from",
        type:"list",
        choices:["PKR","INR","USD","Eur"],
        message:"Select your currency"
    },
    {
        name:"to",
        type:"list",
        choices:["PKR","INR","USD","Eur"],
        message:"currency in which you want to convert"
    },
    {
        name:"Amount",
        type:"number",
        message:"Enter your amount"
    }
])
const {from,to,Amount}=answer;
if(from&&to&&Amount){
let conversion=converter[from][to]*Amount;
console.log(``);
console.log(`${Amount} ${from} = ${conversion}  ${to}`);

}