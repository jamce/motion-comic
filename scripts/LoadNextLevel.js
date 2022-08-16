// JavaScript Document

var LoadNextLevel = {	
	init: function(num){
		
		if (num){
			_gc.onpage = num;
		}
		
	},
	
	preload: function(){
		//this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'chaseLogo');
		//this.logo.anchor.setTo(0.5);
		
		this.loader = this.add.sprite(window.innerWidth/2, window.innerHeight/2 , 'loader');
		this.loader.anchor.setTo(.5);
		this.loader.animations.add('loading', Phaser.Animation.generateFrameNames('LogoSpin', 0, 23, '', 4), 24, true, false);
		this.loader.animations.play('loading');
		
		var curpage = _gc.pages[_gc.onpage]; 
		
		SCORMsetValue('cmi.suspend_data', _gc.onpage);
		SCORMdoLMSCommit();
		
		
		this.game.load.image('btncont', 'images/clickcont.png');
		this.game.load.image('tail', 'images/word_bubble_tail.png');
		
		//this.loadPageContent();
		console.log("loading");		
		
		if (curpage.activity !== true){

			if ( curpage.bg ){ 
				this.game.load.image('bgimage', 'images/' + curpage.bg);
			}
			
			if ( curpage.pageAudio ){
				this.game.load.audio('pageAudio', 'audio/' + curpage.pageAudio);
			}
			
			for (var i = 0; i < curpage.panels.length; i++){ 
				var panel = curpage.panels[i]; console.log("current panel", panel);
				if (panel.type === 'panel'){
				
					this.game.load.onFileError.add(fileError, this, "", panel);
					
					if (panel.animated){
						this.game.load.atlas(panel.title, 'images/' + panel.url, 'images/' + panel.json, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
					} else {
						this.game.load.image(panel.title, 'images/' + panel.url);
					}
				
				}
				
				if (panel.audio){
					this.game.load.audio(panel.audioKey, 'audio/' + panel.audio);
				}
			}
			
			function fileError(file, err, panel){
				console.log("logging error", file, err, panel);
				
				panel.animated = false; 
				this.game.load.image(panel.title, 'images/' + panel.fallback);
			}
			
		}
		
	}, 
	
	create: function(){
		
		if (_gc.pages[_gc.onpage].activity !== true){
			this.state.start('GameState');
		} else {
			this.state.start(_gc.pages[_gc.onpage].activityLoader);
		}
	}
};