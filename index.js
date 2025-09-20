const functions = require('@google-cloud/functions-framework');

functions.cloudEvent('handleStorageEvent', cloudEvent => {
  console.log(`Event ID: ${cloudEvent.id}`);
  console.log(`Event Type: ${cloudEvent.type}`);
  const file = cloudEvent.data;
  console.log(`Bucket: ${file.bucket}`);
  console.log(`File: ${file.name}`);
  console.log(`Metageneration: ${file.metageneration}`);
  console.log(`Created: ${file.timeCreated}`);

  // Add your file processing logic here
  // For example, download the file, process it, and upload it elsewhere.
});
