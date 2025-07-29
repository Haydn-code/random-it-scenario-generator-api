import http from 'http';
import MainRouter from './routers/main';

const port: number = 8080;
const mainRouter = new MainRouter();
const server = http.createServer(mainRouter.route);
server.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
