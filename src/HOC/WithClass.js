import React from 'react';

//first way

const WithClass = props =>(
	<div className={props.classes}>
		{props.children}
	</div>
);


// second Way

export const withClass2 = (WrappedComponent, className) => {
	return props =>(
		<div className={className}>
			<WrappedComponent {...props}/>
		</div>
	);
}




// use like this:  

// export.default withClass2(App, styles.App)  

// wrap your component export with function. should also name this file with lowercase char (to distinguish it from functional component) and name import with lowercase

export default WithClass;