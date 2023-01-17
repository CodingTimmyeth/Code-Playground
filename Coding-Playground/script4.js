// // const myBoolean = true;
// // const myString = 'Hello World';
// // const firstNumber = 20;
// // let secondNumber = 40;
// // secondNumber = 80;
// // let myArray = [myBoolean, myString];
// // const myObject = {
// //     firstProperty: myArray,
// //     sumProperty: firstNumber + secondNumber
// // }
// // // console.log(myObject)
// // // console.log(myObject.firstProperty[1])

// // let someNumber = 20;
// // someNumber = 50;
// // // console.log(someNumber)
// // // Mistakes
// // // 1st - you cannot have a space in between 'some Number' when naming a variable
// // // 2nd - you cannot reassign a value when it is in const use let
// // // 3rd - you have to add a semicolon when ending your line of code

// // const variable1 = 20;
// // const variable2 = '40';
// // const resultVariable = variable1 + variable2;
// // // console.log(resultVariable);

// // const objectValue = {
// //     property1: 'i am property 1',
// //     property2: 'i am property 2',
// //     property3: [20,30,40]
// // };
// // // console.log(objectValue.property3[0])
// // // The code is supposed to have a comma when going to add a new object-type not a semicolon

// // const myArray1 = [20,30,40];
// // // console.log(myArray1[0]);
// // // This code does not a 3th index. It only has indexs 0, 1, 2.

// let numberVariable = 0;
// numberVariable++;
// numberVariable++;
// numberVariable++;

// // console.log(numberVariable)
// // const had to be let to reassign the value
// // the output will be "3" since it was incremented 3 times

// const expression1 = 100 % 50;
// const expression2 = 100 / 50;
// const expression3 = expression1 < expression2;
// const expression4 = expression3 && 300 + 5 === 305;
// const expression5 = !expression4;

// // console.log(expression5)

// // const expression = !((100 % 50 < 100 / 5) || (305 === 305))
// // console.log(expression)


// const myObj = {
//     prop1: 'first value',
//     prop2: 20
// };

// const myArray = [40, 50, 2]

// const result = myObj.prop2 === (myArray[0] / myArray[2]);
// // console.log(result)

// // Output should be "TRUE"

// const myObj2 = {
//     nestedObject1: {
//         price: 100, 
//         quantity: 5
//     },
//     nestedObject2: {
//         price: 150,
//         quantity: 2
//     }
// };
// const myArray1 = [myObj2.nestedObject1, myObj2.nestedObject2];

// const result1 = 
//     (myArray1[0].price * myArray[0].quantity) > (myArray[1].price * myArray[1].quantity)

//     // result evalutes to "TRUE"