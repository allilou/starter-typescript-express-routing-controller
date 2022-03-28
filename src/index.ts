import 'reflect-metadata';
// this shim is required
import { createExpressServer } from 'routing-controllers';
import { UserController } from './UserController';

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
    controllers: [UserController], // we specify controllers we want to use
    cors: {
        origin: '*', // (note: do not use this in production)
    }
});

console.log("Stating server on port 3000");

// run express application on port 3000
app.listen(3000);