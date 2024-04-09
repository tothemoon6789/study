(function () {
  "use strict";
  var heading = [
    { id: "document", text: "Document Object" },
    { id: "element", text: "Element Object" },
    { id: "event", text: "Event" },
    { id: "mouseEvent", text: "Mouse Event" },
    { id: "animationEvent", text: "Animation Event" },
    { id: "clipboardEvent", text: "Clipboard Event" },
    { id: "dragEvent", text: "Drag Event" },
  ];
  var buttons = [
    // KHU DOCUMENT
    // Lấy phần tử
    { id: "js28", id_heading: "document", order: 0, version: "dom2", text: "window.document.getElementById()" },
    { id: "js30", id_heading: "document", order: 0, version: "dom1", text: "window.document.getElementsByName()" },
    { id: "js29", id_heading: "document", order: 0, version: "dom1", text: "window.document.getElementsByClassName()" },
    { id: "js31", id_heading: "document", order: 0, version: "dom1", text: "window.document.getElementsByTagName()" },
    { id: "js43", id_heading: "document", order: 0, version: "dom1", text: "window.document.querySelector()" },
    { id: "js44", id_heading: "document", order: 0, version: "dom3", text: "window.document.querySelectorAll()" },
    { id: "js7", id_heading: "document", order: 0, version: "dom1", text: "window.document.body" },
    { id: "js33", id_heading: "document", order: 0, version: "dom3", text: "window.document.head" },
    { id: "js34", id_heading: "document", order: 0, version: "dom1", text: "window.document.images" },
    { id: "js39", id_heading: "document", order: 0, version: "dom1", text: "window.document.links" },
    { id: "js49", id_heading: "document", order: 0, version: "dom2", text: "window.document.scripts" },
    { id: "js27", id_heading: "document", order: 0, version: "dom1", text: "window.document.forms" },
    // Tạo phần tử mới
    { id: "js12", id_heading: "document", order: 0, version: "dom1", text: "window.document.createAttribute()" },
    { id: "js13", id_heading: "document", order: 0, version: "dom1", text: "window.document.createComment()" },
    { id: "js14", id_heading: "document", order: 0, version: "dom1", text: "window.document.createDocumentFragment()" },
    { id: "js15", id_heading: "document", order: 0, version: "dom1", text: "window.document.createElement()" },
    { id: "js16", id_heading: "document", order: 0, version: "dom1", text: "window.document.createEvent()" },
    { id: "js17", id_heading: "document", order: 0, version: "dom1", text: "window.document.createTextNode()" },
    // hành vi
    { id: "js2", id_heading: "document", order: 0, version: "dom2", text: "window.document.addEventListener()" },
    { id: "js47", id_heading: "document", order: 0, version: "dom2", text: "window.document.removeEventListener()" },
    { id: "js1", id_heading: "document", order: 0, version: "dom1", text: "window.document.activeELement" },
    { id: "js3", id_heading: "document", order: 0, version: "dom3", text: "window.document.adoptNode()" },
    { id: "js4", id_heading: "document", order: 0, version: "deprecated", text: "window.document.anchors" },
    { id: "js5", id_heading: "document", order: 0, version: "deprecated", text: "window.document.applet" },
    { id: "js10", id_heading: "document", order: 0, version: "dom1", text: "window.document.close()" },
    { id: "js6", id_heading: "document", order: 0, version: "dom4", text: "window.document.baseURI" },
    { id: "js8", id_heading: "document", order: 0, version: "deprecated", text: "window.document.charset" },
    { id: "js9", id_heading: "document", order: 0, version: "dom3", text: "window.document.characterSet" },
    { id: "js11", id_heading: "document", order: 0, version: "dom2", text: "window.document.cookie" },
    { id: "js18", id_heading: "document", order: 0, version: "dom1", text: "window.document.defaultView" },
    { id: "js19", id_heading: "document", order: 0, version: "dom1", text: "window.document.designMode" },
    { id: "js20", id_heading: "document", order: 0, version: "dom1", text: "window.document.doctype" },
    { id: "js21", id_heading: "document", order: 0, version: "dom1", text: "window.document.documentElement" },
    { id: "js22", id_heading: "document", order: 0, version: "dom1", text: "window.document.documentURI" },
    { id: "js23", id_heading: "document", order: 0, version: "dom2", text: "window.document.domain" },
    { id: "js24", id_heading: "document", order: 0, version: "deprecated", text: "window.document.domConfig" },
    { id: "js25", id_heading: "document", order: 0, version: "deprecated", text: "window.document.embeds" },
    { id: "js26", id_heading: "document", order: 0, version: "deprecated", text: "window.document.execCommand()" },
    { id: "js32", id_heading: "document", order: 0, version: "dom1", text: "window.document.hasFocus()" },
    { id: "js35", id_heading: "document", order: 0, version: "dom1", text: "window.document.implementation" },
    { id: "js36", id_heading: "document", order: 0, version: "dom2", text: "window.document.importNode()" },
    { id: "js37", id_heading: "document", order: 0, version: "deprecated", text: "window.document.inputEncoding" },
    { id: "js38", id_heading: "document", order: 0, version: "dom3", text: "window.document.lastModified" },
    { id: "js40", id_heading: "document", order: 0, version: "dom2", text: "window.document.normalize()" },
    { id: "js41", id_heading: "document", order: 0, version: "deprecated", text: "window.document.mormalizeDocument()" },
    { id: "js42", id_heading: "document", order: 0, version: "dom1", text: "window.document.open()" },
    { id: "js45", id_heading: "document", order: 0, version: "dom3", text: "window.document.readyState" },
    { id: "js46", id_heading: "document", order: 0, version: "dom3", text: "window.document.referrer" },
    { id: "js48", id_heading: "document", order: 0, version: "deprecated", text: "window.document.renameNode()()" },
    { id: "js50", id_heading: "document", order: 0, version: "deprecated", text: "window.document.strictErrorChecking" },
    { id: "js52", id_heading: "document", order: 0, version: "dom1", text: "window.document.URL" },
    { id: "js51", id_heading: "document", order: 0, version: "dom2", text: "window.document.title" },
    { id: "js54", id_heading: "document", order: 0, version: "dom1", text: "window.document.writeln()" },
    { id: "js53", id_heading: "document", order: 0, version: "dom1", text: "window.document.write()" },

    // KHU ELEMENT

    // đám con
    { id: "js90", id_heading: "element", order: 0, version: "dom1", text: "element.parentNode" }, // Lấy phần tử HTML cha
    { id: "js91", id_heading: "element", order: 0, version: "dom1", text: "element.parentElement" }, // Lấy phần tử HTML cha
    { id: "js93", id_heading: "element", order: 0, version: "dom1", text: "element.previousSibling" }, // Lấy phần tử HTML cha
    { id: "js92", id_heading: "element", order: 0, version: "dom1", text: "element.previousElementSibling" }, // Lấy phần tử HTML cha
    { id: "js97", id_heading: "element", order: 0, version: "dom1", text: "element.nextSibling" }, // Lấy phần tử HTML cha
    { id: "js96", id_heading: "element", order: 0, version: "dom1", text: "element.nextElementSibling" }, // Lấy phần tử HTML cha
    { id: "js60", id_heading: "element", order: 0, version: "dom1", text: "element.childNodes" }, // lấy danh sách nút con
    { id: "js61", id_heading: "element", order: 0, version: "dom1", text: "element.children" }, // lấy danh sách element con
    { id: "js75", id_heading: "element", order: 0, version: "dom1", text: "element.firstChild" }, // lấy nút con đầu tiên
    { id: "js76", id_heading: "element", order: 0, version: "dom3", text: "element.firstElementChild" }, // lấy element con đầu tiên
    { id: "js95", id_heading: "element", order: 0, version: "dom1", text: "element.lastChild" }, // Lấy phần tử HTML cha
    { id: "js94", id_heading: "element", order: 0, version: "dom1", text: "element.lastElementChild" }, // Lấy phần tử HTML cha
    { id: "js85", id_heading: "element", order: 0, version: "dom1", text: "element.getElementsByClassName()" }, // tìm danh sách Element
    { id: "js86", id_heading: "element", order: 0, version: "dom1", text: "element.getElementsByTagName()" }, // tìm danh sách Element
    { id: "js98", id_heading: "element", order: 0, version: "dom1", text: "element.querySelector()" }, // đếm số element con
    { id: "js99", id_heading: "element", order: 0, version: "dom1", text: "element.querySelectorAll()" }, // đếm số element con
    { id: "js70", id_heading: "element", order: 0, version: "dom1", text: "element.closest()" }, // tìm phần tử gần nhất có bộ chọn đáp ứng tiêu chí
    
    // đám thuộc tính
    { id: "js57", id_heading: "element", order: 0, version: "dom1", text: "element.attributes" }, // lấy danh sách thuộc tính,
    { id: "js78", id_heading: "element", order: 0, version: "dom1", text: "element.getAttribute()" }, // lấy giá trị 1 thuộc tính,
    { id: "js84", id_heading: "element", order: 0, version: "dom1", text: "element.getAttributeNode()" }, // lấy 1 đối tượng thuộc tính
    { id: "js87", id_heading: "element", order: 0, version: "dom2", text: "element.hasAttribute()" }, // hỏi có thuộc tính này không,
    { id: "js88", id_heading: "element", order: 0, version: "dom2", text: "element.hasAttributes()" }, // hỏi có thuộc tính NÀO không,
    { id: "js63", id_heading: "element", order: 0, version: "dom1", text: "element.className" }, // lấy giá trị của class
    { id: "js62", id_heading: "element", order: 0, version: "dom1", text: "element.classList" }, // lấy giá trị của class dạng danh sách
    { id: "js103", id_heading: "element", order: 0, version: "dom1", text: "element.id" }, // lấy giá trị của class dạng danh sách
    { id: "js111", id_heading: "element", order: 0, version: "dom1", text: "element.title" }, // lấy giá trị của class dạng danh sách
    { id: "js112", id_heading: "element", order: 0, version: "dom1", text: "element.textContent" }, // lấy giá trị của class dạng danh sách
    { id: "js113", id_heading: "element", order: 0, version: "dom1", text: "element.tagName" }, // lấy giá trị của class dạng danh sách
    { id: "js114", id_heading: "element", order: 0, version: "dom1", text: "element.tabIndex" }, // lấy giá trị của class dạng danh sách
    { id: "js115", id_heading: "element", order: 0, version: "dom1", text: "element.style" }, // lấy giá trị của class dạng danh sách

    // tác động
    { id: "js55", id_heading: "element", order: 0, version: "dom1", text: "element.accessKey" }, // gán hoặc lấy nút bấm truy cập nhanh
    { id: "js58", id_heading: "element", order: 0, version: "dom2", text: "element.blur()" }, // xoá tập trung lên đối tượng
    { id: "js77", id_heading: "element", order: 0, version: "dom2", text: "element.focus()" }, // tập trung tại element có khả năng tập trung như input
    { id: "js64", id_heading: "element", order: 0, version: "dom1", text: "element.click()" }, // bấm ảo lên đối tượng element
    { id: "js73", id_heading: "element", order: 0, version: "dom1", text: "element.contentEditable" }, // bật tắc khả năng có thể viết được của content trong element
    { id: "js89", id_heading: "element", order: 0, version: "dom2", text: "element.hasChildNodes()" }, // hỏi có đứa con nào không
    { id: "js59", id_heading: "element", order: 0, version: "dom3", text: "element.childElementCount" }, // đếm số element con
    // xoá
    { id: "js100", id_heading: "element", order: 0, version: "dom1", text: "element.remove()" }, 
    { id: "js101", id_heading: "element", order: 0, version: "dom1", text: "element.removeChild()" }, 
    // thêm
    { id: "js83", id_heading: "element", order: 0, version: "dom1", text: "element.outerHTML" }, // lấy hoặc gán html cho phần tử
    { id: "js104", id_heading: "element", order: 0, version: "dom1", text: "element.innerHTML" }, // lấy hoặc gán html cho phần tử
    { id: "js105", id_heading: "element", order: 0, version: "dom1", text: "element.outerText" }, // lấy hoặc gán html cho phần tử
    { id: "js106", id_heading: "element", order: 0, version: "dom1", text: "element.innerText" }, // lấy hoặc gán html cho phần tử
    { id: "js102", id_heading: "element", order: 0, version: "dom1", text: "element.replaceChild()" }, 
    { id: "js107", id_heading: "element", order: 0, version: "dom1", text: "element.insertAdjacentElement()" }, 
    { id: "js108", id_heading: "element", order: 0, version: "dom1", text: "element.insertAdjacentHTML()" }, 
    { id: "js109", id_heading: "element", order: 0, version: "dom1", text: "element.insertAdjacentText()" }, 
    { id: "js110", id_heading: "element", order: 0, version: "dom1", text: "element.insertBefore()" }, 
    { id: "js56", id_heading: "element", order: 0, version: "dom1", text: "element.appendChild()" }, // thêm 1 e hoặc node vào cuối thẻ đóng của 1 e
    { id: "js69", id_heading: "element", order: 0, version: "dom1", text: "element.cloneNode()" }, // copy nút để lại nút cũ

    // vị trí và kích thước
    { id: "js79", id_heading: "element", order: 0, version: "dom1", text: "element.getBoundingClientRect()" }, // lấy đối tượng RectDOM Object chứa x,y,left,top,bottom,right,offsetWidth, offetHeight
    { id: "js68", id_heading: "element", order: 0, version: "dom1", text: "element.clientLeft" }, // lấy độ rộng viền trái
    { id: "js67", id_heading: "element", order: 0, version: "dom1", text: "element.clientTop" }, // lấy độ rộng viền trên
    { id: "js65", id_heading: "element", order: 0, version: "dom1", text: "element.clientWidth" }, // lấy khoảng cách giữa viền trái phải
    { id: "js66", id_heading: "element", order: 0, version: "dom1", text: "element.clientHeight" }, // lấy khoảng cách giữa viền trên dưới
    { id: "js80", id_heading: "element", order: 0, version: "dom1", text: "element.offsetLeft" }, // lấy khoảng cách giữa viền trái phải của offset Parent và offset child
    { id: "js81", id_heading: "element", order: 0, version: "dom1", text: "element.offsetTop" }, // lấy khoảng cách giữa viền trên dưới của offset Parent và offset child
    { id: "js82", id_heading: "element", order: 0, version: "dom1", text: "element.offsetParent" }, // lấy element Offset cha

    // tìm phần tử trong thẻ
    
    
    // thiết lập khác
    { id: "js71", id_heading: "element", order: 0, version: "dom1", text: "element.compareDocumentPosition()" }, // kiểm tra vị tri tương đối của 2 element
    { id: "js72", id_heading: "element", order: 0, version: "dom1", text: "element.contains()" }, // kiểm tra 1 đứa element có phải là con cháu của 1 đứa element không
    { id: "js74", id_heading: "element", order: 0, version: "dom1", text: "element.dir" }, // thiết lập hướng chữ

    // mouse event
    { id: "js116", id_heading: "mouseEvent", order: 0, version: "dom1", text: "element.onmouseover" }, 
    { id: "js117", id_heading: "mouseEvent", order: 0, version: "dom1", text: "element.onmouseenter" }, 
    { id: "js118", id_heading: "mouseEvent", order: 0, version: "dom1", text: "element.onmousemove" }, 
    { id: "js119", id_heading: "mouseEvent", order: 0, version: "dom1", text: "element.onmousedown" }, 
    { id: "js120", id_heading: "mouseEvent", order: 0, version: "dom1", text: "element.onmouseup" }, 
    { id: "js121", id_heading: "mouseEvent", order: 0, version: "dom1", text: "element.onclick" }, 
    { id: "js122", id_heading: "mouseEvent", order: 0, version: "dom1", text: "element.ondoubleclick" }, 
    { id: "js123", id_heading: "mouseEvent", order: 0, version: "dom1", text: "element.oncontextmenu" }, 
    { id: "js124", id_heading: "mouseEvent", order: 0, version: "dom1", text: "element.onmouseout" }, 
    { id: "js125", id_heading: "mouseEvent", order: 0, version: "dom1", text: "element.onmouseleave" }, 
    // animation Event
    { id: "js126", id_heading: "animationEvent", order: 0, version: "dom1", text: "element.onanimationstart" }, 
    { id: "js127", id_heading: "animationEvent", order: 0, version: "dom1", text: "element.onanimationinteration" }, 
    { id: "js128", id_heading: "animationEvent", order: 0, version: "dom1", text: "element.onanimationstart" }, 
    // clipboard event
    { id: "js129", id_heading: "clipboardEvent", order: 0, version: "dom1", text: "element.oncopy" }, 
    { id: "js130", id_heading: "clipboardEvent", order: 0, version: "dom1", text: "element.oncut" }, 
    { id: "js131", id_heading: "clipboardEvent", order: 0, version: "dom1", text: "element.onpaste" }, 
    // drag event
    { id: "js132", id_heading: "dragEvent", order: 0, version: "dom1", text: "element.ondragstart" }, 
    { id: "js133", id_heading: "dragEvent", order: 0, version: "dom1", text: "element.ondrag" }, 
    { id: "js134", id_heading: "dragEvent", order: 0, version: "dom1", text: "element.ondragenter" }, 
    { id: "js135", id_heading: "dragEvent", order: 0, version: "dom1", text: "element.ondragover" }, 
    { id: "js136", id_heading: "dragEvent", order: 0, version: "dom1", text: "element.ondragleave" }, 
    { id: "js137", id_heading: "dragEvent", order: 0, version: "dom1", text: "element.ondrop" }, 
    { id: "js138", id_heading: "dragEvent", order: 0, version: "dom1", text: "element.ondragend" }, 
    // event
    { id: "js139", id_heading: "event", order: 0, version: "dom1", text: "element.onloadstart" }, 
    { id: "js140", id_heading: "event", order: 0, version: "dom1", text: "element.ondurationchange" }, 
    { id: "js141", id_heading: "event", order: 0, version: "dom1", text: "element.onloadedmetadata" }, 
    { id: "js142", id_heading: "event", order: 0, version: "dom1", text: "element.onloadeddata" }, 
    { id: "js143", id_heading: "event", order: 0, version: "dom1", text: "element.onprogress" }, 
    { id: "js144", id_heading: "event", order: 0, version: "dom1", text: "element.oncanplay" }, 
    { id: "js145", id_heading: "event", order: 0, version: "dom1", text: "element.oncanplaythrough" }, 
    { id: "js146", id_heading: "event", order: 0, version: "dom1", text: "element.onplay" }, 
    { id: "js147", id_heading: "event", order: 0, version: "dom1", text: "element.onplaying" }, 
    { id: "js148", id_heading: "event", order: 0, version: "dom1", text: "element.ontimeupdate" }, 
    { id: "js149", id_heading: "event", order: 0, version: "dom1", text: "element.onended" }, 
  ];
  // MAX 97
  // SORT
  //   var newButtons = buttons.sort((a, b) => {
  //     let fa = a.id.toLowerCase(),
  //         fb = b.id.toLowerCase();

  //     if (fa < fb) {
  //         return -1;
  //     }
  //     if (fa > fb) {
  //         return 1;
  //     }
  //     return 0;
  // });
  // console.log(newButtons);

  document.getElementById("total") &&
    (function () {
      document.getElementById("total").innerText = buttons.length;
    })();
  var control_area = document.getElementById("control");
  heading.forEach((header) => {
    var ul = window.document.createElement("ul");
    var theHeading = window.document.createElement("h5");
    var node = window.document.createTextNode(header.text);
    theHeading.appendChild(node);
    buttons.forEach((btn) => {
      btn.id_heading === header.id &&
        (function () {
          var li = window.document.createElement("li");
          var button = window.document.createElement("button");
          var buttonNode = window.document.createTextNode(btn.text);
          var div = document.getElementById(btn.id);
          div.insertAdjacentHTML("afterbegin", `<h3>${btn.text}</h3>`);
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
        })();
    });
    var item = document.createElement("div");
    item.className = "item";
    item.appendChild(theHeading);
    item.appendChild(ul);
    control_area.appendChild(item);
  });
})();
