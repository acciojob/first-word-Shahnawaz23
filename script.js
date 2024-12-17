function firstWord(s) {
  // your code here
	str = str.trim();

    if (str === '') {
        return '';
    }

    const spaceIndex = str.indexOf(' ');

    if (spaceIndex === -1) {
        return str;
    }

    // Return the substring from the start to the first space
    return str.substring(0, spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
