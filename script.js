class CSelector {
  constructor(core, style) {
    this.core = core;
    this.style = style;
  }

  coreHandler() {
    const selector = document.getElementById(this.core[0]);
    const optionGroup = document.createElement("div");
    const label = document.createElement("p");
    const input = document.createElement("input");

    optionGroup.classList.add(this.style[0]);
    label.textContent = this.core[1];
    input.type = "hidden";
    input.name = this.core[3];

    selector.insertAdjacentElement("afterbegin", label);
    selector.insertAdjacentElement("beforeend", input);

    selector.insertAdjacentElement("beforeend", optionGroup);

    this.core[4].forEach((value) => {
      let option = document.createElement("p");
      option.innerText = value;
      option.classList.add(this.style[1]);

      optionGroup.insertAdjacentElement("beforeend", option);
    });

    selector.addEventListener("click", function (event) {
      optionGroup.classList.toggle("toggle-options");
      label.innerText = event.target.innerText;
      input.value = event.target.innerText;
    });
  }

  init() {
    return this.coreHandler();
  }
}

const selector = new CSelector(
  [
    "c-selector",
    "Select",
    "c-selector__value",
    "c-selector",
    ["Download", "Install", "Upload"],
  ],
  ["option-group", "option"]
);

selector.init();
