function afterFormSubmit(e){
  
  const info = e.namedValues;
  createPDF(info);

}



function createPDF(info){

  const pdfFolder = DriveApp.getFolderById("1LIyOo90fuMERavqpXlsI9tdICoHlyzKz");
  const tempFolder = DriveApp.getFolderById("1JdYHXOo-K8xeONwvJTsmV1QgwB_WTXRh");
  const templateDoc = DriveApp.getFileById("1N1IVVzJyGvdNnBQsG3mVeplnvEJUyD-U5Lwwv2SiaWE");

  const newTempFile = templateDoc.makeCopy(tempFolder);

  const openDoc = DocumentApp.openById(newTempFile.getId());
  const body = openDoc.getBody();
  body.replaceText("{rep name}",info["Trainee's name"][0]);
  body.replaceText("{date}",info['Date'][0]);
  body.replaceText("{Topic1}",info['Topic 1'][0]);
  body.replaceText("{Topic2}",info['Topic 2'][0]);
  body.replaceText("{Topic3}",info['Topic 3'][0]);
  body.replaceText("{trainer name}",info["Trainer's name"][0]);
  body.replaceText("{rep pos}",info["Trainee's position"][0]);
  body.replaceText("{trainer pos}",info["Trainer's position"][0]);
  body.replaceText("{Comments}",info['Comments'][0]);
  openDoc.saveAndClose();

  const blobPDF = newTempFile.getAs(MimeType.PDF);
  pdfFolder.createFile(blobPDF).setName(info["Trainee's name"][0]+ " " + info['Date'][0]);

  newTempFile.setTrashed(true)

}

