import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"
import { logger } from "../utils/Logger.js"

class BurgersService {
  async getAll() {
    const burgers = await dbContext.Burgers
    return burgers
  }
  async getOne(burgerId) {
    const burger = await dbContext.Burgers.find(b => b.id == burgerId)
    if (!burger) throw new BadRequest('no burger named' + burgerId)
    return burger
  }

  // NOTE got stuck here after making create() because postman wouldn't return the request...need help navigating postman.
  async create(newBurger) {
    logger.log(newBurger)
    newBurger.id = dbContext.Burgers[dbContext.Burgers.length - 1].id + 1
    await dbContext.Burgers.push(newBurger)
    return newBurger
  }
}


export const burgersService = new BurgersService()