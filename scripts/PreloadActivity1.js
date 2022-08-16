// JavaScript Document

var PreloadActivity1State = {	
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
		this.game.load.image('bg1', 'images/act1/chaseman_activity_1_bg_1.jpg');
		this.game.load.image('bg2', 'images/act1/chaseman_activity_1_bg_2.jpg');
		this.game.load.image('checkmark', 'images/act1/check_mark.png');
		this.game.load.image('pop1', 'images/act1/pop1.png');
		this.game.load.image('pop2', 'images/act1/pop2.png');
		this.game.load.image('pop3', 'images/act1/pop3.png');
		this.game.load.image('pop4', 'images/act1/pop4.png');
		this.game.load.image('pop5', 'images/act1/pop5.png');
		this.game.load.image('pop6', 'images/act1/pop6.png');
		this.game.load.image('scanner', 'images/act1/scanner.png');
		this.game.load.image('act1intro', 'images/act1/Intro_screen.png');
		this.game.load.image('act1outro', 'images/act1/end_screen.png');
		this.game.load.audio('pageAudio', 'audio/act1/chaseman_pg3_music.mp3');
		
	}, 
	
	create: function(){
				
		this.state.start('Activity1State');
	}
};