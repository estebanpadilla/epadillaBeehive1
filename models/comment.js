/**
* @name Comment
* @extends
* @file comment.js
* @author Esteban Padilla <ep@estebanpadilla.com>
* @version 1.0.0
*/
class Comment {
	constructor(id, postId, name, email, body) {
		this.id = id;
		this.postId = postId;
		this.name = name;
		this.email = email;
		this.body = body;
	}
}