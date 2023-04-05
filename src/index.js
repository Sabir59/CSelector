class CSelector {
  constructor(core, style) {
    this.core = core;
    this.style = style;
    this.coreHandler();
  }

  coreHandler() {
    const selector = document.getElementById(this.core[0]);
    const optionGroup = document.createElement("div");
    const label = document.createElement("label");
    const input = document.createElement("input");

    selector.classList.add(this.core[0]);
    optionGroup.classList.add(this.style[1]);
    label.textContent = this.core[1];
    label.className = this.style[0];
    label.setAttribute("for", this.core[2]);

    input.type = "hidden";
    input.name = this.core[3];
    input.id = this.core[2];

    selector.insertAdjacentElement("afterbegin", label);
    selector.insertAdjacentElement("beforeend", input);

    selector.insertAdjacentElement("beforeend", optionGroup);

    this.core[4].forEach((value) => {
      let option = document.createElement("p");
      option.innerText = value;
      option.classList.add(this.style[2]);

      optionGroup.insertAdjacentElement("beforeend", option);
    });

    selector.addEventListener("click", (event) => {
      optionGroup.classList.toggle(this.style[3]);

      if (event.target.id != this.core[0]) {
        label.innerText = event.target.innerText;
        input.value = event.target.innerText;
      }
    });
  }
}

module.exports = {
  all: CSelector,
};
