import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'

class DbContext {
  // Values = mongoose.model('Value', ValueSchema);
  // Account = mongoose.model('Account', AccountSchema);

  Burgers = [
    {
      id: 1,
      name: 'Teriyaki Burg',
      description: 'hot pineapple, yak sauce,',
      price: 10
    },
    {
      id: 2,
      name: 'DJ Burg',
      description: 'meat cheese and ketchup, plain af',
      price: 8
    },
    {
      id: 3,
      name: 'Fancy Burg',
      description: 'pears, sage, balsamic reduction',
      price: 20
    }
  ]
}

export const dbContext = new DbContext()
