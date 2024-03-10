let todo=[];
let req=prompt("Please enter your request");
while(true){
    if(req=="quit"){
        console.log("quitting todo app");
        break;
    }
    else if(req=="list"){
        console.log("______________________");
        
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        for(task of todo){
            console.log(task);
        }
       
        console.log("______________________");
    }
    else if(req=="add"){
        let task=prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if(req=="delete"){
          let idx=prompt("Please Enter index to delete element");
          todo.splice(idx,1);
          console.log("task deleted");
    }
    else{
        console.log("Wrong Request");
    }
    req=prompt("Please enter your request");
   
}
