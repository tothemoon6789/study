(function () {
  "use strict";
  var heading = [{ id: "document", text: "Document Object" }];
  var buttons = [
    { id: "js1", id_heading: "document", version: "dom1", text: "window.document.activeELement" },
    { id: "js2", id_heading: "document", version: "dom2", text: "window.document.addEventListener()" },
    { id: "js3", id_heading: "document", version: "dom3", text: "window.document.adoptNode()" },
    { id: "js4", id_heading: "document", version: "deprecated", text: "window.document.anchors" },
    { id: "js5", id_heading: "document", version: "deprecated", text: "window.document.applet" },
    { id: "js6", id_heading: "document", version: "dom4", text: "window.document.baseURI" },
    { id: "js7", id_heading: "document", version: "dom1", text: "window.document.body" },
    { id: "js8", id_heading: "document", version: "deprecated", text: "window.document.charset" },
    { id: "js9", id_heading: "document", version: "dom3", text: "window.document.characterSet" },
    { id: "js10", id_heading: "document", version: "dom1", text: "window.document.close()" },
    { id: "js11", id_heading: "document", version: "dom2", text: "window.document.cookie" },
    { id: "js12", id_heading: "document", version: "dom1", text: "window.document.createAttribute()" },
    { id: "js13", id_heading: "document", version: "dom1", text: "window.document.createComment()" },
    { id: "js14", id_heading: "document", version: "dom1", text: "window.document.createDocumentFragment()" },
    { id: "js15", id_heading: "document", version: "dom1", text: "window.document.createElement()" },
    { id: "js16", id_heading: "document", version: "dom1", text: "window.document.createEvent()" },
    { id: "js17", id_heading: "document", version: "dom1", text: "window.document.createTextNode()" },
    { id: "js18", id_heading: "document", version: "dom1", text: "window.document.defaultView" },
    { id: "js19", id_heading: "document", version: "dom1", text: "window.document.designMode" },
    { id: "js20", id_heading: "document", version: "dom1", text: "window.document.doctype" },
    { id: "js21", id_heading: "document", version: "dom1", text: "window.document.documentElement" },
    { id: "js22", id_heading: "document", version: "dom1", text: "window.document.documentURI" },
    { id: "js23", id_heading: "document", version: "dom2", text: "window.document.domain" },
    { id: "js24", id_heading: "document", version: "deprecated", text: "window.document.domConfig" },
    { id: "js25", id_heading: "document", version: "deprecated", text: "window.document.embeds" },
    { id: "js26", id_heading: "document", version: "deprecated", text: "window.document.execCommand()" },
    { id: "js27", id_heading: "document", version: "dom1", text: "window.document.forms" },
    { id: "js28", id_heading: "document", version: "dom2", text: "window.document.getElementById()" },
    { id: "js29", id_heading: "document", version: "dom1", text: "window.document.getElementByClassName()" },
    { id: "js30", id_heading: "document", version: "dom1", text: "window.document.getElementByName()" },
    { id: "js31", id_heading: "document", version: "dom1", text: "window.document.getElementByTagName()" },
    { id: "js32", id_heading: "document", version: "dom1", text: "window.document.hasFocus()" },
    { id: "js33", id_heading: "document", version: "dom3", text: "window.document.head" },
    { id: "js34", id_heading: "document", version: "dom1", text: "window.document.images" },
    { id: "js35", id_heading: "document", version: "dom1", text: "window.document.implementation" },
    { id: "js36", id_heading: "document", version: "dom2", text: "window.document.importNode()" },
    { id: "js37", id_heading: "document", version: "deprecated", text: "window.document.inputEncoding" },
    { id: "js38", id_heading: "document", version: "dom3", text: "window.document.lastModified" },
    { id: "js39", id_heading: "document", version: "dom1", text: "window.document.links" },
    { id: "js40", id_heading: "document", version: "dom2", text: "window.document.normalize()" },
    { id: "js41", id_heading: "document", version: "deprecated", text: "window.document.mormalizeDocument()" },
    { id: "js42", id_heading: "document", version: "dom1", text: "window.document.open()" },
    { id: "js43", id_heading: "document", version: "dom1", text: "window.document.querySelector()" },
    { id: "js44", id_heading: "document", version: "dom3", text: "window.document.querySelectorAll()" },
    { id: "js45", id_heading: "document", version: "dom3", text: "window.document.readyState" },
    { id: "js46", id_heading: "document", version: "dom3", text: "window.document.referrer" },
    { id: "js47", id_heading: "document", version: "dom2", text: "window.document.removeEventListener()" },
    { id: "js48", id_heading: "document", version: "deprecated", text: "window.document.renameNode()()" },
    { id: "js49", id_heading: "document", version: "dom2", text: "window.document.scripts" },
    { id: "js50", id_heading: "document", version: "deprecated", text: "window.document.strictErrorChecking" },
    { id: "js51", id_heading: "document", version: "dom2", text: "window.document.title" },
    { id: "js52", id_heading: "document", version: "dom1", text: "window.document.URL" },
    { id: "js53", id_heading: "document", version: "dom1", text: "window.document.write()" },
    { id: "js54", id_heading: "document", version: "dom1", text: "window.document.writeln()" },
  ];
  var buttons_control = document.getElementById("control");
  var ul = window.document.createElement("ul");
  buttons.forEach((btn) => {
    var li = window.document.createElement("li");
    var button = window.document.createElement("button");
    var buttonNode = window.document.createTextNode(btn.text);
    var div = document.getElementById(btn.id);
    div.insertAdjacentHTML("afterbegin",`<h3>${btn.text}</h3>`);
    button.appendChild(buttonNode);
    button.className = "btn btn-outline-primary";
    button.classList.add(btn.version);
    button.addEventListener("click", function () {
      var childShowing = window.document.querySelectorAll("#showing > div");
      childShowing.forEach((arg) => {
        arg.classList.remove("d-block");
      });
      document.getElementById(btn.id).classList.add("d-block");
      document.getElementById(btn.id).scrollIntoView();
    });
    li.appendChild(button);
    ul.appendChild(li);
  });
  buttons_control.appendChild(ul);
})();
