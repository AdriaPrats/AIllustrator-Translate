/* ==============================================================================================
 * When all text is correctly updated, to check all inputs were correct we must drop "||" & ";"
 *      in case something must be checked, probably there are some ";" that weren't dropped. This
 *      can be modified to delete all strings that you want.
 * ==============================================================================================*/

var active_doc = app.activeDocument;  
  
var search_string = /;|\|/gi;;
var replace_string = "";  
  
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
