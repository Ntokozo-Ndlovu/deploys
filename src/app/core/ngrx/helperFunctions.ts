import { pick, cloneDeep } from 'lodash';

// #region NGRX helpers
/**
 *  @summary Used in the ngrx reducers
 *   Removes loading for the action flow from the loading dictionary
 */
export function removeLoading<T>(state: T, payload: { type: string; executedTime: number }): T {
    try {
        const newState: T = cloneDeep(state);
        delete newState['dictLoading'][payload.executedTime];
        return { ...newState };
    } catch {
        return { ...state, dictLoading: {} };
    }
}
/**
 *  @summary Removes loading for the action flow from the loading dictionary
 */
export function addLoading<T>(state: T, payload: { type: string; executedTime: number }): T {
    try {
        const newState: T = cloneDeep(state);
        newState['dictLoading'][payload.executedTime] = payload.type;
        return { ...newState };
    } catch {
        return { ...state, dictLoading: { [payload.executedTime]: payload.type } };
    }
}

/**
 *
 * @param keyToSave  The location to save the data in the local storage
 * @param state The state which will be saved.
 * @param properties An array of of the properties to save from state. Nested properties can be retrieved through
 * by adding the . syntax ['nested.property']. if no properties are provided the entire state will be saved
 *
 * @summary this function will be used to save needed state values to local storage. These values will later
 *  be needed to hydrate state.
 */
export function saveStateData<T>(keyToSave: string, state: T, propertiesToSave?: string[]) {
    if (propertiesToSave) {
        const dataToSave = pick(state, propertiesToSave);
        localStorage.setItem(keyToSave, JSON.stringify(dataToSave));
    } else {
        localStorage.setItem(keyToSave, JSON.stringify(state));
    }
}
export function getStateData<T>(keyToGet: string): T {
    return JSON.parse(localStorage.getItem(keyToGet));
}
// #endregion
