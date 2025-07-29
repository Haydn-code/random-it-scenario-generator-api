export const scenarios: {
	[key: string]: {
		[key: string]: {
			[key: string]: {
				challenge: string;
				incident: string;
				'troubleshooting step': string;
			}[];
		};
	};
} = {
	'Cloud Computing': {
		'System Administrator': {
			'Enterprise Network': [
				{
					challenge: 'cloud administrator enterprise challenge 1',
					incident: 'cloud administrator enterprise incident 1',
					'troubleshooting step': 'cloud administrator enterprise troubleshooting step 1',
				},
				{
					challenge: 'cloud administrator enterprise challenge 2',
					incident: 'cloud administrator enterprise incident 2',
					'troubleshooting step': 'cloud administrator enterprise troubleshooting step 2',
				},
			],
			'Cloud Infrastructure': [
				{
					challenge: 'cloud administrator infrastructure challenge 1',
					incident: 'cloud administrator infrastructure incident 1',
					'troubleshooting step': 'cloud administrator infrastructure troubleshooting step 1',
				},
				{
					challenge: 'cloud administrator infrastructure challenge 2',
					incident: 'cloud administrator infrastructure incident 2',
					'troubleshooting step': 'cloud administrator infrastructure troubleshooting step 2',
				},
			],
			'On-Prem Data Center': [
				{
					challenge: 'cloud administrator on-prem challenge 1',
					incident: 'cloud administrator on-prem incident 1',
					'troubleshooting step': 'cloud administrator on-prem troubleshooting step 1',
				},
				{
					challenge: 'cloud administrator on-prem challenge 2',
					incident: 'cloud administrator on-prem incident 2',
					'troubleshooting step': 'cloud administrator on-prem troubleshooting step 2',
				},
			],
		},
		'Software Engineer': {
			'Enterprise Network': [
				{
					challenge: 'cloud engineer enterprise challenge 1',
					incident: 'cloud engineer enterprise incident 1',
					'troubleshooting step': 'cloud engineer enterprise troubleshooting step 1',
				},
				{
					challenge: 'cloud engineer enterprise challenge 2',
					incident: 'cloud engineer enterprise incident 2',
					'troubleshooting step': 'cloud engineer enterprise troubleshooting step 2',
				},
			],
			'Cloud Infrastructure': [
				{
					challenge: 'cloud engineer infrastructure challenge 1',
					incident: 'cloud engineer infrastructure incident 1',
					'troubleshooting step': 'cloud engineer infrastructure troubleshooting step 1',
				},
				{
					challenge: 'cloud engineer infrastructure challenge 2',
					incident: 'cloud engineer infrastructure incident 2',
					'troubleshooting step': 'cloud engineer infrastructure troubleshooting step 2',
				},
			],
			'On-Prem Data Center': [
				{
					challenge: 'cloud engineer on-prem challenge 1',
					incident: 'cloud engineer on-prem incident 1',
					'troubleshooting step': 'cloud engineer on-prem troubleshooting step 1',
				},
				{
					challenge: 'cloud engineer on-prem challenge 2',
					incident: 'cloud engineer on-prem incident 2',
					'troubleshooting step': 'cloud engineer on-prem troubleshooting step 2',
				},
			],
		},
		'Security Analyst': {
			'Enterprise Network': [
				{
					challenge: 'cloud analyst enterprise challenge 1',
					incident: 'cloud analyst enterprise incident 1',
					'troubleshooting step': 'cloud analyst enterprise troubleshooting step 1',
				},
				{
					challenge: 'cloud analyst enterprise challenge 2',
					incident: 'cloud analyst enterprise incident 2',
					'troubleshooting step': 'cloud analyst enterprise troubleshooting step 2',
				},
			],
			'Cloud Infrastructure': [
				{
					challenge: 'cloud analyst infrastructure challenge 1',
					incident: 'cloud analyst infrastructure incident 1',
					'troubleshooting step': 'cloud analyst infrastructure troubleshooting step 1',
				},
				{
					challenge: 'cloud analyst infrastructure challenge 2',
					incident: 'cloud analyst infrastructure incident 2',
					'troubleshooting step': 'cloud analyst infrastructure troubleshooting step 2',
				},
			],
			'On-Prem Data Center': [
				{
					challenge: 'cloud analyst on-prem challenge 1',
					incident: 'cloud analyst on-prem incident 1',
					'troubleshooting step': 'cloud analyst on-prem troubleshooting step 1',
				},
				{
					challenge: 'cloud analyst on-prem challenge 2',
					incident: 'cloud analyst on-prem incident 2',
					'troubleshooting step': 'cloud analyst on-prem troubleshooting step 2',
				},
			],
		},
	},
	Cybersecurity: {
		'System Administrator': {
			'Enterprise Network': [
				{
					challenge: 'cybersecurity administrator enterprise challenge 1',
					incident: 'cybersecurity administrator enterprise incident 1',
					'troubleshooting step': 'cybersecurity administrator enterprise troubleshooting step 1',
				},
				{
					challenge: 'cybersecurity administrator enterprise challenge 2',
					incident: 'cybersecurity administrator enterprise incident 2',
					'troubleshooting step': 'cybersecurity administrator enterprise troubleshooting step 2',
				},
			],
			'Cloud Infrastructure': [
				{
					challenge: 'cybersecurity administrator infrastructure challenge 1',
					incident: 'cybersecurity administrator infrastructure incident 1',
					'troubleshooting step':
						'cybersecurity administrator infrastructure troubleshooting step 1',
				},
				{
					challenge: 'cybersecurity administrator infrastructure challenge 2',
					incident: 'cybersecurity administrator infrastructure incident 2',
					'troubleshooting step':
						'cybersecurity administrator infrastructure troubleshooting step 2',
				},
			],
			'On-Prem Data Center': [
				{
					challenge: 'cybersecurity administrator on-prem challenge 1',
					incident: 'cybersecurity administrator on-prem incident 1',
					'troubleshooting step': 'cybersecurity administrator on-prem troubleshooting step 1',
				},
				{
					challenge: 'cybersecurity administrator on-prem challenge 2',
					incident: 'cybersecurity administrator on-prem incident 2',
					'troubleshooting step': 'cybersecurity administrator on-prem troubleshooting step 2',
				},
			],
		},
		'Software Engineer': {
			'Enterprise Network': [
				{
					challenge: 'cybersecurity engineer enterprise challenge 1',
					incident: 'cybersecurity engineer enterprise incident 1',
					'troubleshooting step': 'cybersecurity engineer enterprise troubleshooting step 1',
				},
				{
					challenge: 'cybersecurity engineer enterprise challenge 2',
					incident: 'cybersecurity engineer enterprise incident 2',
					'troubleshooting step': 'cybersecurity engineer enterprise troubleshooting step 2',
				},
			],
			'Cloud Infrastructure': [
				{
					challenge: 'cybersecurity engineer infrastructure challenge 1',
					incident: 'cybersecurity engineer infrastructure incident 1',
					'troubleshooting step': 'cybersecurity engineer infrastructure troubleshooting step 1',
				},
				{
					challenge: 'cybersecurity engineer infrastructure challenge 2',
					incident: 'cybersecurity engineer infrastructure incident 2',
					'troubleshooting step': 'cybersecurity engineer infrastructure troubleshooting step 2',
				},
			],
			'On-Prem Data Center': [
				{
					challenge: 'cybersecurity engineer on-prem challenge 1',
					incident: 'cybersecurity engineer on-prem incident 1',
					'troubleshooting step': 'cybersecurity engineer on-prem troubleshooting step 1',
				},
				{
					challenge: 'cybersecurity engineer on-prem challenge 2',
					incident: 'cybersecurity engineer on-prem incident 2',
					'troubleshooting step': 'cybersecurity engineer on-prem troubleshooting step 2',
				},
			],
		},
		'Security Analyst': {
			'Enterprise Network': [
				{
					challenge: 'cybersecurity analyst enterprise challenge 1',
					incident: 'cybersecurity analyst enterprise incident 1',
					'troubleshooting step': 'cybersecurity analyst enterprise troubleshooting step 1',
				},
				{
					challenge: 'cybersecurity analyst enterprise challenge 2',
					incident: 'cybersecurity analyst enterprise incident 2',
					'troubleshooting step': 'cybersecurity analyst enterprise troubleshooting step 2',
				},
			],
			'Cloud Infrastructure': [
				{
					challenge: 'cybersecurity analyst infrastructure challenge 1',
					incident: 'cybersecurity analyst infrastructure incident 1',
					'troubleshooting step': 'cybersecurity analyst infrastructure troubleshooting step 1',
				},
				{
					challenge: 'cybersecurity analyst infrastructure challenge 2',
					incident: 'cybersecurity analyst infrastructure incident 2',
					'troubleshooting step': 'cybersecurity analyst infrastructure troubleshooting step 2',
				},
			],
			'On-Prem Data Center': [
				{
					challenge: 'cybersecurity analyst on-prem challenge 1',
					incident: 'cybersecurity analyst on-prem incident 1',
					'troubleshooting step': 'cybersecurity analyst on-prem troubleshooting step 1',
				},
				{
					challenge: 'cybersecurity analyst on-prem challenge 2',
					incident: 'cybersecurity analyst on-prem incident 2',
					'troubleshooting step': 'cybersecurity analyst on-prem troubleshooting step 2',
				},
			],
		},
	},
	DevOps: {
		'System Administrator': {
			'Enterprise Network': [
				{
					challenge: 'DevOps administrator enterprise challenge 1',
					incident: 'DevOps administrator enterprise incident 1',
					'troubleshooting step': 'DevOps administrator enterprise troubleshooting step 1',
				},
				{
					challenge: 'DevOps administrator enterprise challenge 2',
					incident: 'DevOps administrator enterprise incident 2',
					'troubleshooting step': 'DevOps administrator enterprise troubleshooting step 2',
				},
			],
			'Cloud Infrastructure': [
				{
					challenge: 'DevOps administrator infrastructure challenge 1',
					incident: 'DevOps administrator infrastructure incident 1',
					'troubleshooting step': 'DevOps administrator infrastructure troubleshooting step 1',
				},
				{
					challenge: 'DevOps administrator infrastructure challenge 2',
					incident: 'DevOps administrator infrastructure incident 2',
					'troubleshooting step': 'DevOps administrator infrastructure troubleshooting step 2',
				},
			],
			'On-Prem Data Center': [
				{
					challenge: 'DevOps administrator on-prem challenge 1',
					incident: 'DevOps administrator on-prem incident 1',
					'troubleshooting step': 'DevOps administrator on-prem troubleshooting step 1',
				},
				{
					challenge: 'DevOps administrator on-prem challenge 2',
					incident: 'DevOps administrator on-prem incident 2',
					'troubleshooting step': 'DevOps administrator on-prem troubleshooting step 2',
				},
			],
		},
		'Software Engineer': {
			'Enterprise Network': [
				{
					challenge: 'DevOps engineer enterprise challenge 1',
					incident: 'DevOps engineer enterprise incident 1',
					'troubleshooting step': 'DevOps engineer enterprise troubleshooting step 1',
				},
				{
					challenge: 'DevOps engineer enterprise challenge 2',
					incident: 'DevOps engineer enterprise incident 2',
					'troubleshooting step': 'DevOps engineer enterprise troubleshooting step 2',
				},
			],
			'Cloud Infrastructure': [
				{
					challenge: 'DevOps engineer infrastructure challenge 1',
					incident: 'DevOps engineer infrastructure incident 1',
					'troubleshooting step': 'DevOps engineer infrastructure troubleshooting step 1',
				},
				{
					challenge: 'DevOps engineer infrastructure challenge 2',
					incident: 'DevOps engineer infrastructure incident 2',
					'troubleshooting step': 'DevOps engineer infrastructure troubleshooting step 2',
				},
			],
			'On-Prem Data Center': [
				{
					challenge: 'DevOps engineer on-prem challenge 1',
					incident: 'DevOps engineer on-prem incident 1',
					'troubleshooting step': 'DevOps engineer on-prem troubleshooting step 1',
				},
				{
					challenge: 'DevOps engineer on-prem challenge 2',
					incident: 'DevOps engineer on-prem incident 2',
					'troubleshooting step': 'DevOps engineer on-prem troubleshooting step 2',
				},
			],
		},
		'Security Analyst': {
			'Enterprise Network': [
				{
					challenge: 'DevOps analyst enterprise challenge 1',
					incident: 'DevOps analyst enterprise incident 1',
					'troubleshooting step': 'DevOps analyst enterprise troubleshooting step 1',
				},
				{
					challenge: 'DevOps analyst enterprise challenge 2',
					incident: 'DevOps analyst enterprise incident 2',
					'troubleshooting step': 'DevOps analyst enterprise troubleshooting step 2',
				},
			],
			'Cloud Infrastructure': [
				{
					challenge: 'DevOps analyst infrastructure challenge 1',
					incident: 'DevOps analyst infrastructure incident 1',
					'troubleshooting step': 'DevOps analyst infrastructure troubleshooting step 1',
				},
				{
					challenge: 'DevOps analyst infrastructure challenge 2',
					incident: 'DevOps analyst infrastructure incident 2',
					'troubleshooting step': 'DevOps analyst infrastructure troubleshooting step 2',
				},
			],
			'On-Prem Data Center': [
				{
					challenge: 'DevOps analyst on-prem challenge 1',
					incident: 'DevOps analyst on-prem incident 1',
					'troubleshooting step': 'DevOps analyst on-prem troubleshooting step 1',
				},
				{
					challenge: 'DevOps analyst on-prem challenge 2',
					incident: 'DevOps analyst on-prem incident 2',
					'troubleshooting step': 'DevOps analyst on-prem troubleshooting step 2',
				},
			],
		},
	},
};
