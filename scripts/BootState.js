// JavaScript Document


var BootState = {
	init: function(){
				this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
		this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.RESIZE;
		this.game.scale.saceAutoCenter = Phaser.ScaleManager.CENTER_BOTH
		//this.scale.pageAlignHorizontally = this.scale.pageAlignVertically = false;
		
		this.game.world.setBounds(0,0,1024,768);	
		//this.game.width = window.innerWidth/2 - this.game.width/2;
		//this.game.height = window.innerHeight/2 - this.game.width/2;

	},
	preload: function() {
		this.game.load.atlas('loader', 'images/logo-loader.png', 'images/logo-loader.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	},
	create: function() {
		this.game.stage.backgroundColor = '#000000';
		this.state.start('PreloadState');
	}
	
};