const email = document.querySelector("#mail");
const mdp = document.querySelector("#password");
const btn = document.querySelector("button");

// message error

const errorMail = document.querySelector("#errorMail");
const errordetailMail = document.querySelector("#errordetailMail");
const errorDetailMdp = document.querySelector("#errorDetailMdp");
const errorDetailMdp1 = document.querySelector("#errorDetailMdp1");
const errorDetailMdp2 = document.querySelector("#errorDetailMdp2");
const errorDetailMdp3 = document.querySelector("#errorDetailMdp3");

// regex

const regexMail = /^[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/;
const regexmdp =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

//event click btn

btn.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(email.value);
  // console.log(mdp.value);

  // test regex sur email

  if (!regexMail.test(email.value)) {
    // console.log("mail invalide");
    errorMail.innerHTML = "Mail invalide:";
    errordetailMail.innerHTML = "- Nom@fournisseur.fr";
    email.classList.add("borderError");
  }

  // test regex mdp

  if (!regexmdp.test(mdp.value)) {
    // console.log("mdp invalide");

    errorDetailMdp.innerHTML = "Le mot de passe doit contenir:";
    errorDetailMdp1.innerHTML = "- Entre 8 et 16 carracteres.";
    errorDetailMdp2.innerHTML = "- 1 Majuscule et 1 Minuscule.";
    errorDetailMdp3.innerHTML = "- 1 caractère spécial.";

    mdp.classList.add("borderError");
    mdp.classList.add("password");
  }
});

// ---------------------------------- remove error message user

email.addEventListener("click", () => {
  email.classList.remove("borderError");

  errorMail.innerHTML = "";
  errordetailMail.innerHTML = "";
});

mdp.addEventListener("click", () => {
  mdp.classList.remove("borderError");
  mdp.classList.remove("password");

  errorDetailMdp.innerHTML = "";
  errorDetailMdp1.innerHTML = "";
  errorDetailMdp2.innerHTML = "";
  errorDetailMdp3.innerHTML = "";
  errorPass.innerHTML = "";
});
