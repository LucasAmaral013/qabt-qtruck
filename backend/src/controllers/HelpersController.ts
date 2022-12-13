import {Request, Response} from 'express'

import User from '../models/User'
import FoodTruck from '../models/FoodTruck'
import Reviews from '../models/Reviews'

export default {
    async resetUser(req: Request, res: Response){

        const { instagram } = req.query

        const user = await User.findOne({instagram: instagram})

        if(!user)
            return res.status(204).end()

        //Estou deletando qualquer avaliação cujo o campo rated by seja o o campo id
        await Reviews.deleteMany({rated_by: user.id})
        await FoodTruck.deleteMany({suggested_by: user._id})
        await User.deleteMany({instagram: instagram})
        
        return res.status(204).end()

    }
}