# AIllustrator-Translate/v1.0
Scripts to translate text inside Illustrator, getting DB text translate.

## Why?
Easy, sometimes there are business that work with Adobe products, creating posters, advertisings, restaurant menu desings... In general graphic design.
So I decided to make the workflow better and less repetitive, because till now, where I work, designers must do the same work as many times as languages client request. That means a designer have to create a menu restaurant desing for example 5 times, because it has 5 different languages: Spanish, English, German, Italian and French.

## How to use it
To use this, first of all you must have all **.jsx** files inside /InstallationPath/**Adobe/AdobeIllustrator/Scripting/Sample Scripts/JavaScript/Working With Text** folder. Another way to use it without installing it inside Adobe, is using Ctrl+F12 and Searching it by yourself. Once you have this Ok it's time to start.

## Getting started
You'll need
.txt document organized in this way:
  Principal Language;Second Language
  Hello how're you?;Hola como estas?
  Amazing;Impresionante
  
  (This text is from the Database)

Adobe Illustrator project, with text in **Principal Language** delimited between |*Text Here*|

### Cleaning text
Execute *replace.js* inside Illustrator (like .jsx document) to get all text checked and clean.

### Reading text
All text you want to get compared must be elimited between |*Text Here*|. 
Now text is delimited is time to select it using *Selection > Object > All text objects*, and execute TextSelection.jsx
  (This file will output .txt file in the path that you indicated previosly)
  
### Comparing text
Once your file is done, now it's time to organize and compare it, to create the translation file is necessary to stay in the folder where is CreateCompare.js. (To execute this script is necessary to have **node** inside the computer)
Open Terminal inside de folder and execute `$node ./CreateCompare.js`
This will made .txt file to change text in Illustrator

### Modifying text
Inside Illustrator execute *InsertText.jsx*. This action will search inside all TextFrames the matches and then they will be substituted.

  ##### In case is something wrong (no changed text), now is the moment to check it

### Cleaning text 2
Execute *CleanText.js* inside Illustrator (like .jsx document) to get all text clean. Now it's time to put line breaks and chek all syntax.
