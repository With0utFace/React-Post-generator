import React, { Component } from 'react';
import './add-post.css';

export default class AddPost extends Component {

	render() {
		return (
			<form>
				<p>Want to add new post ? do it</p>
				<input type="text" placeholder="Post title" />
				<input type="text" placeholder="Post body" />
				<input type="text" placeholder="Post tags" />
				<button></button>
			</form>
		);
	}
}
