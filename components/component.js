/**
* @name BeeComponent
* @extends
* @file beeComponent.js
* @author Esteban Padilla <ep@estebanpadilla.com>
* @version 1.0.0
*/
class Component {
	constructor(model, parent, dataManager) {
		this.model = model;
		this.parent = parent;
		this.dataManager = dataManager;

		if (this.parent) {
			this.container = document.createElement('div');
			this.parent.appendChild(this.container);
		}
	}
}