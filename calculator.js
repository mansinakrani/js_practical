let result = document.getElementById("inputtext");

//taking input and showing the numbers 1-10 and operators such as pi , e , mod etc
let calculate = (number) => {
    result.value += number;
};

// equal operator
let Answer = () => {
    //condition checks the value contains ^ if yes then it will perform x^y
    if(result.value.includes("^")){
      temp = result.value;
      x = temp.split("^")[0];
      y = temp.substring(temp.indexOf("^") + 1);
    result.value = Math.pow(x,y);
    }
      ans = result.value;
      console.log("ans_ch",ans);
      ans=String(ans);
      ans_new=ans.slice(-1);
      console.log("ans_new",ans_new);
      if(isNaN(ans_new)){
          ans=ans.substring(0, ans.length - 1);
          numberBefore=ans
          console.log("numberBefore",numberBefore);
      }
      else{
          numberBefore = result.value;
      }

  document.getElementById("sm").innerHTML=numberBefore; // displaying operations
  result.value = eval(numberBefore);// for calculating basic math operations
  numberAfter = result.value;
  num = numberBefore + '=' + numberAfter;
  if(Number.isNaN(numberAfter))return; // checks nan if yes then returned else will considered as number
};

//Clear value 
function clr() {
  //result.value = "";
  document.getElementById("sm").innerHTML="";
  result.value = "";
}

//function radian to degree
let deg = () => {
    rad = result.value;
    degr = (rad*180)/Math.PI;
    result.value = degr; 
}

//function for F-E -> ('F-E' stands for 'fixed to exponent') 
function f_e() {
  return function() {  
    result.value = Math.pow(10,result);
    return result.value;
  };
}


const ms = [];
var index = 0;
// function memory save
let memorysave = () =>{
  ms.push(parseInt(result.value));
  result.value = "";
  console.log(ms);
}

//function memory plus (M+)
let memoryplus = () => {
  if (ms.length == 0) {
    alert("Nothing is stored in memory");
  } else {
    var sum = ms.reduce(function (a, b) {
      return a + b;
    }, 0);
    console.log("total " + sum);
    result.value = sum;
}
}

//function memory minus
let memoryminus = () => {
    let temp = "-" + result.value;
    ms.push(parseInt(temp));
    result.value += temp;
    //console.log(ms);
    //console.log(result.value);
}

//function memory recall 
let memoryrecall = () => {
      if (ms.length == 0) {
        alert("Nothing is stored in memory");
      } else {
        index %= ms.length;
        result.value = ms[index];
        index++;
      }
}

//function memory clear
let memoryclear = () => {
    ms.splice(0, ms.length);
    result.value = "";
    console.log(ms);
}

/* Trigonometry functions : */
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

/* */
//delete function 
let del = () => result.value = result.value.slice(0,-1);

/* */
//square function 
let square = () => result.value = Math.pow(result.value , 2);

//reciprocal function 
let reciprocal = () => result.value = 1/result.value;

//abs() or | x | function 
let abs = () => result.value = Math.abs(result.value);

//exp() function 
let exp = () => result.value = Math.exp(result.value);

/* */
//square root or sqrt() function 
let sqrt = () => result.value = Math.sqrt(result.value);

//factorial function 
let fact = () => {
  n = result.value;
  ft = 1;
    if(n == 0 || n == 1) {
      ft = 1;
    }
    else {
      for(i=n;i>=1;i--)
      {
        ft = ft*i;
      }
    } 
  result.value = ft;
}

//function 10 pow x
let powx = () => result.value = Math.pow(10,result.value); 

//function logarithm or log
let log = () => result.value = Math.log10(result.value); 

/* */
//function ln
let ln = () => result.value = Math.log(result.value);

//function of +/-
let pm = () => result.value = -result.value;

//function for taking input from keyboard
let inputKey = (event) => {
  unicode= event.which;
  console.log("event",event)
  console.log(unicode);
  if (unicode>=48 && unicode <=57 || unicode==94 || unicode==40 || unicode==41  || unicode==42 || unicode==43  || unicode==45 || unicode==47  ){
  console.log("event1",event)
  calculate(event.key);
  }
  else{
  }
  if(unicode==13){
      Answer();
  }
  if (unicode == 46 ) {
      del();
  } 
  /*if (unicode == 8 ) {
    clr();
  }*/ 
}