const actions = {
    increment: function(){
        return { type: 'INCREMENT_INIT' };
    },
    decrement: function(){
        return { type: 'DECREMENT_INIT' };
    },
    reset: function(){
        return { type: 'RESET' };
    },
    logout: function(){
        return { type: 'LOGOUT' };
    },
    login: function(){
        return { type: 'LOGIN' };
    },
    reset_clicked: function(){
        return { type: 'RESET_CLICKED' };
    }
}