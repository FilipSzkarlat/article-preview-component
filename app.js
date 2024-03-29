function changeColor() {
  document.getElementById("share-img").src = "images/icon-share-hover.svg";
  document.getElementById("share-img-hover").src = "images/icon-share.svg";
}

function changeColorBack() {
  document.getElementById("share-img").src = "images/icon-share.svg";
  document.getElementById("share-img-hover").src =
    "images/icon-share-hover.svg";
}

function changeProfile() {
  // Change for mobile
  if (window.innerWidth <= 375) {
    if (document.getElementById("share-div").style.display === "none") {
      document.getElementById("share-div").style.display = "flex";
      document.getElementById("profile-div").style.display = "none";
    } else {
      document.getElementById("share-div").style.display = "none";
      document.getElementById("profile-div").style.display = "flex";
    }
    // Change for Desktop
  } else {
    if (document.getElementById("bubble-div").style.display === "none") {
      document.getElementById("bubble-div").style.display = "flex";
      document.getElementById("bubble-triangle").style.display = "flex";
      document.getElementById("just-a-space").style.display = "none";
    } else {
      document.getElementById("bubble-div").style.display = "none";
      document.getElementById("bubble-triangle").style.display = "none";
      document.getElementById("just-a-space").style.display = "block";
    }
  }
}
