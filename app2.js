var myObj = {
    firstName: "Jeff",
    lastname: "Ammons",
    getFullName: function(greeting){
        return greeting + " " + this.firstName + " " + this.lastname;
    }
};


console.log(myObj.getFullName("Hello"));
console.log(myObj.getFullName("Howdy"));
console.log(myObj.getFullName("Greetings"));
console.log(myObj.getFullName("What is it that is up"));
