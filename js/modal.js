const modalTemplates = [
  // Firefox modal
  `
  <div class="modal modal-drop">
      <div class="modal-content modal-content--box--styles">
        <div class="modal-body modal-body--text--styles">
          <p class="modal-body--text--line">1. Navigate to <a
              href="https://github.com/adamsteinPosting/n-c/releases">this link.</a></p>
          <p class="modal-body--text--line">2. Under "assets", right click
            "coincidence_pupper-0.6.2-fx.xpi", or a file similarly named.</p>
          <p class="modal-body--text--line">3. Click "Save Link As...".</p>
          <p class="modal-body--text--line">4. Navigate to your download folder, and drag the file to a
            Firefox window.</p>
          <p class="modal-body--text--line">5. A popup will ask you if you want to install Coincidence
            Pupper. Say yes, and you're done!</p>
        </div>
    </div>
  </div>
  `,
  // Tampermonkey modal
  `
  <div class="modal modal-drop">
     <div class="modal-content modal-content--box--styles">
       <div class="modal-body modal-body--text--styles">
         <p class="modal-body--text--line">1. Install the extension "Tampermonkey" for Safari, Chrome,
           Edge, or anywhere it's supported.</p>
         <p class="modal-body--text--line">2. Navigate to <a
             href="https://greasyfork.org/en/scripts/396851-coincidence-pupper">this link.</a></p>
         <p class="modal-body--text--line">3. Click 'install'. You're done!</p>
       </div>
     </div>
  </div>  
  `
];

let modalArray = document.querySelectorAll(".modal-core");

modalArray.forEach((elm, index) => {
  elm.innerHTML = modalTemplates[index];
});

document.querySelectorAll(".clicker").forEach((element, index) => {
  element.addEventListener("click", function(event) {
    event.stopPropagation();
    modalArray.forEach(elm => {
      elm.classList.add("modal--hide");
    });
    modalArray[index].classList.remove("modal--hide");
    document.getElementById("modal-blur").classList.add("modal-blur");
  });
});

window.onclick = event => {
  event.stopPropagation();
  if (!event.target.closest(".modal-core")) {
    if (
      document.querySelectorAll(".modal--hide").length !== modalArray.length
    ) {
      modalArray.forEach(elm => {
        elm.classList.add("modal--hide");
      });
      document.getElementById("modal-blur").classList.remove("modal-blur");
    }
  }
};

document.onkeydown = function(event) {
  if (event.key.toLowerCase() === "escape") {
    modalArray.forEach(elm => {
      elm.classList.add("modal--hide");
    });
    document.getElementById("modal-blur").classList.remove("modal-blur");
  }
};
