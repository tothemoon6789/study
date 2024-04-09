(function () {
  var phan_loai = [
    { id: "btn-type-text", heading: "Text" },
    { id: "btn-type-background", heading: "Background" },
    { id: "btn-type-mask", heading: "Mask" },
    { id: "btn-type-offset", heading: "Offset" },
    { id: "btn-type-padding", heading: "Padding" },
    { id: "btn-type-inset", heading: "Inset" },
    { id: "btn-type-scroll", heading: "Scroll" },
    { id: "btn-type-border", heading: "Border" },
    { id: "btn-type-dimension", heading: "Width" },
    { id: "btn-type-outline", heading: "Outline" },
    { id: "btn-type-margin", heading: "Margin" },
    { id: "btn-type-position", heading: "Position" },
    { id: "btn-type-display", heading: "Display" },
    { id: "btn-type-float", heading: "Float" },
    { id: "btn-type-flex", heading: "Flex" },
    { id: "btn-type-grid", heading: "Grid" },
    { id: "btn-type-transform", heading: "Transform" },
    { id: "btn-type-transition", heading: "Transition" },
    { id: "btn-type-animation", heading: "Animation" },
    { id: "btn-type-column", heading: "Column" },
    { id: "btn-type-list", heading: "List" },
    { id: "btn-type-another", heading: "Another" },
    { id: "btn-type-value", heading: "Value" },
  ];
  var nut_bam = [
    {
      id: "color",
      class: "btn btn-outline-primary btn-type-text",
      text: "color",
    },
    {
      id: "font-family",
      class: "btn btn-outline-primary btn-type-text",
      text: "font-family",
    },
    {
      id: "font-size",
      class: "btn btn-outline-primary btn-type-text",
      text: "font-size",
    },
    {
      id: "font-style",
      class: "btn btn-outline-primary btn-type-text",
      text: "font-style",
    },
    {
      id: "font-weight",
      class: "btn btn-outline-primary btn-type-text",
      text: "font-weight",
    },
    {
      id: "text-transform",
      class: "btn btn-outline-primary btn-type-text",
      text: "text-transform",
    },
    {
      id: "text-shadow",
      class: "btn btn-outline-primary btn-type-text",
      text: "text-shadow",
    },
    {
      id: "vertical-align",
      class: "btn btn-warning btn-type-text",
      text: "vertical-align",
    },
    {
      id: "text-decoration",
      class: "btn btn-outline-primary btn-type-text",
      text: "text-decoration",
    },
    
    {
      id: "text-decoration-line",
      class: "btn btn-outline-primary btn-type-text",
      text: "text-decoration-line",
    },
    {
      id: "text-decoration-thickness",
      class: "btn btn-outline-primary btn-type-text",
      text: "text-decoration-thickness",
    },
    {
      id: "text-decoration-style",
      class: "btn btn-outline-primary btn-type-text",
      text: "text-decoration-style",
    },
    {
      id: "text-decoration-color",
      class: "btn btn-outline-primary btn-type-text",
      text: "text-decoration-color",
    },
    {
      id: "text-orientation",
      class: "btn btn-outline-primary btn-type-text",
      text: "text-orientation",
    },
    {
      id: "text-underline-offset",
      class: "btn btn-outline-primary btn-type-text",
      text: "text-underline-offset",
    },
    {
      id: "text-underline-position",
      class: "btn btn-outline-primary btn-type-text",
      text: "text-underline-position",
    },
    
    {
      id: "text-emphasis",
      class: "btn btn-outline-primary btn-type-text",
      text: "text-emphasis",
    },
    {
      id: "text-emphasis-style",
      class: "btn btn-outline-primary btn-type-text",
      text: "text-emphasis-style",
    },

    {
      id: "text-emphasis-color",
      class: "btn btn-outline-primary btn-type-text",
      text: "text-emphasis-color",
    },
    {
      id: "text-emphasis-position",
      class: "btn btn-outline-primary btn-type-text",
      text: "text-emphasis-position",
    },
    
    {
      id: "text-indent",
      class: "btn btn-outline-primary btn-type-text",
      text: "text-indent",
    },
    {
      id: "letter-spacing",
      class: "btn btn-outline-primary btn-type-text",
      text: "letter-spacing",
    },
    {
      id: "text-justify",
      class: "btn btn-outline-primary btn-type-text",
      text: "text-justify",
    },
    {
      id: "white-space",
      class: "btn btn-outline-primary btn-type-text",
      text: "white-space",
    },
    {
      id: "text-overflow",
      class: "btn btn-outline-primary btn-type-text",
      text: "text-overflow",
    },
    
    {
      id: "text-align-last",
      class: "btn btn-outline-primary btn-type-text",
      text: "text-align-last",
    },
    
    {
      id: "word-wrap",
      class: "btn btn-warning btn-type-text",
      text: "word-wrap",
    },
    {
      id: "word-spacing",
      class: "btn btn-warning btn-type-text",
      text: "word-spacing",
    },
    {
      id: "word-break",
      class: "btn btn-warning btn-type-text",
      text: "word-break",
    },
    
    {
      id: "user-select",
      class: "btn btn-warning btn-type-text",
      text: "user-select",
    },
    {
      id: "background",
      class: "btn btn-outline-primary btn-type-background",
      text: "background",
    },
    {
      id: "background-color",
      class: "btn btn-outline-primary btn-type-background",
      text: "background-color",
    },
    {
      id: "background-image",
      class: "btn btn-outline-primary btn-type-background",
      text: "background-image",
    },
    {
      id: "background-size",
      class: "btn btn-outline-primary btn-type-background",
      text: "background-size",
    },
    {
      id: "background-attachment",
      class: "btn btn-outline-primary btn-type-background",
      text: "background-attachment",
    },
    {
      id: "background-blend-mode",
      class: "btn btn-outline-primary btn-type-background",
      text: "background-blend-mode",
    },
    {
      id: "background-clip",
      class: "btn btn-outline-primary btn-type-background",
      text: "background-clip",
    },
    {
      id: "background-origin",
      class: "btn btn-outline-primary btn-type-background",
      text: "background-origin",
    },
    {
      id: "background-repeat",
      class: "btn btn-outline-primary btn-type-background",
      text: "background-repeat",
    },
    {
      id: "background-position",
      class: "btn btn-outline-primary btn-type-background",
      text: "background-position",
    },
    {
      id: "background-position-x",
      class: "btn btn-outline-primary btn-type-background",
      text: "background-position-x",
    },
    {
      id: "background-position-y",
      class: "btn btn-outline-primary btn-type-background",
      text: "background-position-y",
    },
    {
      id: "background-image-linear",
      class: "btn btn-outline-primary btn-type-background",
      text: "background-image-linear",
    },
    {
      id: "background-image-conic",
      class: "btn btn-outline-primary btn-type-background",
      text: "background-image-conic",
    },
    {
      id: "width",
      class: "btn btn-outline-primary btn-type-dimension",
      text: "width",
    },
    {
      id: "height",
      class: "btn btn-outline-primary btn-type-dimension",
      text: "height",
    },
    {
      id: "min-width",
      class: "btn btn-outline-primary btn-type-dimension",
      text: "min-width",
    },
    {
      id: "min-height",
      class: "btn btn-outline-primary btn-type-dimension",
      text: "min-height",
    },
    {
      id: "max-width",
      class: "btn btn-outline-primary btn-type-dimension",
      text: "max-width",
    },
    {
      id: "max-height",
      class: "btn btn-outline-primary btn-type-dimension",
      text: "max-height",
    },
    {
      id: "aspect-ratio",
      class: "btn btn-outline-primary btn-type-dimension",
      text: "aspect-ratio",
    },
    {
      id: "box-sizing",
      class: "btn btn-outline-primary btn-type-dimension",
      text: "box-sizing",
    },
    {
      id: "border",
      class: "btn btn-outline-primary btn-type-border",
      text: "border",
    },
    {
      id: "border-width",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-width",
    },
    {
      id: "border-style",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-style",
    },
    {
      id: "border-color",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-color",
    },
    {
      id: "border-top",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-top",
    },
    {
      id: "border-top-width",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-top-width",
    },
    {
      id: "border-top-style",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-top-style",
    },
    
    {
      id: "border-top-color",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-top-color",
    },
    
    {
      id: "border-right",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-right",
    },
    {
      id: "border-right-style",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-right-style",
    },

    {
      id: "border-right-color",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-right-color",
    },
    {
      id: "border-right-width",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-right-width",
    },
    
    {
      id: "border-bottom",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-bottom",
    },
    {
      id: "border-bottom-width",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-bottom-width",
    },
    {
      id: "border-bottom-style",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-bottom-style",
    },

    {
      id: "border-bottom-color",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-bottom-color",
    },
    {
      id: "border-left",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-left",
    },
    {
      id: "border-left-width",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-left-width",
    },

    {
      id: "border-left-style",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-left-style",
    },
    {
      id: "border-left-color",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-left-color",
    },
    {
      id: "border-block",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-block",
    },
    {
      id: "border-block-width",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-block-width",
    },
    {
      id: "border-block-color",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-block-color",
    },
    {
      id: "border-block-style",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-block-style",
    },
    {
      id: "border-block-start",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-block-start",
    },
    {
      id: "border-block-start-width",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-block-start-width",
    },
    {
      id: "border-block-start-color",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-block-start-color",
    },
    {
      id: "border-block-start-style",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-block-start-style",
    },
    {
      id: "border-block-end",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-block-end",
    },
    {
      id: "border-block-end-width",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-block-end-width",
    },

    {
      id: "border-block-end-color",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-block-end-color",
    },

    {
      id: "border-block-end-style",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-block-end-style",
    },
    
    
    
    
    
    {
      id: "border-inline-end",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-inline-end",
    },
    
    
    {
      id: "border-inline-end-style",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-inline-end-style",
    },
    
    
    
    {
      id: "border-inline-end-width",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-inline-end-width",
    },
    {
      id: "border-inline-end-color",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-inline-end-color",
    },
    
    {
      id: "border-inline",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-inline",
    },
    {
      id: "border-inline-color",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-inline-color",
    },

    {
      id: "border-inline-style",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-inline-style",
    },
    {
      id: "border-inline-width",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-inline-width",
    },
    {
      id: "border-inline-start",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-inline-start",
    },
    {
      id: "border-inline-start-color",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-inline-start-color",
    },

    {
      id: "border-inline-start-style",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-inline-start-style",
    },

    {
      id: "border-inline-start-width",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-inline-start-width",
    },
    
    {
      id: "border-start-start-radius",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-start-start-radius",
    },
    {
      id: "border-start-end-radius",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-start-end-radius",
    },
    {
      id: "border-end-start-radius",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-end-start-radius",
    },
    {
      id: "border-end-end-radius",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-end-end-radius",
    },
    {
      id: "border-image",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-image",
    },
    {
      id: "border-image-source",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-image-source",
    },
    {
      id: "border-image-width",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-image-width",
    },
    {
      id: "border-image-outset",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-image-outset",
    },
    {
      id: "border-image-slice",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-image-slice",
    },
    {
      id: "border-image-repeat",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-image-repeat",
    },
    {
      id: "border-radius",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-radius",
    },
    {
      id: "border-top-left-radius",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-top-left-radius",
    },
    {
      id: "border-top-right-radius",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-top-right-radius",
    },
    {
      id: "border-bottom-right-radius",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-bottom-right-radius",
    },
    {
      id: "border-bottom-left-radius",
      class: "btn btn-outline-primary btn-type-border",
      text: "border-bottom-left-radius",
    },
    {
      id: "padding",
      class: "btn btn-outline-primary btn-type-padding",
      text: "padding",
    },
    {
      id: "padding-top",
      class: "btn btn-outline-primary btn-type-padding",
      text: "padding-top",
    },
    {
      id: "padding-right",
      class: "btn btn-outline-primary btn-type-padding",
      text: "padding-right",
    },
    {
      id: "padding-bottom",
      class: "btn btn-outline-primary btn-type-padding",
      text: "padding-bottom",
    },
    {
      id: "padding-left",
      class: "btn btn-outline-primary btn-type-padding",
      text: "padding-left",
    },
    {
      id: "padding-block",
      class: "btn btn-outline-primary btn-type-padding",
      text: "padding-block",
    },
    {
      id: "padding-block-start",
      class: "btn btn-outline-primary btn-type-padding",
      text: "padding-block-start",
    },
    {
      id: "padding-block-end",
      class: "btn btn-outline-primary btn-type-padding",
      text: "padding-block-end",
    },
    {
      id: "padding-inline",
      class: "btn btn-outline-primary btn-type-padding",
      text: "padding-inline",
    },
    {
      id: "padding-inline-start",
      class: "btn btn-outline-primary btn-type-padding",
      text: "padding-inline-start",
    },
    {
      id: "padding-inline-end",
      class: "btn btn-outline-primary btn-type-padding",
      text: "padding-inline-end",
    },
    {
      id: "outline",
      class: "btn btn-outline-primary btn-type-outline",
      text: "outline",
    },
    {
      id: "outline-color",
      class: "btn btn-outline-primary btn-type-outline",
      text: "outline-color",
    },
    {
      id: "outline-style",
      class: "btn btn-outline-primary btn-type-outline",
      text: "outline-style",
    },
    {
      id: "outline-width",
      class: "btn btn-outline-primary btn-type-outline",
      text: "outline-width",
    },
    {
      id: "outline-offset",
      class: "btn btn-warning btn-type-outline",
      text: "outline-offset",
    },
    {
      id: "margin",
      class: "btn btn-danger btn-type-margin",
      text: "margin",
    },
    {
      id: "margin-top",
      class: "btn btn-outline-primary btn-type-margin",
      text: "margin-top",
    },
    {
      id: "margin-left",
      class: "btn btn-outline-primary btn-type-margin",
      text: "margin-left",
    },
    {
      id: "margin-right",
      class: "btn btn-outline-primary btn-type-margin",
      text: "margin-right",
    },
    {
      id: "margin-bottom",
      class: "btn btn-outline-primary btn-type-margin",
      text: "margin-bottom",
    },
    {
      id: "margin-block",
      class: "btn btn-outline-primary btn-type-margin",
      text: "margin-block",
    },
    {
      id: "margin-inline",
      class: "btn btn-outline-primary btn-type-margin",
      text: "margin-inline",
    },
    {
      id: "margin-block-start",
      class: "btn btn-outline-primary btn-type-margin",
      text: "margin-block-start",
    },
    {
      id: "margin-block-end",
      class: "btn btn-outline-primary btn-type-margin",
      text: "margin-block-end",
    },
    {
      id: "margin-inline-start",
      class: "btn btn-outline-primary btn-type-margin",
      text: "margin-inline-start",
    },
    {
      id: "margin-inline-end",
      class: "btn btn-outline-primary btn-type-margin",
      text: "margin-inline-end",
    },
    {
      id: "text-align",
      class: "btn btn-outline-primary btn-type-margin",
      text: "text-align",
    },
    {
      id: "relative",
      class: "btn btn-outline-primary btn-type-position",
      text: "relative",
    },
    {
      id: "position",
      class: "btn btn-outline-primary btn-type-position",
      text: "position",
    },
    {
      id: "fixed",
      class: "btn btn-outline-primary btn-type-position",
      text: "fixed",
    },
    {
      id: "absolute",
      class: "btn btn-outline-primary btn-type-position",
      text: "absolute",
    },
    {
      id: "left",
      class: "btn btn-outline-primary btn-type-position",
      text: "left",
    },
    {
      id: "top",
      class: "btn btn-outline-primary btn-type-position",
      text: "top",
    },
    {
      id: "right",
      class: "btn btn-outline-primary btn-type-position",
      text: "right",
    },
    {
      id: "bottom",
      class: "btn btn-outline-primary btn-type-position",
      text: "bottom",
    },
    {
      id: "z-index",
      class: "btn btn-outline-primary btn-type-position",
      text: "z-index",
    },
    {
      id: "display-inline",
      class: "btn btn-outline-primary btn-type-display",
      text: "display-inline",
    },
    {
      id: "display-inline-block",
      class: "btn btn-outline-primary btn-type-display",
      text: "display-inline-block",
    },
    {
      id: "display-block",
      class: "btn btn-outline-primary btn-type-display",
      text: "display-block",
    },
    {
      id: "display-flex",
      class: "btn btn-outline-primary btn-type-display",
      text: "display-flex",
    },
    {
      id: "display-grid",
      class: "btn btn-danger btn-type-display",
      text: "display-grid",
    },
    {
      id: "display-table",
      class: "btn btn-danger btn-type-display",
      text: "display-table",
    },
    {
      id: "display-inline-flex",
      class: "btn btn-danger btn-type-display",
      text: "display-inline-flex",
    },
    {
      id: "display-inline-grid",
      class: "btn btn-danger btn-type-display",
      text: "display-inline-grid",
    },
    {
      id: "display-inline-table",
      class: "btn btn-danger btn-type-display",
      text: "display-inline-table",
    },
    {
      id: "flex",
      class: "btn btn-warning btn-type-flex multiple",
      text: "flex",
    },
    {
      id: "flex-grow",
      class: "btn btn-warning btn-type-flex multiple",
      text: "flex-grow",
    },
    {
      id: "row-gap",
      class: "btn btn-warning btn-type-flex multiple",
      text: "row-gap",
    },
    {
      id: "flex-shrink",
      class: "btn btn-warning btn-type-flex multiple",
      text: "flex-shrink",
    },
    {
      id: "flex-basis",
      class: "btn btn-warning btn-type-flex multiple",
      text: "flex-basis",
    },
    {
      id: "flex-flow",
      class: "btn btn-warning btn-type-flex multiple",
      text: "flex-flow",
    },
    {
      id: "justify-content",
      class: "btn btn-outline-primary btn-type-flex",
      text: "justify-content",
    },
    {
      id: "align-items",
      class: "btn btn-outline-primary btn-type-flex multiple",
      text: "align-items",
    },
    {
      id: "flex-wrap",
      class: "btn btn-outline-primary btn-type-flex multiple",
      text: "flex-wrap",
    },
    {
      id: "flex-direction",
      class: "btn btn-outline-primary btn-type-flex multiple",
      text: "flex-direction",
    },
    {
      id: "align-self",
      class: "btn btn-outline-primary btn-type-flex multiple",
      text: "align-self",
    },
    {
      id: "align-content",
      class: "btn btn-warning btn-type-flex multiple",
      text: "align-content",
    },
    {
      id: "float",
      class: "btn btn-outline-primary btn-type-float",
      text: "float",
    },
    {
      id: "clear",
      class: "btn btn-outline-primary btn-type-float",
      text: "clear",
    },
    {
      id: "transform",
      class: "btn btn-outline-primary btn-type-transform",
      text: "transform",
    },
    {
      id: "transform-origin",
      class: "btn btn-outline-primary btn-type-transform",
      text: "transform-origin",
    },
    {
      id: "transform-style",
      class: "btn btn-outline-primary btn-type-transform",
      text: "transform-style",
    },
    {
      id: "rotate",
      class: "btn btn-outline-primary btn-type-transform",
      text: "rotate",
    },
    {
      id: "scale",
      class: "btn btn-outline-primary btn-type-transform",
      text: "scale",
    },
    {
      id: "translate",
      class: "btn btn-outline-primary btn-type-transform",
      text: "translate",
    },
    {
      id: "mask-image",
      class: "btn btn-outline-primary btn-type-mask",
      text: "mask-image",
    },
    {
      id: "mask-repeat",
      class: "btn btn-outline-primary btn-type-mask multiple",
      text: "mask-repeat",
    },
    {
      id: "mask-size",
      class: "btn btn-warning btn-type-mask",
      text: "mask-size",
    },
    {
      id: "mask-origin",
      class: "btn btn-warning btn-type-mask",
      text: "mask-origin",
    },
    {
      id: "mask-position",
      class: "btn btn-warning btn-type-mask",
      text: "mask-position",
    },
    {
      id: "mask-position-x",
      class: "btn btn-warning btn-type-mask",
      text: "mask-position-x",
    },
    {
      id: "mask-position-y",
      class: "btn btn-warning btn-type-mask",
      text: "mask-position-y",
    },
    {
      id: "mask-mode",
      class: "btn btn-warning btn-type-mask",
      text: "mask-mode",
    },
    {
      id: "inset",
      class: "btn btn-outline-primary btn-type-inset",
      text: "inset",
    },
    {
      id: "inset-block",
      class: "btn btn-outline-primary btn-type-inset",
      text: "inset-block",
    },
    {
      id: "inset-block-start",
      class: "btn btn-outline-primary btn-type-inset",
      text: "inset-block-start",
    },
    {
      id: "inset-block-end",
      class: "btn btn-outline-primary btn-type-inset",
      text: "inset-block-end",
    },
    {
      id: "inset-inline",
      class: "btn btn-outline-primary btn-type-inset",
      text: "inset-inline",
    },
    {
      id: "inset-inline-start",
      class: "btn btn-outline-primary btn-type-inset",
      text: "inset-inline-start",
    },
    {
      id: "inset-inline-end",
      class: "btn btn-outline-primary btn-type-inset",
      text: "inset-inline-end",
    },
    {
      id: "column-count",
      class: "btn btn-outline-primary btn-type-column",
      text: "column-count",
    },
    {
      id: "column-fill",
      class: "btn btn-outline-primary btn-type-column multiple",
      text: "column-fill",
    },
    {
      id: "column-gap",
      class: "btn btn-outline-primary btn-type-column multiple",
      text: "column-gap",
    },
    {
      id: "column-rule",
      class: "btn btn-outline-primary btn-type-column multiple",
      text: "column-rule",
    },
    {
      id: "column-rule-color",
      class: "btn btn-outline-primary btn-type-column multiple",
      text: "column-rule-color",
    },
    {
      id: "column-rule-style",
      class: "btn btn-outline-primary btn-type-column multiple",
      text: "column-rule-style",
    },
    {
      id: "column-rule-width",
      class: "btn btn-outline-primary btn-type-column multiple",
      text: "column-rule-width",
    },
    {
      id: "column-span",
      class: "btn btn-outline-primary btn-type-column multiple",
      text: "column-span",
    },
    {
      id: "column-width",
      class: "btn btn-outline-primary btn-type-column",
      text: "column-width",
    },
    {
      id: "columns",
      class: "btn btn-outline-primary btn-type-column multiple",
      text: "columns",
    },
    {
      id: "list-style",
      class: "btn btn-outline-primary btn-type-list",
      text: "list-style",
    },
    {
      id: "list-style-type",
      class: "btn btn-outline-primary btn-type-list",
      text: "list-style-type",
    },
    {
      id: "list-style-position",
      class: "btn btn-outline-primary btn-type-list",
      text: "list-style-position",
    },
    {
      id: "list-style-image",
      class: "btn btn-outline-primary btn-type-list",
      text: "list-style-image",
    },
    {
      id: "webkit-scrollbar",
      class: "btn btn-outline-primary btn-type-scroll multiple",
      text: "webkit-scrollbar",
    },
    {
      id: "webkit-scrollbar-thumb",
      class: "btn btn-outline-primary btn-type-scroll multiple",
      text: "webkit-scrollbar-thumb",
    },
    {
      id: "webkit-scrollbar-track",
      class: "btn btn-outline-primary btn-type-scroll multiple",
      text: "webkit-scrollbar-track",
    },
    {
      id: "webkit-scrollbar-corner",
      class: "btn btn-warning btn-type-scroll multiple",
      text: "webkit-scrollbar-corner",
    },
    {
      id: "animation",
      class: "btn btn-outline-primary btn-type-animation",
      text: "animation",
    },
    {
      id: "animation-direction",
      class: "btn btn-outline-primary btn-type-animation",
      text: "animation-direction",
    },
    {
      id: "animation-timing-function",
      class: "btn btn-outline-primary btn-type-animation",
      text: "animation-timing-function",
    },
    {
      id: "animation-delay",
      class: "btn btn-outline-primary btn-type-animation",
      text: "animation-delay",
    },
    {
      id: "animation-fill-mode",
      class: "btn btn-outline-primary btn-type-animation",
      text: "animation-fill-mode",
    },
    {
      id: "animation-name",
      class: "btn btn-outline-primary btn-type-animation",
      text: "animation-name",
    },
    {
      id: "animation-duration",
      class: "btn btn-outline-primary btn-type-animation",
      text: "animation-duration",
    },
    {
      id: "animation-play-state",
      class: "btn btn-outline-primary btn-type-animation",
      text: "animation-play-state",
    },
    {
      id: "animation-iteration-count",
      class: "btn btn-outline-primary btn-type-animation",
      text: "animation-iteration-count",
    },
    {
      id: "transition",
      class: "btn btn-outline-primary btn-type-transition multiple",
      text: "transition",
    },
    {
      id: "transition-delay",
      class: "btn btn-outline-primary btn-type-transition",
      text: "transition-delay",
    },
    {
      id: "transition-duration",
      class: "btn btn-outline-primary btn-type-transition",
      text: "transition-duration",
    },
    {
      id: "transition-timing-function",
      class: "btn btn-outline-primary btn-type-transition",
      text: "transition-timing-function",
    },
    {
      id: "transition-property",
      class: "btn btn-outline-primary btn-type-transition",
      text: "transition-property",
    },
    {
      id: "box-shadow",
      class: "btn btn-outline-primary btn-type-another",
      text: "box-shadow",
    },
    {
      id: "media",
      class: "btn btn-outline-primary btn-type-another",
      text: "@media",
    },
    {
      id: "opacity",
      class: "btn btn-outline-primary btn-type-another",
      text: "opacity",
    },
    {
      id: "all",
      class: "btn btn-outline-primary btn-type-another",
      text: "all",
    },
    {
      id: "accent-color",
      class: "btn btn-outline-primary btn-type-another",
      text: "accent-color",
    },
    {
      id: "backdrop-filter",
      class: "btn btn-outline-primary btn-type-another",
      text: "backdrop-filter",
    },
    {
      id: "backface-visibility",
      class: "btn btn-outline-primary btn-type-another",
      text: "backface-visibility",
    },
    {
      id: "block-size",
      class: "btn btn-outline-primary btn-type-another",
      text: "block-size",
    },
    {
      id: "border-collapse",
      class: "btn btn-outline-primary btn-type-another",
      text: "border-collapse",
    },
    {
      id: "box-decoration-break",
      class: "btn btn-warning btn-type-another",
      text: "box-decoration-break",
    },
    {
      id: "box-reflect",
      class: "btn btn-warning btn-type-another",
      text: "box-reflect",
    },
    {
      id: "caption-side",
      class: "btn btn-outline-primary btn-type-another",
      text: "caption-side",
    },
    {
      id: "caret-color",
      class: "btn btn-outline-primary btn-type-another",
      text: "caret-color",
    },
    {
      id: "clip",
      class: "btn btn-outline-primary btn-type-another deprecated",
      text: "clip",
    },
    {
      id: "clip-path",
      class: "btn btn-outline-primary btn-type-another",
      text: "clip-path",
    },
    {
      id: "visibility",
      class: "btn btn-outline-primary btn-type-another",
      text: "visibility",
    },
    {
      id: "content",
      class: "btn btn-outline-primary btn-type-another",
      text: "content",
    },
    {
      id: "cursor",
      class: "btn btn-outline-primary btn-type-another",
      text: "cursor",
    },
    {
      id: "writing-mode",
      class: "btn btn-outline-primary btn-type-another",
      text: "writing-mode",
    },

    {
      id: "grid",
      class: "btn btn-danger btn-type-grid",
      text: "grid",
    },
    {
      id: "grid-gap",
      class: "btn btn-danger btn-type-grid",
      text: "grid-gap",
    },
    {
      id: "grid-area",
      class: "btn btn-danger btn-type-grid",
      text: "grid-area",
    },
    {
      id: "grid-auto-columns",
      class: "btn btn-danger btn-type-grid",
      text: "grid-auto-columns",
    },
    {
      id: "grid-auto-flow",
      class: "btn btn-danger btn-type-grid",
      text: "grid-auto-flow",
    },
    {
      id: "grid-auto-rows",
      class: "btn btn-danger btn-type-grid",
      text: "grid-auto-rows",
    },
    {
      id: "grid-template",
      class: "btn btn-danger btn-type-grid",
      text: "grid-template",
    },
    {
      id: "grid-template-columns",
      class: "btn btn-danger btn-type-grid",
      text: "grid-template-columns",
    },
    {
      id: "grid-template-areas",
      class: "btn btn-danger btn-type-grid",
      text: "grid-template-areas",
    },
    {
      id: "grid-template-rows",
      class: "btn btn-danger btn-type-grid",
      text: "grid-template-rows",
    },
    
    {
      id: "justify-items",
      class: "btn btn-danger btn-type-grid",
      text: "justify-items",
    },
    {
      id: "justify-self",
      class: "btn btn-danger btn-type-grid",
      text: "justify-self",
    },
    {
      id: "grid-column",
      class: "btn btn-danger btn-type-grid",
      text: "grid-column",
    },
    {
      id: "grid-column-start",
      class: "btn btn-danger btn-type-grid",
      text: "grid-column-start",
    },
    {
      id: "grid-column-end",
      class: "btn btn-danger btn-type-grid",
      text: "grid-column-end",
    },
    {
      id: "grid-column-gap",
      class: "btn btn-danger btn-type-grid",
      text: "grid-column-gap",
    },
    {
      id: "grid-row",
      class: "btn btn-danger btn-type-grid",
      text: "grid-row",
    },
    {
      id: "grid-row-start",
      class: "btn btn-danger btn-type-grid",
      text: "grid-row-start",
    },
    {
      id: "grid-row-end",
      class: "btn btn-danger btn-type-grid",
      text: "grid-row-end",
    },
    {
      id: "grid-row-gap",
      class: "btn btn-danger btn-type-grid",
      text: "grid-row-gap",
    },
    {
      id: "clamp",
      class: "btn btn-danger btn-type-value",
      text: "clamp",
    },
    {
      id: "minmax",
      class: "btn btn-danger btn-type-value",
      text: "minmax",
    },
    
    {
      id: "offset",
      class: "btn btn-danger btn-type-offset",
      text: "offset",
    },
    {
      id: "offset-path",
      class: "btn btn-danger btn-type-offset",
      text: "offset-path",
    },
    {
      id: "offset-distance",
      class: "btn btn-danger btn-type-offset",
      text: "offset-distance",
    },
    {
      id: "offset-anchor",
      class: "btn btn-danger btn-type-offset",
      text: "offset-anchor",
    },
    {
      id: "offset-rotate",
      class: "btn btn-danger btn-type-offset",
      text: "offset-rotate",
    },
    {
      id: "scroll-snap-type",
      class: "btn btn-danger btn-type-scroll",
      text: "scroll-snap-type",
    },
    {
      id: "scroll-snap-align",
      class: "btn btn-danger btn-type-scroll",
      text: "scroll-snap-align",
    },
    {
      id: "scroll-snap-stop",
      class: "btn btn-danger btn-type-scroll",
      text: "scroll-snap-stop",
    },
    {
      id: "scroll-padding",
      class: "btn btn-danger btn-type-scroll",
      text: "scroll-padding",
    },
    {
      id: "scroll-padding-top",
      class: "btn btn-danger btn-type-scroll",
      text: "scroll-padding-top",
    },
    
    {
      id: "scroll-padding-bottom",
      class: "btn btn-danger btn-type-scroll",
      text: "scroll-padding-bottom",
    },
    {
      id: "scroll-padding-left",
      class: "btn btn-danger btn-type-scroll",
      text: "scroll-padding-left",
    },
    {
      id: "scroll-padding-right",
      class: "btn btn-danger btn-type-scroll",
      text: "scroll-padding-right",
    },
    {
      id: "scroll-padding-block",
      class: "btn btn-danger btn-type-scroll",
      text: "scroll-padding-block",
    },
    {
      id: "scroll-padding-block-start",
      class: "btn btn-danger btn-type-scroll",
      text: "scroll-padding-block-start",
    },
    {
      id: "scroll-padding-block-end",
      class: "btn btn-danger btn-type-scroll",
      text: "scroll-padding-block-end",
    },
    {
      id: "scroll-padding-inline",
      class: "btn btn-danger btn-type-scroll",
      text: "scroll-padding-inline",
    },
    {
      id: "scroll-padding-inline-start",
      class: "btn btn-danger btn-type-scroll",
      text: "scroll-padding-inline-start",
    },
    {
      id: "scroll-padding-inline-end",
      class: "btn btn-danger btn-type-scroll",
      text: "scroll-padding-inline-end",
    },
    {
      id: "scroll-margin",
      class: "btn btn-danger btn-type-scroll",
      text: "scroll-margin",
    },
    {
      id: "scroll-margin-top",
      class: "btn btn-danger btn-type-scroll",
      text: "scroll-margin-top",
    },
    
    {
      id: "scroll-margin-bottom",
      class: "btn btn-danger btn-type-scroll",
      text: "scroll-margin-bottom",
    },
    {
      id: "scroll-margin-left",
      class: "btn btn-danger btn-type-scroll",
      text: "scroll-margin-left",
    },
    {
      id: "scroll-margin-right",
      class: "btn btn-danger btn-type-scroll",
      text: "scroll-margin-right",
    },
    {
      id: "scroll-margin-block",
      class: "btn btn-danger btn-type-scroll",
      text: "scroll-margin-block",
    },
    {
      id: "scroll-margin-block-start",
      class: "btn btn-danger btn-type-scroll",
      text: "scroll-margin-block-start",
    },
    {
      id: "scroll-margin-block-end",
      class: "btn btn-danger btn-type-scroll",
      text: "scroll-margin-block-end",
    },
    {
      id: "scroll-margin-inline",
      class: "btn btn-danger btn-type-scroll",
      text: "scroll-margin-inline",
    },
    {
      id: "scroll-margin-inline-start",
      class: "btn btn-danger btn-type-scroll",
      text: "scroll-margin-inline-start",
    },
    {
      id: "scroll-margin-inline-end",
      class: "btn btn-danger btn-type-scroll",
      text: "scroll-margin-inline-end",
    },
    {
      id: "border-spacing",
      class: "btn btn-danger btn-type-another",
      text: "border-spacing",
    },
    {
      id: "display",
      class: "btn btn-danger btn-type-display",
      text: "display",
    },
    

  ];

  var control_area = document.getElementById("control-area");
  var control_column = document.getElementById("control-column");
  // thêm danh sách cho control area
  phan_loai.forEach((loai) => {
    var ul = document.createElement("ul");
    var h6 = document.createElement("h6");
    var button = document.createElement("button");
    button.className = "btn btn-default btn-sm";
    button.innerText = loai.heading;
    var TEXT_NODE_HEADING = document.createTextNode(loai.heading);
    h6.appendChild(TEXT_NODE_HEADING);
    ul.appendChild(h6);
    ul.id = loai.id;
    control_area.appendChild(ul);
    control_column.appendChild(button);
    button.addEventListener("click",function(){
      document.getElementById(loai.id).scrollIntoView()
    })
  });
  // thêm toàn bộ nút cho control area
  phan_loai.forEach((loai) => {
    nut_bam.forEach((nut) => {
      nut.class.includes(loai.id) &&
        (function () {
          var li = document.createElement("li");
          var btn = document.createElement("button");
          btn.className = nut.class;
          btn.id = nut.id;
          var textNode = document.createTextNode(nut.text);
          btn.appendChild(textNode);
          li.appendChild(btn);
          document.getElementById(loai.id).appendChild(li);
        })();
    });
  });
})();

