/**
 * Created by sanjoy on 11/11/15.
 */
export default socket => store => next => action => {
    console.log('action performed', action);
    if(action.meta && action.meta.remote){
        console.log('sending action');
        socket.emit('action', action)
    }
    return next(action);
}