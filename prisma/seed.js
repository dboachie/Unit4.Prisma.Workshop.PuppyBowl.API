const prisma = require("../prisma");
const seed = async () => {
    // TODO: Create 10 players

    let data = [
    ]
    for (let i = 0; i < 10; i++) {
        let newObj = {
            name: `name${i}`, breed: `breed${i}`, status: `status${i}`


        }
        data.push(newObj)

    }
    await prisma.player.createMany({
        data

    })


};
seed()
    .then(async () => await prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });