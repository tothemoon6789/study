(function () {
  "use strict";
  var heading = [{ id: "document", text: "Document Object" }];
  var data = [
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
  ];
  var buttons = document.getElementById("control");
  var ul = window.document.createElement("ul");
  data.forEach((element) => {
    var li = window.document.createElement("li");
    var button = window.document.createElement("button");
    var buttonNode = window.document.createTextNode(element.text);
    button.appendChild(buttonNode);
    button.className = "btn btn-outline-primary";
    button.addEventListener("click", function () {
      var childShowing = window.document.querySelectorAll("#showing > div");
      childShowing.forEach((arg) => {
        arg.classList.remove("d-block");
      });
      document.getElementById(element.id).classList.add("d-block");
      document.getElementById(element.id).scrollIntoView();
    });
    li.appendChild(button);
    ul.appendChild(li);
  });
  buttons.appendChild(ul);
})();
function reload() {
location.reload();
}

var result = window.document.getElementById("result");
var statement = window.document.getElementById("statement");
function activeELement(e) {
var result = window.document.getElementById("result");
window.document.getElementById("statement").innerText = `result.innerText = window.document.activeElement.tagName;`;
window.document.querySelector("body").addEventListener("click", function () {
// dòng lệnh chính
result.innerText = window.document.activeElement.tagName;
});
}
function documentAddEventListener(e) {
var result = window.document.getElementById("result");
window.document.getElementById("buttonDA").innerText = "Button ĐÃ ĐƯỢC GÁN SỰ KIỆN";
result.innerText = "Không có kết quả để in ra, chỉ thêm sự kiện vào nút trên cùng";
window.document.getElementById("statement").innerText = `window.document.getElementById("buttonDA").addEventListener("click", function (e) {
alert("ĐÂY LÀ DÒNG CODE TRONG SỰ KIỆN ĐÃ ĐƯỢC THỰC THI");
});`;
// dòng lệnh chính
window.document.getElementById("buttonDA").addEventListener("click", function (e) {
alert("ĐÂY LÀ DÒNG CODE TRONG SỰ KIỆN ĐÃ ĐƯỢC THỰC THI");
});
}

function document_baseURI() {
// dong lenh chinh
result.innerText = window.document.baseURI;
statement.innerText = "result.innerText = window.document.baseURI;";
}
function document_body_gan() {
// dong lenh chinh
window.document.body.innerHTML = "toàn bộ dữ liệu của body đã bị thay thế";
//   result.innerText = window.document.baseURI;
//   statement.innerText = "result.innerText = window.document.baseURI;"
}
function document_body_lay() {
// dong lenh chinh
result.innerText = window.document.body.outerHTML;
statement.innerText = "result.innerText = window.document.body.outerHTML;";
}
function document_document_characterSet_lay() {
// dong lenh chinh

result.innerText = window.document.characterSet;
statement.innerText = "result.innerText = window.document.characterSet;";
}
function test() {
document.getElementById("result").innerText = window.document.cookie;
}
function window_document_createAttribute(){
var style = window.document.createAttribute("style");
window.document.getElementById("result").innerText = style;
window.document.getElementById("statement").innerText = 'var style = window.document.createAttribute("style");'
}
function window_document_createComment(){
var comment = window.document.createComment("Du lieu nay khong the hien ra ben ngoai");
window.document.querySelector("#result").innerHTML = comment;
window.document.querySelector("#result").appendChild(comment) = comment;
window.document.querySelector("#statement").innerHTML = `var comment = window.document.createComment("Du lieu nay khong the hien ra ben ngoai");`;
}