// gan su kien cho toan bo nút bấm
(function () {
  buttons = document.querySelectorAll("#control-area button");
  buttons.forEach((e) => {
    e.addEventListener("click", function () {
      clear();
      var control_area = document.getElementById("demo");
      control_area.innerText = "Nhà báo – Nhà thơ Phạm Quốc Cường sinh năm 1980 tại Nam Đàn – Nghệ An, bút danh: Quốc Đô, Quốc Minh, Trà My, TQC, QM, HM. Phạm Quốc Cường hiện là Trưởng ban Pháp luật – Bạn đọc, thuộc Báo Pháp luật Việt Nam.Các tập thơ đã xuất bản: Viết cho người tình mơ; Anh chờ qua trăng; Tình hoa; Tình yêu còn lại; Khúc ca tình đời; Tuyển chọn 100 bài thơ tình và đời; Bước đời. Phạm Quốc Cường cũng là tác giả của nhiều ca khúc được yêu thíchCác giải thưởng: Tham gia chỉ đạo, biên tập, tổ chức xuất bản loạt bài của nhóm phóng viên Báo điện tử Pháp luật Việt Nam (Phapluatplus.vn) được trao giải C giải Báo chí Quốc gia năm 2016; Giải thưởng báo chí toàn quốc phòng, chống tham nhũng, tiêu cực các năm 2020-2021, 2022-2023; Giải thưởng báo chí toàn quốc về Quốc hội và Hội đồng nhân dân (Giải Diên Hồng, tháng 1 năm 2024); Các giải thưởng Báo chí Bộ, ngành, địa phương; Bằng khen, giấy khen của các Bộ, ngành Trung ương, và nhiều giải thưởng khác về văn hóa, nghệ thuật, thể thao.";
      control_area.className = e.innerText;
      control_area.scrollIntoView();
      document.querySelector("#result .d-block") && document.querySelector("#result .d-block").classList.add("d-none");
      document.querySelector("#result .d-block") && document.querySelector("#result .d-block").classList.remove("d-block");
      document.querySelector('div[data-for="' + e.id + '"]').classList.add("d-block");
      document.querySelector('div[data-for="' + e.id + '"]').classList.remove("d-none");
    });
  });
})();

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
  var htmlTable = `<table>
<caption>Table 1.1 Customers</caption>
<tr>
  <th>Firstname</th>
  <th>Lastname</th>
</tr>
<tr>
  <td>Peter</td>
  <td>Griffin</td>
</tr>
<tr>
  <td>Lois</td>
  <td>Griffin</td>
</tr>
</table>`;

  var htmlImg = `<img src="https://i.pravatar.cc" alt="avatar">`;
  var htmlInset = `<div>Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit</div>`;
  var htmlColumn = "<h1>Đây là h1</h1>Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit";
  var htmlAll = `<div class="box1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, exercitationem.</div>
  <div class="box2">Lorem ipsum dolor sit amet.</div>
  <div class="box3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>`;
  var htmlAccentColor = `<input type="checkbox" name="" id="">
  <input type="radio" name="" id="">
  <input type="range" name="" id="">
  <input type="text" name="" id="">`;
  var htmlBoxDecorationBreak = '<span class="ex1">CSS<br>is<br>easy<br>to learn</span>';
  var htmlCaretColor = '<input type="text" />';
  var c = [
    { id: "justify-content", note: "", warning: "<strong>Warning !</strong> justify-content Chỉ hoạt động khi còn không gian", html: htmlFlex, multiple: false },
    { id: "flex-grow", note: "", warning: "", html: htmlFlex, multiple: true },
    { id: "flex-shrink", note: "", warning: "", html: htmlFlex, multiple: true },
    { id: "align-items", note: "", warning: "", html: htmlFlex, multiple: true },
    { id: "flex-wrap", note: "", warning: "", html: htmlFlex, multiple: true },
    { id: "flex-direction", note: "", warning: "", html: htmlFlex, multiple: true },
    { id: "align-self", note: "", warning: "", html: htmlFlex, multiple: true },
    { id: "align-content", note: "", warning: "<strong>Warning !</strong>: align-content Chỉ hoạt động khi <strong>còn không gian</strong> và <strong>xuống dòng</strong> trong flex hoặc grid", html: htmlFlex, multiple: true },
    { id: "scrollbar-color", note: "", warning: "<strong>Warning !</strong>: scrollbar-color Chỉ hoạt động trong firefox", html: htmlText, multiple: true },
    { id: "webkit-scroolbar-thumb", note: "<strong>Note</strong> ::-webkit-scrollbar-thumb chỉ hoạt động khi set width cho ::-webkit-scrollbar-thumb", warning: "<strong>Warning !</strong>: ::-webkit-scroolbar-thumb có màu là <strong>background</strong> chứ không phải background-color", html: htmlText, multiple: true },
    { id: "webkit-scroolbar-track", note: "<strong>Note</strong> ::-webkit-scrollbar-track chỉ hoạt động khi set width cho ::-webkit-scrollbar-track", warning: "<strong>Warning !</strong>: ::-webkit-scroolbar-track có màu là <strong>background</strong> chứ không phải background-color", html: htmlText, multiple: true },
    { id: "transition", note: "", warning: "", html: htmlText, multiple: true },
    { id: "float", note: "", warning: "", html: htmlFloat, multiple: false },
    { id: "text-align", note: "", warning: "", html: htmlTextalign, multiple: false },
    { id: "list-style", note: "", warning: "", html: htmlList, multiple: false },
    { id: "list-style-type", note: "<strong>Note:</strong>data:image/svg+xml;utf8", warning: "", html: htmlList, multiple: false },
    { id: "list-style-position", note: "", warning: "", html: htmlList, multiple: false },
    { id: "list-style-image", note: "<strong>Note:</strong>data:image/svg+xml;utf8", warning: "<strong>WARNING ! </strong> Có -webkit", html: htmlList, multiple: false },
    { id: "mask-image", note: "<strong>Note:</strong>Hiểu như nghĩa đen, thêm mặt nạ từ phần tử cha", warning: "<strong>WARNING ! </strong> Có -webkit", html: htmlImg, multiple: false },
    { id: "mask-repeat", note: "", warning: "<strong>WARNING ! </strong> Có -webkit", html: htmlImg, multiple: true },
    { id: "mask-size", note: "<strong>Note:</strong> % kích thước của phần tử mặt nạ cha", warning: "<strong>WARNING ! </strong> Có -webkit", html: htmlImg, multiple: false },
    { id: "mask-origin", note: "", warning: "<strong>WARNING ! </strong> Có -webkit", html: htmlImg, multiple: false },
    { id: "mask-position", note: "", warning: "<strong>WARNING ! </strong> Có -webkit", html: htmlImg, multiple: false },
    { id: "mask-position-x", note: "", warning: "<strong>WARNING ! </strong> KHÔNG CHUẨN, KHÔNG SỬ DỤNG", html: htmlOver, multiple: false },
    { id: "mask-position-y", note: "", warning: "<strong>WARNING ! </strong> KHÔNG CHUẨN, KHÔNG SỬ DỤNG", html: htmlOver, multiple: false },
    { id: "mask-mode", note: "", warning: "<strong>WARNING ! </strong> Thằng này thay đổi độ sáng, ko rõ ràng j hết", html: htmlOver, multiple: false },
    { id: "outline", note: "", warning: "", html: htmlText, multiple: false },
    { id: "inset", note: "<strong>Note</strong> Thằng này kiểu như thay thế cho top, right, bottom, left trong absolute và relative", warning: "<strong>WARNING !</strong> Phải set cha thành relative và có chiều cao, con là absolute", html: htmlInset, multiple: false },
    { id: "inset-block", note: "<strong>Note</strong> Thằng này kiểu như thay thế cho top, right, bottom, left trong absolute và relative", warning: "<strong>WARNING !</strong> Phải set cha thành relative và có chiều cao, con là absolute", html: htmlInset, multiple: false },
    { id: "inset-block-end", note: "<strong>Note</strong> Thằng này kiểu như thay thế cho top, right, bottom, left trong absolute và relative", warning: "<strong>WARNING !</strong> Phải set cha thành relative và có chiều cao, con là absolute", html: htmlInset, multiple: false },
    { id: "inset-block-start", note: "<strong>Note</strong> Thằng này kiểu như thay thế cho top, right, bottom, left trong absolute và relative", warning: "<strong>WARNING !</strong> Phải set cha thành relative và có chiều cao, con là absolute", html: htmlInset, multiple: false },
    { id: "inset-inline", note: "<strong>Note</strong> Thằng này kiểu như thay thế cho top, right, bottom, left trong absolute và relative", warning: "<strong>WARNING !</strong> Phải set cha thành relative và có chiều cao, con là absolute", html: htmlInset, multiple: false },
    { id: "inset-inline-end", note: "<strong>Note</strong> Thằng này kiểu như thay thế cho top, right, bottom, left trong absolute và relative", warning: "<strong>WARNING !</strong> Phải set cha thành relative và có chiều cao, con là absolute", html: htmlInset, multiple: false },
    { id: "inset-inline-start", note: "<strong>Note</strong> Thằng này kiểu như thay thế cho top, right, bottom, left trong absolute và relative", warning: "<strong>WARNING !</strong> Phải set cha thành relative và có chiều cao, con là absolute", html: htmlInset, multiple: false },
    { id: "all", note: "Thay đổi toàn bộ thuộc tính trở áp dụng lên phần tử thành kế thừa hoặc như khởi tạo  ", warning: "<strong>WARNING !</strong>", html: htmlAll, multiple: false },
    { id: "accent-color", note: "Thay đổi màu sắc của ô input khi được bấm chọn", warning: "", html: htmlAccentColor, multiple: false },
    { id: "animation-fill-mode", note: "Thay đổi áp đặt trạng thái khi kết thúc chuyển động, sẽ trở thành trạng thái đầu backwards, hay kết thúc forwards hay tuỳ ở đâu nằm ở đó như both", warning: "", html: htmlText, multiple: false },
    { id: "backdrop-filter", note: "", warning: "Cần 2 lớp chồng lên nhau, lớp trên phải có opacity và backdrop-filter ứng dụng lên lớp trên", html: htmlInset, multiple: false },
    { id: "backface-visibility", note: "Thay đổi hiển thị hay không lớp phía sau của một phần tử", warning: "", html: htmlText, multiple: false },
    { id: "block-size", note: "Thay đổi chiều cao của phần tử block, phù hợp với wrting-mode", warning: "", html: htmlText, multiple: false },
    { id: "border-collapse", note: "Thay đổi hợp nhất border trong table", warning: "", html: htmlTable, multiple: false },
    { id: "box-decoration-break", note: "", warning: "", html: htmlBoxDecorationBreak, multiple: false },
    { id: "caption-side", note: "", warning: "", html: htmlTable, multiple: false },
    { id: "caret-color", note: "", warning: "", html: htmlCaretColor, multiple: false },
  ];
  c.forEach(function (e) {
    // document.getElementById(e.id) && e.multiple === true && document.getElementById(e.id).classList.add("multiple");
    document.getElementById(e.id) &&
      document.getElementById(e.id).addEventListener("click", function () {
        flex(e);
      });
  });
  function flex(e) {
    // xoá note
    clear();
    // in nội dung
    document.getElementById("demo").innerHTML = e.html;
    // in note
    e.note !== "" &&
      (function () {
        document.getElementById("note").innerHTML = e.note;
        document.getElementById("note").classList.add("show");
      })();

    e.wraning !== "" &&
      (function () {
        document.getElementById("warning").innerHTML = e.warning;
      })();
    // in double
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
// in ra tong so button
(function () {
  "use strit";
  var total = document.querySelectorAll("#control-area button");
  document.getElementById("total").innerText = total.length;
})();
// copy script test css
(function () {
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
      var all = document.querySelectorAll("body  *");
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
// xoa 2 dong not va warning
function clear() {
  document.getElementById("note").innerText = "";
  document.getElementById("warning").innerText = "";
}
// function cho button
document.getElementById("animation-direction").onclick = function () {
  document.getElementById("demo").onanimationend = function () {
    document.getElementById("demo").style.backgroundColor = "red";
    document.getElementById("demo").style.animationDirection = "reverse";
    document.getElementById("demo").style.animationIterationCount = 2;
    document.getElementById("demo").onanimationend = function () {
      document.getElementById("demo").style.backgroundColor = "yellow";
      document.getElementById("demo").style.animationDirection = "alternate";
      document.getElementById("demo").style.animationIterationCount = 3;
      document.getElementById("demo").onanimationend = function () {
        document.getElementById("demo").style.backgroundColor = "green";
        document.getElementById("demo").style.animationDirection = "alternate-reverse";
        document.getElementById("demo").style.animationIterationCount = 5;
      };
    };
  };
};

function resizeButton(className, attributeName, attributeValue,button) {
  var buttons = document.querySelectorAll("#control-area button");
  var uls = document.querySelectorAll("#control-area ul");
  var buttons = document.querySelectorAll("#scale-button-group > button");
  for (let index = 0; index < buttons.length; index++) {
    const btn = buttons[index];
    console.log(btn);
    btn.setAttribute("clicked","false");
  }
  button.setAttribute("clicked","true");
  uls.forEach((ul) => {
    ul.className = className;
  });
  buttons.forEach((btn) => {
    btn.setAttribute(attributeName, attributeValue);
  });
}
// var a = document.querySelectorAll(".ws-table-all a");
// console.log(a)
var btnSmallDefault = document.getElementById("btn-to-small-default");
btnSmallDefault.click();
