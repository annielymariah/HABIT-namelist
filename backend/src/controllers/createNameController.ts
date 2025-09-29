import type{ Request, Response } from "express";
import { CreateNameService } from "../services/CreateNameService";

export async function createNameController(req: Request, res: Response) {
    const { name } = req.body;

    const createNameService = new CreateNameService();

    try {
        const result = await createNameService.execute({ name });
        res.status(201).json(result);
    } catch (error) {
        console.error('Erro ao criar nome:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
}