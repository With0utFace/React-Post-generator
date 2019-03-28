import React, { Component } from "react";
import data from "../../json/posts";
import Post from "../post";
import AddPost from '../add-post';

import "./app.css";

export default class App extends Component {
	constructor(props) {
		super(props);

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

	onPostAdd = (tag) => {
		console.log(tag);
	}

	render() {

		return (
			<div className="app">
				<Post posts={this.state.posts}
					onPostDelete={this.onPostDelete} />
				<AddPost posts={this.state.posts}
					action={this.onPostAdd} />
			</div>
		);
	}
}
