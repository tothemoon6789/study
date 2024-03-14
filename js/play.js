"use strict";
var result = document.getElementById("result");
var statement = document.getElementById("statement");
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
function window_document_createAttribute() {
    var style = window.document.createAttribute("style");
    window.document.getElementById("result").innerText = style;
    window.document.getElementById("statement").innerText = 'var style = window.document.createAttribute("style");'
}
function window_document_createComment() {
    var comment = window.document.createComment("Du lieu nay khong the hien ra ben ngoai");
    window.document.querySelector("#result").innerHTML = comment;
    window.document.querySelector("#result").appendChild(comment) = comment;
    window.document.querySelector("#statement").innerHTML = `var comment = window.document.createComment("Du lieu nay khong the hien ra ben ngoai");`;
}
function window_document_createDocumentFragment() {
    var arr = ["chuoi", "xoai", "oi"];
    var frag = window.document.createDocumentFragment();
    arr.forEach(element => {
        var li = window.document.createElement("li");
        li.textContent = element;
        frag.appendChild(li);
    });
    var ul = window.document.createElement("ul");
    ul.appendChild(frag);
    // output
    window.document.getElementById("result").appendChild(ul);
    window.document.getElementById("statement").innerText = "var frag = window.document.createDocumentFragment();";
}
function window_document_createElement() {
    var e = document.createElement("input");
    e.value = "Du lieu mau";
    result.appendChild(e);
    statement.innerText = 'var e = document.createElement("input");';
}
function window_document_createEvent() {
    var event = window.document.createEvent("MouseEvent");
    event.initMouseEvent("mouseover", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    document.getElementById("window_document_createEvent_id").dispatchEvent(event);
    result.innerText = "NO RESULT TO SHOW";
    statement.innerText = 'var event = window.document.createEvent("MouseEvent");'
}
function window_document_createTextNode() {
    var textNode = window.document.createTextNode("PHAM NGOC LINH");
    result.appendChild(textNode);
    statement.innerText = 'var textNode = window.document.createTextNode("PHAM NGOC LINH");';
}
function window_document_defaultView() {
    var defaultView = window.document.defaultView;
    result.innerText = "đây là đối tượng window, log ra cũng chỉ là 1 object window thôi";
    statement.innerText = 'var defaultView = window.document.defaultView;';
}
function window_document_designMode() {
    var designMode = window.document.designMode;
    window.document.designMode="on";
    result.innerText = designMode;
    statement.innerText = 'window.document.designMode="on";';
}
function window_document_doctype() {
    var doctype = window.document.doctype.name;
    result.innerText = doctype;
    statement.innerText = 'var doctype = window.document.doctype.name;';
}
function window_document_documentElement() {
    var i = window.document.documentElement;
    result.innerText = i;
    result.insertAdjacentText("beforeend","Log ra để xem !")

    statement.innerText = ' var i = window.document.documentElement;';
}
function window_document_documentURI() {
    var documentURI = window.document.documentURI;
    result.innerText = documentURI;
    statement.innerText = 'var documentURI = window.document.documentURI;';
    document.documentURI = "https://i.pravatar.cc";
    console.log(window.document);
}
function window_document_domain() {
    var domain = window.document.domain;
    result.innerText = domain;
    statement.innerText = 'var domain = window.document.domain;';
}
function window_document_forms() {
    var forms = window.document.forms;
    result.innerText = "Console log se thay";
    statement.innerText = 'var forms = window.document.forms;';
}

function window_document_hasFocus(){
    var focus = window.document.hasFocus();
    result.innerText = focus;
    statement.innerText = "var playButton = window.document.hasFocus;"
}
function window_document_head(){
    var head = window.document.head;
    result.innerText = head.outerHTML;
    statement.innerText = "var head = window.document.head;";
}
function window_document_images(){
    var images = window.document.images;
    var string = JSON.stringify(images);
    result.innerText = string;
    statement.innerText = "var images = window.document.images;";
}
function window_document_implementation(){
    var implementation = window.document.implementation;
    var string = JSON.stringify(implementation);
    result.innerText = string;
    statement.innerText = "var implementation = window.document.implementation;";
}
function window_document_importNode(){
    result.innerText = "Khong the truy cap do chinh sach bao mat";
}

function window_document_lastModified(){
 var lastModified = window.document.lastModified;
    result.innerText = lastModified;
    statement.innerText = "var lastModified = window.document.lastModified;";
}
function window_document_links(){
 var links = window.document.links;
    result.innerText = JSON.stringify(links);
    statement.innerText = "var links = window.document.links;";
}
function window_document_normalize(){
 
}
function window_document_open(){
    var myWindow = window.open();
    myWindow.document.open();
    myWindow.document.write("<h1>Hi pHMAM NGOC LINH</h1>");
    statement.innerText = "var myWindow = window.open();myWindow.document.open();";
}
function window_document_referrer(){
    var referrer = window.document.referrer;
    
    result.innerText = referrer;
    statement.innerText = "var referrer = window.document.referrer;";
}
function window_document_removeEventListener(){
    alert("xoa");
    window.document.getElementById("js47Button").removeEventListener(window_document_removeEventListener);
    
}


