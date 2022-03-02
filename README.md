# custom-selector-plugin
This is a custom slector plugin built on top of vanilla javascript and CSS where you can create the most customizable custom selector by just creating new custom selector object and provide the required options in an array form

HOW TO USE?

create a variable assign to CSelector class and call the init method.

Little Description:
.The variable takes two values a 2D array with the values dom element id placeholder to be passed to slector input for value to be sent and name to that input so we areable to send 
data on server and the second array in array is for options to be added to selector.
The second value is array of css classes for styling placeholder option-container options and toggling options

NOTE:
order of input data should is necessary don't go against the order provided however their names ids css classes which is given in second value are of your choice 
you just have to care about order


An Example demonstrting the use case of the Script in html and js:

HTML
<div id="c-selector"></div>

JavaScript
const selector = new CSelector(
  [
    "selector-container-name",
    "selecotor-placeholder",
    "selector__input",
    "selector-input-name",
    ["option1", "option2", "option3"],
  ],
  ["placeholder-class", "option-group-class", "option-class", "show-options-class"]
);

selector.init();
