import type {Request, Response} from 'express';
import { GetAllNameService } from '../services/getAllNamesService';

export async function getAllNamesController(req: Request, res: Response) {
    const getAllNameService = new GetAllNameService();
    try {
        const result = await getAllNameService.execute();
        res.status(200).json(result);
    } catch (error) {
        console.error('Erro ao obter nomes:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
} 