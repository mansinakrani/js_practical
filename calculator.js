let result = document.getElementById("inputtext");
let memoryRegister = [];
let HistoryRegister = [];

//taking input and showing the numbers 1-10 and operators such as pi , e , mod etc
let calculate = (number) => {
    result.value += number;
};

//function radian to degree
let deg = () => {
    rad = result.value;
    degr = (rad*180)/Math.PI;
    result.value = degr; 
}

//function for F-E

// equal operator
let Answer = () => {
  try {
    result.value=eval(result.value);
  }
  catch (err) {
    alert("Enter the valid input!");
  }
};

//Clear value 
function clr() {
  result.value = "";
}

const ms = [];
var index = 0;
// function memory save
let memorysave = () =>{
    if (ms.length == 0) {
        alert("Nothing is stored in memory");
      } else {
        index %= ms.length;
        result.value = ms[index];
        index++;
      }
}

//function memory plus
let memoryplus = () => {
    ms.push(parseInt(result.value));
    result.value = "";
    console.log(ms);
}

//function memory minus
let memoryminus = () => {
    let temp = "-" + result.value;
    ms.push(parseInt(temp));
    result.value = "";
    console.log(ms);
}

//function memory recall 
let memoryrecall = () => {
    if (ms.length == 0) {
        alert("othing is stored in memory");
      } else {
        var sum = ms.reduce(function (a, b) {
          return a + b;
        }, 0);
        console.log("total" + sum);
        result.value = sum;
      }
}

//function memory clear
let memoryclear = () => {
    ms.splice(0, ms.length);
    result.value = "";
    console.log(ms);
}

/* Trigonometry fumctions : */
//sin function 
let sin = () => result.value = Math.sin(result.value);

//cos function 
let cos = () => result.value = Math.cos(result.value);

//tan function 
let tan = () => result.value = Math.tan(result.value);

//asinh function 
let asinh = () => result.value = Math.asinh(result.value);

//acosh function 
let acosh = () => result.value = Math.acosh(result.value);

//atanh function 
let atanh = () => result.value = Math.atanh(result.value);

/* fumctions : */
//floor function 
let floor = () => result.value = Math.floor(result.value);

//ceil function 
let ceil = () => result.value = Math.ceil(result.value);

//random function 
let random = () => result.value = Math.random(result.value);

//trunc function 
let trunc = () => result.value = Math.trunc(result.value);

/* */
//x^3 or xpow3() function 
let xpow3 = () => result.value = Math.pow(result.value,3);

//2^x or powof2x() function 
let powof2x = () => result.value = Math.powof2x(2, result.value);

//cuberoot or cbrt() function 
let cbrt = () => result.value = Math.cbrt(result.value);



