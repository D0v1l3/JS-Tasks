/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const renderUsersCard = (users) => {
  users.forEach((user) => {
    const login = document.createElement("h2");
    login.innerText = user.login;

    const img = document.createElement("img");
    img.src = user.avatar_url;
    img.alt = `${user.login} profile picture`;
    img.style.cssText = "height: 30vh";

    const card = document.createElement("div");
    card.append(img, login);
    card.style.cssText = "margin: 2em auto; text-align:center";

    const output = document.getElementById("output");
    output.append(card);
    output.style.cssText = "display:flex; flex-wrap: wrap";
  });
};

document.getElementById("btn").addEventListener("click", () => {
  fetchUsers();
  const message = document.getElementById("message");
  const button = document.querySelector("button");
  message.style.cssText = "display: none";
  button.style.cssText = "display: none";
});

const ENDPOINT = "https://api.github.com/users";

const fetchUsers = async () => {
  try {
    const response = await fetch(ENDPOINT);
    if (response.ok) {
      const data = await response.json();
      renderUsersCard(data);
    }
  } catch (error) {
    console.log(error);
  }
};
