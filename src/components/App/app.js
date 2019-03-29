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
	}

	componentWillMount() {
		if (window.localStorage.length > 0) {
			for (let i = 0; i < localStorage.length; i++) {
				let storageKey = localStorage.key(i);
				let currentStorageItem = JSON.parse(localStorage.getItem(storageKey));
				this.setState(({ posts }) => {
					const localStorageArray = [
						...posts,
						currentStorageItem
					];

					return {
						posts: localStorageArray
					}
				});
			}
		}
	}

	postDelete = (id) => {
		localStorage.removeItem(id);
		this.setState(({ posts }) => {
			const index = posts.findIndex((idx) => idx.id === id);

			const newArray = [
				...posts.slice(0, index),
				...posts.slice(index + 1)
			];

			return {
				posts: newArray
			}
		});
	}

	postAdd = (post) => {
		localStorage.setItem(post.id, JSON.stringify(post));
		this.setState(({ posts }) => {
			const newArray = [
				...posts,
				post
			];

			return {
				posts: newArray
			}
		});
	}

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
	}
}
