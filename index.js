 console.log("version2")
                   let myleads = [];

      //grabing the elements n storing in the var
      let inputBtn = document.getElementById("input-btn");
      let inputEl = document.getElementById("input-el");
      let ulEl = document.getElementById("ul-el");
      let deleteBtn = document.getElementById("delete-btn");
      let leadsfromlocalstorage = JSON.parse(localStorage.getItem("myleads"));
      let tabBtn = document.getElementById("tab-btn")    

    if (leadsfromlocalstorage){
        myleads = leadsfromlocalstorage
        render(myleads);
    }
 

 tabBtn.addEventListener('click',()=>{

chrome.tabs.query({active:true,currentWindow:true},
function (tabs){
    console.log(tabs[0].url)
    myleads.push(tabs[0].url)
    localStorage.setItem("myleads",JSON.stringify(myleads))
    render(myleads)

}) })



    function render(leads) {
        //setting var value to null
        let listitems = "";
        for (let i = 0; i < leads.length; i++) {
          
          //using string literals ` ${} `
          listitems += ` <li>
                <a target='_main' href='${leads[i]}'>${leads[i]}
                    </a>
             </li> `;
          //setting the ul list ineer html to list items
          ulEl.innerHTML = listitems;
        }
      }

    deleteBtn.addEventListener("dblclick",() =>{
        console.log("delete button clicked")
  localStorage.clear()
  myleads = [];
  render(myleads)


    })


      inputBtn.addEventListener("click", () => {
        myleads.push(inputEl.value);
        inputEl.value = ""; //clearing the value in the input field

        localStorage.setItem("myleads", JSON.stringify(myleads));

        render(myleads); //calling the function
      });



