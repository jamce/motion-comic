var _gc = {
	onpage: 0,
	pages: [
		
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////		
	
		{
			title: 'Page One',
			bg: 'chaseman_html_bg_dark.jpg',
			bgcolor: '#c3f5fe',
			pageH: 768,
			pageW: 1024,
			pageAudio: 'pg1/chaseman_pg1_pn1_music.mp3',
			panels: [
			
				{
					title: 'p1',
					type: 'panel',
					url: 'pg1/pg1_pn1.jpg',
					json: 'pg1/pg1_pn1.json',
					animated: true,
					framenames: 'pg1_pn1',
					animstart: 0,
					animend: 99,
					framelength: 4,
					animloop: false,
					posX: 20,
					posY: 0,
					tween: true,
					tweenprops: {
						x: -2000
					},
					tweentime: 1500,
					fallback: 'pg1/p1_pn1_fallback.jpg',
					autocontinue: true
				},
				
				{
					title: 'box1',
					type: 'box',
					text: 'The city of |Bankopolis|.',
					posX: 150,
					posY: 5,
					tween: true,
					tweenprops: {
						alpha: 0
					},
					tweentime: 500, 
					audio: 'pg1/chaseman_pg1_pn1.mp3',
					audioKey: 'pg1pnl1'
				},
				

				{
					title: 'p2',
					type: 'panel',
					url: 'pg1/pg1_pn2.png',
					json: 'pg1/pg1_pn2.json',
					animated: true,
					framenames: 'pg1_pn2',
					animstart: 0,
					animend: 35,
					framelength: 4,
					animloop: false,
					posX: -200,
					posY: 220,
					tween: true,
					tweenprops: {
						y: 2000
					},
					tweentime: 800,
					fallback: 'pg1/p1_pnl2_fallback.png', 					
					audio: 'pg1/chaseman_pg1_pn2.mp3',
					audioKey: 'pg1pnl2',
					autocontinue: true
					
				},
				
				{
					title: 'box2',
					type: 'box',
					text: 'Kept secrure by hometown heros |CHASEMAN| and |MAJOR SAVE|.',
					posX: 265,
					posY: 130,
					tween: true,
					tweenprops: {
						alpha: 0
					},
					tweentime: 500
				},
				
				{
					title: 'p3',
					type: 'panel',
					url: 'pg1/pg1_pn3.jpg',
					animated: false,
					sendtoback: true,
					posX: 450,
					posY: 290,
					tween: true,
					tweenprops: {
						y: 2000
					},
					tweentime: 800,
					autocontinue: true

				},
				
				{
					title: 'box3',
					type: 'box',
					text: 'But even the most valorous of venturers need…',
					posX: 560,
					posY: 220,
					tween: true,
					tweenprops: {
						alpha: 0
					},
					tweentime: 500, 
					audio: 'pg1/chaseman_pg1_pn3.mp3',
					audioKey: 'pg1pnl3'
				},
				
				{
					title: 'p4',
					type: 'panel',
					url: 'pg1/pg1_pn4.png',
					json: 'pg1/pg1_pn4.json',
					animated: true,
					framenames: 'pg1_pn4',
					animstart: 0,
					animend: 49,
					framelength: 4,
					animloop: false,
					posX: 730,
					posY: 290,
					tween: true,
					tweenprops: {
						y: 2000
					},
					tweentime: 800,
					fallback: 'pg1/p1_pnl4_fallback.png', 
					audio: 'pg1/chaseman_pg1_pn4_music.mp3',
					audioKey: 'pg1pnl5',
					stopPageAudio: true,
					autocontinue: true
				},
					{
					title: 'box4',
					type: 'box',
					text: 'A |Vacation!|',
					posX: 770,
					posY: 330,
					tween: true,
					tweenprops: {
						alpha: 0
					},
					tweentime: 500, 
					audio: 'pg1/chaseman_pg1_pn4.mp3',
					audioKey: 'pg1pnl4'
				},
				
				
				
			]
		}, 
		
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////	
		{
			title: 'Page Two',
			bg: 'chaseman_html_bg_dark.jpg',
			bgcolor: '#c3f5fe',
			pageH: 768,
			pageW: 1024,
			pageAudio: 'pg2/chaseman_pg2_music.mp3',
			panels: [
			
				{
					title: 'p2p1',
					type: 'panel',
					url: 'pg2/pg2_pn1.jpg',			
					posX: 20,
					posY: 0,
					tween: true,
					tweenprops: {
						x: -2000
					},
					tweentime: 1500,
					autocontinue: true
				},
				{
					title: 'bubble1',
					type: 'bubble',
					text: "|CHASEMAN!| City Hall has been |ROBBED!| All the |ART| has vanished without a trace! I’m sorry to interrupt your vacation… but |WE NEED YOU!|",
					posX: 0,
					posY: 30,
					direction: 'right',
					scaleX: .8,
					scaleY: .6,
					moveTailX: 0,
					moveTailY: 10,
					tween: true,
					tweenprops: {
						alpha: 0,
						x: 50
					},
					tweentime: 250,
					audio: 'pg2/chaseman_pg2_pn1.mp3',
					audioKey: 'pg2pnl1'
				},
												
				{
					title: 'p2p2',
					type: 'panel',
					url: 'pg2/pg2_pn2.jpg',					
					posX: 20,
					posY: 410,
					tween: true,
					tweenprops: {
						y: 2000
					},
					tweentime: 800,
					autocontinue: true
				},
								{
					title: 'bubble2',
					type: 'bubble',
					text: "Hm— a FINELY arranged fine art abstraction you say?!  Have you reached out to Major Save- I’ve left the city in her proficient purview…",
					posX: 390,
					posY: 340,
					moveTailX: -40,
					moveTailY: 0,
					direction: 'bottom',
					scaleX: .6,
					scaleY: .6,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 360
					},
					tweentime: 250,
					audio: 'pg2/chaseman_pg2_pn2.mp3',
					audioKey: 'pg2pnl2'
				},

								
				{
					title: 'p2p3',
					type: 'panel',
					url: 'pg2/pg2_pn3.jpg',					
					posX: 600,
					posY: -4,
					tween: true,
					tweenprops: {
						y: 2000
					},
					tweentime: 800,
					autocontinue: true,
					sendtoback: true
				},
				{
					title: 'bubble3',
					type: 'bubble',
					text: "Well, I left her a message but… she must be busy? Anyway- The Zansibar Expo is this weekend and I NEED it to go well! Zansibar is one of my biggest supporters… Hurry!",
					posX: 740,
					posY: 50,
					moveTailX: 0,
					moveTailY: 0,
					direction: 'bottom',
					scaleX: 1,
					scaleY: .6,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 70
					},
					tweentime: 250,
					audio: 'pg2/chaseman_pg2_pn3.mp3',
					audioKey: 'pg2pnl3'
				},

			]
		},
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////
			{
			title: 'Page Three',
			bg: 'chaseman_html_bg_dark.jpg',
			bgcolor: '#c3f5fe',
			pageH: 768,
			pageW: 1024,
			pageAudio: 'pg3/chaseman_pg3_music.mp3',
			panels: [
			
				{
					title: 'p3pn1',
					type: 'panel',
					url: 'pg3/pg3_pn1.jpg',
					json: 'pg3/pg3_pn1.json',
					animated: true,
					framenames: 'pg3_pn1',
					animstart: 0,
					animend: 30,
					framelength: 4,
					animloop: true,
					posX: 20,
					posY: 0,
					tween: true,
					tweenprops: {
						x: -2000
					},
					tweentime: 1500,
					//fallback: 'pg1/p1_pnl1_fallback.jpg',
					autocontinue: true
				},
				
				{
					title: 'box1',
					type: 'box',
					text: '|Chaseman| barrels back to |Bankopolis| but notices nagging notifications that his email inbox has inflated immensley!',
					posX: 0,
					posY: 5,
					tween: true,
					tweenprops: {
						alpha: 0
					},
					tweentime: 500, 
					audio: 'pg3/chaseman_pg3_pn1.mp3',
					audioKey: 'pg3pnl1'
				},
					{
					title: 'p3pn2',
					type: 'panel',
					url: 'pg3/pg3_pn2.jpg',
					json: 'pg3/pg3_pn2.json',
					animated: true,
					framenames: 'pg3_pn2',
					animstart: 0,
					animend: 30,
					framelength: 4,
					animloop: true,
					posX: 400,
					posY: 0,
					tween: true,
					tweenprops: {
						x: 2000
					},
					tweentime: 1500,
					//fallback: 'pg1/p1_pnl1_fallback.jpg',
					autocontinue: true
				},	
					{
					title: 'bubble1',
					type: 'bubble',
					text: "\n|LINCOLN'S BEARD!| That's a lot of emails!\n",
					posX: 550,
					posY: 260,
					direction: 'top',
					moveTailX: -150,
					moveTailY: 0,
					scaleX: .6,
					scaleY: .6,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 240
					},
					tweentime: 250,
					audio: 'pg3/chaseman_pg3_pn2.mp3',
					audioKey: 'pg3pnl2'
				},
								{
					title: 'p3pn3',
					type: 'panel',
					url: 'pg3/pg3_pn3.jpg',
					json: 'pg3/pg3_pn3.json',
					animated: true,
					framenames: 'pg3_pn3',
					animstart: 0,
					animend: 30,
					framelength: 4,
					animloop: true,
					posX: 400,
					posY: 365,
					tween: true,
					tweenprops: {
						x: 2000
					},
					tweentime: 1500,
					//fallback: 'pg1/p1_pnl1_fallback.jpg',
					autocontinue: true
				},	
					{
					title: 'bubble2',
					type: 'bubble',
					text: "\nLet's see... I think I can clean a few of these out...\n",
					posX: 400,
					posY: 420,
					direction: 'right',
					moveTailX: 0,
					moveTailY: 10,
					scaleX: .7,
					scaleY: .5,
					tween: true,
					tweenprops: {
						alpha: 0,
						x: 420
					},
					tweentime: 250,
					audio: 'pg3/chaseman_pg3_pn3.mp3',
					audioKey: 'pg3pnl3'
				},
								
			  
			]
},	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////			
			{
			title: 'Page 4',
			bg: 'chaseman_html_bg_dark.jpg',
			bgcolor: '#c3f5fe',
			pageH: 768,
			pageW: 1024,
			pageAudio: 'pg4/chaseman_pg4_music.mp3',
			panels: [
			
				{
					title: 'p4pn1',
					type: 'panel',
					url: 'pg4/pg4_pn1.jpg',
					json: 'pg4/pg4_pn1.json',
					animated: true,
					framenames: 'pg4_pn1',
					animstart: 0,
					animend: 20,
					framelength: 4,
					animloop: false,
					posX: 10,
					posY: 0,
					tween: true,
					tweenprops: {
						x: -2000
					},
					tweentime: 1500,
					//fallback: 'pg1/p1_pnl1_fallback.jpg',
					autocontinue: true
				},
					{
					title: 'box1',
					type: 'box',
					text: 'As Chaseman races \nback to the city, \nhe loses control and \n|WRECKS THE CHASEMOBILE!|',
					posX: 432,
					posY: 50,
					tween: true,
					tweenprops: {
						alpha: 0
					},
					tweentime: 500, 
					audio: 'pg4/chaseman_pg4_pn1.mp3',
					audioKey: 'pg3pnl1'
				},

				{
					title: 'p4pn2',
					type: 'panel',
					url: 'pg4/pg4_pn2.jpg',
					json: 'pg4/pg4_pn2.json',
					animated: true,
					framenames: 'pg4_pn2',
					animstart: 0,
					animend: 35,
					framelength: 4,
					animloop: false,
					posX: 6,
					posY: 420,
					tween: true,
					tweenprops: {
						x: -2000
					},
					tweentime: 1500,
					//fallback: 'pg1/p1_pnl1_fallback.jpg',
					autocontinue: true
				},
				{
					title: 'bubble1',
					type: 'bubble',
					text: "\nSnap out of it Chaseman! You’re in some kind of |BRAINFOG!|\n",
					posX: 10,
					posY: 360,
					moveTailX: 80,
					moveTailY: 1,
					direction: 'bottom',
					scaleX: .5,
					scaleY: .5,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 380
					},
					tweentime: 250,
					audio: 'pg4/chaseman_pg4_pn2.mp3',
					audioKey: 'pg4pnl2'
				},
				
				{
					title: 'p4pn3',
					type: 'panel',
					url: 'pg4/pg4_pn3.png',
					json: 'pg4/pg4_pn3.json',
					animated: true,
					framenames: 'pg4_pn3',
					animstart: 0,
					animend: 18,
					framelength: 4,
					animloop: false,
					posX: 338,
					posY: 420,
					tween: true,
					tweenprops: {
						y: 2000
					},
					tweentime: 600
					//fallback: 'pg1/p1_pnl1_fallback.jpg',
				},
						

				{
					title: 'p4pn5',
					type: 'panel',
					url: 'pg4/pg4_pn5.jpg',
					json: 'pg4/pg4_pn5.json',
					animated: true,
					framenames: 'pg4_pn5',
					animstart: 0,
					animend: 70,
					framelength: 4,
					animloop: false,
					posX: 650.5,
					posY: 0,
					tween: true,
					tweenprops: {
						x: 2000
					},
					tweentime: 500
					//fallback: 'pg1/p1_pnl1_fallback.jpg',
				},
				{
					title: 'p4pn6',
					type: 'panel',
					url: 'pg4/pg4_pn6.jpg',
					json: 'pg4/pg4_pn6.json',
					animated: true,
					framenames: 'pg4_pn6',
					animstart: 0,
					animend: 40,
					framelength: 4,
					animloop: false,
					posX: 650,
					posY: -.5

					//fallback: 'pg1/p1_pnl1_fallback.jpg',
				},
				{
					title: 'p4pn7',
					type: 'panel',
					url: 'pg4/pg4_pn7.jpg',
					json: 'pg4/pg4_pn7.json',
					animated: true,
					framenames: 'pg4_pn7',
					animstart: 0,
					animend: 40,
					framelength: 4,
					animloop: false,
					posX: 650,
					posY: -.5
		

					//fallback: 'pg1/p1_pnl1_fallback.jpg',
				},
				{
					title: 'p4pn8',
					type: 'panel',
					url: 'pg4/pg4_pn8.jpg',
					json: 'pg4/pg4_pn8.json',
					animated: true,
					framenames: 'pg4_pn8',
					animstart: 0,
					animend: 25,
					framelength: 4,
					animloop: false,
					posX: 650,
					posY: 0

					//fallback: 'pg1/p1_pnl1_fallback.jpg',
				},
			]
},
///////////////////////////////////////////////////////////////////////////////////////////////////////////////			
			{
			title: 'Page 5',
			bg: 'chaseman_html_bg_dark.jpg',
			bgcolor: '#c3f5fe',
			pageH: 768,
			pageW: 1024,
			pageAudio: 'pg5/chaseman_pg5_music.mp3',
			panels: [
			
				{
					title: 'p5pn1',
					type: 'panel',
					url: 'pg5/pg5_pn1.jpg',
					json: 'pg5/pg5_pn1.json',
					animated: true,
					framenames: 'pg5_pn1',
					animstart: 0,
					animend: 20,
					framelength: 4,
					animloop: false,
					posX: 20,
					posY: 0,
					tween: true,
					tweenprops: {
						x: -2000
					},
					tweentime: 1500,
					//fallback: 'pg1/p1_pnl1_fallback.jpg',
					autocontinue: true
				},
				{
					title: 'box1',
					type: 'box',
					text: 'After being majorly saved by \nMajor Save, Chaseman \nand his tenacious \nteammate attempt to \npuzzle together the \nbaffling brainfog and \nthe atrocious \nart absconding.',
					posX: 0,
					posY: 200,
					tween: true,
					tweenprops: {
						alpha: 0
					},
					tweentime: 500, 
					audio: 'pg5/chaseman_pg5_pn1.mp3',
					audioKey: 'pg5pnl1'
				},

				{
					title: 'p5pn2',
					type: 'panel',
					url: 'pg5/pg5_pn2.jpg',
					json: 'pg5/pg5_pn2.json',
					animated: true,
					framenames: 'pg5_pn2',
					animstart: 0,
					animend: 28,
					framelength: 4,
					animloop: false,
					posX: 470,
					posY: 0,
					tween: true,
					tweenprops: {
						y: -2000
					},
					tweentime: 600,
					//fallback: 'pg1/p1_pnl1_fallback.jpg',
					autocontinue: true
					
				},
				{
					 title: 'bubble1',
					type: 'bubble',
					text: "\nI already met with the Head of \nsecurity at City Hall and got \naccess to their security \nfootage. I’ve calibrated a \nvirtual reenactment of \nthe art theft!\n",
					posX: 310,
					posY: -50,
					moveTailX: 80,
					moveTailY: 0,
					direction: 'bottom',
					scaleX: .8,
					scaleY: .5,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 30
					},
					tweentime: 200, 
					audio: 'pg5/chaseman_pg5_pn2.mp3',
					audioKey: 'pg5pnl2'
				},	
				{
					 title: 'bubble2',
					type: 'bubble',
					text: "\nLINCOLN’S BEARD! Major Save, you’re the best crime fighting companion I could hope for!\n",
					posX: 590,
					posY: -30,
					moveTailX: -120,
					moveTailY: 1,
					direction: 'bottom',
					scaleX: .4,
					scaleY: .5,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 0
					},
					tweentime: 200, 
					audio: 'pg5/chaseman_pg5_pn2a.mp3',
					audioKey: 'pg5pnl2a'
				},	
												{
					 title: 'bubble3',
					type: 'bubble',
					text: "\nThey seem to ALL be glued to their mobile devices. Y’know, a lot of App and device companies use “slot Machine” tactics to make it harder to put the phone down. The thief slipped right past… PLUS look at that! He’s using some kind of HypnoTech!\n",
					posX: 670,
					posY: 110,
					moveTailX: -1,
					moveTailY: 60,
					direction: 'left',
					scaleX: .9,
					scaleY: .4,
					tween: true,
					tweenprops: {
						alpha: 0,
						x: 30
					},
					tweentime: 200, 
					audio: 'pg5/chaseman_pg5_pn2b.mp3',
					audioKey: 'pg5pnl2b'
				},	
					{
					title: 'p5p3',
					type: 'panel',
					url: 'pg5/pg5_pn3.jpg',					
					posX: 20,
					posY: 375,
					tween: true,
					tweenprops: {
						y: 2000
					},
					tweentime: 800,
					autocontinue: true
				},
								{
					 title: 'bubble4',
					type: 'bubble',
					text: "\nCOPPER PENNIES! \nYou’re right. Not just any ol’ theif, but a Digiwizard.\n",
					posX: 0,
					posY: 670,
					moveTailX: -100,
					moveTailY: 0,
					direction: 'top',
					scaleX: 1,
					scaleY: .4,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 650
					},
					tweentime: 200, 
					audio: 'pg5/chaseman_pg5_pn3.mp3',
					audioKey: 'pg5pnl3'
				},	

									{
					title: 'p5p4',
					type: 'panel',
					url: 'pg5/pg5_pn4.jpg',					
					posX: 300,
					posY: 280,
					tween: true,
					tweenprops: {
						y: 2000
					},
					tweentime: 800,
					autocontinue: true
				},
												{
					 title: 'bubble5',
					type: 'bubble',
					text: "\nChaseman! Come down to City Hall, there’s someone here that would really like to meet you!\n",
					posX: 320,
					posY: 520,
					moveTailX: -60,
					moveTailY: -1,
					direction: 'top',
					scaleX: .4,
					scaleY: .4,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 490
					},
					tweentime: 200, 
					audio: 'pg5/chaseman_pg5_pn4.mp3',
					audioKey: 'pg5pnl4'
				},	
				{
					title: 'p5p5',
					type: 'panel',
					url: 'pg5/pg5_pn5.jpg',					
					posX: 525,
					posY: 375,
					tween: true,
					sendtoback: true,
					tweenprops: {
						y: 2000
					},
					tweentime: 800,
					autocontinue: true
				},
					{
					title: 'bubble6',
					type: 'bubble',
					text: "\nWe’re on our way Mayor!\n",
					posX: 520,
					posY: 400,
					moveTailX: 60,
					moveTailY: 0,
					direction: 'bottom',
					scaleX: .4,
					scaleY: .4,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 430
					},
					tweentime: 200, 
					audio: 'pg5/chaseman_pg5_pn5.mp3',
					audioKey: 'pg5pnl5'
				},	
				{
					title: 'bubble7',
					type: 'bubble',
					text: "\nOk, I’m gonna go on patrol and look for more clues. You go meet with the Mayor!\n",
					posX: 750,
					posY: 340,
					moveTailX: 60,
					moveTailY: 0,
					direction: 'bottom',
					scaleX: .6,
					scaleY: .4,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 370
					},
					tweentime: 200, 
					audio: 'pg5/chaseman_pg5_pn5b.mp3',
					audioKey: 'pg5pnl5b'
				}
					
			]
},
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
		{
			title: 'Activity One',
			activity: true,
			pageH: 726,
			pageW: 981,
			activityLoader: 'PreloadActivity1State',
			bgcolor: '#000000'
		},
		
