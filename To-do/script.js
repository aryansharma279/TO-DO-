var inputref = document.getElementById("inputField");
var addbtnref = document.getElementById("addTodo");
var displayTodoRef = document.getElementById("displayTodo");

//Empty Array
var todoList = [];

//Event Listener
addbtnref.addEventListener("click",savetodo);
function savetodo() {
    //getting Input Value
    console.log("Input Fetched");
    var inputValue = inputref.value;
    
    //Pushing input value to the Array
    todoList.push(inputValue);
    console.log("To-do's Pushed in the array : ",todoList);
    
    //Empty Element Ul Created
    var createUl = document.createElement("ul");
    console.log(createUl);
    
    //Traversing array elements 
    todoList.forEach(traverse)
    
    function traverse(value)
    {
        //creating Li
        var createLi = document.createElement('li');
        
        //delete Button
        var delBtn = document.createElement('button');
        console.log(delBtn);
        delBtn.innerHTML = "Delete";

        delBtn.addEventListener('click',deleteToDo);

    function deleteToDo() {
         createUl.removeChild(createLi);
    }


        //Assigning Values to Li
        createLi.innerHTML = value;
        console.log(value);
        console.log(createLi);
        
        //Appending li to Ul
        createUl.append(createLi,delBtn);
        
        // createUl.append(delBtn);
        //Emppty the div here 
        displayTodoRef.innerHTML = '';
    };

    //appending ul to div here
    displayTodoRef.append(createUl);
    
    //Setting input field to empty
    inputref.value ='';    
    }

//Array Elements
console.log(todoList);
