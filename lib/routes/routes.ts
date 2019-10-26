import { Request, Response } from "express";
import { UserController } from "../controllers/usrController";



export class Routes {

    public userController: UserController = new UserController();

    public routes(app): void {
        app.route('/')
            .get((req: Request, res: Response)=>{
                //Test route 
                res.status(200).send({
                    message: 'GET request successful!!!'
                })
            });

        // Users
        app.route('/user')
            // GET Endpoint
            .get(this.userController.getUsers)
            //POST endpoint 
            .post(this.userController.addNewUser);

        //User Detail
        app.route('/user/:userId')
            //get specific user
            .get(this.userController.getUserWithID)
            //update specific user
            .put(this.userController.updateUser)
            //Delete Specific user
            .delete(this.userController.deleteUser)



    }
}