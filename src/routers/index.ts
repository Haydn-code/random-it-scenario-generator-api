import IndexController from '../controllers';

export default class IndexRouter extends IndexController {
	public route(method: string, queries: { [key: string]: string }, res: any) {
		res.setHeader('Content-Type', 'application/json');
		switch (method) {
			case 'GET':
				res.writeHead(200);
				res.end(JSON.stringify(this.show));
				break;
			default:
				res.writeHead(405);
				res.end(
					JSON.stringify({
						data: {},
						errors: [
							{
								name: '405 error',
								description: 'This endpoint only supports GET requests',
							},
						],
					}),
				);
				break;
		}
	}
}
