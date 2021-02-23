const but = document.querySelector('.btn');
console.log(but);
but.addEventListener("click", function(){
    console.log(but.textContent);
    if(but.textContent == "Войти"){
        but.textContent = "Выйти";
    }else{
        but.textContent = "Войти";
    } 

})
let inpSearch = document.querySelector(".search_input");
inpSearch.addEventListener("keyup", function(){
    const cards = document.querySelectorAll(".card");
    inpSearch = document.querySelector(".search_input");
    let name = inpSearch.value;
    console.log(name);
    if(name != null){
        cards.forEach(function(item){
            console.log(cards)
            let cardTitle = item.querySelector(".card_title").textContent;
            console.log(cardTitle);
            if(!((cardTitle.toLowerCase()).includes(name.toLowerCase()))){
                console.log(cardTitle + " - " + name);
                item.classList.add("hidden");
            }else{
                item.classList.remove("hidden");
            }
        })
    } 
})