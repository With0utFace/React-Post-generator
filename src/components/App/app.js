import React, { Component } from "react";
import data from "../../json/posts";
import PostElement from "../post-element";
import AddPost from '../add-post';

import "./app.css";

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: data
		};
	};

	componentWillMount() {
		if (window.localStorage.length > 0) {
			for (let i = 0; i < localStorage.length; i++) {
				let currentStorageItem = JSON.parse(localStorage.getItem(localStorage.key(i)));

				this.setState(({ posts }) => {
					return { posts: [...posts, currentStorageItem] }
				});
			}
		}
	};

	postDelete = (id) => {
		localStorage.removeItem(id);
		this.setState(({ posts }) => {
			return { posts: posts.filter(element => element.id !== id) }
		});
	};

	postAdd = (post) => {
		localStorage.setItem(post.id, JSON.stringify(post));
		this.setState(({ posts }) => {
			return { posts: [...posts, post] }
		});
	};

	render() {
		return (
			<div className="app">
				<PostElement
					posts={this.state.posts}
					onPostDelete={this.postDelete}
				/>
				<AddPost
					posts={this.state.posts}
					action={this.postAdd}
				/>
			</div>
		);
	};
}
