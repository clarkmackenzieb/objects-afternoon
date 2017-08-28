// Create an object called user that has name, age, password properties and assign them appropriate values.

// Code Here
var user = {
    name: "Mackenzie",
    age: 22,
    password: 1234,

}


// Add an email and username, as well as a method called alertUser that alerts the users name, to your user object using dot notation.

// Code Here

user.email = "clarkmackenzieb@gmail.com";
user.username = "clarkmackenzieb";
user.alertUser = function(){
    alert(user.name);
};



// Now loop over your user object and alert each of the keys.

// Code Here

for(var prop in user){
    alert(prop);
}


// Now loop over your user object and alert each of the values for each key.

// Code Here

for(var prop in user){
    alert(user[prop]);
}


// Remove the username from your user object

// Code Here

delete user.username;


// Create an object called creditCard that has number, cvc, type, and limit properties and assign them appropriate values.

// Code Here

var creditCard = {
    number: 123456789,
    cvc: 123,
    type: "AmEx",
    limit: "none",
}

// Create a variable called alternating. Set it equal to the string bonusCategories.

// Code Here

var alternating = "bonusCategories";



/* Using bracket notation, add a bonusCategories key to your creditCard object using 'alternating'.
    Set it's value to an array of 3 items that are objects. 
    Each object should have one key value pair. 
    That key value pair should be the category as the key and the percent it's work for the bonus as the value.
    (e.g. Department Stores, 5%) 
    
    Using dot notation add another key to your object called 'bank' with the value being an object with 2 keys,
        the bank name, and the bank address.
    
    */

// Code Here

creditCard[alternating] = ["Gas", "Groceries","Amazon"];


// Write a function that will take your creditCard object and user object as arguments and combine them into one object. /* HINT: You will need a for..in loop */

// Code Here

function combineMe(user, creditCard){
    var userCard = {};

    for(var prop in user){
        userCard[prop] = user[prop];
    }

    for(var key in creditCard){
        userCard[key] = creditCard[key];
    }
    return userCard;
}

/*Below you are given an object. Write a function that will loop over the allies property, remove LittleFinger, and insert Dragon Lady.
    It will also change alive to 'More Than Ever'.
    Return the object. */

var obj = {
    user: 'Jon Snow',
    allies: ['That guy into Brienne', 'Ser Davos', 'LittleFinger'],
    alive: 'Sort of',
  };

  // Code Here
  
  function gameOfObjects(obj){
    for(var i = 0; i < obj.allies.length; i++){
           if(obj.allies[i] === "LittleFinger"){
             obj.allies[i] = "Dragon Lady";
           }
         }
       
     // console.log(prop)
     obj.alive = "More Than Ever";
     return obj;
   }
   

