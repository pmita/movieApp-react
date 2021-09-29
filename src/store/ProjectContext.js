import React, {useState, createContext} from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
    // defining our state
    // const [testValue, setTestValue] = useState('Test from Test Value');
    const [isHidden, setIsHidden] = useState(true);

    return(
	<ProjectContext.Provider value={[ isHidden, setIsHidden ]}>
		{props.children}
	</ProjectContext.Provider>
    )
}
