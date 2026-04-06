export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
	// Allow any Pokemon to use Aura Wheel (normally Morpeko/Morpeko-Hangry only)
	aurawheel: {
		inherit: true,
		onTry() {
			// No species restriction in FDL Nuzlocke format
		},
	},
	// Allow any Pokemon to use Dark Void (normally Darkrai only)
	darkvoid: {
		inherit: true,
		onTry() {
			// No species restriction in FDL Nuzlocke format
		},
	},
	// Allow any Pokemon to use Hyperspace Fury (normally Hoopa-Unbound only)
	hyperspacefury: {
		inherit: true,
		onTry() {
			// No species restriction in FDL Nuzlocke format
		},
	},
};
