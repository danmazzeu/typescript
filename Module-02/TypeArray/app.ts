// Example 01 - Using Brackets:
let fruits = ['Pineapple', 'Orange', 'Apple', 'Watermelon', 'Mango'];
console.log(fruits[2]); // Output: Apple

// Example 02 - Array Object (Array Object):
let fruits1 = ['Pineapple', 'Orange', 'Apple', 'Watermelon', 'Mango'];
console.log(fruits1[3]); // Output: Watermelon

// Example 03 - Adding more strings with the 'push' method
let languages = ['Portuguese', 'English', 'Spanish', 'French'];
console.log(languages);

languages.push('Mandarin');
console.log(languages);

languages.push('Italian');
console.log(languages);

// Example 04 - Identifying array size - 'length' method
let languages1 = ['Portuguese', 'English', 'Spanish', 'French'];
console.log(languages1.length);

// Example 05 - Example of Array with Spread Operator
let numbersList = [0, 1, 2, 3, 4, 5];
numbersList = [...numbersList, 6, 7, 8, 9, 10];
console.log(numbersList);

// Example 06 - Example of Array with iteration loop
let languagesArray = new Array('JavaScript', 'Python', 'PHP', 'C#');
function languagesFunction(languages: any) {
    for (let i = 0; i < languages.length; i++) {
        console.log(languagesArray[i]);
    }
}
languagesFunction(languagesArray);