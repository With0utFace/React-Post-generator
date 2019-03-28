import React, { Component } from 'react';
import './add-post.css';

export default class AddPost extends Component {
	constructor(props) {
		super(props);

		this.postTitle = React.createRef();
		this.postBody = React.createRef();
		this.postTags = React.createRef();
	}

	// createPost = (e) => {
	// 	e.preventDefault();

	// 	let postData = {
	// 		id: this.props.posts.length + 1,
	// 		title: this.postTitle.current.value,
	// 		body: this.postBody.current.value,
	// 		tags: this.postTags.current.value.split(",")
	// 	};
	// 	const { posts } = this.props;
	// 	posts.push(postData);
	// 	this.setState((state) => {
	// 		console.log(state);
	// 	});
	// }

	render() {


		return (
			<div className="add-post">
				<p>Want to add new post ? do it</p>
				<input type="text"
					placeholder="Post title"
					ref={this.postTitle} />

				<input type="text"
					placeholder="Post body"
					ref={this.postBody} />

				<input type="text"
					placeholder="Post tags"
					ref={this.postTags} />

				<button type="button"
					onClick={() => this.props.action({
						id: this.props.posts.length + 1,
						title: this.postTitle.current.value,
						body: this.postBody.current.value,
						tags: this.postTags.current.value.split(",")
					})}>Add Post</button>
			</div>
		);
	}
}
