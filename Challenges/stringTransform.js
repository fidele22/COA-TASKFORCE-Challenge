function transformString(input) {   // function called transformString with Input paramenter
    const length = input.length;

    if (length % 15 === 0) {
        // Reverse the string and replace each character with its ASCII code
        const reversed = input.split('').reverse().join('');
        return reversed.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        // Reverse the string
        return input.split('').reverse().join('');
    } else if (length % 5 === 0) {
        // Replace each character with its ASCII code
        return input.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
        // If none of the conditions are met, return the original string
        return input;
    }
}

// Example usage:
console.log(transformString("Hamburger")); // it will return reverse of string because the lenght of string is divisible by 3 ,output will be "regrubmaH"

console.log(transformString("Pizza")); //  it will return ASCII code of string ,Output: "80 105 122 122 97"

console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"













