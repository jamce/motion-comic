// JavaScript Document

var PreloadActivity2State = {	
	preload: function(){
		//this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'chaseLogo');
		//this.logo.anchor.setTo(0.5);
		
		this.loader = this.add.sprite(window.innerWidth/2, window.innerHeight/2 , 'loader');
		this.loader.anchor.setTo(.5);
		this.loader.animations.add('loading', Phaser.Animation.generateFrameNames('LogoSpin', 0, 23, '', 4), 24, true, false);
		this.loader.animations.play('loading');
		
		/* EXAMPLE LOAD OPTIONS
		
		this.game.load.spritesheet('startbtn', 'images/button-start.png', 188, 74, 20);
		this.game.load.image('startbtn', 'images/start.png');
		this.game.load.atlas('bldgFinn', 'images/building3_sprite.png', 'images/building3_sprite.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		
		*/
		this.game.load.image('bgimage', 'images/chaseman_html_bg.jpg');
		this.game.load.image('sky', 'images/act2/sky.png');
		this.game.load.image('city', 'images/act2/city_bg.png');
		this.game.load.image('majorsave', 'images/act2/majorsave.png');
		this.game.load.image('mech', 'images/act2/mech.png');
		this.game.load.atlas('char1', 'images/act2/char_1.png', 'images/act2/char_1.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		this.game.load.atlas('char2', 'images/act2/char_2.png', 'images/act2/char_2.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		//this.game.load.atlas('char3', 'images/act2/char_3.png', 'images/act2/char_3.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		this.game.load.atlas('char4', 'images/act2/char_4.png', 'images/act2/char_4.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		//this.game.load.atlas('char5', 'images/act2/char_5.png', 'images/act2/char_5.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		//this.game.load.atlas('char6', 'images/act2/char_6.png', 'images/act2/char_6.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		this.game.load.atlas('char7', 'images/act2/char_7.png', 'images/act2/char_7.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		this.game.load.atlas('char8', 'images/act2/char_8.png', 'images/act2/char_8.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		this.game.load.atlas('char9', 'images/act2/char_9.png', 'images/act2/char_9.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		this.game.load.atlas('char10', 'images/act2/char_10.png', 'images/act2/char_10.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		this.game.load.atlas('char11', 'images/act2/char_11.png', 'images/act2/char_11.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		this.game.load.atlas('char12', 'images/act2/char_12.png', 'images/act2/char_12.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		this.game.load.audio('pageAudio', 'audio/act2/chaseman_pg7_music.mp3');
		
	}, 
	
	create: function(){
				
		this.state.start('Activity2State');
	}
};