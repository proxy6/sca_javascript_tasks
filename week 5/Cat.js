/**CLI Cat
 * Cat object with properties for tiredness, hunger, lonliness and happiness
 * call methods like "feed", "sleep", or "pet" to nourish the cat when it is low on any of the properties
 * provide arguements for the sleep, and feed function
 * arguements are in the form (more, less) example in feed(more, less) here where more means the amount of food given to the cat and less means the amount of food not given to the cat
 * sleep if tiredness is > 5
 * provide arguements for the sleep, and feed function
 */
let cat = {
name: "myCat",
tiredness: 5,
hunger: 5,
lonliness: 9,
happiness: 10,
//more for feeding cat and less for not feeding cat
feed: function(more, less){
let fed = this.hunger - more;
let notFed = this.hunger + less;
if(fed < notFed){
    cat.hunger = fed;
}
else{
    cat.hunger = notFed;
   
}
    
},
//more for letting catsleep  and less for not letting cat sleep
sleep: function(more, less){
let slept = this.tiredness - more;
let noSleep = this.tiredness + less;
if(slept < noSleep){
    cat.tiredness = slept;
 
}
else{
    cat.tiredness.noSleep;
  
}
},
//more for increased petting, less for minimal petting
pet: function(more, less){
   if(this.hunger>5 || this.tiredness > 5 && more>less){
    console.log(`${this.name}doesn't want to be petted, IT NEEDS FOOD AND SLEEP!!`)
   }
   if(this.lonliness < 5 || this.happiness > 4 && more<less){
    console.log(`meow!! ${this.name} is HAPPY!!`)
   }
   else{
       console.log(`grrrrrh ${this.name} is neither happy or unhappy`);
       
   }
},
status: function(){
    if(this.hunger > 5 && this.tiredness >5){
        console.log(`${this.name} is extremely hungry and a little tired`)
    }
    if(this.hunger<5 && this.happiness >5){
        console.log(`${this.name} is happy and not hungry`)
    }
    if(this.lonliness > 5 && this.tiredness > 5){
        console.log(`${this.name} needs to be petted and to sleep`)
    }
    if(this.happiness<5 && this.tiredness > 5) {
        console.log(`wheeew!! ${this.name} is tired and not happy `); 
    }
},
}

//uncomment this lines to perform the functions
//cat.feed(4,2);
//cat.sleep(2,4);
//cat.status();
//cat.pet(6,2);