/*
  Your 3 Users will be the following.
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
};

//Create an Array called 'users' that will store all our instances of User.

  //code here
  var users = [
    user1 = {
      name: 'Tyler',
      email: 'tylermcginnis33@gmail.com',
      pw: 'iLoveJS'
    },
    user2 = {
      name: 'Cahlan',
      email: 'cahlan@devmountain.in',
      pw: 'iLoveHashtags'
    },
    user3 = {
      name: 'Lenny',
      email: 'lenny@theLenster.com',
      pw: 'iLoveLentilSoup'
    },
    user4 = {
      name: 'Tally',
      email: 'tallytoo@yahoo.com',
      pw: 'GetchaSome'
    }
  ];

//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

  //code here
 var user5 = new User('Talon', 'thismy@email.com', 'whyYouAsk');
 var user6 = new User('Skip', 'rednek900@yar.com', 'wutzThePass');
 var user7 = new User('Ray', 'errbodyluvsme@me.com', 'loveMePlz');

//Console.log all of Tylers information

console.log('Tyler\'s information is ' + user1.name + ' ' + user1.email + ' ' + user1.pw);


//Now console.log all of Lennys information

console.log('Lenny\'s information is ' + user2.name + ' ' + user2.email + ' ' + user2.pw);


//Now create another instance of User using your own information and then add that to your users array.

  //code here

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.

  //code here
function allUsers(){
  for(var i = 0; i < users.length; i++){
    console.log(users.name);
  }
}
