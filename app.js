// var what = React.createElement("h1", null, "hello world");
// var where = document.getElementById("content");
// ReactDOM.render(what, where);

// var a = React.createElement(
//   "a",
//   { href: "https//www.google.com", target: "_blank", title: "google link" },
//   "Google"
// );
// var where = document.getElementById("content");
// ReactDOM.render(a, where);

var h1 = React.createElement("h1", null, "hello world");
var p = React.createElement(
  "p",
  null,
  "A quick bown fox jumps over the lazy dog"
);
var content = document.getElementById("content");

ReactDOM.render(React.createElement("div", null, h1, p), content);
