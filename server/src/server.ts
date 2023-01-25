import Fastify from 'fastify';
import cors from '@fastify/cors'
import { appRoutes } from './routes';

const app = Fastify()

app.register(cors)
app.register(appRoutes)
/**
 * Metodo HTTP: GET, Post Put, Patch, Delete
 */

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server running!')
})