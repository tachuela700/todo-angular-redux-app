import * as fromFilterActions from './filter.actions';

const initialState: fromFilterActions.validFilters = 'All';

export function filterReducer(state = initialState, action: fromFilterActions.filterActions): fromFilterActions.validFilters {
  switch (action.type) {
    case fromFilterActions.SET_FILTER:
      return action.filter;

    default:
      return state;
  }
}
