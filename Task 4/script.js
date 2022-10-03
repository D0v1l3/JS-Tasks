/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

renderCard = (data) => {
  const outputDispay = document.getElementById("output");

  data.forEach((car) => {
    const brand = document.createElement("h2");
    brand.innerText = car.brand;
    brand.style.color = "#ffffff";

    const models = document.createElement("p");
    models.innerText = car.models;
    models.style.color = "white";

    const card = document.createElement("div");
    card.classList.add("card");
    card.style.cssText = "background-color: #333; word-wrap: break-word";
    card.style.borderRadius = "1em";
    card.append(brand, models);
    outputDispay.append(card);
  });
};

const ENDPOINT = "./cars.json";

const getLocalData = async () => {
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  renderCard(data);
};

window.addEventListener("load", getLocalData);
