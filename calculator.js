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


// function memory save
let memorysave = () =>{
    num = result.value; 
    if(Number.isNaN(num))return; // checks nan if yes then returned else will considered as number 
    memoryRegister.push(num); //pushes the elements in array
    list.innerHTML='';
    memoryRegister.forEach((element) => {
        list.innerHTML += '<li>' + element + '</li>'; //prints element in memory block 
    });
}

//function memory plus
let memoryplus = () => {
    num = result.value;
    if(Number.isNaN(num)) return; // checks nan if yes then returned else will considered as number 
    lastvalue = list.lastChild.innerHTML; // takes last element of list and stores in lastvalue
    ans = parseInt(lastvalue) + parseInt(num); //adds the last item in memory and the number
    memoryRegister.pop(lastvalue);//pops out the lastvalue in array
    memoryRegister.push(ans);//pushes the elements in array
    list.innerHTML='';
    memoryRegister.forEach((element) => {
        list.innerHTML += '<li>' + element + '</li>'; //prints element in memory block 
    });
}

//function memory minus
let memoryminus = () => {
    num = result.value;
    if(Number.isNaN(num)) return; // checks  nan if yes then returned else will considered as number
    lastvalue = list.lastChild.innerHTML;  // takes last element of list and stores in lastvalue
    ans = parseInt(lastvalue) - parseInt(num); //substracts the last item in memory and the number
    memoryRegister.pop(lastvalue);//pops out the lastvalue in array
    memoryRegister.push(ans);//pushes the elements in array
    list.innerHTML='';
    memoryRegister.forEach((element) => {
        list.innerHTML += '<li>' + element + '</li>'; //prints element in memory block 
    });
}

//function memory recall 
let memoryrecall = () => {
    result.value = list.lastChild.innerHTML; //prints last element in list on display
}

//function memory clear
let memoryclear = () => {
    list.innerHTML='';
    memoryRegister.forEach((element)=>{
    while(memoryRegister.length){
        memoryRegister.pop();
    }
  })
}