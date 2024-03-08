(function () {
  "use strict";
  var buttons = window.document.querySelectorAll(".control-box button");
  buttons.forEach((e, i) => {
    e.addEventListener("click", function () {
      var div = window.document.querySelectorAll(".showing-box > div");
      div.forEach((element) => {
        element.classList.remove("show");
      });
      div[i].classList.add("show");
      window.document.querySelector(".showing-box").scrollIntoView();
    });
  });
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