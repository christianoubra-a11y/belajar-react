const btn = document.getElementById('btn');
// const body = document.getElementsByTagName('body')[0];
btn.addEventListener('click',function(){
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda')
    document.body.classList.toggle('biru-muda')

})

const newBtn = document.createElement('button');
const textBtn = document.createTextNode('Acak Warna!!!');
newBtn.appendChild(textBtn);
newBtn.setAttribute('type', 'acak');

btn.after(newBtn);

newBtn.addEventListener('click',function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
})

const red = document.querySelector('input[name=red]')
const green = document.querySelector('input[name=green]')
const blue = document.querySelector('input[name=blue]')

red.addEventListener('input', function(){
    const r = red.value;
    const g = green.value;
    const b = blue.value;

    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
})

green.addEventListener('input', function(){
    const r = red.value;
    const g = green.value;
    const b = blue.value;

    document.body.style.backgroundColor = 'rgb('+ r +','+ g +', '+ b +')'
})

blue.addEventListener('input', function(){
    const r = red.value;
    const g = green.value;
    const b = blue.value;

    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
})

document.addEventListener('mousemove', function(){
    //posisi mouse
    // console.log(event.clientX);

    //ukuran browser
    // console.log(window.innerWidth)

    const xPos = Math.round((event.clientX / window.innerWidth) * 255) ;
    const yPos = Math.round((event.clientY / window.innerHeight) * 255) ;

    document.body.style.backgroundColor = 'rgb('+ xPos +', '+ yPos +', 100 )';
})
