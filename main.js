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
document.getElementById("flexGrow").addEventListener("click", function () {
  clear();
  var html = `<div>mot</div><div>hai</div><div>ba</div><div>bon</div>`;
  var demo = document.getElementById("demo");
  demo.innerHTML = html;
});
document.getElementById("flexShrink").addEventListener("click", function () {
  clear();
  var html = `<div>mot</div><div>hai</div><div>ba</div><div>bon</div>`;
  var demo = document.getElementById("demo");
  demo.innerHTML = html;
});
document.getElementById("float").addEventListener("click", function () {
  clear();
  var html = `<img src="https://i.pravatar.cc" width="100px" height="100px" style="object-fit: cover;" alt="">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sit quisquam deleniti officia reprehenderit eum quae impedit doloremque hic? Consectetur rerum magni repellendus delectus harum fugit fuga sapiente, odio impedit dolores incidunt quo beatae voluptatum. Labore necessitatibus aliquid ipsam facere. Earum consectetur vitae saepe totam! Beatae, nobis suscipit saepe rem consequuntur soluta sunt at illum atque omnis assumenda maxime labore repudiandae exercitationem! Quo praesentium possimus adipisci in labore tempora est. Quos nisi rem velit. Accusantium cum ut suscipit iusto, autem fuga tenetur vel necessitatibus nihil! Eos laboriosam repudiandae dolorum dignissimos voluptatum eveniet nihil vero aspernatur accusantium. Atque iste sapiente vero!</p>`;
  var demo = document.getElementById("demo");
  demo.innerHTML = html;
});
(function () {
  "use strict";
  var c = [
    { id: "justify-content", note: "", warning: "<strong>Warning !</strong> justify-content Chỉ hoạt động khi còn không gian" },
    { id: "align-items", note: "", warning: "" },
    { id: "flex-wrap", note: "", warning: "" },
    { id: "flex-direction", note: "", warning: "" },
    { id: "align-self", note: "", warning: "" },
    { id: "align-content", note: "", warning: "<strong>Warning !</strong>: align-content Chỉ hoạt động khi <strong>còn không gian</strong> và <strong>xuống dòng</strong> trong flex hoặc grid" },
    { id: "scrollbar-color", note: "", warning: "<strong>Warning !</strong>: scrollbar-color Chỉ hoạt động trong firefox" },
    { id: "webkit-scroolbar-thumb", note: "<strong>Note</strong> ::-webkit-scrollbar-thumb chỉ hoạt động khi set width cho ::-webkit-scrollbar-thumb", warning: "<strong>Warning !</strong>: ::-webkit-scroolbar-thumb có màu là <strong>background</strong> chứ không phải background-color" },
    { id: "webkit-scroolbar-track", note: "<strong>Note</strong> ::-webkit-scrollbar-track chỉ hoạt động khi set width cho ::-webkit-scrollbar-track", warning: "<strong>Warning !</strong>: ::-webkit-scroolbar-track có màu là <strong>background</strong> chứ không phải background-color" },
  ];
  c.forEach(function (e) {
    document.getElementById(e.id).addEventListener("click", function () {
      flex(e);
    });
  });
  function flex(e) {
    clear();
    var html = `<div>mot</div><div>hai</div><div>ba</div><div>bon</div>`;
    var demo = document.getElementById("demo");
    demo.innerHTML = html;
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
(function () {
  "use strict";
  var c = [
    { id: "scrollbar-color", note: "", warning: "<strong>Warning !</strong>: scrollbar-color Chỉ hoạt động trong firefox" },
    { id: "webkit-scroolbar-thumb", note: "<strong>Note</strong> ::-webkit-scrollbar-thumb chỉ hoạt động khi set width cho ::-webkit-scrollbar-thumb", warning: "<strong>Warning !</strong>: ::-webkit-scroolbar-thumb có màu là <strong>background</strong> chứ không phải background-color" },
    { id: "webkit-scroolbar-track", note: "<strong>Note</strong> ::-webkit-scrollbar-track chỉ hoạt động khi set width cho ::-webkit-scrollbar-track", warning: "<strong>Warning !</strong>: ::-webkit-scroolbar-track có màu là <strong>background</strong> chứ không phải background-color" },
  ];
  c.forEach(function (e) {
    document.getElementById(e.id).addEventListener("click", function () {
      flex(e);
    });
  });
  function flex(e) {
    clear();
    var html = "Nhà báo – Nhà thơ Phạm Quốc Cường sinh năm 1980 tại Nam Đàn – Nghệ An, bút danh: Quốc Đô, Quốc Minh, Trà My, TQC, QM, HM. Phạm Quốc Cường hiện là Trưởng ban Pháp luật – Bạn đọc, thuộc Báo Pháp luật Việt Nam.Các tập thơ đã xuất bản: Viết cho người tình mơ; Anh chờ qua trăng; Tình hoa; Tình yêu còn lại; Khúc ca tình đời; Tuyển chọn 100 bài thơ tình và đời; Bước đời. Phạm Quốc Cường cũng là tác giả của nhiều ca khúc được yêu thíchCác giải thưởng: Tham gia chỉ đạo, biên tập, tổ chức xuất bản loạt bài của nhóm phóng viên Báo điện tử Pháp luật Việt Nam (Phapluatplus.vn) được trao giải C giải Báo chí Quốc gia năm 2016; Giải thưởng báo chí toàn quốc phòng, chống tham nhũng, tiêu cực các năm 2020-2021, 2022-2023; Giải thưởng báo chí toàn quốc về Quốc hội và Hội đồng nhân dân (Giải Diên Hồng, tháng 1 năm 2024); Các giải thưởng Báo chí Bộ, ngành, địa phương; Bằng khen, giấy khen của các Bộ, ngành Trung ương, và nhiều giải thưởng khác về văn hóa, nghệ thuật, thể thao.";
    var demo = document.getElementById("demo");
    demo.innerHTML = html;
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
(function () {
  "use strict";
  var c = [
    { id: "transition", note: "", warning: "" },
  ];
  c.forEach(function (e) {
    document.getElementById(e.id).addEventListener("click", function () {
      flex(e);
    });
  });
  function flex(e) {
    clear();
    var html = "Nhà báo – Nhà thơ Phạm Quốc Cường sinh năm 1980 tại Nam Đàn – Nghệ An, bút danh: Quốc Đô, Quốc Minh, Trà My, TQC, QM, HM. Phạm Quốc Cường hiện là Trưởng ban Pháp luật – Bạn đọc, thuộc Báo Pháp luật Việt Nam.Các tập thơ đã xuất bản: Viết cho người tình mơ; Anh chờ qua trăng; Tình hoa; Tình yêu còn lại; Khúc ca tình đời; Tuyển chọn 100 bài thơ tình và đời; Bước đời. Phạm Quốc Cường cũng là tác giả của nhiều ca khúc được yêu thíchCác giải thưởng: Tham gia chỉ đạo, biên tập, tổ chức xuất bản loạt bài của nhóm phóng viên Báo điện tử Pháp luật Việt Nam (Phapluatplus.vn) được trao giải C giải Báo chí Quốc gia năm 2016; Giải thưởng báo chí toàn quốc phòng, chống tham nhũng, tiêu cực các năm 2020-2021, 2022-2023; Giải thưởng báo chí toàn quốc về Quốc hội và Hội đồng nhân dân (Giải Diên Hồng, tháng 1 năm 2024); Các giải thưởng Báo chí Bộ, ngành, địa phương; Bằng khen, giấy khen của các Bộ, ngành Trung ương, và nhiều giải thưởng khác về văn hóa, nghệ thuật, thể thao.";
    var demo = document.getElementById("demo");
    demo.innerHTML = html;
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
(function () {
  var id = ["kichthuoc", "vitri", "mausac","chuyendong"];
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
function clear() {
  document.getElementById("note").innerText = "";
  document.getElementById("warning").innerText = "";
}
(function () {
  "use strit";
  var total = document.querySelectorAll(".container button");
  document.getElementById("total").innerText = total.length;
})();
