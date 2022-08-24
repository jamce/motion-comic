// JavaScript Document


var BootState = {
	init: function(){
game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE ;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.canvas.style.width = '100%';
    game.canvas.style.height = '100%';
    game.scale.refresh();
		
		this.game.world.setBounds(0,0,1920,1080);	
		},
	
	preload: function() {
		this.game.load.atlas('loader', 'images/logo-loader.png', 'images/logo-loader.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	},
	create: function() {
		this.game.stage.backgroundColor = '#000000';
		this.state.start('PreloadState');
	}
	
};