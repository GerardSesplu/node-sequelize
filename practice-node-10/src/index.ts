import express from 'express';
import userRoutes from './routes/user.routes';

//instanciar express framwork
const app = express();

//settings para configurar el puerto que se va a quere consultar
app.set('port', 3000);

//iniciar el puerto que hemos creado
app.listen(app.get('port'), () => {
    console.log(`server is running on port ${app.get('port')}`);
});

// utilizar rutas requeridas de routes, que hemos exportado previamente
app.use('/users', userRoutes.router);