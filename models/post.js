/**
* @name Post
* @extends
* @file post.js
* @author Add Your Name Here <addyouremail@gmail.com>
* @version 1.0.0
*/
class Post {

	constructor(id, userId, title, body) {
		this.id = id;
		this.userId = userId;
		this.title = title;
		this.body = body;
		this.comments = [];
	}
}