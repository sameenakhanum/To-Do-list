document.querySelector("#push").onclick = function
(){
    if(document.querySelector("#newtask input").value.length == 0 ){
        alert("please enter a Task")
    }
    else{
        document.querySelector("#tasks").innerHTML
        += `
        <div class="task">
        <span id="taskname">
        ${document.querySelector("#newtask input").value}
         </span>
         <button class="delete">
         <i class="fas fa-trash"></i>
         </button>
        </div>
        `;

        var currentTasks = document.querySelectorAll(".delete");
        for(var i = 0; i < currentTasks.length; i++){
            currentTasks[i].onclick = function(){
                this.parentNode.remove()
            }
        }

        var task = document.querySelectorAll(".task");
        for(var i = 0; i< task.length; i++){
            task[i].onclick = function(){
                this.classList.toggle("completed");
            }
        }
        document.querySelector("#newtask input").value = "";
    }
} 