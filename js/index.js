//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
var div = document.createElement('div');
div.innerHTML = 'Hello, DOM!';
div.style.backgroundColor = '#f9f9f9';
console.log(div);
document.body.appendChild(div);
div.style.textAlign = 'center';

var ul = document.createElement('ul');

for (let i = 0; i < 3; i++)
{
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}
ul.style.textAlign = 'left';
div.appendChild(ul);

ul.removeChild(ul.querySelector('li:nth-child(2)'));

ul.remove();
