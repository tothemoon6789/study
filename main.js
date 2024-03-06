// gan su kien cho toan bo button
buttons = document.querySelectorAll("li > button");
buttons.forEach((e) => {
  e.addEventListener("click", function () {
    clear();
    var demo = document.getElementById("demo");
    demo.innerText = "Nhà báo – Nhà thơ Phạm Quốc Cường sinh năm 1980 tại Nam Đàn – Nghệ An, bút danh: Quốc Đô, Quốc Minh, Trà My, TQC, QM, HM. Phạm Quốc Cường hiện là Trưởng ban Pháp luật – Bạn đọc, thuộc Báo Pháp luật Việt Nam.Các tập thơ đã xuất bản: Viết cho người tình mơ; Anh chờ qua trăng; Tình hoa; Tình yêu còn lại; Khúc ca tình đời; Tuyển chọn 100 bài thơ tình và đời; Bước đời. Phạm Quốc Cường cũng là tác giả của nhiều ca khúc được yêu thíchCác giải thưởng: Tham gia chỉ đạo, biên tập, tổ chức xuất bản loạt bài của nhóm phóng viên Báo điện tử Pháp luật Việt Nam (Phapluatplus.vn) được trao giải C giải Báo chí Quốc gia năm 2016; Giải thưởng báo chí toàn quốc phòng, chống tham nhũng, tiêu cực các năm 2020-2021, 2022-2023; Giải thưởng báo chí toàn quốc về Quốc hội và Hội đồng nhân dân (Giải Diên Hồng, tháng 1 năm 2024); Các giải thưởng Báo chí Bộ, ngành, địa phương; Bằng khen, giấy khen của các Bộ, ngành Trung ương, và nhiều giải thưởng khác về văn hóa, nghệ thuật, thể thao.";
    demo.className = e.innerText;
    demo.scrollIntoView();
  });
});

