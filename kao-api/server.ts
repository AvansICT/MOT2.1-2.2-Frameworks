import Koa from 'koa';

import  Router from 'koa-router';
import  BodyParser from 'koa-bodyparser';
import  responseTime from './middleware/responseTime.ts';
import  todosRouter from './api/todos/todos.routes.ts';


const app = new Koa();
const router = new Router();

app.use(responseTime);
app.use(BodyParser());


// Add your API routes here
router.get('/api/movies', async (ctx) => {
    ctx.body = { 
        movies: [
            { id: 1, title: 'Sample Movie', description: 'A sample movie' }
        ]
    };
});

router.get('/api/movies/:id', async (ctx) => {
    const id = ctx.params.id;
    ctx.body = { 
        movie: { 
            id: parseInt(id), 
            title: `Movie ${id}`, 
            description: `Description for movie ${id}` 
        }
    };
});

app.use(router.routes());
app.use(todosRouter.routes());
app.use(router.allowedMethods());

app.listen(3001);

console.log('Server running on port 3000');