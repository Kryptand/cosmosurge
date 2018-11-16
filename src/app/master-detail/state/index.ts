import {
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	Params,
} from '@angular/router';
import {
	createFeatureSelector,
	ActionReducerMap,
	MetaReducer,
} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

export interface RouterStateUrl {
	url: string;
	queryParams: Params;
	params: Params;
}

export interface State {
	routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
	routerReducer: fromRouter.routerReducer,
};

export const getRouterState = createFeatureSelector<
	fromRouter.RouterReducerState<RouterStateUrl>
>('routerReducer');

export class CustomSerializer
	implements fromRouter.RouterStateSerializer<RouterStateUrl> {
	public serialize(routerState: RouterStateSnapshot): RouterStateUrl {
		const { url } = routerState;
		const { queryParams } = routerState.root;

		let state: ActivatedRouteSnapshot = routerState.root;
		while (state.firstChild) {
			state = state.firstChild;
		}
		const { params } = state;

		return { url, queryParams, params };
	}
}

export function logger(reducer: any): any {
	return function newReducer(state: any, action: any): any {
		console.group(action.type);
		const nextState = reducer(state, action);
		console.log(`%c prev state`, `color: #9E9E9E; font-weight: bold`, state);
		console.log(`%c action`, `color: #03A9F4; font-weight: bold`, action);
		console.log(
			`%c next state`,
			`color: #4CAF50; font-weight: bold`,
			nextState
		);
		console.groupEnd();
		return nextState;
	};
}
export const metaReducers: MetaReducer<any>[] = [logger];
