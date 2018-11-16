export class ComposedIdUtility {
	/**
	 *returns composed id from a number of selected id properties
	 *
	 * @static
	 * @param {(string | string[])} identifier
	 * @param {*} projection
	 * @returns {string}
	 * @memberof ComposedIdUtility
	 */
	public static getComposedIdString(
		identifier: string | string[],
		projection: any
	): string {
		let composedIdString = '';
		if (Array.isArray(identifier)) {
			identifier.forEach((ident, index, arr) => {
				composedIdString += projection[ident];
				composedIdString += arr.length - 1 === index ? '' : '-';
			});
		} else {
			composedIdString = projection[identifier];
		}
		return composedIdString;
	}
	/**
	 * deconstructs composed id
	 *
	 * @static
	 * @param {(string | string[])} identifier
	 * @param {*} projection
	 * @returns {string}
	 * @memberof ComposedIdUtility
	 */
	public static transformStringToComposedId(composedId: string): string[] {
		return composedId.split('-');
	}
}
