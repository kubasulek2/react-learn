import React from 'react';


const authContext = React.createContext({
	authenticated: false, login: () => {} // just for IDE better autocompletion
});

export default authContext;