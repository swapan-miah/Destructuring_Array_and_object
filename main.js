// let numbers = [10, 20, 30, 40, 50];
// var squareNumbers = numbers.map(function(x){
//     return x*x;
// })
// console.log(squareNumbers)


// let [num1, num2, num3, num4, num5] = numbers;

// console.log(num1);
// console.log(num2);


//  [num1, num2] = [num2, num1];
// console.log(num1);
// console.log(num2);

const students = [
    {
        id: 101,
        fullName : "Ismail Hossen Swapon",
        gpa: 3.92,
        
    },
    {
        id: 102,
        fullName : "Swapon",
        gpa: 4.5,
        
    },
    {
        id: 101,
        fullName : "Tushar",
        gpa: 5.0,
        
    }
]


// console.log(students);

// function students2 () {
//     students.filter(function(x) {
//       return  x.gpa > 3;
//     }).map(function (y) {
//       return  y.fullName
//     })
// }

const students2 = () => students.filter((x) =>  x.gpa > 3).map((y) =>  y.fullName);


console.log(students2())

//  console.log(students2);


// const {fullName , languages} = studentInfo;
// const {native , begin} = languages;

// console.log(languages.native);
// console.log(languages.begin);
// console.log(languages.native);
// console.log(native);
// console.log(studentInfo.fullName);
// console.log(fullName);