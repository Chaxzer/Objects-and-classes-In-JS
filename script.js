
// +++++++++++++++++++++++++++++++++++++++ this is to pring object as an entire string +++++++++++++++++++++++++++++++++++++++++++++++

// let obj = {
//   a: 1, b: 2, c: 3
// }; // this is an object

// let x = document.createElement("h1");
// x.id = ""; // x.setAttribute("id", "someID"); is another way to write it.
// x.innerHTML = JSON.stringify(obj) + `1s the number` ;
// document.body.appendChild(x);


//+++++++++++++++++++++++++++++++++ this is by using object.values to print all the values of the string +++++++++++++++++++++++++++++++++++++++++++++++

// let obj = {
//   a: 1, b: 2, c: 3
// }; // this is an object

// let valuesString = Object.values(obj).join(", ");
// let finalString = valuesString + " 1s the number";

// let x = document.createElement("h1");
// x.id = "babba"; 
// x.textContent = finalString;

// // Append the created element to the body
// document.body.appendChild(x);


//++++++++++++++++++++++++ this is how you can loop through the object to make your days hatd work even more harder lol +++++++++++++++++++++++
// let obj = {
//   a: 1, b: 2, c: 3
// }; // this is an object

// // create an empty string to store the object's contents
// let objString = "";

// // loop through the object and concatenate its key-value pairs into objString
// for (let key in obj) {
//   objString += key + ": " + obj[key] + ", ";
// }
// // Remove the trailing comma and space
// objString = objString.slice(0, -2);

// // Create a new h1 element
// let x = document.createElement("h1");
// x.id = "someID"; // replace "someID" with your desired ID
// x.innerHTML = objString + " HERE IS YOUR ELEMENT";

// // Append the created element to the body
// document.body.appendChild(x);

// +++++++++++++++++++++++++++++++++++ This prints the value of an object in a customised manner co that if u dont want one of the values to be printed you can just delete it from the object +++++++++++++++++++++++++++++++++++++++
let obj = { a: 1, b: 2, c: 3 };
let x = document.createElement("h1");
x.id = "OBJECT";
x.textContent = `${obj.a}, ${obj.b}, ${obj.c} is the number`;
document.body.appendChild(x);

//++++++++++++++++++++++++++++++++++ lets create a prototype ++++++++++++++++++++++++++++++++++

// // prototype is made to do prototypal inheritance
// let tools = {
//   act : "cut",
//   act2 : "fix",
//   res : "formation",
//   examples : [hammer, screwdriver, saw, drill, wrench, pliers, screw,]
// }
// let weapons = {

// Act : "cut",
// Act2 : "stab",
// res : "damage",
// examples :[sword, dagger, axe, spear, bow, gun, knife, shield, hammer],
//   meterial: "metal",
// }
// // prototype helps add additional properties to the code
// tools.prototype.material = "metal";// sets the material property to "metal"
// weapons._proto_ = tools; // sets weapons>[[prototype]] = tools

//++++++++++++++++++++++++++++++++++ lets create a class ++++++++++++++++++++++++++++++++++

// class is made to do classical inheritance
// class is a blueprint for creating objects

// class Tools {
//   constructor() {

//     let tools = { weapon: "axe", armor: "shield", toolset: "hammer" };
//     let t = document.createElement("h1");
//     t.id = "OBJECT";
//     t.textContent = `${tools.weapon}, ${tools.armor}, ${tools.toolset} is what a man need in war`;
//     document.body.appendChild(t);
//   }
// }

// let a = new Tools();


//a consrtuctor is a special method that is called when a new object is created
class Tools {
  constructor(hammer, shield) {
    this.hammer = hammer;
    console.log(shield)
  }

  displayHammer() {
    let h1 = document.createElement("h1");
    h1.innerHTML = `${this.hammer} has trishul`;
    document.body.appendChild(h1);
  }
}

let a = new Tools("shankar ji maharaj");
a.displayHammer();

//++++++++++++++++++++++++++++++++++ lets create ANOTHER class and link to first ++++++++++++++++++++++++++++++++++
class weapons extends Tools{

constructor(talwar){

  super(talwar)
  // is used if the constructor of the parent class is called and you want to use your own constructor 
  
  this.talwar = talwar;}

jagadamba(){
  
  let jagadamba = document.createElement("h1");
  jagadamba.innerHTML = `${this.talwar} is her weapon`;
  document.body.appendChild(jagadamba);
          }


 // //this is case of method overwriting

  
  displayHammer() {
    super.displayHammer()//you can  also call a perticular parent class constructor with super.parentObject()
    let h1 = document.createElement("h1");
    h1.innerHTML = `${this.hammer} has a trishul`;
    document.body.appendChild(h1);
  }
}

let b = new weapons(" mata rani ");
b.displayHammer();

let c = new weapons(" jagadamba");
c.jagadamba();
