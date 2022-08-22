// JavaScript Document


var BootState = {
	init: function(){
		this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
		this.scale.fullScreenScaleMode = Phaser.ScaleManager.NO_SCALE;
		this.scale.pageAlignHorizontally = this.scale.pageAlignVertically = false;
		
		this.game.world.setBounds(0,0,1920,1080);	
		this.game.width = window.innerWidth;
		this.game.height = window.innerHeight;
	},
	preload: function() {
		this.game.load.atlas('loader', 'images/logo-loader.png', 'images/logo-loader.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	},
	create: function() {
		this.game.stage.backgroundColor = '#000000';
		this.state.start('PreloadState');
	}
	
};