///////////////////////////////////////////////////////////////////////////////////////////////////////////////			
			{
			title: 'Page 6',
			bg: 'chaseman_html_bg.jpg',
			bgcolor: '#c3f5fe',
			pageH: 768,
			pageW: 1024,
			pageAudio: 'pg6/chaseman_pg6_music.mp3',
			panels: [
			{
					title: 'p6p1',
					type: 'panel',
					url: 'pg6/pg6_pn1.jpg',					
					posX: 20,
					posY: 0,
					tween: true,
					tweenprops: {
						x: -2000
					},
					tweentime: 800,
					autocontinue: true
				},
					{
					title: 'box1',
					type: 'box',
					text: 'While Major Save may’ve just saved the city- Chaseman is about to find himself in major need of saving, again!',
					posX: 80,
					posY: -10,
					tween: true,
					tweenprops: {
						alpha: 0
					},
					tweentime: 500, 
					audio: 'pg6/chaseman_pg6_pn1.mp3',
					audioKey: 'pg6pnl1'
				},
				
				{
					title: 'p6pn2',
					type: 'panel',
					url: 'pg6/pg6_pn2.jpg',
					json: 'pg6/pg6_pn2.json',
					animated: true,
					framenames: 'pg6_pn2',
					animstart: 0,
					animend: 20,
					framelength: 4,
					animloop: false,
					posX: 20,
					posY: 360,
					tween: true,
					tweenprops: {
						x: -2000
					},
					tweentime: 1500,
					//fallback: 'pg1/p1_pnl1_fallback.jpg',
					autocontinue: true, 
					audio: 'pg6/chaseman_pg6_pn2.mp3',
					audioKey: 'pg6pnl2'
				},
								{
				    title: 'bubble1',
					type: 'bubble',
					text: "\nChaseman, this is ZANDER ZANSIBAR, CEO of ZANSIBAR TECH.\n",
					posX: 30,
					posY: 720,
					moveTailX:65,
					moveTailY:-2,
					direction: 'top',
					scaleX: .3,
					scaleY: .5,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 700
					},
					tweentime: 400
				},	
										{
				    title: 'bubble2',
					type: 'bubble',
					text: "\nHUGE fan Chaseman! I was so bummed that your vacation had to be cut short...\n",
					posX: 40,
					posY: 260,
					moveTailX:60,
					moveTailY:1,
					direction: 'bottom',
					scaleX:  .5,
					scaleY: .5,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 280
					},
					tweentime: 100, 
					audio: 'pg6/chaseman_pg6_pn3.mp3',
					audioKey: 'pg6pnl3'
				},	

														{
				    title: 'bubble3',
					type: 'bubble',
					text: "\n...as it was intended \nto keep you out \nof my hair.\n",
					posX: 310,
					posY: 413,
					moveTailX:-5,
					moveTailY:16,
					direction: 'left',
					scaleX:  .2,
					scaleY: .5,
					tween: true,
					tweenprops: {
						alpha: 0,
						x: 330
					},
					tweentime: 400, 
					audio: 'pg6/chaseman_pg6_pn3b.mp3',
					audioKey: 'pg6pnl3b'
				},		
								{
					title: 'p6pn3',
					type: 'panel',
					url: 'pg6/pg6_pn3.jpg',
					json: 'pg6/pg6_pn3.json',
					animated: true,
					framenames: 'pg6_pn3',
					animstart: 0,
					animend: 24,
					framelength: 4,
					animloop: false,
					posX: 350,
					posY: 130,
					tween: true,
					tweenprops: {
						y: -2000
					},
					tweentime: 500, 
					audio: 'pg6/chaseman_pg6_pn3c.mp3',
					audioKey: 'pg6pnl3c'
				},
					
			{
					title: 'p6pn4',
					type: 'panel',
					url: 'pg6/pg6_pn4.png',
					json: 'pg6/pg6_pn4.json',
					animated: true,
					framenames: 'pg6_pn4',
					animstart: 0,
					animend: 20,
					framelength: 4,
					animloop: true,
					posX: 502,
					posY: 208,
					tween: true,
					tweenprops: {
						y: 2000
					},
					tweentime: 1500,
					autocontinue: true
				},
					{
				    title: 'bubble4',
					type: 'bubble',
					text: "\nStealing the art from City Hall was just sort of a beta test. (and, I happen to be a pretty big fine art fan) \n\nBut the REAL demo will be when I use my hypnotech to walk into every business, bank and BBQ joint in the city and rob’em blind!(…I’m also a big BBQ fan)\n",
					posX: 800,
					posY: -20,
					moveTailX:-80,
					moveTailY:2,
					direction: 'bottom',
					scaleX:  .3,
					scaleY: .5,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 20
					},
					tweentime: 100, 
					audio: 'pg6/chaseman_pg6_pn4.mp3',
					audioKey: 'pg6pnl4'
				}
					
			]
},
///////////////////////////////////////////////////////////////////////////////////////////////////////////////			
			{
			title: 'Page 7',
			bg: 'chaseman_html_bg.jpg',
			bgcolor: '#c3f5fe',
			pageH: 768,
			pageW: 1024,
			pageAudio: 'pg7/chaseman_pg7_music.mp3',
			panels: [
				
				{
					title: 'p7pn1',
					type: 'panel',
					url: 'pg7/pg7_pn1.png',
					json: 'pg7/pg7_pn1.json',
					animated: true,
					framenames: 'pg7_pn1',
					animstart: 0,
					animend: 11,
					framelength: 4,
					animloop: false,
					posX: 0,
					posY: -70,
					tween: true,
					tweenprops: {
						x: -2000
					},
					tweentime: 1000,
					//fallback: 'pg1/p1_pnl1_fallback.jpg',
					autocontinue: true,
					audio: 'pg7/chaseman_pg7_pn1.mp3',
					audioKey: 'pg7pnl1'
				},
				{
				    title: 'bubble1',
					type: 'bubble',
					text: "\n…AND |BOOM|- Recroded and uploaded to facetube. \n\nYou really shouldn’t monologue your evil plans out loud. You never know who’s recording.\n",
					posX: -20,
					posY: 30,
					moveTailX:3,
					moveTailY:35,
					direction: 'right',
					scaleX:  .3,
					scaleY: .6,
					tween: true,
					tweenprops: {
						alpha: 0,
						x: 0
					},
					tweentime: 600
				},	
								{
				    title: 'bubble2',
					type: 'bubble',
					text: "\nNow, |release Chaseman| \nfrom the Brainfog \nand give up!\n",
					posX: 390,
					posY: 360,
					moveTailX:-120,
					moveTailY:-3,
					direction: 'top',
					scaleX:  .3,
					scaleY: .6,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 340
					},
					tweentime: 200,
					audio: 'pg7/chaseman_pg7_pn1b.mp3',
					audioKey: 'pg7pnl1b'
				},	

				{
					title: 'p7pn2',
					type: 'panel',
					url: 'pg7/pg7_pn2.jpg',
					json: 'pg7/pg7_pn2.json',
					animated: true,
					framenames: 'pg7_pn2',
					animstart: 0,
					animend: 28,
					framelength: 4,
					animloop: true,
					sendtoback: true,
					posX: 560,
					posY: 30,
					tween: true,
					tweenprops: {
						x: 2000
					},
					tweentime: 800,
					//fallback: 'pg1/p1_pnl1_fallback.jpg',
					autocontinue: true
				},
					{
				    title: 'bubble3',
					type: 'bubble',
					text: "\nPfft. The people of this city were |ALREADY| slaves to their devices… I didn’t NEED to use my tech to slip past- they’re so |distracted|! \n\nIf you want to save them— you’ll have to stop me, |MAJOR SAVE!|\n",
					posX: 765,
					posY: -10,
					moveTailX:-80,
					moveTailY:3,
					direction: 'bottom',
					scaleX: .4,
					scaleY: .6,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 10
					},
					tweentime: 250,
					audio: 'pg7/chaseman_pg7_pn2.mp3',
					audioKey: 'pg7pnl2'
				},	
					
