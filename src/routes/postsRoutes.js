import express from "express";
import multer from "multer";
import cors from "cors";
import {atualizarNovoPost, listarPosts, postarNovoPost, uploadImagem} from "../controller/postsController.js";

const crosOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200,
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
const upload = multer({dest:"./uploads", storage})

const routes = (app) => {
    app.use(express.json());
    app.use(cors(crosOptions));
    app.get("/posts", listarPosts );
    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImagem);
    app.put("/update/:id", atualizarNovoPost)
}

export default routes;
