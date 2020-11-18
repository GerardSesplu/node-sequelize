import { Request, Response} from 'express';

class UsersControllers {

    public index (req: Request, res: Response) {
        res.send('ok, la ruta funciona')
    }    

}

export const UsersController = new UsersControllers();