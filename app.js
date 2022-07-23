const screen = document.querySelector('.calc');

const num0 = document.querySelector('.num-0');
const num1 = document.querySelector('.num-1');
const num2 = document.querySelector('.num-2');
const num3 = document.querySelector('.num-3');
const num4 = document.querySelector('.num-4');
const num5 = document.querySelector('.num-5');
const num6 = document.querySelector('.num-6');
const num7 = document.querySelector('.num-7');
const num8 = document.querySelector('.num-8');
const num9 = document.querySelector('.num-9');

const symAc = document.querySelector('.sym-ac');
const symPm = document.querySelector('.sym-pm');
const symPer = document.querySelector('.sym-per');
const symDiv = document.querySelector('.sym-div');
const symMul = document.querySelector('.sym-mul');
const symMin = document.querySelector('.sym-min');
const symSum = document.querySelector('.sym-sum');
const symDot = document.querySelector('.sym-dot');
const symEq = document.querySelector('.sym-eq');


const nums = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9];

let str = "";

symAc.addEventListener('click', () => {
    screen.innerText = '0';
    str = "";
})

const Solve = () => {

    // console.log(str);
    // console.log(str.indexOf("++"));

    if (str.indexOf("++") !== -1) {
        str = str.replace("++", "+");
    }
    if (str.indexOf("--") !== -1) {
        str = str.replace("--", "+");
    }
    if (str.indexOf("+-") !== -1) {
        str = str.replace("+-", "-");
    }
    if (str.indexOf("-+") !== -1) {
        str = str.replace("-+", "-");
    }
    try {
        if (str.endsWith('=')) {
            return eval(str.replace('=', ''));
        } else {
            return screen.innerText;
        }
    }
    catch (e) {
        return "ERROR";
    }

}

for (const num of nums) {
    num.addEventListener('click', () => {
        if (screen.innerText === '0') {
            screen.innerText = '';
        }
        str += num.innerText;
        screen.innerText += num.innerText;
    })
}

const syms = [symPm, symPer, symDiv, symMul, symMin, symSum, symDot, symEq];


for (const sym of syms) {
    sym.addEventListener('click', () => {
        let symbol = sym.innerText;
        if (symbol === '√') {
            screen.innerText = Math.sqrt(eval(str));
            str = screen.innerText;
        }
        else if (symbol === '+/-') {
            if (!screen.innerText.startsWith('-') && screen.innerText !== '0') {
                screen.innerText = '-' + screen.innerText;
                str = '-' + str;
            } else {
                if (screen.innerText.charAt(0) === '-') {
                    screen.innerText = screen.innerText.substring(1, screen.innerText.length);
                }
            }
        } else {
            if (symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/' || symbol === '.') {
                screen.innerText += sym.innerText;
            }
            str += sym.innerText;
            screen.innerText = Solve();
            if (symbol === '=')
                str = screen.innerText;
        }
    })
}