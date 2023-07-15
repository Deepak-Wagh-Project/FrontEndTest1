/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    for(let i=0;i<arr.length;i++){
        if(arr[i].profession=="developer"){
            console.log(arr[i]);
        }
    }
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
  }
  
  function addData() {
    //Write your code here, just console.log
    let user= {id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(user);
    console.log(arr[3]);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    for(let element of arr){
        if(element.profession=="admin"){
            arr.pop(element);
        }

    }
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
   let  arr2=[
        { id: 4, name: "Warren", age: "18", profession: "Tester" },
        { id: 5, name: "Max", age: "20", profession: "Carpainter" },
        { id: 6, name: "Harry", age: "19", profession: "Druggist" },  
    ]
    let arr3=arr.concat(arr2);
    console.log(arr3);
  }