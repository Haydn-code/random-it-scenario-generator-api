import IndexRouter from './index';

describe('Index Router', () => {
	it('Fails on invalid method', () => {
		const testIndexRouter = new IndexRouter();
		const mockedRes: { setHeader: any; writeHead: any; end: any } = {
			setHeader: jest.fn(),
			writeHead: jest.fn(),
			end: jest.fn(),
		};
		testIndexRouter.route('POST', {}, mockedRes);
		expect(mockedRes.writeHead).toHaveBeenCalledWith(405);
		expect(mockedRes.end).toHaveBeenCalledWith(
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
	});
	it('Succeeds on GET request', () => {
		const testIndexRouter = new IndexRouter();
		const mockedRes: { setHeader: any; writeHead: any; end: any } = {
			setHeader: jest.fn(),
			writeHead: jest.fn(),
			end: jest.fn(),
		};
		testIndexRouter.route('GET', {}, mockedRes);
		expect(mockedRes.writeHead).toHaveBeenCalledWith(200);
	});
});
