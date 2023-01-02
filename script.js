const tombolPesan = document.querySelectorAll('.pemesanan .top button');
const contenPesan = document.querySelectorAll('.pemesanan .content');
for(let i=0; i<tombolPesan.length; i++){
    tombolPesan[i].addEventListener('click', function(){
        for(let i=0; i<tombolPesan.length; i++){
            tombolPesan[i].classList.remove('biru')
            contenPesan[i].classList.add('pesan-nonActive')
        }
        tombolPesan[i].classList.add('biru');
        contenPesan[i].classList.remove('pesan-nonActive')
    })
}



const boxKota = document.querySelectorAll('.content-kota .box');
for(let i=0; i<boxKota.length; i++){
    const namaKota= boxKota[i].getAttribute('id');
    boxKota[i].style.backgroundImage = 'url(img/kota/'+namaKota+'.jpg)'
}



// penilaian
const fotoPenilai = document.querySelectorAll('.foto-penilai')
for(let i=0; i<fotoPenilai.length; i++){
    fotoPenilai[i].addEventListener('click', function(e){
        // e.target.previousElementSibling.classList.toggle('hide-penilaian')
        e.target.nextElementSibling.classList.toggle('hide-penilaian')
        // e.target.nextElementSibling.classList.toggle('show-box')
        e.target.parentElement.classList.toggle('show-box')
    })
}


