import { prisma } from "../lib/prisma";
import type { Name } from "@prisma/client";

interface CreateNameServiceRequest {
  name: string;
}

interface CreateNameServiceResponse {
  name: Name;
}

export class CreateNameService {
    async execute({ name }: CreateNameServiceRequest): Promise<CreateNameServiceResponse> {
        const createdName = await prisma.name.create({
            data: {
                name: name.trim()
            }
        });

        return {
            name: createdName
        };
    }
}