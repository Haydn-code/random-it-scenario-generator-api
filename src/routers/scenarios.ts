import ScenariosController from '../controllers/scenarios';

export default class ScenariosRouter extends ScenariosController {
	public route(method: string, queries: { [key: string]: string }, res: any) {
		res.setHeader('Content-Type', 'application/json');
		switch (method) {
			case 'GET':
				res.writeHead(200);
				const technology = 'technology' in queries ? queries['technology'] : '';
				const role = 'role' in queries ? queries['role'] : '';
				const environment = 'environment' in queries ? queries['environment'] : '';
				res.end(this.show(technology, role, environment));
				break;
			default:
				res.writeHead(405);
				res.end({
					data: {},
					errors: [
						{
							name: '405 error',
							description: 'This endpoint only supports GET requests',
						},
					],
				});
				break;
		}
	}
}
