import express from "express";

import { single, multiple } from "../middlewares/upload.middleware";

const router = express.Router();

router.get("/upload/single", single, (req, res) => {
    if(req.file){
        return res.status(200).json({
            message: "File uploaded..",
            file: req.file
        })
    }
    res.status(400).json({message: "failed upload data"})
});

router.get("/upload/multiple", multiple, (req, res) => {
    if(Array.isArray(req.files) && req.files.length > 0){
        return res.status(200).json({
            message: "File uploaded..",
            file: req.file
        })
    }
    res.status(400).json({message: "failed upload data"})
});

export default router;
