import { reducer, initialState } from './treatment-type.reducer';

describe('TreatmentType Reducer', () => {
	describe('unknown action', () => {
		it('should return the initial state', () => {
			const action = {} as any;

			const result = reducer(initialState, action);

			expect(result).toBe(initialState);
		});
	});
});
