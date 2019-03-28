import React, { Component } from "react";
import data from "../../json/posts";
import Post from "../post";
import AddPost from '../add-post';

import "./app.css";

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			posts: data
		};
	}

	onPostDelete = (id) => {
		this.setState(({ posts }) => {
			const index = posts.findIndex((idx) => idx.id === id);

			const newArray = [
				...posts.slice(0, index),
				...posts.slice(index + 1)
			];

			return {
				posts: newArray
			}
		})
	}

	render() {
		return (
			<div className="app">
				<Post posts={this.state.posts}
					onPostDelete={this.onPostDelete} />
				<AddPost />
			</div>
		);
	}
}
