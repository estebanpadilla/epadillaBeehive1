/**
* @name NavManager
* @extends
* @file navManager.js
* @author Add Your Name Here <addyouremail@gmail.com>
* @version 1.0.0
*/
class NavManager {

	constructor(dataManager) {
		this.dataManager = dataManager;
		this.beesComponent = document.getElementById('beesComponent');
		this.postsComponent = document.getElementById('postsComponent');
		this.albumComponent = document.getElementById('albumComponent');
		this.todosComponent = document.getElementById('todosComponent');
		//Get container for bee posts, album and todos

	}

	showBees() {
		this.dataManager.bees.forEach(bee => {
			var beeCompoment = new BeeComponent(bee, this.beesComponent, this.dataManager);
		});

		this.showBeePosts();
	}

	showBeePosts() {

		this.postsComponent.hidden = false;
		this.albumComponent.hidden = true;
		this.todosComponent.hidden = true;

		this.postsComponent.innerHTML = 'POSTS';

		this.dataManager.currentBee.posts.forEach(post => {
			var postComponent = new PostComponent(post, this.postsComponent, this.dataManager);
		});
	}

	showBeeAlbums() {
		this.postsComponent.hidden = true;
		this.albumComponent.hidden = false;
		this.todosComponent.hidden = true;
		this.albumComponent.innerHTML = 'ALBUM';
	}

	showBeeTodos() {
		this.postsComponent.hidden = true;
		this.albumComponent.hidden = true;
		this.todosComponent.hidden = false;
		this.todosComponent.innerHTML = 'TODOS';
	}
}