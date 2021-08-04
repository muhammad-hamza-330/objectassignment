//1. Suppose You have an array of object
// var itemsArray = [
// {name:”lassi”,price:”50”, quantity:”3”},
// {name:”cookie”,price:”30”, quantity:”9”},
// {name:”shirt”,price:”880”, quantity:”1”},
// {name:”pen”,price:”100”, quantity:”2”}];
// Calculate total price of each item and all items;
// answer
// var arr=[{
//     name: "lassi",
//     price: "50",
//     quantity: "3"
// },{
//     name: "cookie",
//     price: "30",
//     quantity: "9"
// },{ 
//     name: "Tshirt",
//     price: "880",
//     quantity: "1"
// },{
//     name: "pen",
//     price: "100",
//     quantity: "2"
// }

// ]
// var total=0;
// for(var i=0; i<arr.length; i++){
//     var price=arr[i].quantity*arr[i].price;

//     document.write("<h1>"+"price of each item: "+arr[i].name+":"+price+"</h1> ")

//     total +=price

// }
// document.write("<h1>"+"total price :"+total+"</h1>");
// // 2. Create an object with properties name, email, password, age,
// gender, city, country.
// Check if age and country properties exist in object or not.
// Also check firstName and lastName properties in object.
//question 2
// var obj={
//     name: "Muhammad hamza",
//     email: "m.hamza.trl@gmail.com",
//     password: "hamza@123",
//     age: 21,
//     gender: "male",
//     city: "karachi",
//     country: "pakistani",
// }
// document.write('country' in obj);
// document.write('firstName' in obj);
// document.write('lastName' in obj);
// //3. Create a constructor function with some properties. Now
// create multiple records using the constructor.
// question 3
// function Student(name,rollNo,batch,courseName){
//         this.name=name;
//         this.rollNo=rollNo;
//         this.batch=batch;
//         this.courseName=courseName;
//     }
//     var bilal= new Student("bilal",2344,7,"web n app");
//     var aqeel = new Student("Aqeel",2234,7,"web n app");
//     var hamza = new Student("Hamza",2422,7,"web n app");
//  Task 4

function Area(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    // this.education = education;
    this.profession = profession;
}

function myfun() {
    var personName = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    // var education = document.getElementById("education").value;
    var profession = document.getElementById("profession").value;


    var gender1 = document.getElementById("male");
    var gender2 = document.getElementById("female");
    var a = ""
    if (gender1.checked) {
        a = "male";
    } else if (gender2.checked) {
        a = "female";
    }

    var myArea = new Area(personName, a, address, profession);
    console.log(myArea);
}
