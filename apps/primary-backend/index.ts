import { prisma } from "db/client";
import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/projects", async (req, res) => {
    const userId = req.userId;
    const { prompt } = req.body;
    const description = prompt.split("\n")[0];

    const project = await prisma.project.create({
        data: {
            description, userId
        },
    });

    res.send(project);
});

app.get("/projects", async (req, res) => {
    const userId = req.userId;
    const project = await prisma.project.findUnique({
        where: {
            userId,
        },
    });

    res.json(project);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});