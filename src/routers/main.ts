import IndexRouter from './index';
import ScenariosRouter from './scenarios';

export default class MainRouter {
	protected indexRouter = new IndexRouter();
	protected scenariosRouter = new ScenariosRouter();
	public route(req: any, res: any) {
		const urlQuery = req.url.split('?');
		const url = urlQuery[0];
		const queries = urlQuery.length > 1 ? this.parseQueries(urlQuery[1]) : {};
		switch (url) {
			case '/':
				this.indexRouter.route(req.method, queries, res);
				break;
			case '/scenarios':
				this.scenariosRouter.route(req.method, queries, res);
				break;
			default:
				res.setHeader('Content-Type', 'application/json');
				res.writeHead(404);
				res.end(
					JSON.stringify({
						data: {},
						errors: [
							{
								name: '404 error',
								description: "This page doesn't exist",
							},
						],
					}),
				);
		}
	}
	public parseQueries(queries: string): { [key: string]: string } {
		const formattedQueries = queries.replaceAll('%20', ' ');
		const identifiedQueries: { [key: string]: string } = {};

		// Gets each query parameter.
		const splitQueries = formattedQueries.split('&');

		// Loops through and appends each valid query parameter.
		for (const query of splitQueries) {
			const queryToValue = query.split('=');
			if (queryToValue.length == 2) {
				identifiedQueries[queryToValue[0]] = queryToValue[1];
			}
		}
		return identifiedQueries;
	}
}
