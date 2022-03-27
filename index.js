var age = prompt("Enter your age :");
age = parseInt(age);
if(age == 1){
    console.log(age + " When age is 0 to 1 Year call them Infants.");
}else if (age > 1 && age<=3){
    console.log(age + " When age is 1 to 2 Years call them Toddlers.");
}else if (age > 3 && age<=5 ){
    console.log(age + " When age is 3 to 5 Years call them Preschoolers.");
}else if (age >= 6 && age<=9 ){
    console.log(age + " When age is 6 to 9 Years call them Middle Childhood.");
}else if (age >= 10 && age<= 19 ){
    console.log(age + " When age is 10 to 19 Years call them denarian.");
}else if (age >= 20 && age<= 29 ){
    console.log(age + " When age is 20 to 29 Years call them vicenarian.");
}else if (age >= 30 && age<= 39 ){
    console.log(age + " When age is 30 to 39 Years call them tricenarian.");
}else if (age >= 40 && age<= 49 ){
    console.log(age + " When age is 40 to 49 Years call them quadragenarian.");
}else if (age >= 50 && age<= 59 ){
    console.log(age + " When age is 50 to 59 Years call them quinquagenarian.");
}else if (age >= 60 && age<= 69 ){
    console.log(age + " When age is 60 to 69 Years call them sexagenarian.");
}else if (age >= 70 && age<= 79 ){
    console.log(age + " When age is 70 to 79 Years call them septuagenarian.");
}else if (age >= 80 && age<= 89 ){
    console.log(age + " When age is 80 to 89 Years call them octogenarian.");
}else if (age >= 90 && age<= 99 ){
    console.log(age + " When age is 90 to 99 Years call them nonagenarian.");
}else if (age >= 100 && age<= 109 ){
    console.log(age + " When age is 100 to 109 Years call them centenarian.");
}else if (age >= 110 && age<= 150 ){
    console.log(age + " When age is 110+ Years call them Super centenarian.");
}else{
    console.log(" Invalid Input!");
}