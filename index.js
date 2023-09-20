const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

element.append(ul);

li.textContent = "Hi there!";
// => <li>Hi there!</li>
console.log(li.textContent);
// => "Hi there!"