{
					title: 'p7p3',
					type: 'panel',
					url: 'pg7/pg7_pn3.jpg',					
					posX: 820,
					posY: 540,
					tween: true,
					tweenprops: {
						x: 2000
					},
					tweentime: 600,
					autocontinue: true
				},
				{
				    title: 'bubble4',
					type: 'bubble',
					text: "\nI thought you’d never ask! Let’s |DANCE, Zansibarf!|\n",
					posX: 500,
					posY: 600,
					moveTailX:-4,
					moveTailY:8,
					direction: 'right',
					scaleX: 1.2,
					scaleY: .6,
					tween: true,
					tweenprops: {
						alpha: 0,
						x: 520
					},
					tweentime: 250,
					audio: 'pg7/chaseman_pg7_pn3.mp3',
					audioKey: 'pg7pnl3'

				},	
					
			]
},
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
{
			title: 'Activity Two',
			activity: true,
			pageH: 726,
			pageW: 981,
			activityLoader: 'PreloadActivity2State',
			bgcolor: '#000000'
		},
///////////////////////////////////////////////////////////////////////////////////////////////////////////////			
			{
			title: 'Page 8',
			bg: 'chaseman_html_bg.jpg',
			bgcolor: '#c3f5fe',
			pageH: 768,
			pageW: 1024,
			pageAudio: 'pg8/chaseman_pg8_music.mp3',
			panels: [
				
				{
					title: 'p8pn1',
					type: 'panel',
					url: 'pg8/pg8_pn1.png',
					json: 'pg8/pg8_pn1.json',
					animated: true,
					framenames: 'pg8_pn1',
					animstart: 0,
					animend: 15,
					framelength: 4,
					animloop: true,
					posX: 20,
					posY: 20,
					tween: true,
					tweenprops: {
						x: -2000
					},
					tweentime: 600,
					//fallback: 'pg1/p1_pnl1_fallback.jpg',
					autocontinue: true
				},	
				{
					title: 'bubble1',
					type: 'bubble',
					text: "\n|GREAT JOB MAJOR SAVE!| I’ll say it again— you’re the best crusading comrade a crime fighter could have! \n",
					posX: 0,
					posY: -20,
					moveTailX:2,
					moveTailY:40,
					direction: 'right',
					scaleX: .4,
					scaleY: .4,
					tween: true,
					tweenprops: {
						alpha: 0,
						x: 40
					},
					tweentime: 150,
					audio: 'pg8/chaseman_pg8_pn1.mp3',
					audioKey: 'pg8pnl1'
				},	
{
					title: 'p8pn2',
					type: 'panel',
					url: 'pg8/pg8_pn2.jpg',					
					posX: 550,
					posY: 20,
					sendtoback: true,
					tween: true,
					tweenprops: {
						x: 2000
					},
					tweentime: 600,
					autocontinue: true
				},
								{
					title: 'bubble2',
					type: 'bubble',
					text: "\n|Here here!| I didn’t \nthink anyone could \nfill Chaseman’s shoes… \nbut I was wrong. \nYou were the |LEAST| \ndistracted of us all. \n",
					posX: 510,
					posY: -10,
					moveTailX:2,
					moveTailY:30,
					direction: 'right',
					scaleX: .4,
					scaleY: .6,
					tween: true,
					tweenprops: {
						alpha: 0,
						x: 530
					},
					tweentime: 150,
					audio: 'pg8/chaseman_pg8_pn2.mp3',
					audioKey: 'pg8pnl2'
				},	
				
				{
					title: 'p8pn3',
					type: 'panel',
					url: 'pg8/pg8_pn3.jpg',
					json: 'pg8/pg8_pn3.json',
					animated: true,
					framenames: 'pg8_pn3',
					animstart: 0,
					animend: 15,
					framelength: 4,
					animloop: true,
					posX: 20,
					posY: 310,
					tween: true,
					tweenprops: {
						y: 2000
					},
					tweentime: 1000,
					autocontinue: true
					//fallback: 'pg1/p1_pnl1_fallback.jpg',
				},
								{
					title: 'bubble3',
					type: 'bubble',
					text: "\nThanks Mayor! Y’know, Zansibar wasn’t |CAUSING| the addiction—he was just using it. It doesn’t take a supervillain to cause |unhealthy habits|. \n\nWe |ALL| can get distracted… even |addicted to our devices|. But, if we can learn to take |breaks|, |organize| and |prioritize| both our devices |AND| our time. We all can avoid digital addiction in our lives.\n",
					posX: 30,
					posY: 260,
					moveTailX:-6,
					moveTailY:80,
					direction: 'right',
					scaleX: 1.5,
					scaleY: .6,
					tween: true,
					tweenprops: {
						alpha: 0,
						x: 50
					},
					tweentime: 250,
					audio: 'pg8/chaseman_pg8_pn3.mp3',
					audioKey: 'pg8pnl3'
				},	
												{
					title: 'bubble4',
					type: 'bubble',
					text: "\nWell said Major! Now, who's up for BBQ?\n",
					posX: 350,
					posY: 350,
					moveTailX:-5,
					moveTailY:15,
					direction: 'right',
					scaleX: 1,
					scaleY: .6,
					tween: true,
					tweenprops: {
						alpha: 0,
						x: 50
					},
					tweentime: 250,
					audio: 'pg8/chaseman_pg8_pn3_b.mp3',
					audioKey: 'pg8pnl3b'
				},	
			]
},
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
	]
}