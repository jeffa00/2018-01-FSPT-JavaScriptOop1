var Person = function Person(firstName, lastName){
    // This is the equivalent of what happens with a constructor.
    // var that = {};
    // that.firstName = firstName;
    // that.lastname = lastName;

    // return that;

    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function(greeting){
        return greeting + " " + this.firstName + " " + this.lastname;
    };
};

var person1 = new Person("Jeff", "Ammons");

console.log(person1);

var people = [];

for(var i=0; i<100; i++){
    people.push(new Person("Jeff", i));
}

console.log(people);