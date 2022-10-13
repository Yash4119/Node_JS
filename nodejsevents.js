// console.log("Here we will be learing events in node js")

const eventEmitter = require("events");

class MyEmitter extends eventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("chargingFull", () => {
  console.log("Your Phone has been completely Charged");
  let ind=0;
  const myInterval = setInterval(myTimer, 1000);

  function myTimer() {
    console.log("Charging Done !!!")
    ind+=1;
    if(ind===10){
        clearInterval(myInterval);
    }
  }
//   setTimeout(() => {
//     console.log("Turn Off the charging!!!!!!");
//   }, 3000);
});

console.log("emitting the event");
myEmitter.emit("chargingFull");
console.log("The script is still running");
