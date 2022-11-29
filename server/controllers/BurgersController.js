import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getOne)
      .post('', this.create)
  }

  async getAll(request, response, next) {
    try {
      const burgers = await burgersService.getAll()
      return response.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  async getOne(request, response, next) {
    try {
      const burger = await burgersService.getOne(request.params.id)
      return response.send({ burger, message: 'Enjoy!' })
    } catch (error) {
      next(error)
    }
  }

  async create(request, response, next) {
    try {
      const newBurger = await burgersService.create(request.body)
      return response.send(newBurger)
    } catch (error) {
      next(error)
    }
  }
}