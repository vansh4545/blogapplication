import {GridFsStorage} from 'multer-gridfs-storage';
import dotenv from 'dotenv';
import multer from 'multer';
dotenv.config();
const username = process.env.DB_USERNAME;
const password =  process.env.DB_PASSWORD;
const storage = new GridFsStorage({
    url :process.env.MONGODB_URI,
    options: {useNewUrlParser: true},
    file: (request, file) => {
        const match = ["image/png", "image/jpg","image/jpeg"];
        if (match.indexOf(file.memetype) === -1) {
            return `${Date.now()}-blog-${file.originalname}`;
        }
        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
           
        }
    }
})

export default multer({storage});