




function search(ev) {

  let searchVal = ev.currentTarget.value.toLowerCase();
  let itemList = document.querySelectorAll('.list-group-item');
  itemList.forEach(item => {
    if (item.innerText.toLowerCase().indexOf(searchVal) > -1) {
      item.style.display = 'block';
  
    } else {
      item.style.display = 'none';
  
    }
  });
}







