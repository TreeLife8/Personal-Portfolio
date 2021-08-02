document
  .querySelector("#my-services-one")
  .addEventListener("mouseover", function () {
    var txt = document.querySelector("#my-services").innerHTML;
    document.querySelector("#my-services").innerHTML =
      "experience excellence with ease";

    this.addEventListener("mouseout", function () {
      document.querySelector("#my-services").innerHTML = txt;
    });
  });
document
  .querySelector("#my-services-two")
  .addEventListener("mouseover", function () {
    var txt = document.querySelector("#my-services").innerHTML;
    document.querySelector("#my-services").innerHTML =
      "enjoy the journey of web development";

    this.addEventListener("mouseout", function () {
      document.querySelector("#my-services").innerHTML = txt;
    });
  });
document
  .querySelector("#my-services-three")
  .addEventListener("mouseover", function () {
    var txt = document.querySelector("#my-services").innerHTML;
    document.querySelector("#my-services").innerHTML =
      "experience excellence with ease";

    this.addEventListener("mouseout", function () {
      document.querySelector("#my-services").innerHTML = txt;
    });
  });
