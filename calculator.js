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
    numberbefore = answer.value; 
    document.getElementById("sm").innerHTML=answer.value; // displaying operations 
    answer.value = eval(answer.value);// for calculating basic math operations
    numberafter = answer.value;
    num = numberbefore + '=' + numberafter;
    if(Number.isNaN(numberafter))return; // checks nan if yes then returned else will considered as number 
    HistoryRegister.push(num); //pushes the elements in array
    list1.innerHTML='';
    HistoryRegister.forEach((element) => {
        list1.innerHTML += '<li>' + element + '</li>'; //prints element history block 
    });

}
