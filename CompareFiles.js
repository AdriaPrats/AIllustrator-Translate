'use strict';
var fs = require("fs");

var text = fs.readFileSync('C:/Users/aprat/Desktop/IllustratorSelect.txt', 'utf-8');
var textByLine = text.split(/\|([^|]+)\|/g);

var correction = [];

/* ======================================================================
 * FileterArray.Create a clean array from the previous document selection
 * =======================================================================*/

function FilterArray(array) {
   array.forEach(element => {
      if (element != ',') {
         correction.push(element);
      }
   });
   correction.shift(); // Drops first element (Which is empty)
   correction.pop(); // Drops last element (Which is empty)
}


FilterArray(textByLine);



/* =====================================================================
 * LenghtOrganize.Organizes input array from LONGEST to SHORTEST String.
 * Returns new formatted array if no errors, otherwise error message.
 * Create a new .txt document from the array, on Desktop
 * =====================================================================*/

function LengthOrganize(arrayOrg)
   {
      if (!Array.isArray(arrayOrg)) 
      {
         throw TypeError('Array error');
      }

      if (!arrayOrg.every(c => typeof c === 'string'))
      {
         throw TypeError('Array has no string elements inside. All elements must be string');
      }

      return arrayOrg.sort((a, b) => b.length - a.length);
   }


/* ===============================================================================
 * Create new .txt file to check if DB information match with Illustrator text
 * Note: In my case I must create a new file because mine has preformatted text,
 *       and I want it clean as possible.DB file is previous organized. This mix
 *       of array is to get out all formatted text that can be inside the document.
 * ===============================================================================*/

let db = fs.readFileSync("C:/Users/aprat/Desktop/db.txt",'utf-8');

var array = [];

array.push(db.split("\n"));

var array2 = [];
array[0].forEach(element => {
    array2.push(element.split("\r"));
});

// console.log(array2);

var cleanDB = [];


for (let i = 0; i < array2.length; i++) {
    cleanDB.push(array2[i][0]);
}


var newArray = [];

LengthOrganize(correction)

cleanDB.forEach(element => {
  
   for (let i = 0; i < correction.length; i++) {

      var pattern = correction[i];
      var reg = new RegExp(pattern,"i");

      if (element.match(reg)){
         newArray.push(element);
      }
   }
 
});


console.log(newArray);


const file = fs.createWriteStream('C:/Users/aprat/Desktop/compareDB.txt');

    newArray.forEach(element => {
       file.write(element + '\n');
    });

    file.end();
   
    console.log("File compareDB.txt saved!");
