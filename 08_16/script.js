/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
// import Backpack from "./components/Backpack.js";

// const everydayPack = new Backpack(
//   "pack01",
//   "Everyday Backpack",
//   30,
//   "grey",
//   15,
//   26,
//   26,
//   false,
//   "December 5, 2018 15:00:00 PST",
//   "../everyday.svg"
// );
const backpackArticle = backpackObjectArray.map((backPack) => {
  let content = `
  <figure class="backpack__image">
    <img src=${backPack.image} alt="" />
  </figure>
  <h1 class="backpack__name">${backPack.name}</h1>
  <ul class="backpack__features">
    <li class="packprop backpack__volume">Volume:<span> ${backPack.volume
    }l</span></li>
    <li class="packprop backpack__color">Color:<span> ${backPack.color
    }</span></li>
    <li class="backpack__age">Age:<span> ${backPack.backpackAge()} days old</span></li>
    <li class="packprop backpack__pockets">Number of pockets:<span> ${backPack.pocketNum
    }</span></li>
    <li class="packprop backpack__strap">Left strap length:<span> ${backPack.strapLength.left
    } inches</span></li>
    <li class="packprop backpack__strap">Right strap length:<span> ${backPack.strapLength.right
    } inches</span></li>
    <li class="feature backpack__lid">Lid status:<span> ${backPack.lidOpen ? "open" : "closed"
    }</span></li>
  </ul>
    <button>Open lid</button>
`;
  const newArticle = document.createElement("article");
  newArticle.classList.add("backpack");
  newArticle.setAttribute("id", backPack.id);
  newArticle.innerHTML = content;
  return newArticle;
}

)
const main = document.querySelector(".maincontent");
backpackArticle.forEach((article) => {
  main.append(article);
})


