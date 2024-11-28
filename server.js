const express = require("express");

const app = express();

const prisma = require("./prisma");
const { Update } = require("@mui/icons-material");

const PORT = 3000;
// GET /api/players

app.use(express.json());

app.get("/api/players", async (req, res, next) => {

    const players = await prisma.player.findMany({})
    res.status(201).send(players)
})
// POST /api/players 

app.post("/api/players", async (req, res, next) => {

    const { name, breed, status } = req.body;

    const player = await prisma.player.create({
        data: {
            name, breed, status
        }
    })
    res.status(201).send(player)
})


// GET /api/players/:id - this wil use req.params to get the :id

app.get("/api/players/:id", async (req, res, next) => {
    const { id } = req.params;

    const player = await prisma.player.findMany({

        where: { id: +id },
        // + makes the value a number instead of a string


    });

    res.status(201).send(player)


})


// PUT /api/players/:id

app.put("/api/players/:id", async (req, res, next) => {
    const { id } = req.params;
    const { name, breed, status } = req.body;


    const player = await prisma.player.update({
        where: { id: +id },
        data: {
            name, breed, status
        },


    })
    res.status(201).send(player)

});


// DELETE /api/players/:id

app.delete("/api/players/:id", async (req, res, next) => {

    const { id } = req.params;
    const deletedUser = await prisma.player.delete({
        where: { id: +id },




    })
    res.status(204).send("deleted the user")



})


app.listen(PORT, () => {

    console.log(`listening on ${PORT}`)

})
