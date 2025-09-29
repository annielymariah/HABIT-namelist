import type { Request, Response, NextFunction } from "express";
import { z } from "zod";

const createNameSchema = z.object({
  name: z
    .string({ required_error: "Nome é obrigatório" })
    .trim()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
});

export function validateCreateName(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const validatedData = createNameSchema.parse(req.body);
    req.body = validatedData;
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      const firstError = error.errors[0];
      return res.status(400).json({
        error: firstError.message,
      });
    }

    return res.status(500).json({
      error: "Erro interno do servidor",
    });
  }
}
