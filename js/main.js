//
//document.getElementById('trzy').addEventListener('click', dodawanie3);
//
//function dodawanie3(){
//    let liczba = parseFloat(this.value);
//    document.getElementById('wyswietlacz').innerHTML += liczba;
//};
//document.getElementById('cztery').addEventListener('click', dodawanie4);
//function dodawanie4(){
//    let liczba = parseFloat(this.value);
//    document.getElementById('wyswietlacz').innerHTML += liczba;
//};
//
//document.getElementById('plus').addEventListener('click', dodawanieplus);
//function dodawanieplus(){
//    document.getElementById('wyswietlacz').innerHTML += '+';
//}
//
//document.getElementById('wynik').addEventListener('click', wynik);
//
//function wynik() {
//  let aaa =  document.getElementById('wyswietlacz').value
//    console.log(aaa)
//}
//var x=1;
//document.getElementById('okno');
//document.getElementById('okno').value = '';
//function wlacz(przycisk){++x; x%=2;
//if(x==0){document.getElementById('okno').style.backgroundColor="yellow";
//document.getElementById('button').value="ON";}
//else{document.getElementById('okno').style.backgroundColor="black";
//document.getElementById('button').value="OFF";};
//
//}
//
//function czytaj(przycisk) {
//     if (przycisk == 'C') {
//          document.getElementById('okno').value = '';
//     }
//     else {
//          document.getElementById('okno').value += przycisk;
//     }
//}
//function oblicz(wartosc) {
//     var wynik = eval(wartosc);
//     document.getElementById('okno').value = wynik;
//}
//let ce = document.querySelector('.kalk');
//        ce.addEventListener('click',czytaj2);
//function czytaj2(wartosc){
//    this.value
//    console.log(ce)
//    if (wartosc == 'C') {
//          document.getElementById('okno').value = '';
//     }
//     else {
//          document.getElementById('okno').value += wartosc;
//     }
//    
//}


//document.getElementById('trzy').addEventListener('click', dodawanie3);
//
//function dodawanie3() {
//    let liczba = parseFloat(this.innerText);
//    document.getElementById('wys').innerText += liczba;
//};
//document.getElementById('cztery').addEventListener('click', dodawanie4);
//
//function dodawanie4() {
//    let liczba = parseFloat(this.innerText);
//    document.getElementById('wys').innerText += liczba;
//};
//document.getElementById('plus').addEventListener('click', dodawanie5);
//
//function dodawanie5() {
//    let liczba = '+';
//    document.getElementById('wys').innerText += liczba;
//};

let klik = document.getElementsByClassName('klik');
for(let i = 0 ; i < klik.length ; i++){
     klik[i].addEventListener('click',wyswietl);
}
function wyswietl(){
    klik = this.innerText;
    document.getElementById('wys').innerText += klik;
}
document.getElementById('wynik').addEventListener('click', wynik);
function wynik() {
    let wartosc = document.getElementById('wys').innerText;
    let wynik = eval(wartosc);
    if (!(wynik == Infinity)){
    document.getElementById('wys').innerText = wynik;  
    }else{
    document.getElementById('wys').innerText = 'nie można dzielić przez zero! :)';
    }
}
document.getElementById('czysc').addEventListener('click', function(){
    document.getElementById('wys').innerText = '';
})
