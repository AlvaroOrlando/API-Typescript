import { Router } from "express";
import { SpecificationsRepository } from "../src/modules/cars/repositories/implementations/SpecificationsRepository";
import { CreateSpecificationService } from "../src/modules/cars/services/CreateSpecificationService";

const specificationRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationRoutes.post("/", (request, response)=>{
    const { name, description } = request.body;

    const createSpecificationService = new CreateSpecificationService(
        specificationsRepository
        );

    createSpecificationService.execute({ name, description });

    return response.status(201).send();
});

export { specificationRoutes };