// Tab OUR ATTRACTIONS
function openTab(e, tabId) {
  let tabContents = document.getElementsByClassName("tabcontent");
  console.log(tabContents);
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }

  let tabLinks = document.getElementsByClassName("tablinks");
  console.log(tabLinks);
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(
      " tablinks-active",
      ""
    );
  }

  document.getElementById(tabId).style.display = "block";
  e.currentTarget.className += " tablinks-active";
}
