export default class IndexController {
	protected show(): {
		data: {
			title: string;
			description: string;
			options: { technology: string[]; role: string[]; environment: string[] };
		};
	} {
		return {
			data: { title: '', description: '', options: { technology: [], role: [], environment: [] } },
		};
	}
}
