import { CustomError } from '@utilities/CustomError';

export const middleware = async (req: any, res: any, next: any) => {
    try {
console.log('This is a middleware')
        req.middleware = 'middleware'
    } catch (e:any) {
        let err = new CustomError(400, e.message);
        console.log(err);
        res.status(err.status).json(err);
    }
    next()
}
