import express from "express";
import {listarPosts, postarNovoPost} from "../controller/postsController.js";


const routes = (app) => {
    app.use(express.json());
    app.get("/posts", listarPosts );
    app.post("/posts", postarNovoPost)
}

export default routes;
