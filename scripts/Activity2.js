// JavaScript Document

var Activity2State = {

	preload: function(){
		
	},

	init: function(bookmark){ 
		//bookmark = 's119pC5pF7pB3pW4tC35tF47tB18tW23';
		
		if (bookmark){
			
		}
	},
	
	create: function(){ 	
		
		var pagedata = _gc.pages[_gc.onpage];
		_gc.onpage++;
		
		var adjWidth = (pagedata.pageW - window.innerWidth) / 2;
		var adjHeight = (pagedata.pageH - window.innerHeight) / 2;
		
		
			
		/**********************************************************************************************
			TYPOGRAPHY
			
			Define your font styles here so they are all in one nice place for reference.
			
		**********************************************************************************************/
		
		var plainText = {
							font: 'Lato',
							fontWeight: 'normal',
							fontSize: 16,
							fill: 'black',
							align: 'left',
							wordWrap: true,
							wordWrapWidth: 600
						}
						
		var boldText = {
							font: 'Lato',
							fontWeight: 'bold',
							fontSize: 16,
							fill: 'black',
							align: 'left',
							wordWrap: true,
							wordWrapWidth: 600
						}
						
		var wordBubble = {
							font: 'Lato',
							fontWeight: 'normal',
							fontSize: 14,
							fill: 'black',
							align: 'center',
							wordWrap: true,
							wordWrapWidth: 250
							
						}
						
		var boldBubble = {
							font: 'Lato',
							fontWeight: 'bold',
							fontSize: 14,
							fill: 'black',
							align: 'center',
							wordWrap: true,
							wordWrapWidth: 250
							
						}
						
		var exclamation = {
							font: 'Bangers',
							fontWeight: 'normal',
							fontSize: 20,
							fill: 'black',
							align: 'left',
							wordWrap: false
						}
		
		
		
		/**********************************************************************************************
			LAYERING
			
			You'll want to create several groups to use in the game. Groups serve as "layers" and are 
			displayed from bottom to top in the order they are created.
			
		**********************************************************************************************/
		
		this.game.stage.backgroundColor = pagedata.bgcolor;
		
		var BG = this.game.add.group();
		var MID = this.game.add.group();
		var FORE = this.game.add.group();
		var OVER = this.game.add.group();
		
		
		
		/**********************************************************************************************
			GAMEDATA - Object
			
			The gamedata object holds everything we want to track in the game. It is the place to set up
			custom functions and variables that do not have to do with the regular outlay of the board and
			how the game is created programmatically. 
			
		**********************************************************************************************/
		
		var gamedata = {
			
		}
		
		
		
		/**********************************************************************************************
		
		Add backgrounds and mask
		
		**********************************************************************************************/
		
		var bgimage = BG.create(0,0,'bgimage'); // adds the board art to the upper left corner of the screen
		bgimage.anchor.setTo(.5);
		bgimage.x = window.innerWidth/2;
		bgimage.y = window.innerHeight/2;
		
		var gameborder = this.game.add.graphics(0,0);
		gameborder.beginFill(0xFFFFFF);
		gameborder.drawRect(0,0,964,708);
		gameborder.endFill();
		gameborder.x = window.innerWidth/2 - gameborder.width/2;
		gameborder.y = window.innerHeight/2 - gameborder.height/2;
		
		var gameborder2 = this.game.add.graphics(0,0);
		gameborder2.beginFill(0xFFFFFF);
		gameborder2.drawRect(0,0,994,738);
		gameborder2.endFill();
		gameborder2.x = gameborder.left - 15;
		gameborder2.y = gameborder.top - 15;
		
		BG.add(gameborder2);
		MID.add(gameborder);
		
		var sky = MID.create(0,0,'sky');
		
		var pgscale = 1;
		if (sky.height > gameborder.height) {
			pgscale = gameborder.height/sky.height
		}
		if (sky.width > gameborder.width) {
			pgscale = pgscale > gameborder.width/sky.width ? gameborder.width/sky.width : pgscale;
		}
		
		if (sky.height < gameborder.height) {
			pgscale = gameborder.height/sky.height
		}
		if (sky.width < gameborder.width) {
			pgscale = pgscale < gameborder.width/sky.width ? gameborder.width/sky.width : pgscale;
		}
		
		sky.scale.setTo(pgscale);
		sky.anchor.setTo(.5);
		sky.x = window.innerWidth/2;
		sky.y = window.innerHeight/2;
		
		
		
		var mech = MID.create(0,0,'mech');
		mech.anchor.setTo(.5,0);
		mech.x = gameborder.width/2 + gameborder.left;
		mech.y = gameborder.height/2 + gameborder.top;
		
		
		
		var city = MID.create(0,0,'city');
		city.scale.setTo(pgscale);
		city.bottom = gameborder.bottom;
		city.left = gameborder.left;
		
		var citymask = this.game.add.graphics(0,0);
		citymask.beginFill(0xFFFFFF);
		citymask.drawRect(0,0,sky.width,sky.height);
		citymask.endFill();
		citymask.x = sky.left;
		citymask.y = sky.top;
		MID.add(citymask);
		city.mask = citymask;
		
		var green = this.game.add.graphics(0,0);
		green.beginFill(0x57cc86);
		green.drawRect(0,0,window.innerWidth, window.innerHeight);
		green.endFill();
		green.alpha = 0;
		
		var majorsave = MID.create(0,0,'majorsave');
		majorsave.anchor.set(.5,0);
		majorsave.x = -500;
		majorsave.y = 25;
		this.game.add.tween(majorsave)
			.to( {y: 15}, 500, Phaser.Easing.Quadratic.InOut, true, 0, -1, true);
			
			
			
		var CTZNKEYS = ['char1', 'char2', 'char4', 'char7', 'char8', 'char9', 'char10', 'char11', 'char12'];
		var CTZNS = [];
		for (var i = 0; i < CTZNKEYS.length; i++){
			var ctzn = this.game.add.sprite(gameborder.left + (gameborder.width*( (i + 1) / (CTZNKEYS.length + 1) )), 0, CTZNKEYS[i], 40);
			ctzn.anchor.setTo(.5,0);
			ctzn.scale.setTo( (Math.random() > .5 ? 1 : -1), 1);
			ctzn.bottom = gameborder.bottom - 20 + (Math.random() * 30 - 15);
			ctzn.zombified = false;
			
			ctzn.inputEnabled = true;
			ctzn.events.onInputUp.add(question);
			
			ctzn.animations.add('zombified', Phaser.Animation.generateFrameNames('char', 0, 39, '', 4), 24, true, false);
			
			CTZNS.push(ctzn);
			MID.add(ctzn);
		}
		
		
		
		
		
		/**********************************************************************************************
		
		Add page audio
		
		**********************************************************************************************/
		
		var bgmusic;
		s
		//if (pagedata.pageAudio){ console.log('playing audio');
			bgmusic = this.game.add.audio('pageAudio', 1, true);
			bgmusic.play();
		//}
		
		
		
		/**********************************************************************************************
		
		Start game with visual effects
		
		**********************************************************************************************/
		
		var quakeamt = .008;
		var quakecap = .012;
		var quakeadd = .002;
		var capreached = false;
		
		var props = {
			x: window.innerWidth * quakeamt
		}
		
		var dur = 200;
		var ease = Phaser.Easing.Quadratic.In;
		var delay = 1000;
		
		function startQuake(){			
			var quake = this.game.add.tween(MID).to(props,dur,ease,true,delay,0,true);
			
			quake.onComplete.addOnce(function(){
				delay = 0;
				ease = Phaser.Easing.Linear.None;
				if (quakeamt !== 0){
					quakeamt *= -1; 
					
					props = {
						x: window.innerWidth * quakeamt
					}
					
					if (quakeamt > 0 && !capreached){
						quakeamt += quakeadd; 
						quakeamt = (Math.round(quakeamt*1000))/1000;
						if (quakeamt === quakecap){
							capreached = true;
							quakeadd = .002;
						}
					} else if (quakeamt > 0 && capreached){
						quakeamt -= quakeadd;
						quakeamt = (Math.round(quakeamt*1000))/1000; 
					}
				
					startQuake();
				}
			});
		}
		
		startQuake();
		
		var mechY = this.game.add.tween(mech)
			.to( {y: city.y - 200}, 6000, Phaser.Easing.Quadratic.Out, true, 1500, 0, false);
			
		var greenblink = this.game.add.tween(green)
			.to( {alpha: .5}, 750, Phaser.Easing.Quadratic.InOut, true, 0, 5, true); 
			
		
		var saveflyin = this.game.add.tween(majorsave)
			.to( {x: 100}, 1500, Phaser.Easing.Quadratic.Out, false, 0, 0, false);
		greenblink.onComplete.addOnce(function(){
			saveflyin.start();
		});
		
		saveflyin.onComplete.addOnce(function(){
			wordbox(acty2.starttext);
			createBtn(startGame);
		});
		
		function startGame(){
			trackmouse();
			
			zap(acty2.minquestions);
		}
		
		
		
		function trackmouse(){
			var movemajor = this.game.input.mousePointer.x - majorsave.x;
			movemajor *= .25;
			movemajor = Math.floor(movemajor);
			var majorscale = movemajor >= 0 ? 1 : -1;
			majorsave.scale.setTo(majorscale,1);
			
			var props = {
				x: majorsave.x + movemajor
			}
			
			var dur = 250;
			var ease = Phaser.Easing.Linear.None;
			
			var flymajorx = this.game.add.tween(majorsave).to(props,dur,ease,true,0,0,false);
			flymajorx.onComplete.addOnce(trackmouse);
			
		}
		
		
		
		
		
		
		
		/**********************************************************************************************
		
		FUNCTION QUESTION
		
		handles the click event on characters
		
		**********************************************************************************************/
		
		var QUESTIONS, lastQuestion, curquestion, zombie, wronganswers;
		
		function setupgame(){
			QUESTIONS = acty2.questions.slice(0);
			lastQuestion = -1;
			curquestion;
			zombie;
			wronganswers = 0;
		}
		setupgame();
		
		function question(e){
			console.log(e.zombified);
			
			if (e.zombified){
			
				MID.setAll('inputEnabled', false);
				zombie = e;
				
				var num = lastQuestion; 
				while (QUESTIONS.length > 1 && num === lastQuestion){
					num = Math.floor( Math.random()*QUESTIONS.length );
				}
				lastQuestion = num;
				curquestion = QUESTIONS[num];
				
				var modY = 80;
				var newY = wordbox(curquestion.query,modY);
				modY = newY + 20;
				
				var answers = curquestion.responses.slice(0); 
				while (answers.length > 0){
					var n = Math.floor( Math.random()*answers.length );
					var newY = wordbox(answers[n][0],modY,true,answers[n][1]);
					modY = newY + 20;
					answers.splice(n,1);
				}
			}
		}
		
		
		
		function wordbox(txt,modY,intrctv,correct){
			if (!intrctv){
				var dark = this.game.add.graphics(0,0);
				dark.beginFill(0x000000);
				dark.fillAlpha = .5;
				dark.drawRect(0,0,window.innerWidth,window.innerHeight);
				dark.endFill();
				
				OVER.addAt(dark,0)
			}
			
			intrctv ? null : txt = txt;
			
			var t = this.game.add.text(0,0,txt,plainText);
			t.x = window.innerWidth/2 - t.width/2;
			t.y = window.innerHeight/2 - t.height/2;
			
			var tbg = this.game.add.graphics(0,0);
			intrctv ? tbg.beginFill(0x80e4ff) : tbg.beginFill(0xc4fd60);
			tbg.fillAlpha = .95;
			tbg.lineStyle(2,0x000000,.25);
			tbg.drawRect(-20, -25, 640, t.height + 50);
			tbg.endFill();
			tbg.x = window.innerWidth/2 - tbg.width/2 + 20;
			tbg.y = window.innerHeight/2 - tbg.height/2;
			
			t.x = tbg.x;
			t.y = tbg.y;
			
			if (modY){
				t.y = modY + 5;
				tbg.y = modY;
			}
			
			OVER.add(tbg);
			OVER.add(t);
			
			if (intrctv){
				var clickee = this.game.add.graphics(0,0);
				clickee.beginFill(0xffffff);
				clickee.drawRect(-20, -25, 640, t.height + 50);
				clickee.endFill();
				clickee.alpha = 0;
				clickee.x = tbg.x;
				clickee.y = tbg.y;

				clickee.inputEnabled = true;
				clickee.input.useHandCursor = true;
				clickee.events.onInputUp.addOnce(answer,this,0,correct);
				clickee.events.onInputOver.add(function(obj){
					obj.alpha = .25;
				});
				clickee.events.onInputOut.add(function(obj){
					obj.alpha = 0;
				});
				
				OVER.add(clickee);
			}
			
			return tbg.y + tbg.height;
		}
		
		
		
		function answer(obj,pntr,bool,correct){
			var txttag;
			
			OVER.destroy(true,true);
			MID.setAll('inputEnabled', true);
			
			if (correct === 1){
			
				zombie.zombified = false;
				zombie.animations.stop();
				zombie.frame = 40;
				
				QUESTIONS.splice(lastQuestion,1);
				txttag = "Great job!\n\n";
				
				createBtn(success);
			
			} else {
			
				txttag = "Oh no! That's incorrect!\n\n";
				
				createBtn(failure);
			
			}
			
			wordbox(txttag + curquestion.remediation);
			
		}
		
		
		
		function createBtn(callback){
			MID.setAll('inputEnabled', false);
			var btncont = this.game.add.image(0,0,'btncont');
			OVER.add(btncont);
			
			btncont.right = window.innerWidth - 10;
			btncont.bottom = window.innerHeight - 10;
			
			btncont.inputEnabled = true;
			btncont.events.onInputUp.addOnce(function(btn,pointer,isover){
				OVER.destroy(true,true);
				MID.setAll('inputEnabled', true);
				if (callback){
					callback();
				}
			});
		}
		
		
		
		function failure(){
			console.log(QUESTIONS.length);
			if (runthecount() === QUESTIONS.length){
				gameover();
			} else if (runthecount() === CTZNS.length){
				gameover();
			} else {				
				if (runthecount() === QUESTIONS.length - 1){
					wordbox(acty2.warning);
					MID.setAll('inputEnabled', false);
					createBtn();
				}
				
				if (runthecount() < QUESTIONS.length){
					zap(1);
				}
			}
		}
		
		function gameover(){
			setupgame();
			MID.setAll('inputEnabled', false);
			wordbox(acty2.gameovertext);
			createBtn(restart);
		}
		
		function success(){
			if (runthecount() === 0){
				wordbox(acty2.endtext);
				createBtn(callGoToNextState);
			}
		}
		
		function restart(){
			this.game.sound.stopAll();
			this.game.state.start('PreloadActivity2State', true);
		}
		
		function runthecount(){
			var num = 0;
			
			for (var i = 0; i < CTZNS.length; i++){
				if (CTZNS[i].zombified){
					num++;
				}
			}
			
			return num;
		}
		
		
		
		/**********************************************************************************************
		
		FUNCTION ZAP
		
		turns a number of citizens into zombies
		
		**********************************************************************************************/
		
		function zap(num){
			var targs = num;
			
			var greenzap = this.game.add.tween(green)
			.to( {alpha: 1}, 500, Phaser.Easing.Sinusoidal.Out, true, 0, 0, false);
			
			greenzap.onComplete.addOnce(function(){
			
				var zapped = 0;
				
				while (zapped < targs){
					var target = Math.floor( Math.random()*CTZNS.length );
					
					if (!CTZNS[target].zombified){
						CTZNS[target].animations.play('zombified');
						CTZNS[target].zombified = true;
						zapped++;
					}
				}
				
				this.game.add.tween(green).to( {alpha: 0}, 500, Phaser.Easing.Sinusoidal.In, true, 250, 0, false);
			
			})
		}
		
		
		
		/**********************************************************************************************
		
		FUNCTION SHOW
		
		pops readable text and creates a button to continue
		
		**********************************************************************************************/
		
		var callGoToNextState = function(){
			this.game.sound.stopAll();
			this.gotoNextState();
		}.bind(this)
		
		
		
		/**********************************************************************************************
		
		FUNCTION
		
		creates the continue button to move to the next panel
		
		**********************************************************************************************/
		
		/*
		var callGoToNextState = function(){
			this.game.sound.stopAll();
			this.gotoNextState();
		}.bind(this)
		
		function createContinueButton(pan){
			var btncont = this.game.add.image(0,0,'btncont');
			FORE.add(btncont);
			
			var detRight = window.innerWidth;
			if (pan.right - adjWidth < detRight){
				detRight = pan.right - adjWidth;
			}
			btncont.right = window.innerWidth - 10;
			
			var detBottom = window.innerHeight;
			if (pan.bottom - adjHeight < detBottom){
				detBottom = pan.bottom - adjHeight;
			}
			btncont.bottom = window.innerHeight - 10;
			
			btncont.inputEnabled = true;
			btncont.events.onInputUp.addOnce(function(btn,pointer,isover){
				onpanel++;
				if (onpanel < pagedata.panels.length){
					createNextPanel();
				} else {
					console.log("next page");
					callGoToNextState();
				}
				btn.destroy();			
			});
		}
		*/
		
		
		/////////////////////////////////////////
		//// WINDOW RESIZE //////////////////////
		/////////////////////////////////////////	

		var winwidth = window.innerWidth;
		var winheight = window.innerHeight;
		
		window.onresize = function(){
				var changeinX = window.innerWidth - winwidth;
				var changeinY = window.innerHeight - winheight;
				
				MID.x += changeinX/2;
				MID.y += changeinY/2;
				
				winwidth = window.innerWidth;
				winheight = window.innerHeight;
				
				bgimage.x = window.innerWidth/2;
				bgimage.y = window.innerHeight/2;
		};
				
	},
	
	gotoNextState: function(){
		this.state.start('LoadNextLevel', true);
	},
	
	update: function(){

	}
};