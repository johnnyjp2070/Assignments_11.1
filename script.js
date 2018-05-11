var bodi = document.getElementsByTagName('body')[0];
var para  = document.createElement('p');
para.setAttribute('id', 'para1');
para.innerHTML="The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";
bodi.appendChild(para);

para1 = document.getElementById('para1');
para1.style.color = 'purple';

var para2  = document.createElement('p');
para2.setAttribute('id', 'para2');
para2.innerHTML="A Web page is a document. This document can be either displayed in the browser window or as the HTML source. But it is the same document in both cases. The Document Object Model (DOM) represents that same document so it can be manipulated. The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.";
bodi.appendChild(para2);
paraid = document.getElementById('para2');
paraid.style.color = 'red';

bodi.style.backgroundColor = "lightgrey";
