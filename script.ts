// const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement
// const skills = document.getElementById(' skills') as HTMLElement

// toggleButton.addEventListener('click', () =>{
//     if(skills.style.display === 'none'){
//         skills.style.display = 'block'
//     }else{
//         skills.style.display = 'none'
//     }
// });

let skillSection = document.getElementById("skill");
let skillButton = document.getElementById("skill_btn");

skillButton!.addEventListener("click", () => {
  skillSection!.classList.toggle("hide");
});
