const list = document.getElementById('foobar-list');

for(let i = 1; i <= 100; i++) {
  var item = document.createElement('li');
  var text = i.toString();
  if(i % 3 == 0 || i % 5 == 0) {
      if( i % 3 == 0 && i % 5 == 0) {
        text = 'foobar';
      } else if( i % 3 ==0) {
        text = 'boo';
      } else {
        text = 'bar'
      }      
  }
  item.innerHTML = text;
  list.appendChild(item);
}
// item.innerHTML = text;
// console.log(typeof text);
// console.log(text.length);
// console.log(text);


// const li = document.createElement('li');



// li.className = 'collection-item';

// li.id = 'new-item';

// li.setAttribute('title', 'New Item');

// li.appendChild(text);
// // li.appendChild(document.createTextNode('2nd item'));

// document.querySelector('ol.collection').appendChild(li);
// document.querySelector('ol.collection').appendChild(li);

// console.log(li);


