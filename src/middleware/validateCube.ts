import { NextFunction, Request, Response } from "express"
import Joi from "joi"

// create validation schema
let schema = Joi.object({
    panjang: Joi.number().required().min(1),
    lebar: Joi.number().required().min(1),
    tinggi: Joi.number().required().min(1)
})

// create a validation function
let validationCube = (request: Request, response: Response, next: NextFunction) => {
    let {error} = schema.validate(request.body)
    if (error){
        // status 400 = BAD REQUEST
        return response.status(400).json({
            massage: error.details
        })
    }
    next()
}

export{validationCube}