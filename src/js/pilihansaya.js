var suit = ['./img/batu.png', './img/gunting.png', './img/kertas.png'];
var lose = ['./img/heart2.png'];
var nyawa1 = document.getElementById('hati1');
var nyawa2 = document.getElementById('hati2');
var nyawa3 = document.getElementById('hati3');
var nyawa4 = document.getElementById('hati4');
var nyawa5 = document.getElementById('hati5');
var nyawa6 = document.getElementById('hati6');
var musuh = document.getElementById('computer');
var saya = document.getElementById('you');
var refresh = ['./img/tanya.png'];
var rounde = document.getElementById('judul');
var ronde = 0;
var skorMusuh = [];
var skorSaya = [];
var skorNormal = [];

function berfungsi(pilihansaya) {
    var random = Math.round(Math.random() * (suit.length - 1));
    var pilihanmusuh = suit[random];
    var hasil = '';

    musuh.setAttribute('src', pilihanmusuh);
    saya.setAttribute('src', pilihansaya);

    if (pilihanmusuh === pilihansaya) {
        hasil = "Seri";
    }
    else if (pilihanmusuh === './img/batu.png' && pilihansaya === './img/gunting.png') {
        hasil = "kalah !!";
        ronde = ronde + 1;
        skorMusuh.push(0);
    }
    else if (pilihanmusuh === './img/gunting.png' && pilihansaya === './img/kertas.png') {
        hasil = "kalah !!";
        ronde = ronde + 1;
        skorMusuh.push(0);
    }
    else if (pilihanmusuh === './img/kertas.png' && pilihansaya === './img/batu.png') {
        hasil = "kalah !!";
        ronde = ronde + 1;
        skorMusuh.push(0);
    }
    else if (pilihanmusuh === './img/gunting.png' && pilihansaya === './img/batu.png') {
        hasil = "menang !!";
        ronde = ronde + 1;
        skorSaya.push(1);
    }
    else if (pilihanmusuh === './img/kertas.png' && pilihansaya === './img/gunting.png') {
        hasil = "menang !!";
        ronde = ronde + 1;
        skorSaya.push(1);
    }
    else if (pilihanmusuh === './img/batu.png' && pilihansaya === './img/kertas.png') {
        hasil = "menang !!";
        ronde = ronde + 1;
        skorSaya.push(1);
    }

    setTimeout(
        function () {
            alert(hasil);
        }, 1000
    );

    if (skorNormal[0] == 1) {
        skorSaya.push(1);
    } else {
        skorMusuh.push(1);
    }

    switch (ronde) {
        case 1:
            if (skorSaya[0] == 1) {
                nyawa6.setAttribute('src', lose);
                rounde.innerHTML = "Round2";
                skorMusuh.push(0);
            } else if (skorMusuh[0] == 1) {
                nyawa1.setAttribute('src', lose);
                rounde.innerHTML = "Round2";
                skorSaya.push(0);
            }
            break;
        case 2:
            if (skorSaya[1] == 1 && skorMusuh[0] == 0) {
                nyawa5.setAttribute('src', lose);
                rounde.innerHTML = "Round2";
                skorMusuh.push[0]
            } else if (skorSaya[1] == 1 && skorMusuh[0] == 1) {
                nyawa6.setAttribute('src', lose);
                rounde.innerHTML = "Round2";
                skorMusuh.push[0]
            } else if (skorMusuh[1] == 1 && skorSaya[0] == 0) {
                nyawa2.setAttribute('src', lose);
                rounde.innerHTML = "Round2";
                skorSaya.push[0]
            } else if (skorMusuh[1] == 1 && skorSaya[0] == 1) {
                nyawa1.setAttribute('src', lose);
                rounde.innerHTML = "Round2";
                skorSaya.push[0]
            }
            break;
        // case 3:
        //     if (skorSaya[2] == 1 && skorMusuh[0] == 1) {
        //         nyawa6.setAttribute('src', lose);
        //         rounde.innerHTML = "Round3";
        //         skorMusuh.push[0]
        //     } else if (skorSaya[2] == 1 && skorMusuh[1] == 1) {
        //         nyawa5.setAttribute('src', lose);
        //         rounde.innerHTML = "Round3";
        //         skorMusuh.push[0]
        //     } else if (skorSaya[2] == 1 && skorMusuh[2] == 0) {
        //         nyawa4.setAttribute('src', lose);
        //         rounde.innerHTML = "Round2";
        //         skorMusuh.push[0]
        //     } else if (skorMusuh[2] == 1 && skorSaya[0] == 1) {
        //         nyawa1.setAttribute('src', lose);
        //         rounde.innerHTML = "Round2";
        //         skorSaya.push[0]
        //     } else if (skorMusuh[2] == 1 && skorSaya[1] == 1) {
        //         nyawa2.setAttribute('src', lose);
        //         rounde.innerHTML = "Round2";
        //         skorSaya.push[0]
        //     } else if (skorMusuh[2] == 1 && skorSaya[2] == 0) {
        //         nyawa3.setAttribute('src', lose);
        //         rounde.innerHTML = "Round2";
        //         skorSaya.push[0]
        //     }
        //     break;
        // case 4:
        //     break;
        // case 5:
        //     break;
        // case 6:
        //     break;
        default:
            console.log(skorNormal);
    }

    setTimeout(function () { musuh.setAttribute('src', refresh); }, 1000);
    setTimeout(function () { saya.setAttribute('src', refresh); }, 1000);


}