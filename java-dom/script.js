// const p3 = document.querySelector('.p3');


// function ubahWarna(){
//     p3.style.backgroundColor = 'lightblue'
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarna;

// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function (){
//     alert  ('ok')
// });

// const btn = document.getElementById('btn');
// btn.addEventListener('click', function(){
//     const ul = document.querySelector(' section#b ul');
//     const li = document.createElement('li');
//     const textLi = document.createTextNode('Item Baru');
//     li.appendChild(textLi);
//     ul.appendChild(li);
// });

const p3 = document.querySelector('.p3');
// p3.onclick = function(){
//     p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function(){
//     p3.style.backgroundColor = 'red';
// }

p3.addEventListener('mouseenter', function(){
    p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener('mouseleave', function(){
    p3.style.backgroundColor = 'red';
});
// p3.addEventListener('click', function(){
//     p3.style.color = 'red';
// });
