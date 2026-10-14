//menangkap input user
const p = prompt('pilih: orang, gajah, semut');
//menangkap input computer
//membangkitkan bilangan random

let comp = Math.random();

if (comp < 0.34){
    comp = 'orang'
} else if(comp >= 0.34 && comp < 0.67){
    comp = 'gajah'
} else {
    comp = 'semut'
}


//menentukan rules
let hasil = '';
if (p == comp){
    hasil = 'SERI';
} else if (p == 'gajah'){
    hasil = (comp == 'orang') ? 'KAMU MENANG..' : 'KAMU KALAH..';
} else if (p == 'orang'){
    hasil = (comp == 'semut') ? 'KAMU MENANG..' : 'KAMU KALAH..';
} else if (p == 'semut'){
    hasil = (comp == 'gajah') ? 'KAMU MENANG..' : 'KAMU KALAH..'
} else {
    hasil = 'Kamu salah memasukkan pilihan..'
}

//tampilkan hasil
alert('Kamu memilih '+ p +' & Komputer memilih '+ comp +', Maka '+ hasil +'')