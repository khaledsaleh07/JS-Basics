
const stringSize = (text) => {
    return(text.length);
}
const replaceCharacterE = (text) => {
    idx = text.indexOf('e');
    text = text.slice(0, idx) + " " + text.slice(idx + 1);
    return text;
}
const concatString = (text1, text2) => {
    return text1 + text2;
}
const showChar5 = (text) => {
    return text[4];
}
const showChar9 = (text) => {
    return text.slice(0, 9);
}
const toCapitals = (text) => {
    return text.toUpperCase();
}
const toLowerCase = (text) => {
    return text.toLowerCase();
}
const removeSpaces = (text) => {
    return text.trim();
}
const IsString = (text) => {
    if (typeof(text) === typeof("aaa")) {
        return true;
    }
    return false;
}

const getExtension = (text) => {
    return text.split(".")[1];
}
const countSpaces = (text) => {
    let spaceCount = 0;
  
    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
        spaceCount++;
        }
  }
return spaceCount;
}

const InverseString = (text) => {
    const reversedString = text.split('').reverse().join('');
    return reversedString;
}

const power = (x, y) => {
    return x ** y;
}
const absoluteValue = (num) => {
    return Math.abs(num);
}
const absoluteValueArray = (array) => {
    for ( let i = 0; i < array.length; i++) {
        array[i] = Math.abs(array[i]);
    }
    return array;
}
const circleSurface = (radius) => {
    return Math.round(Math.PI * radius * radius);
}
const hypothenuse = (ab, ac) => {
    return Math.sqrt(ab*ab + ac*ac);
}
const BMI = (weight, height) => {
    return Math.round((weight / (height * height)) * 100) / 100;
}

const createLanguagesArray = () => {
    return ["Html","CSS","Java","PHP"];
}

const createNumbersArray = () => {
    return [0, 1, 2, 3, 4, 5];
}

const replaceElement = (languages) => {
    languages[2] = "Javascript";
    return languages;
}

const addElement = (languages) => {
    languages.push("Ruby", "Python");
    return languages;
}

const addNumberElement = (numbers) => {
    numbers.unshift(-2, -1);
    return numbers;
}

const removeFirst = (languages) => {
    languages.shift();
    return languages;
}

const removeLast = (languages) => {
    languages.pop();
    return languages;
}

const convertStrToArr = (social_arr) => {
    const tableau = social_arr.split(",");
    return tableau;
}

const convertArrToStr = (languages) => {
    const str = languages.join();
    return str;
}

const sortArr = (social_arr) => {
    social_arr.sort();
    return social_arr;
}

const invertArr = (social_arr) => {
    social_arr.reverse();
    return social_arr;
}