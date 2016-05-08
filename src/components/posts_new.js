import React, { Component} from 'react';

import { reduxForm } from 'redux-form';

import { createPosts } from '../actions/index';

import { Link } from 'react-router';

import { PostsIndex } from './posts_index';

class PostsNew extends Component{
	
	 render(){
		 
		 const { fields: {title,categories,content}, handleSubmit } = this.props;
		 
		 
		 
		  return(
		  
		  
			  <form onSubmit={ handleSubmit(this.props.createPosts) } >
			  
					<div className= {`form-group ${ title.touched && title.invalid ? "has-danger" : " "}`}>
							   
							   <label> Title </label>
							   <input type="text" className="form-control" {...title} />
							   
							   <div className="text-help">
							     { title.touched? title.error : '' }
							   </div>
							 
					 </div>
					<div className={`form-group ${ categories.touched && categories.invalid ? "has-danger" : " "}`}>
							   
							   <label> Categories </label> 
							   <input type="text" className="form-control" {...categories}/>
							   
							   <div className="text-help">
							      { categories.touched? categories.error : '' }
							   </div>
							 
							   
							   
							 .
					 </div>
							 
					<div className={`form-group ${ content.touched && content.invalid ? "has-danger" : " "}`}>
							   
							   <label> Description </label>
							   <textarea  className="form-control" {...content} />
							   
							    <div className="text-help">
							     { content.touched? content.error : '' }
							   </div>
							 
					</div>
							 
					<button type="submit" className="btn btn-primary"> Submit </button>
					<Link to="/" className="btn btn-danger">
					  Cancel 
					</Link>
			  </form>
			 
			  
			
			  
		   );
		 
		
		}
	
}

function validate(values){
	
	const errors={};
	
	if(!values.title){
		
		errors.title= "Please enter a title"
	}
	
	
	if(!values.categories){
		
		errors.categories= "Please enter a category"
	}
	
	if(!values.content){
		
		errors.content= "Please enter content"
	}
	
	return errors;
	
	
	
}

export default reduxForm({
   
   form: 'PostsNewForm',
   fields: ['title','categories','content'],
   validate
   
},null,{createPosts})(PostsNew);