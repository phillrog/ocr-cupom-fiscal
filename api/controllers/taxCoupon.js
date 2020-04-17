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

    const fs = require("fs");
    const multer  = require('multer');
    const Jimp = require('jimp');
    const fileType = require('file-type');

    const diskStorageToUploads = multer.diskStorage((req,res) => {        
        filename: async(req, file, cb) => {
            const image = await Jimp.read(file.buffer, );

            // const worker = createWorker({
            //     logger: m => console.log(m), // Add logger here
            //   });
              
              
            // await worker.load();
            // await worker.loadLanguage('por');
            // await worker.initialize('por');
            // const { data: { text } } = await worker.recognize(image);
            // console.log(text);
            // await worker.terminate();
    
    
            res.status(200).json(text);
        }
    });

    const saveToUploads = multer({storage: diskStorageToUploads});
    
    controller.upload = (upload.single('file'), execute);


    return controller;
}