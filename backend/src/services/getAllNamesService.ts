import { prisma } from "../lib/prisma";
import type { Name } from "@prisma/client";

interface GetAllNameServiceResponse {
    names: Name[];
}

export class GetAllNameService {
    async execute(): Promise<GetAllNameServiceResponse> {
        const names = await prisma.name.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        return {
            names
        };
    }
}