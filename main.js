var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

ready(() => {
  document.querySelector(".claim").addEventListener("click", (e) => {
    //empty field

    if (document.getElementById("name").value == "") {
      document.getElementById("name").classList.add("red");

      document.querySelector(".error1").style.display = "block";
      document.querySelector(".errorIcon1").style.display = "block";
    }
    if (document.getElementById("last").value == "") {
      document.getElementById("last").classList.add("red");
      document.querySelector(".error2").style.display = "block";
      document.querySelector(".errorIcon2").style.display = "block";
    }
    if (document.getElementById("email").value == "") {
      document.getElementById("email").classList.add("red");
      document.querySelector(".error3").textContent =
        "Email address cannot be empty";
      document.querySelector(".error3").style.display = "block";
      document.querySelector(".errorIcon3").style.display = "block";
    }
    if (document.getElementById("password").value == "") {
      document.getElementById("password").classList.add("red");
      document.querySelector(".error4").style.display = "block";
      document.querySelector(".errorIcon4").style.display = "block";
    }

    //Value written
    if (document.getElementById("name").value != "") {
      document.getElementById("name").classList.remove("red");
      document.querySelector(".error1").style.display = "none";
      document.querySelector(".errorIcon1").style.display = "none";
    }
    if (document.getElementById("last").value != "") {
      document.getElementById("last").classList.remove("red");
      document.querySelector(".error2").style.display = "none";
      document.querySelector(".errorIcon2").style.display = "none";
    }
    if (document.getElementById("email").value != "") {
      if (
        document
          .getElementById("email")
          .value.match(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi)
      ) {
        document.getElementById("email").classList.remove("red");
        document.querySelector(".error3").style.display = "none";
        document.querySelector(".errorIcon3").style.display = "none";
      } else {
        document.getElementById("email").classList.add("red");
        document.querySelector(".error3").style.display = "block";
        document.querySelector(".errorIcon3").style.display = "block";
        document.querySelector(".error3").textContent =
          "looks like this is not an email";
      }
    }
    if (document.getElementById("password").value != "") {
      document.getElementById("password").classList.remove("red");
      document.querySelector(".error4").style.display = "none";
      document.querySelector(".errorIcon4").style.display = "none";
    }

    if (
      document.getElementById("name").value != "" &&
      document.getElementById("last").value != "" &&
      document
        .getElementById("email")
        .value.match(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi) &&
      document.getElementById("password").value != ""
    ) {
      document.getElementById("name").value = "";
      document.getElementById("last").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      location.reload();
    }
  });

  window.addEventListener(
    "keydown",
    function (event) {
      if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.querySelector(".claim").click();
      }
    },
    true
  );
});
