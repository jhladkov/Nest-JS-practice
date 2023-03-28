import {Injectable, NestMiddleware} from "@nestjs/common";
import {NextFunction, Request, Response} from "express";

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('Hello world (ValidateCustomerMiddleware)')
        const {authorization} = req.headers
        if (!authorization) return res.status(403).send(
            {error:'No Auth Token Provided'}
        )
        if (authorization === '123') {
            next()
        }
        else {
            return  res.status(403).send(
                {error: 'Invalid Auth Token Provided'}
            )
        }
    }
}