// xoa, in lai
(function () {
  "use strict";
  var htmlText = "Nhà báo – Nhà thơ Phạm Quốc Cường sinh năm 1980 tại Nam Đàn – Nghệ An, bút danh: Quốc Đô, Quốc Minh, Trà My, TQC, QM, HM. Phạm Quốc Cường hiện là Trưởng ban Pháp luật – Bạn đọc, thuộc Báo Pháp luật Việt Nam.Các tập thơ đã xuất bản: Viết cho người tình mơ; Anh chờ qua trăng; Tình hoa; Tình yêu còn lại; Khúc ca tình đời; Tuyển chọn 100 bài thơ tình và đời; Bước đời. Phạm Quốc Cường cũng là tác giả của nhiều ca khúc được yêu thíchCác giải thưởng: Tham gia chỉ đạo, biên tập, tổ chức xuất bản loạt bài của nhóm phóng viên Báo điện tử Pháp luật Việt Nam (Phapluatplus.vn) được trao giải C giải Báo chí Quốc gia năm 2016; Giải thưởng báo chí toàn quốc phòng, chống tham nhũng, tiêu cực các năm 2020-2021, 2022-2023; Giải thưởng báo chí toàn quốc về Quốc hội và Hội đồng nhân dân (Giải Diên Hồng, tháng 1 năm 2024); Các giải thưởng Báo chí Bộ, ngành, địa phương; Bằng khen, giấy khen của các Bộ, ngành Trung ương, và nhiều giải thưởng khác về văn hóa, nghệ thuật, thể thao.";
  var htmlOver = "OVERGAME";
  var htmlFlex = `<div>mot</div><div>hai</div><div>ba</div><div>bon</div>`;
  var htmlFloat = `<img src="https://i.pravatar.cc" width="100px" height="100px" style="object-fit: cover;" alt="">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sit quisquam deleniti officia reprehenderit eum quae impedit doloremque hic? Consectetur rerum magni repellendus delectus harum fugit fuga sapiente, odio impedit dolores incidunt quo beatae voluptatum. Labore necessitatibus aliquid ipsam facere. Earum consectetur vitae saepe totam! Beatae, nobis suscipit saepe rem consequuntur soluta sunt at illum atque omnis assumenda maxime labore repudiandae exercitationem! Quo praesentium possimus adipisci in labore tempora est. Quos nisi rem velit. Accusantium cum ut suscipit iusto, autem fuga tenetur vel necessitatibus nihil! Eos laboriosam repudiandae dolorum dignissimos voluptatum eveniet nihil vero aspernatur accusantium. Atque iste sapiente vero!</p>`;
  var htmlTextalign = `<img src="https://i.pravatar.cc" width="100px" height="100px" style="object-fit: cover;" alt="">`;
  var htmlList = `<ul>
  <li>Lorem ipsum dolor sit</li>
  <li>Lorem ipsum dolor sit</li>
  <li>Lorem ipsum dolor sit</li>
  <li>Lorem ipsum dolor sit</li>
  <li>Lorem ipsum dolor sit</li>
  <li>Lorem ipsum dolor sit</li>
  <li>Lorem ipsum dolor sit</li>
  <li>Lorem ipsum dolor sit</li>
  <li>Lorem ipsum dolor sit</li>
</ul>
`;
  var htmlImg = `<img src="https://i.pravatar.cc" alt="avatar">`;
  var c = [
    { id: "justify-content", note: "", warning: "<strong>Warning !</strong> justify-content Chỉ hoạt động khi còn không gian", html: htmlFlex },
    { id: "flexGrow", note: "", warning: "", html: htmlFlex },
    { id: "flexShrink", note: "", warning: "", html: htmlFlex },
    { id: "align-items", note: "", warning: "", html: htmlFlex },
    { id: "flex-wrap", note: "", warning: "", html: htmlFlex },
    { id: "flex-direction", note: "", warning: "", html: htmlFlex },
    { id: "align-self", note: "", warning: "", html: htmlFlex },
    { id: "align-content", note: "", warning: "<strong>Warning !</strong>: align-content Chỉ hoạt động khi <strong>còn không gian</strong> và <strong>xuống dòng</strong> trong flex hoặc grid", html: htmlFlex },
    { id: "scrollbar-color", note: "", warning: "<strong>Warning !</strong>: scrollbar-color Chỉ hoạt động trong firefox", html: htmlText },
    { id: "webkit-scroolbar-thumb", note: "<strong>Note</strong> ::-webkit-scrollbar-thumb chỉ hoạt động khi set width cho ::-webkit-scrollbar-thumb", warning: "<strong>Warning !</strong>: ::-webkit-scroolbar-thumb có màu là <strong>background</strong> chứ không phải background-color", html: htmlText },
    { id: "webkit-scroolbar-track", note: "<strong>Note</strong> ::-webkit-scrollbar-track chỉ hoạt động khi set width cho ::-webkit-scrollbar-track", warning: "<strong>Warning !</strong>: ::-webkit-scroolbar-track có màu là <strong>background</strong> chứ không phải background-color", html: htmlText },
    { id: "transition", note: "", warning: "", html: htmlText },
    { id: "float", note: "", warning: "", html: htmlFloat },
    { id: "text-align", note: "", warning: "", html: htmlTextalign },
    { id: "list-style", note: "", warning: "", html: htmlList },
    { id: "list-style-type", note: "<strong>Note:</strong>data:image/svg+xml;utf8", warning: "", html: htmlList },
    { id: "list-style-position", note: "", warning: "", html: htmlList },
    { id: "list-style-image", note: "<strong>Note:</strong>data:image/svg+xml;utf8", warning: "<strong>WARNING ! </strong> Có -webkit", html: htmlList },
    { id: "mask-image", note: "<strong>Note:</strong>Hiểu như nghĩa đen, thêm mặt nạ từ phần tử cha", warning: "<strong>WARNING ! </strong> Có -webkit", html: htmlImg },
    { id: "mask-repeat", note: "", warning: "<strong>WARNING ! </strong> Có -webkit", html: htmlImg },
    { id: "mask-size", note: "<strong>Note:</strong> % kích thước của phần tử mặt nạ cha", warning: "<strong>WARNING ! </strong> Có -webkit", html: htmlImg },
    { id: "mask-origin", note: "", warning: "<strong>WARNING ! </strong> Có -webkit", html: htmlImg },
    { id: "mask-position", note: "", warning: "<strong>WARNING ! </strong> Có -webkit", html: htmlImg },
    { id: "mask-position-x", note: "", warning: "<strong>WARNING ! </strong> KHÔNG CHUẨN, KHÔNG SỬ DỤNG", html: htmlOver },
    { id: "mask-position-y", note: "", warning: "<strong>WARNING ! </strong> KHÔNG CHUẨN, KHÔNG SỬ DỤNG", html: htmlOver },
    { id: "mask-mode", note: "", warning: "<strong>WARNING ! </strong> Thằng này thay đổi độ sáng, ko rõ ràng j hết", html: htmlOver },
    { id: "outline", note: "", warning: "", html: htmlText },
  ];
  c.forEach(function (e) {
    document.getElementById(e.id).addEventListener("click", function () {
      flex(e);
    });
  });
  function flex(e) {
    clear();
    var demo = document.getElementById("demo");
    demo.innerHTML = e.html;
    e.note !== ""
      ? (function () {
          document.getElementById("note").innerHTML = e.note;
          document.getElementById("note").classList.add("show");
        })()
      : (function () {})();
    e.wraning !== ""
      ? (function () {
          document.getElementById("warning").innerHTML = e.warning;
        })()
      : (function () {})();
  }
})();

