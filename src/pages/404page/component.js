import React from 'react'
import style from './style.module.scss'
// ROUTER
import { useNavigate } from 'react-router-dom' 

const ErrorPage = () => {
    // STATE
    const navigate = useNavigate();

    return(
	<div className={style.errorPage}>
		<h1>Page Not Found</h1>
		<button 
			onClick={() => navigate('/')} 
			className={style.btn}
		>
			GO BACK HOME
		</button>
	</div>
    );
}

export default ErrorPage;
