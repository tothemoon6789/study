buttons = document.querySelectorAll("li > button");

buttons.forEach((e) => {
  e.addEventListener("click", function () {
    var demo = document.getElementById("demo");
    demo.innerText = "Nhà báo – Nhà thơ Phạm Quốc Cường sinh năm 1980 tại Nam Đàn – Nghệ An, bút danh: Quốc Đô, Quốc Minh, Trà My, TQC, QM, HM. Phạm Quốc Cường hiện là Trưởng ban Pháp luật – Bạn đọc, thuộc Báo Pháp luật Việt Nam.Các tập thơ đã xuất bản: Viết cho người tình mơ; Anh chờ qua trăng; Tình hoa; Tình yêu còn lại; Khúc ca tình đời; Tuyển chọn 100 bài thơ tình và đời; Bước đời. Phạm Quốc Cường cũng là tác giả của nhiều ca khúc được yêu thíchCác giải thưởng: Tham gia chỉ đạo, biên tập, tổ chức xuất bản loạt bài của nhóm phóng viên Báo điện tử Pháp luật Việt Nam (Phapluatplus.vn) được trao giải C giải Báo chí Quốc gia năm 2016; Giải thưởng báo chí toàn quốc phòng, chống tham nhũng, tiêu cực các năm 2020-2021, 2022-2023; Giải thưởng báo chí toàn quốc về Quốc hội và Hội đồng nhân dân (Giải Diên Hồng, tháng 1 năm 2024); Các giải thưởng Báo chí Bộ, ngành, địa phương; Bằng khen, giấy khen của các Bộ, ngành Trung ương, và nhiều giải thưởng khác về văn hóa, nghệ thuật, thể thao.";
    demo.className = e.innerText;
    demo.scrollIntoView();
  });
});
document.getElementById("flexGrow").addEventListener("click", function () {
  var html = `<div>mot</div><div>hai</div><div>ba</div><div>bon</div>`;
  var demo = document.getElementById("demo");
  demo.innerHTML = html;
});
document.getElementById("flexShrink").addEventListener("click", function () {
  var html = `<div>mot</div><div>hai</div><div>ba</div><div>bon</div>`;
  var demo = document.getElementById("demo");
  demo.innerHTML = html;
});
document.getElementById("float").addEventListener("click", function () {
  var html = `<img src="https://i.pravatar.cc" width="100px" height="100px" style="object-fit: cover;" alt="">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sit quisquam deleniti officia reprehenderit eum quae impedit doloremque hic? Consectetur rerum magni repellendus delectus harum fugit fuga sapiente, odio impedit dolores incidunt quo beatae voluptatum. Labore necessitatibus aliquid ipsam facere. Earum consectetur vitae saepe totam! Beatae, nobis suscipit saepe rem consequuntur soluta sunt at illum atque omnis assumenda maxime labore repudiandae exercitationem! Quo praesentium possimus adipisci in labore tempora est. Quos nisi rem velit. Accusantium cum ut suscipit iusto, autem fuga tenetur vel necessitatibus nihil! Eos laboriosam repudiandae dolorum dignissimos voluptatum eveniet nihil vero aspernatur accusantium. Atque iste sapiente vero!</p>`;
  var demo = document.getElementById("demo");
  demo.innerHTML = html;
});
(function () {
  "use strict";
  var c = ["justify-content", "align-items", "flex-wrap","flex-direction"];
  c.forEach(function (e) {
    document.getElementById(e).addEventListener("click", flex);
  });
  function flex(e) {
    var html = `<div>mot</div><div>hai</div><div>ba</div><div>bon</div>`;
    var demo = document.getElementById("demo");
    demo.innerHTML = html;
  }
})();
(function () {
  var id = ["kichthuoc", "vitri"];
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
