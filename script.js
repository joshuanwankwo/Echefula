let arr = [];
//adds a click event listener to the add button 
document.querySelector(".btn").addEventListener("click", addItem);




function addItem(){
    //reads the value from the input
    let currVal = document.querySelector('input').value;
    if(currVal != '') { 
    //inserts the list item created before the end of the ul element
    arr.push(currVal)
    display()
    document.querySelector('input').value = ""
    }
}



function display(){
  const li = document.createElement('li')
  const Button =  document.createElement('button')
  const ul = document.getElementById('list')
  Button.textContent = "DONE"
   Button.addEventListener('click',function(){
       li.remove()
   })

  arr.forEach(function(todo){
      li.textContent = todo;
      li.appendChild(Button)
      ul.appendChild(li)
  })

}