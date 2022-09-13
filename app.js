const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = [
    "pink",
    "black",
    "yellow",
    "green",
    "#cb42f5",
    "red",
    "#f57842"
];

button.addEventListener("click", changeBackground);
let sıra = 0;

function changeBackground(){
    //RASTGELE BİR RENK
    
//     const rastgeleSayi = Math.floor(Math.random() * colors.length);
//     const secilenRenk = colors[rastgeleSayi];
//     console.log(rastgeleSayi,secilenRenk);
// body.style.backgroundColor=secilenRenk;

// SIRAYLA ARKAPLAN RENGİ SEÇ

if(sıra == 7) sıra = 0
const secilenRenk = colors[sıra];
sıra ++;
body.style.backgroundColor = secilenRenk;

}
