module.exports = () => {
    const controller = {};
    
    const { createWorker } = require('tesseract.js');

    controller.parser = async (req, res) => { 
        const worker = createWorker({
            logger: m => console.log(m), // Add logger here
          });
          
          
        await worker.load();
        await worker.loadLanguage('por');
        await worker.initialize('por');
        const { data: { text } } = await worker.recognize('http://i.imgur.com/JINlVgU.jpg');
        console.log(text);
        await worker.terminate();


        res.status(200).json(text);
        
    }

    return controller;
}