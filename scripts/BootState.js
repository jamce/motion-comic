// JavaScript Document


var BootState = {
	
	preload: function() {
		this.game.load.atlas('loader', 'images/logo-loader.png', 'images/logo-loader.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	},
	create: function() {
		this.game.stage.backgroundColor = '#000000';
		this.state.start('PreloadState');
	}
	
};