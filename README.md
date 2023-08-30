# Generate a PDF from a Google Form submission

Simple script which uses Apps Script Document Service to replace placeholder text in Template Doc with form submission data, then creates a PDF from the updated Doc and saves in the defined Drive folder.

:warning:FYI Script written for specific form questions! To utilize for your own purposes, be sure to replace the parameters for each `body.replaceText()` with your own information. Syntax is `replaceText(searchPattern, replacement)`, where `searchPattern` is the placeholder text found in your template doc, and `replacement` is the event info from the form submission. More details on this method can be found on the [Apps Script reference page](https://developers.google.com/apps-script/reference/document/body#replacetextsearchpattern,-replacement).

## Repurpose for your own use

Feel free to make a copy of the [Google Form](https://docs.google.com/forms/d/1-Qh6EvE5XbgnESulS1Qrzc1Gsp2y_WD4yjBXNu658qo/copy) and [Google Doc template](https://docs.google.com/document/d/1fwnfJGEN8ZbT61EbA6eGlPZzt7wPXAvAu1laMd2vCC4/copy) I used in this example. I've highlighted the placeholders on the template for easy identification. However, once you've updated the placeholders to fit your specific needs, I recommend removing the highlighting. This is because the `body.replaceText()` method doesn't alter the formatting of the original text, unless `replacement` is an empty string.

Aside from replacing the references to various Folder/File/Document Ids, there are a few other necessary steps to get this working correctly.

- Link your Google Form to a Spreadsheet: If you haven't done this yet, go to your Google Form's Responses tab and click on the green Sheets icon. This will prompt you to link the Form responses to a new or existing Google Spreadsheet.

- Paste the Code in the Spreadsheet's Script Editor: Once the Form responses are being recorded in the spreadsheet, navigate to Extensions > Apps Script in the spreadsheet menu. This will open the script editor. Here, you can paste in my code. It's crucial to do this as the namedValues property we're leveraging is specifically available to scripts that are container-bound to spreadsheets with an 'on Form Submit' trigger.

- Set up the 'On Form Submit' Trigger: In the Apps Script editor, navigate to the left sidebar and click on the clock icon to view project's triggers. Click on "+ Add Trigger" at the bottom. For the function to run, select the relevant function name, set the event source to 'From spreadsheet' and event type to 'On form submit'.
- Properly reference the namedValues properties: See the [reference page](https://developers.google.com/apps-script/guides/triggers/events#form-submit_1) for details, but in short just make sure that the strings you pass in for each property's key matches the text of the Form question exactly - ie. if your question is 'Type your name', to access the submission data for that question (the value of the property) you would use `info['Type your name']`.
