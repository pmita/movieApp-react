import React, { useCallback } from 'react';
import './style.scss';
// REDUX
import { useDispatch } from 'react-redux';
import { submitMovie } from '../../store/actions/actionCreators';
// FORMIK
import { useFormik } from 'formik';

const AddMovie = ({ toggleAddMovie, setToggleAddMovie, movie }) => {
    // STATE
	const dispatch = useDispatch();

    const validate = (values) => {
        const errors = {}

        if(!values.vote){
            errors.vote = 'Required'
        } else if(values.vote.length > 10){
            errors.vote = 'Rating must be between 0 - 10'
        }

        if(!values.overview){
            errors.overview = 'Required'
        } else if(values.overview.length < 50){
            errors.overview = 'Please provide a longer description'
        }

        return errors;
    }

    const formik = useFormik({
        initialValues : {
            title : movie ? movie.title : '',
            date : movie ? movie.date : '',
            img : movie ? movie.poster_path : '',
            genres : movie ? movie.genres : [],
            overview : movie ? movie.overview : '',
            vote : movie ? movie.vote_average : null
        },
        enableReinitialize : true,
        validate,
        onSubmit : (values) => {
            dispatch(submitMovie(values));
		    cancelEditMovieHandler();
        }
    })

	const cancelEditMovieHandler = useCallback(() => {
		setToggleAddMovie(!toggleAddMovie);
        formik.handleReset()
	}, [toggleAddMovie, setToggleAddMovie]);
	
	return(
		<div className='addMovie-section'>
			<div className='addMovie-details'>
				<h2>EDIT MOVIE</h2>
				<form onSubmit={formik.handleSubmit}>
					<label>
						<span>TITLE</span>
						<input 
							type='text' 
							name='title' 
							value={formik.values.title} 
							onChange={formik.handleChange}
						/>
					</label>
					<label>
						<span>RELEASE DATE</span>
						<input 
							type='date' 
							name='date' 
							value={formik.values.date} 
							onChange={formik.handleChange}
						/>
					</label>
					<label>
						<span>MOVIE URL</span>
						<input 
							type='text' 
							name='img' 
							value={formik.values.img} 
							onChange={formik.handleChange}
						/>
					</label>
					<label>
						<span>GENRES: </span>
						<input
							type='text'
							name='genres'
							onChange={formik.handleChange}
							value={formik.values.genres}
						/>
					</label>
					<label>
						<span>OVERVIEW</span>
						<textarea 
							type='text' 
							name='overview' 
							value={formik.values.overview} 
							onChange={formik.handleChange}
						/>
						{formik.touched.overview && (
                            formik.errors.overview ? <p>{formik.errors.overview}</p> : null
                        )}
					</label>
					<label>
						<span>RATING</span>
						<input 
							type='number' 
							name='vote' 
							value={formik.values.vote} 
							onChange={formik.handleChange} 
							onBlur={formik.handleBlur}
						/>
						{formik.touched.vote && formik.errors.vote ? <p>{formik.errors.vote}</p> : null}
					</label>
					<div className='addMovie-buttons'>
						<button className='btn btn-cancelItem' onClick={cancelEditMovieHandler}>CANCEL</button>
						<button className='btn btn-resetItem' onClick={formik.handleReset}>RESET</button>
						<button type='submit' className='btn btn-addItem'>SUBMIT</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default AddMovie;
