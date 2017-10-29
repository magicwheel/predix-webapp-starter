const reducer = function(state, action){
    const initialState = {
//            logged_in
        value: 0,
        clicks: '>',
        loading: false,
        approvalString: "CLICK LOGIN",
        messagetype: "unknown",
        cachedValue: 0
    };

    if (state === undefined) state = initialState;

    switch (action.type) {
        case 'RESET':
            return initialState;
        case 'SET_MESSAGE_TYPE':
            return Object.assign(
                {},
                state,
                {messagetype: action.messagetype}
            );
        case 'ROLLBACK':
            //ES5
            return Object.assign(
                {},
                state,
                {value: state.cachedValue}
            );
        case 'INCREMENT':
            //ES5
            return Object.assign(
                {},
                state,
                {value: state.value +1},
                {cachedValue: state.value}
            );
        case 'DECREMENT':
            return Object.assign(
                {},
                state,
                {value: state.value -1},
                {cachedValue: state.value}
            );
        case 'LOAD_START':
            return Object.assign(
                {},
                state,
                {loading: true}
            );
        case 'LOAD_FINISHED':
            return Object.assign(
                {},
                state,
                {loading: false},
                {approvalString: action.approvalString}
            );
        case 'INCREMENT_INIT':
            return Object.assign(
                {},
                state,
                {clicks: state.clicks + '+'} //,
            );
        case 'DECREMENT_INIT':
            return Object.assign(
                {},
                state,
                {clicks: state.clicks + '-'} //,
            );
        default:
            return state
    }
};
