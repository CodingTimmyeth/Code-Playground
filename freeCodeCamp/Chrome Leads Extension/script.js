let myLeads = []
let oldLeads = []
const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')
const tabBtn = document.getElementById('save-tab')

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

const tabs = [
    {url: 'https://www.linkedin.com/in/per-harald-borgen/'}
]

tabBtn.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log(tabs)
        // since only one tab should be active and in the current window at once
        // the return variable should only have one entry
        let activeTab = tabs[0]
        let activeTabId = activeTab.id
   
     });
    myLeads.push(tabs[0].url)
    localStorage.setItem('myLeads', JSON.stringify (myLeads) )
    render(myLeads)
})



function render(leads){
    let listItems = ''
    for(let i = 0; i < leads.length; i++){
    
        listItems += `
        <li>
            <a target = '_blank' href = '${leads[i]}'> 
            ${leads[i]}
            </a>
        </li>
        `
        }
        ulEl.innerHTML = listItems
    }
    

deleteBtn.addEventListener('dblclick', function(){
    let clearStorage = localStorage.clear()
    myLeads = []
    render(myLeads)
})



inputBtn.addEventListener('click', function(){
    myLeads.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

    console.log(localStorage.getItem('myLeads'))
})

