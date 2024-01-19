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
  if (document.getElementById("share-div").style.display === "none") {
    document.getElementById("share-div").style.display = "flex";
    document.getElementById("profile-div").style.display = "none";
  } else {
    document.getElementById("share-div").style.display = "none";
    document.getElementById("profile-div").style.display = "flex";
  }
}
