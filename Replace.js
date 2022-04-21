/* ===============================================================================================================
 * Before taking the text from the file, the most convenient thing is to eliminate the possible special characters, 
 *      to verify that all entries are correct. In this case we will remove  y [··] (double spaces)
 * ===============================================================================================================*/

var active_doc = app.activeDocument;  

var search_string = /|  /gi;
var replace_string = " ";  
  
var text_frames = active_doc.textFrames;  
  
if (text_frames.length > 0)  
{  
    for (var i = 0 ; i < text_frames.length; i++)  
      {  
          var this_text_frame = text_frames[i];  
           var new_string = this_text_frame.contents.replace(search_string, replace_string);  
             
           if (new_string != this_text_frame.contents)  
               {  
                    this_text_frame.contents = new_string;  
               }  
      }  
}