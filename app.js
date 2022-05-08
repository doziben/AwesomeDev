//Hover, focused, versions of one theme color

const root = document.querySelector(`:root`);

const getColor = () => {
    const action1 = getComputedStyle(root);
    const action2 = action1.getPropertyValue("--primary-color");
    return action2;
}

//converting string to array
const value = getColor();
const array = value.replace(/\s/g,'');

const array1 = Array.from(array);

//getting values from array
function filterArr(num) {
    return (num >= 0);
}

function getArr(arr, position) { 
    const action = (arr[position]);
    return action
}

const array2 = array1.filter(filterArr)
console.log(array2)
console.log()

//declaring values 
const first = parseInt(getArr(array2, 0) + getArr(array2, 1));
const second = parseInt(getArr(array2, 2) + getArr(array2, 3) + getArr(array2, 4));
const third = parseInt(getArr(array2, 5) + getArr(array2, 6) + getArr(array2, 7));
const last = parseInt(getArr(array2, 8));


const mainColor = [first, second, third, last];
console.log(mainColor)


//creating hover
const createHover = () => {
const action1 = mainColor[0] + 20;
const action2 = mainColor[1] + 50;
return [action1, action2]
}

//manipulate Array
function newHover(e) {
    const hoverValue = createHover();
        e.shift();
        e.shift();
        e.unshift(hoverValue[1]);
        e.unshift(hoverValue[0]);
    return (e);
}

//Passing back to CSS file
const primaryHover = newHover(mainColor)
document.body.style  = `--primary-hover: rgba(${primaryHover});`;

getColor()


// Open Nav

let mobileMenu = document.querySelector('#openNav');
let navBar = document.querySelector('nav');

const openNav = () => {
    if(navBar.style.display = "none"){
        navBar.style.display = "block"
    }
    else if (navBar.style.display = "block") {
        navBar.style.display = "none"
    }
}


mobileMenu.addEventListener('click', ()=> {openNav()})