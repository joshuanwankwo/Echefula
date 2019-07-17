
//adds a click event listener to the add button 
document.querySelector(".btn").addEventListener("click", addItem);

function addItem(){
    //reads the value from the input
    let currVal = document.querySelector('input').value;
    if(currVal != '') {
        //creates a list item element
    let currItem = document.createElement('li');
    //sets the text content of the list item to the current value of the input
    currItem.textContent = currVal;
 
    //inserts the list item created before the end of the ul element
    document.querySelector("#list").insertAdjacentElement("beforeend",currItem);
    //clears the input
    document.querySelector('input').value = '';
    }
    
}