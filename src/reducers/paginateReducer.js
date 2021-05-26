export default function paginationReducer(pageState, action) {
    switch (action.type) {
        case 'initState':
            return 1;
        case 'next': {
            const nextState = pageState + 1;
            return nextState;
        }
        case 'prev': {
            const prevState = pageState - 1;
            return prevState;
        }
        default:
            throw new Error('Unhandled action ' + action.type);
    }
}