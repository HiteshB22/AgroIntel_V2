import {Report} from '../models/report.model.js';
import { generateFileHash } from '../utils/fileHash.js';
export const uploadReport = async (req, res) => {
    try{
        const file = req.file;

        if(!file){
            return res.status(400).json({ success: false, message: 'No file uploaded' });
        }

        const hashFIle = generateFileHash(file.buffer)

        const existingReport = await Report.findOne({ hash: hashFIle });

        if(existingReport){
            return res.status(400).json({ success: false, message: 'Duplicate file detected' , report: existingReport});
        }
        
        const report = await Report.create({
            userId : req.userId,
            fileUrl : "imageKit url",
            hash : hashFIle
        });
        res.status(201).json({ success: true, report });

    }catch(err){
        res.status(500).json({ success: false, message: err.message });
    }
}