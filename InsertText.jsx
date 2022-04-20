/* =========================================================================
 * readTXT. Reads line by line previous documents and save it inside an array
 * =========================================================================*/

function readTXT(fileDB, fileAI) {
   fileDB.encoding = 'UTF8'; // set to 'UTF8' or 'UTF-8'
   fileDB.open("r");

   // "eof" == End Of File
   while (!fileDB.eof) {
      contentDB.push(fileDB.readln())
   }

   fileDB.close();

   fileAI.encoding = 'UTF8'; // set to 'UTF8' or 'UTF-8'
   fileAI.open("r");

   while (!fileAI.eof) {
      contentAI.push(fileAI.readln())
   }

   fileAI.close();

};

/* ==========================================================================================
 * replaceText. Gets TextFrames content and search it to replace it by his translation
 *       inside the DB document. This function iterates as many times as elements has the DB
 * ==========================================================================================*/

function replaceText(arrayAI, arrayDB) {

   for (var i=0; i < arrayDB.length; i++) {

      var active_doc = app.activeDocument; 

      var search_string = arrayAI[i];
      var replace_string = arrayDB[i].match(/;([^;]+)/gm);  
         
      var text_frames = active_doc.textFrames;  
      
      if (text_frames.length > 0)  
      {  
         for (var j=0 ; j < text_frames.length; j++)  
         {  
            var this_text_frame = text_frames[j];  
            var new_string = this_text_frame.contents.replace(search_string, replace_string);  
                     
            if (new_string != this_text_frame.contents)  
               {  
                  this_text_frame.contents = new_string;  
               }  
         }  
      } 

   };

};

var fileDB = File("C:/Users/aprat/Desktop/compareDB.txt");
var fileAI = File("C:/Users/aprat/Desktop/compareAI.txt");

var contentDB = [];
var contentAI = [];


readTXT(fileDB, fileAI);

replaceText(contentAI,contentDB);