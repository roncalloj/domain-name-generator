let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

var doms = "";
for (var i of pronoun) {
  for (var j of adj) {
    for (var k of noun) {
      doms += "<li>" + i + j + k + ".com</li>";
    }
  }
}
document.getElementById("dominios").innerHTML = doms;
//console.log("Any string");
