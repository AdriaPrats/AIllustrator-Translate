var filePath = File("~/Desktop/IllustratorSelect.txt")

/* =======================================================
 * Saves file as text. Overwrites old file if exists.
 * Returns empty string if no errors, otherwise error message.
 * =======================================================*/
function saveAsTextFile(filePath, content) {
    var saveFile = new File(filePath);

    saveFile.encoding = "UTF8";
    saveFile.open("w");
    if (saveFile.error != "")
        return saveFile.error;

    saveFile.write(content);
    if (saveFile.error != "")
        return saveFile.error;

    saveFile.close();
    if (saveFile.error != "")
        return saveFile.error;

    return "";
}

var text = [];

selectedItems = selection;
if (selectedItems.length > 0) 
{
   var itemFound = false;
   for(var i=0; i<selectedItems.length; i++)
   {
      if(selectedItems[i].typename == "TextFrame")
      {
         if(selectedItems[i].contents.match(/\|([^|]+)\|/gm))
         {
            itemFound = true;
            text.push(selectedItems[i].contents.match(/\|([^|]+)\|/gm));
            
         }
      }
   }

   if(itemFound == false) alert("No elements between |--|. Check that is all Ok!");

}
else
{
   alert("No elements selectes! Remember: Select > Object > All text objects");
}

saveAsTextFile(filePath, text)