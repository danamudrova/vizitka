
const rodnaCislaKOtestovani = [
    '123',
    'nepovím',
    '7060201236',
    '123456789123456789',
    '9062185440',
    '123č56q8y7',
  ];

//const rodneCislo = forEach(rodnaCislaKOtestovani)

let pocitadlo = 0

function desitka () {

if (rodneCislo.length===10) {
    console.log('Zadané rodné číslo má správně deset znaků.')
    pocitadlo = 1
} else {
    console.log ('Uživatel zadal rodné číslo neplatné délky.')
} 
}


 function celeCislo() {
if (Number.isInteger(Number(rodneCislo))===true) {
    console.log ('rodne cislo je cele')
    pocitadlo = 2

} else {
    console.log('chyba')
}
}

function delitelnost(){
 
if (rodneCislo%11===0) {
    console.log('je dělitelné 11')
    pocitadlo = 3
} else {
    console.log ('není dělitelné 11')
} 
}

function platnost(){
    if (pocitadlo>=3) {
        console.log('rodne cislo')
    } else {
        console.log('neplatne')
    }
    
}

desitka()
celeCislo()
delitelnost()
platnost()
