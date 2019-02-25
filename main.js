function addRow() {
  const columns = document.querySelectorAll("#categories .item").length;
  const rows = document.querySelectorAll(".table .row").length - 1;
  const row = document.createElement("row");
  row.className = `row`;
  row.id = `row${rows}`;
  for (let i = 1; i <= columns; i++) {
    const item = document.createElement("input");
    item.type = "text";
    item.className = `col${i} item`;
    item.id = `row${rows}_col${i}`;
    row.appendChild(item);
  }
  document.querySelector(".table").appendChild(row);
}

function addCol(){
  const columns =  document.querySelectorAll("#categories .item").length;
  const rows = document.querySelectorAll(".table .row").length - 1;
  for(let i = 1; i<=rows; i++){
    const item = document.createElement("input");
    item.type = "text";
    item.className = `col${columns} item`;
    if(i === 1){
      item.id = `cat${columns}`
      document.querySelector(`#categories`).appendChild(item);
    } else {
      item.id = `row${i-1}_col${columns}`
      document.querySelector(`#row${i-1}`).appendChild(item);
    }
  }
}

(function () {
  const addRowButton = document.querySelector(".addRow");
  const addColButton = document.querySelector(".addCol");

  addRowButton.addEventListener("click", function (e) {
    addRow();
  });

  addColButton.addEventListener("click", function(e){
    addCol();
  });
})()