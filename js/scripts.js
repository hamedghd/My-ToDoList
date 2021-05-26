// Create function for the Add button
function newItem () {
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);
  // Give a warning when the field is empty.
  if (inputValue === '') {
    alert('You must write something!');
  } else {
  // Create a new ToDo item.
    let list = $('#list');
    list.append(li);
  }
  // 2. Crossing out an item from the list of items:
  function crossOut () {
   li.toggleClass('strike');
  }
  li.on('dblclick', crossOut);
  // 3(i). Adding the delete button "X":
  let crossOutButton = $('<crossOutButton>X</crossOutButton>');
 	li.append(crossOutButton);

 	crossOutButton.on('click', deleteListItem);
  // 3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    function deleteListItem(){
  		li.addClass('delete');
  	}

}
