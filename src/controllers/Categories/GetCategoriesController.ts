import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient'

export class GetCategoriesController {
    async handle(request: Request, response: Response) {
        
        const categories = await prismaClient.category.findMany({
            take: 5
        });

        return response.json(categories);
    }
}