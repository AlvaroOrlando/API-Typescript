import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoyController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategoyController(createCategoryUseCase);

export { createCategoryController };