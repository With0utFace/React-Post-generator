import React, { Component } from 'react';
import './add-post.css';

export default class AddPost extends Component {
	constructor(props) {
		super(props);

		this.postTitle = React.createRef();
		this.postBody = React.createRef();
		this.postTags = React.createRef();
	}

	generateId = () => {
		return Math.random().toString().substr(2, 12);
	};

	addPost = () => {
		const data = {
			id: this.generateId(),
			title: this.postTitle.current.value,
			body: this.postBody.current.value,
			tags: this.postTags.current.value.split(",")
		}

		this.postTitle.current.value = '';
		this.postBody.current.value = '';
		this.postTags.current.value = '';

		return this.props.action(data);
	};

	render() {
		return (
			<div className="add-post">
				<p>Want to add new post ? do it</p>
				<input
					type="text"
					placeholder="Post title"
					ref={this.postTitle}
				/>

				<input
					type="text"
					placeholder="Post body"
					ref={this.postBody}
				/>

				<input
					type="text"
					placeholder="Post tags"
					ref={this.postTags}
				/>

				<button
					type="button"
					onClick={this.addPost}>
					Add Post
				</button>
			</div>
		);
	}
}
