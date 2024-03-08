(function () {
  "use strict";
  var buttons = document.querySelectorAll(".control-box button");
  buttons.forEach((e, i) => {
    e.addEventListener("click", function () {
      var div = document.querySelectorAll(".showing-box > div");
      div.forEach((element) => {
        element.classList.remove("show");
      });
      div[i].classList.add("show");
    });
  });
})();
function reload() {
  location.reload();
}
function activeELement(e) {
  var result = document.getElementById("result");
  document.getElementById("statement").innerText = `result.innerText = document.activeElement.tagName;`;
  document.querySelector("body").addEventListener("click", function () {
    // dòng lệnh chính
    result.innerText = document.activeElement.tagName;
  });
}
function documentAddEventListener(e) {
  var result = document.getElementById("result");
  document.getElementById("buttonDA").innerText = "Button ĐÃ ĐƯỢC GÁN SỰ KIỆN";
  result.innerText = "Không có kết quả để in ra, chỉ thêm sự kiện vào nút trên cùng";
  document.getElementById("statement").innerText = `document.getElementById("buttonDA").addEventListener("click", function (e) {
      alert("ĐÂY LÀ DÒNG CODE TRONG SỰ KIỆN ĐÃ ĐƯỢC THỰC THI");
    });`;
  // dòng lệnh chính
  document.getElementById("buttonDA").addEventListener("click", function (e) {
    alert("ĐÂY LÀ DÒNG CODE TRONG SỰ KIỆN ĐÃ ĐƯỢC THỰC THI");
  });
}
