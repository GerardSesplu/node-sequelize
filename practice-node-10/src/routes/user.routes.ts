import { Router } from 'express';
import { UsersController } from './../controllers/users.contoller';

class usersRoutes {

    public router: Router = Router();

    constructor(){

        this.router.get('/', UsersController.index);

    }
}

const userRoutes = new usersRoutes;
export default userRoutes;