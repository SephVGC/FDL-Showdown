// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: import('../sim/dex-formats').FormatList = [
	{
		section: "FDL Nuzlocke",
	},
	{
		name: "[Gen 9] FDL Nuzlocke",
		desc: `All Pok&eacute;mon can use any move or ability, with no learnset restrictions.`,
		mod: 'freemoves',
		ruleset: ['Species Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Endless Battle Clause'],
	},
];
