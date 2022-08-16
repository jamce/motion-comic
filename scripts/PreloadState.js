// JavaScript Document

var PreloadState = {	
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
		
		this.game.load.image('btncont', 'images/clickcont.png');
		this.game.load.image('tail', 'images/word_bubble_tail.png');
		
		this.game.load.image('introbg', 'images/chaseman_html_bg.jpg');
		this.game.load.image('intro', 'images/pg0/pg0_pn1.png');
		this.game.load.image('btnbegin', 'images/pg0/begin.png');
		this.game.load.image('btncontinue', 'images/pg0/continue.png');
		this.game.load.image('intro', 'images/pg0/pg0_pn1.png');
		this.game.load.audio('introAudio', 'audio/pg0/chaseman_theme.mp3');
		
		
	}, 
	
	create: function(){
				
		this.state.start('HomeState');
	}
};