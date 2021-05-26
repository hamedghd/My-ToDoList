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
}
