import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";
await conectarAoBanco(process.env.STRING_CONEXAO)

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Gato fazendo yoga",
        imagem: "https://placecats.com/yoga/400/200"
    },
    {
        id: 3,
        descricao: "Gatinho dormindo",
        imagem: "https://placecats.com/sleep/500/300"
    },
];

const app = express();
app.use(express.json()); //Devolve em json

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

async function getTodosPosts(){
    
}

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});
function buscarPostPorId(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}
app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id)
    res.status(200).json(posts[index]);
});