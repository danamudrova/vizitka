
const rodnaCislaKOtestovani = [
    '123',
    'nepovím',
    '7060201236',
    '123456789123456789',
    '9062185440',
    '123č56q8y7',
  ];

rodnaCislaKOtestovani.forEach(element=> checkBirthID(element) )


function checkBirthID (rodneCislo){
let pocitadlo = 0
if (rodneCislo.length===10) {
    pocitadlo = 1
} else {
    console.log ('invalidLength')
} 

if (Number.isInteger(Number(rodneCislo))===true) {
    pocitadlo = 2

} else {
    console.log('notANumber')
}

if (rodneCislo%11===0) {
       pocitadlo = 3
} else {
    console.log ('failedChecksum')
} 


if (pocitadlo>=3) {
        console.log('ok')
} 
    
}


