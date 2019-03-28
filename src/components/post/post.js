import React, { Component } from "react";
import './post.css';

export default class Post extends Component {
	render() {

		const { onPostDelete } = this.props;

		const onePost = this.props.posts.map((post) => {

			let tags = post.tags.map((tag, i) => {
				return (
					<button className="post-tag" key={i}>
						{tag}
					</button>
				);
			});

			return (
				<div className="post"
					key={post.id}>
					<div className="post-title">
						<h2>{post.title}</h2>
					</div>
					<div className="post-body">
						<p>{post.body}</p>
					</div>
					<div className="post-tags">
						{tags}
					</div>
					<div>
						<button className="delete-post"
							onClick={() => onPostDelete(post.id)}>Удалить</button>
					</div>
				</div>
			);
		});

		return (
			<div className="posts-container">{onePost}</div>
		);
	}
}
