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
(function () {
  var id = [ "kichthuoc", "vitri"];
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
