let result = document.getElementById("inputtext");

//taking input and showing the numbers 1-10 and operators such as pi , e , mod etc
let calculate = (number) => {
    result.value += number;
};

//function radian to degree
let deg = () => {
    rad = result.value;
    degr = (rad*180)/Math.PI;
    answer.value = degr; 
}