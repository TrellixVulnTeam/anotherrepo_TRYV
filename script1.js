document.getElementById("getData").addEventListener("click",()=>{
getdata(setdata)
})

//this function will get the data by Get req
function getdata(data)
{
    var json={}
    var ajax = new XMLHttpRequest();

    ajax.open("GET","https://api.publicapis.org/entries",true)
    ajax.onload= function(){
        json=JSON.parse(this.responseText);
        data(json)
    }
    ajax.send()
}

//this function wi fill the page with data
function setdata(data)
{
    console.log(data);
    let ul = document.getElementById("myul")
    
    for(let i =0 ; i< data.entries.length;i++)
    {
        let li = document.createElement("li")
        li.textContent = data.entries[i].API
        ul.appendChild(li);

    }
}