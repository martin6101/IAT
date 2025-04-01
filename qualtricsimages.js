define(['pipAPI', 'https://martin6101.github.io/IAT/fullscriptimages.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'Buitenlanders', //Will appear in the data. (this is a test)
		    title : {
		      media : {word : 'Buitenlanders'}, //Name of the category presented in the task.
		      css : {color:'#cc0100','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects // test
    		    	{image : 'https://uva.fra1.qualtrics.com/CP/Graphic.php?IM=IM_L7ZxuuAyCVkJqy3'}    	
		    ], 
		    //Stimulus css (style)
			stimulusCss: {'max-height': '120px'},
		    css : {color:'#cc0100','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : 'Bad', //Attribute label
			title : {
				media : {word : 'Bad'}, //Name of the category presented in the task.
				css : {color:'#0099ff','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Filthy'},
				{word: 'Disease'},
				{word: 'Failure'},
				{word: 'Poison'},
				{word: 'Disaster'},
				{word: 'Damage'},
				{word: 'Hostile'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#0099ff','font-size':'3em'}
			},
		attribute2 : 
			{
			name : 'Good', //Attribute label
			title : {
				media : {word : 'Good'}, //Name of the category presented in the task.
				css : {color:'#0099ff','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Success'},
				{word: 'Glory'},
				{word: 'Hope'},
				{word: 'Peace'},
				{word: 'Happiness'},
				{word: 'Paradise'},
				{word: 'Joy'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#0099ff','font-size':'3em'}
			},

  		//base_url : {//Where are your images at?
    	//	image : 'https://martin6101.github.io/IAT/Avatar.png'
  		//},
  		fullscreen:false
	});
});