// chuyen doi giua cac tab
(function () {
  var id = ["kichthuoc", "kieu", "vitri", "mausac", "chuyendong"];
  var control = [];
  id.forEach((e) => {
    control.push("control" + e);
  });
  control.forEach(function (e, i) {
    var ele = document.getElementById(e);
    if (ele !== null) {
      ele.addEventListener("click", function () {
        id.forEach(function (e) {
          document.getElementById(e).classList.remove("show");
        });
        index = document.getElementById(id[i]);
        index.classList.add("show");
      });
    }
  });
})();
// xoa 2 dong not va warning
function clear() {
  document.getElementById("note").innerText = "";
  document.getElementById("warning").innerText = "";
}
// in ra tong so button
(function () {
  "use strit";
  var total = document.querySelectorAll(".container button");
  document.getElementById("total").innerText = total.length;
})();
// copy script test css
(function () {
  var element = "body";
  document.getElementById("input-copy-script-test").style.border = "10px solid red";
  document.getElementById("input-copy-script-test").onchange= function (e) {
    element = e.target.value;
  };
  document.getElementById("copy-script-test").addEventListener("click", copyScriptTestCss);
  function copyScriptTestCss() {
    
    
    
    const script = `
  var css = \`
    <style>
      .border {
        animation: myborder 1s infinite;
        border-width: 1px;
        margin:1px;
        box-sizing:border-box;
        border-style: dotted;
      }
    </style>
  \`;
  document.querySelector("head").insertAdjacentHTML("afterbegin", css);
      var all = document.querySelectorAll("${element}  *");
      all.forEach((element, index) => {
        element.classList.add("border");
        var mot = Math.floor(Math.random()*10);
    var hai = Math.floor(Math.random()*10);
    var ba = Math.floor(Math.random()*10);
    var bon = Math.floor(Math.random()*10);
    var nam = Math.floor(Math.random()*10);
    var sau = Math.floor(Math.random()*10);
    var color = mot.toString()+hai.toString()+ba.toString()+bon.toString()+nam.toString()+sau.toString();
        element.style.borderColor = "#" + color;
        
        
        console.log(element.tagName);
      });
  
`;
    navigator.clipboard.writeText(script);
  }
})();
