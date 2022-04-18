//Hover, focused, versions of one theme color

const root = document.querySelector(`:root`);

const getColor = () => {
    const action1 = getComputedStyle(root);
    const action2 = action1.getPropertyValue("--primary-color");
    return action2;
}

//converting string to array
const value = "rgba(10, 132, 255, 1)";
const array = value.replace(/\s/g,'');

const array1 = Array.from(array);

//getting values from array
function filterArr(num) {
    return (num >= 0);
}

function getArr(arr, position) { 
    const action = arr[position];
    return action
}
const array2 = array1.filter(filterArr)
console.log(array2)
console.log(parseInt(array2))
//declaring values 
const first = getArr(array2, 0) + getArr(array2, 1);
const second = getArr(array2, 2) + getArr(array2, 3) + getArr(array2, 4);
const third = getArr(array2, 5) + getArr(array2, 6) + getArr(array2, 7);
const last = getArr(array2, 8);

console.log(first + second)
const mainColor = [first, second, third, last];
console.log(mainColor)

const createHover = () => {
const action1 = mainColor[0] + 20;
const action2 = mainColor[1] + 50;
return [action1, action2]
}

console.log(createHover())
console.log([20 + 30]);

// Manipulate Array
// const hoverValue = createHover();

// mainColor.shift();
// mainColor.shift();
// mainColor.unshift(hoverValue[1]);
// mainColor.unshift(hoverValue[0]);


