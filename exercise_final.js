/*Question 1: Clean the room function: given an input of 
[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into 
an individual array that is ordered. For example answer(ArrayFromAbove) should return: 
[[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392, 591]. 
Bonus: Make it so it organizes strings differently from number types. i.e.
[1, "2", "3", 2] should return [[1,2], ["2", "3"]].*/

//Solution:
//1. Create an array.
const room = [1,'2',4,591,392,391,2,5,10,2,'1',1,1,20,20];

function clean(arr) {
    const sortedArr = arr.sort(function(a , b){return a-b});
    const numberArr = [];
    const stringArr = [];
    sortedArr.forEach(element => {
        if (typeof(element) === 'number') {
            numberArr.push(element);
        }
        if (typeof(element) === 'string') {
            stringArr.push(element);
        }
    });
    const newArr = numberArr.concat(stringArr);
    console.log(newArr);
}

/*Question 2: Write a javascript function that takes an array of numbers and a target 
number. The function should find two different numbers in the array that, when added 
together, give the target number. For example: answer([1,2,3], 4)should return [1,3].*/

//Solution:
const newArray = [];

function findNumbers(array, target) {
    for (i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                newArray.push([array[i], array[j]])
                break;
            }
        }
    }
    console.log(newArray);
}

/*Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect 
the formats so that if you enter HEX color format it returns RGB and if you enter RGB color
 format it returns HEX.*/

 //Solution:

/*Hex to RGB function - this takes the string(format e.g. 'ff0000') "hex" from the testHex 
function. This parses the string argument and returns an integer converted from the radix of 16. 
Hex.slice extracts the required parts from the hexidecimal i.e., R extracts indices 0,1.*/
function hexToRGB(hex) {
    const hexReg = /^[0-9a-fA-F]+$/;

    if (hex.length !== 6 || !hexReg.test(hex)) {
        throw new error('Invalid hexadecimal values');
    }

    const R = parseInt(hex.slice(0,2), 16);
    const G = parseInt(hex.slice(2,4), 16);
    const B = parseInt(hex.slice(4,6), 16);

    return {R,G,B};
}
/*RGB to Hex function - RGBtoHex takes the integer inputs from testRGB/testFormat and runs
each input(r,g,b) throught the toHex function.
The toHex function takes the variable from RGBtoHex and creates a string in hex format (radix 16).
The return statement uses a ternary operator to check if the string legnth is equal to one.
If this is truthy it returns the expression with a zero added and if falsy it returns the original hex(should already be 2 digits).*/
function RGBtoHex(r,g,b) {
    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
        throw new error('Invalid RGB value');
    }

    return toHex(r) + toHex(g) + toHex(b);
}

function toHex(color) {
    let hex = color.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}

/*Test function - testFormat takes a max of 3 inputs that are required for RGB and a single input
for hexadecimal. These are tested using typeof and .lenght to ensure inputs are either numbers or a string.
The testHex function uses the regex for hexadecimal and tests this against the input from testFormat, if true then 
it runs hextoRGB function.
The testRGB function ensures any of the 3 inputs for RGB do not exceed the possible boundaries 0-255
and if not this runs the RGBtoHex function.*/

function testFormat(input, input2, input3) {
    if(typeof(input) === 'string') {
        return hexToRGB(input);
    } else if(typeof(input) === 'number') {
        return RGBtoHex(input,input2, input3);
    } else 
        throw new error('Invalid input');
}

//Test run
testFormat('fa7699');
testFormat(158,111,92);