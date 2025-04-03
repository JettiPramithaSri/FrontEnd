//functions
  function outerFunction() {
    let counter = 0;
    function innerFunction(){
      counter++;
      return counter;
    }
    return innerFunction;
  }
  const incrementcounter = outerFunction();
  console.log(incrementcounter());
  console.log(incrementcounter());
  console.log(incrementcounter());
  

//methods
let birds= {
  eats :"seeds"
};
let parrot={
  fly :"in sky"
};
parrot.__proto__=birds;
console.log(parrot.eats);
console.log(parrot.fly);


//
let family={
  together:true,
  alive(){
    console.log("They are happy and healthy");
  }
};
let siblings={
  fight:true,
  __proto__: family
};
let parents={
  __proto__: siblings
}
parents.alive();


//
var vehicle1={type:"car",colour:"black"};
var vehicle2={type:"bike",colour:"red"};
function invite(greeting1,greeting2){
  console.log(
    greeting1+" " +this.colour +" "+this.type+","+greeting2
  );
}
invite.apply(vehicle1,["Yes","This is my favourite car"]);
invite.call(vehicle2,"Yes","This is my first bike");

var inviteVehicle1=invite.bind(vehicle1);
var inviteVehicle2=invite.bind(vehicle2);
inviteVehicle1("WOW","This is sports car");
inviteVehicle2("WOW","This is sports bike");

