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
		//Get container for bee posts, album and todos

	}

	showBees() {
		this.dataManager.bees.forEach(bee => {
			var beeCompoment = new BeeComponent(bee, this.beesComponent, this.dataManager);
		});

		this.showBeePosts();
	}

	showBeePosts() {
		this.postsComponent.innerHTML = '';
		this.dataManager.currentBee.posts.forEach(post => {
			var postComponent = new PostComponent(post, this.postsComponent, this.dataManager);
		});
	}

	showBeeAlbum() {

	}

	showBeeTodos() {

	}
}