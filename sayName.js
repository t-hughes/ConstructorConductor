//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
function Person(name, age) {
  this.name = name;
  this.age = age;
}

//Now create three instances of Person with data you make up

  //code here
  var me = new Person('Talon', 26);
  var myself = new Person('Tal', 26);
  var andI = new Person('Tally', 26);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
var sayName = function(){
  alert(this.name);
};

Person.prototype.sayName = sayName;
