document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const submitted = document.getElementById("create-task-form");
  const listToAppend = document.getElementById("tasks");
  
  
  submitted.addEventListener("submit", (e)=> {
    e.preventDefault()
    const listItem = document.createElement('li');
    const itemToAdd = document.getElementById("new-task-description");
    console.log("checkpoint")
    listItem.textContent = itemToAdd.value;
    listToAppend.appendChild(listItem);

  });
});

// function prevention(event) {
//   event.preventDefault();
//   const listItem = document.createElement('li');
//   listItem.textContext = itemToAdd;
//   listToAppend.appendChild(listToAppend);
// }



//TEST CODE
// submitted.addEventListener("submit", prevention);
// bttn.addEventListener("click", addAndErase)

// function prevention(event) {
//   event.preventDefault();
// }

// function addAndErase() {
//   const listItem = document.createElement('li');
//   listItem.textContext = itemToAdd;
//   listToAppend.appendChild(listItem);
//   itemToAdd.textContext = "";
// }

//CODE THAT WORKS
// submitted.addEventListener("submit", prevention)

//   function prevention(event) {
//     event.preventDefault();
//   }