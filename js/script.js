var mydata = {};

function showToDoList(setdata) {
  const ajax = new XMLHttpRequest();
  ajax.open("GET", "https://api.publicapis.org/entries", true);
  ajax.onload = function () {
    mydata = JSON.parse(this.responseText);
    console.log(mydata);
    setdata();
  };
  ajax.send();
}

function getdata() {
  console.log(mydata.entries[1]);
  let myul = document.getElementById("myul");
  for (let i = 0; i < mydata.entries.length; i++) {
    let newli = document.createElement("li");
    newli.textContent = mydata.entries[i].API;
    myul.appendChild(newli);
  }
}

document.getElementById("getData").addEventListener("click", () => {
  showToDoList(getdata);
});
