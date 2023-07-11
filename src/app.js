/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let domain = domainGenerator();
  for (let i = 0; i < domain.length; i++) {
    const node = document.createElement("li");
    const textnode = document.createTextNode(domain[i]);
    node.appendChild(textnode);
    document.getElementById("domain").appendChild(node);
  }
};

function domainGenerator() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domainExtension = [".com", ".net", ".ai", ".us"];
  let domains = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let x = 0; x < adj.length; x++) {
      for (let y = 0; y < noun.length; y++) {
        for (let z = 0; z < domainExtension.length; z++) {
          domains.push(pronoun[i] + adj[x] + noun[y] + domainExtension[z]);
        }
      }
    }
  }
  console.log(domains.length);
  return domains;
}
