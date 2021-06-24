import { Request, Response } from "express";
import { CreateUserservice } from "../services/CreateUserService";

class CreateUserController {

  async handle(request: Request, response: Response) {
    const { name, email, admin } = request.body;

    const createUserService = new CreateUserservice();

    const user = await createUserService.execute({ name, email, admin });

    return response.json(user);
  }
}

export { CreateUserController }
