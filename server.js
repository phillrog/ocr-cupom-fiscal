//https://github.com/tesseract-ocr/tessdata
const { createWorker } = require('tesseract.js');

const worker = createWorker({
  logger: m => console.log(m), // Add logger here
});

(async () => {
  await worker.load();
  await worker.loadLanguage('por');
  await worker.initialize('por');
  const { data: { text } } = await worker.recognize('http://i.imgur.com/JINlVgU.jpg');
  console.log(text);
  await worker.terminate();
})();