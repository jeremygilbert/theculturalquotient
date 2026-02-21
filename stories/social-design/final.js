//////////////SLIDESHOW/////////////////
$slideshow = {
    context: false,
    tabs: false,
    timeout: 4000,      // time before next slide appears (in ms)
    slideSpeed: 1000,   // time it takes to slide in each slide (in ms)
    tabSpeed: 300,      // time it takes to slide in each slide (in ms) when clicking through tabs
    fx: 'scrollLeft',   // the slide effect to use
    
    init: function() {
        // set the context to help speed up selectors/improve performance
        this.context = $('#slideshow');
        
        // set tabs to current hard coded navigation items
        this.tabs = $('ul.slides-nav li', this.context);
        
        // remove hard coded navigation items from DOM 
        // because they aren't hooked up to jQuery cycle
        this.tabs.remove();
        
        // prepare slideshow and jQuery cycle tabs
        this.prepareSlideshow();
    },
    
    prepareSlideshow: function() {
        // initialise the jquery cycle plugin -
        // for information on the options set below go to: 
        // http://malsup.com/jquery/cycle/options.html
        $('div.slides > ul', $slideshow.context).cycle({
            fx: $slideshow.fx,
            timeout: $slideshow.timeout,
            speed: $slideshow.slideSpeed,
            fastOnEvent: $slideshow.tabSpeed,
            pager: $('ul.slides-nav', $slideshow.context),
            pagerAnchorBuilder: $slideshow.prepareTabs,
            before: $slideshow.activateTab,
            pauseOnPagerHover: false,
            pause: false
        });            
    },
    
    prepareTabs: function(i, slide) {
        // return markup from hardcoded tabs for use as jQuery cycle tabs
        // (attaches necessary jQuery cycle events to tabs)
        return $slideshow.tabs.eq(i);
    },

    activateTab: function(currentSlide, nextSlide) {
        // get the active tab
        var activeTab = $('a[href="#' + nextSlide.id + '"]', $slideshow.context);
        
        // if there is an active tab
        if(activeTab.length) {
            // remove active styling from all other tabs
            $slideshow.tabs.removeClass('on');
            
            // add active styling to active button
            activeTab.parent().addClass('on');
        }            
    }            
};


$(function() {
    // add a 'js' class to the body
    $('body').addClass('js');
    
    // initialise the slideshow when the DOM is ready
    $slideshow.init();
});  
/////////////////////SLIDESHOW////////////////


/////////////CHART//////////////////////



var data = {
	labels : ["'09-'10","'10-'11","'11-'12","'12-'13"],
	datasets : [
		{
			fillColor : "rgb(242,212,5)",
			strokeColor : "rgba(220,220,220,1)",
			data : [0,0,12,47]
		},
		{
			fillColor : "blue",
			strokeColor : "rgba(151,187,205,1)",
			data : [0,0,41,64]
		},
		{
			fillColor : "rgb(47,181,139)",
			strokeColor : "rgba(151,187,205,1)",
			data : [0,0,27,50]
		},
		{
			fillColor : "rgb(237,115,47)",
			strokeColor : "rgba(151,187,205,1)",
			data : [0,0,11,20]
		},
		{
			fillColor : "rgb(178,12,50)",
			strokeColor : "rgba(151,187,205,1)",
			data : [74,46,85,86]
		},
		{
			fillColor : "rgb(96,83,222)",
			strokeColor : "rgba(151,187,205,1)",
			data : [41,58,46,83]
		}
		
	]
}

var options = {
    scaleOverride : false,
    barValueSpacing: 10,
    animationEasing : "easeOutBounce"
}

var canvas = document.getElementById("myChart").getContext("2d");
var myNewChart = new Chart(canvas).Bar(data, options);



/////////////////CHART//////////

console.log("hi");

var sdegree = 0;

var $rotator= $("#rotator");

var $questionmark = $("#questionmark");

var $stepone = $("#stepone");

var $steptwo = $("#steptwo");
var $stepthree = $("#stepthree");
var $stepfour = $("#stepfour");
var $stepfive = $("#stepfive");

var $circle1 = $("#circle1");
var $circle2 = $("#circle2");

var $lightsensor= $("#lightsensor");
var $lightup= $("#lightup");

var lightup= document.getElementById("lightup");
var circle2 = document.getElementById("circle2");


/* $(window).scroll(function() {
    
    sdegree ++ ;
    sdegree = sdegree + 2 ;
    var srotate = "rotate(" + sdegree + "deg)";
    $rotator1.css({"-moz-transform" : srotate, "-webkit-transform" : srotate});
});

*/
$(function() {
    var $elie = $("#rotator1"), degree = 0, timer;
    rotate();
    function rotate() {
        
        $elie.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});  
        $elie.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});                      
        timer = setTimeout(function() {
            ++degree; rotate();
        },20);
    }
    
    
}); 

$(function() {
    var $elie = $("#rotator2"), degree = 0, timer;
    rotate();
    function rotate() {
        
        $elie.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});  
        $elie.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});                      
        timer = setTimeout(function() {
            --degree; rotate();
        },20);
    }
    
    
}); 

$(function() {
    var $elie = $("#rotator3"), degree = 0, timer;
    rotate();
    function rotate() {
        
        $elie.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});  
        $elie.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});                      
        timer = setTimeout(function() {
            ++degree; rotate();
        },20);
    }
    
    
}); 

$stepone.bind('inview', function (event, visible) {
  if (visible == true) {
  

  $stepone.animate({
    right:'0px',
    opacity:'1'},
    
    3000
    
    );
  

  } else {
    // element has gone out of viewport
  }
  
  $stepone.unbind('inview');
});


$steptwo.bind('inview', function (event, visible) {
  if (visible == true) {
  

  $steptwo.animate({
    right:'0px',
    opacity:'1'},
    
    3000
    
    );
  

  } else {
    // element has gone out of viewport
  }
  
  $steptwo.unbind('inview');
});


$stepthree.bind('inview', function (event, visible) {
  if (visible == true) {
  

  $stepthree.animate({
    right:'0px',
    opacity:'1'},
    
    3000
    
    );
  

  } else {
    // element has gone out of viewport
  }
  
  $stepthree.unbind('inview');
});


$stepfour.bind('inview', function (event, visible) {
  if (visible == true) {
  

  $stepfour.animate({
    right:'0px',
    opacity:'1'},
    
    3000
    
    );
  

  } else {
    // element has gone out of viewport
  }
  
  $stepfour.unbind('inview');
});

$stepfive.bind('inview', function (event, visible) {
  if (visible == true) {
  

  $stepfive.animate({
    right:'200px',
    opacity:'1'},
    
    3000
    
    );
  

  } else {
    // element has gone out of viewport
  }
  
  $stepfive.unbind('inview');
});

$questionmark.bind('inview', function (event, visible) {
  if (visible == true) {
  
  $questionmark.animate({
    top:'10px',
    opacity:'0'},
    
    7000
    
    );
  
/*
  
  $(window).scroll(function() {
    $rotator.css({
        "left": $(window).scrollTop() + "px"
    }).text("hello:"+$(window).scrollTop());
});
*/

  } else {
    // element has gone out of viewport
  }
  
  $questionmark.unbind('inview');
});


$circle2.bind('inview', function (event, visible) {
  if (visible == true) {
  
  $circle1.animate({
    top:'495px',
    opacity: 0.5,
    },
    
    7000
    
    
    );
    
    $circle2.animate({
    top:'360px',
    opacity: 0.5},
    
    7000
    
    );
  


  } else {
    // element has gone out of viewport
  }
  
  $circle2.unbind('inview');
  
  // setTimeout(growCircle, 6800);
});

function growCircle(){

	circle2.setAttribute("class", "circle2later");
	
	$circle2.animate({
    opacity: 1
	},
    
    3000
    
    );
};


$rotator.bind('inview', function (event, visible) {
  if (visible == true) {
  
  $rotator.animate({
    left:'250px',
    opacity:'0.5',
    height:'150px',
    width:'150px'},
    
    5000
    
    );
  
/*
  
  $(window).scroll(function() {
    $rotator.css({
        "left": $(window).scrollTop() + "px"
    }).text("hello:"+$(window).scrollTop());
});
*/

  } else {
    // element has gone out of viewport
  }
  
  $rotator.unbind('inview');
});

$lightsensor.bind('inview', function (event, visible) {
  if (visible == true) {
  
	lightup.setAttribute("class", "lightup2");
  

  } else {
    // element has gone out of viewport
  }
  
  $lightsensor.unbind('inview');
});

/////VIGNETTE//////

var $jerrystory = $("#jerrystory");
var $jivetory = $("#jivestory");
var $lunastory= $("#lunastory");
var $storybox= $("#storybox");
var $allcontent = $("#allcontent");
var $entrypoint = $("#entrypoint");

var $digitize2 = $("#digitize2");
var $continue1 = $("#continue1");

var back1 = document.getElementById("back1");
var back2 = document.getElementById("back2");
var back3 = document.getElementById("back3");
var jerrystory = document.getElementById("jerrystory");
var jivestory = document.getElementById("jivestory");
var lunastory = document.getElementById("lunastory");
var storybox= document.getElementById("storybox");
var entrypoint= document.getElementById("entrypoint");
var skipbutton= document.getElementById("skipbutton");
var allcontent = document.getElementById("allcontent");
/* var explanation = document.getElementById("explanation");
var digitize = document.getElementById("digitize");
var continue1 = document.getElementById("continue1");
var nutty = document.getElementById("nutty");
var hugo = document.getElementById("hugo");
var digitize2 = document.getElementById("digitize2");
var crater = document.getElementById("crater");
*/

back1.addEventListener("click",showJerryStory1,false);
back2.addEventListener("click",showJiveStory1,false);
back3.addEventListener("click",showLunaStory1,false);
/*jerrystory.addEventListener("click",showJerryStory1,false);
jivestory.addEventListener("click",showJiveStory1,false);
lunastory.addEventListener("click",showLunaStory1,false);
*/
entrypoint.addEventListener("click",showAllContent,false);
skipbutton.addEventListener("click",showAllContent,false);
/* digitize2.addEventListener("mouseover", showDigitize, false);
digitize2.addEventListener("mouseout", removeExplanation, false);
continue1.addEventListener("mouseover", showContinue1, false);
continue1.addEventListener("mouseout", removeExplanation, false);
hugo.addEventListener("mouseover", showHugo, false);
hugo.addEventListener("mouseout", removeExplanation, false);
nutty.addEventListener("mouseover", showNutty, false);
nutty.addEventListener("mouseout", removeExplanation, false);
crater.addEventListener("mouseover", showCrater, false);
crater.addEventListener("mouseout", removeExplanation, false);

*/ 

function showAllContent(){
	allcontent.setAttribute("class", "allcontentclass2");
	
	$("html, body").animate({ scrollTop: "1350px" },4000);
}


function showJerryStory1(){
	console.log("jerry");
	
	storybox.setAttribute("class", "storyboxShowJerry");
	
	writeJerryStory();
	
	
  
};


function showJiveStory1(){
	
	console.log("jive");
	
	storybox.setAttribute("class", "storyboxShowJive");
	
	writeJiveStory();
	
};

function showLunaStory1(){
	
	
	storybox.setAttribute("class", "storyboxShowLuna");
	console.log("luna");

	writeLunaStory();
	
};


function writeJiveStory(){
	$storybox.empty();
	
	$("html, body").animate({ scrollTop: "+=400px" },2500);

	console.log("yay");
	$storybox.append('<div style="width:170px;height:139px;margin-right:auto;margin-left:auto;margin-top:20px;"><img src=\"jivehealthberry1.png\"></div><div style=\"width:810px;margin-right:auto;margin-left:auto;padding:10px;\"><div style=\"margin-top:20px;font-size:60px;width:860px;font-family: \'Oswald\', sans-serif;color:black;line-height:1.2;padding:10px;\">HOW CAN WE INCENTIVIZE HEALTHY EATING HABITS FOR CHILDREN?</div><div style=\"color:rgb(70,83,300);width:860px;font-family: \'Roboto Condensed\', sans-serif;font-size:40px;">JiveHealth Could Be A Nutritional Game-Changer</div><p>Fusing nutrition with novelty, a group of Northwestern entrepreneurs have set out to redefine what healthy eating means for adolescents in the digital age. With the clever smartphone application “Jive Health,” children can  play a thrilling game that incentivizes simple, affordable, healthy dietary habits.</p> <p>“What if we could use a game - which is an incredibly powerful medium - to actually influence kids behavior in a way to get them healthier?” said Dennis Ai, JiveHealth’s founder.</p> <p>While the application will not launch until this July, JiveHealth has drawn national attention from venture capitalists and political power players alike. Last March, JiveHealth was one of three social enterprises selected to pitch its concept at the Partnership for a Healthier America End Childhood Obesity Innovation Challenge in Washington D.C. to industry leaders, Newark Mayor Cory Booker, and even Michelle Obama. JiveHealth won the competition and was awarded a $10,000 grant and consulting support from executives at Edelman, McKinsey & Company and Startup Health.</p><p>“The way I’m looking at it is that I’m not just trying to build a company but rather to solve a real problem that really affects peoples lives that really impacts their opportunity and happiness,” said Ai.</p><p>Ai says he was inspired by his own past in conceiving JiveHealth. As a child he struggled with the physical and psychological impacts of his obesity, while as a college student he found a passion for online gaming.</p><span style=\"color:rgb(70,83,300);font-size:30px;position:relative;left:-40px;\"><p><em>"I was the fattest kid in the fourth grade, so it’s actually really personal. I know how it feels when people make fun of you, when people pick you last for sports teams...”</em></p></span><p>"I was the fattest kid in the fourth grade, so it’s actually really personal. I know how it feels when people make fun of you, when people pick you last for sports teams,” said Ai. “And look at the health consequences: type II diabetes, cancer, heart disease...”</p><p style=\"color:rgb(70,83,300);font-family: \'Roboto Condensed\', sans-serif;font-size:25px;\">THE IDEA COMES TO FRUITION</p><p>Since August 2012, Ai has steadily amassed a team of young software engineers, business developers, and graphic artists to transform JiveHealth from an idea to reality.</p><p>The JiveHealth application is essentially an action role playing game for smartphones in which you level up your character by completing recipes. Some ingredients will be won in the game by completing levels, while others must be found in the real world of a grocery or a home. To complete this culinary adventure, kids must photograph the real food object (i.e. an apple), which is “digitized” by the app’s image recognition technology, and combined with the game’s food (i.e. peanut butter). Drawing on each healthy food recipe the user achieves, his/her character advances in levels.</p><p>With a team of six now, JiveHealth has been steadily perfecting its interface, raising capital, and conducting user testing. They have tested the game with about 90 children in their target audience (7-12 years-old). The results are promising.</p><p>“We’ve had some kids say ‘this is more addictive than Temple Run [smartphone game].’”</p><p style=\"color:rgb(70,83,300);font-family: \'Roboto Condensed\', sans-serif;font-size:25px;\">CHALLENGES REMAIN</p><p>Even with the enthusiasm from sample users and the First Lady, JiveHealth faces some critical barriers to making a scalable impact in the social entrepreneurship space.</p><p>Especially for lower-income families, access to both fresh produce and to smartphone technology remains a challenge for JiveHealth. Additionally, Ai reports that to have JiveHealth featured in the Apple App Store, the app must garner some one million downloads in a 30-day period, “which is aggressive,” says Ai.</p><p>Ai says that the success of JiveHealth will hinge more on changing consumer behavior rather than on price.</p><p>“It’s not much of an added cost on the whole, it is a change in shopping behavior, but it’s one that not only kids but parents need to do to get healthier,” he said.</p><p style=\"color:rgb(70,83,300);font-family: \'Roboto Condensed\', sans-serif;font-size:25px;\">AIMING FOR IMPACT</p><p>“We’re trying to ultimately become the tony the tiger for fruits and vegetables,” said Ai. “It’s not just about reducing amount of promotion of unhealthy food, it’s also about increasing the promotion of healthy foods and the produce industry or the supermarkets have done virtually no advertising of healthy foods towards kids.”</p><p>Continuing in suit with their meteoric rise, JiveHealth has high ambitions: to have 75 million American children consume 2 more servings of fruits and vegetables by 2016.</p><p>While Ai aims for this sizeable impact, he is guided by his favorite quote from the biography of Steve Jobs.</p><p>“Do you want to spend the rest of your life selling sugar water or do you want to change the world?”</p><p>For JiveHealth, promoting healthy foods will always trump selling sugar water.</p><p style=\"color:rgb(70,83,300);font-family: \'Roboto Condensed\', sans-serif;font-size:25px;\">HOW IT WORKS </p><div style=\"background-image:url(\'jive_screen_shot.jpeg\');position:relative;clear:left;margin-right:auto;margin-left:auto;width:640px;height:427px;\"><div id=\"nothingatall\"><div><div id=\"digitize\"></div><div id=\"continue1\" ></div><div id=\"hugo\"></div><div id=\"crater\" ></div><div id=\"nutty\"></div><div id=\"explanation\"></div><div id=\"digitize2\"></div></div><div id=\"closebuttonjive\" style=\"color:rgb(70,83,300);border:0px solid white;text-align:center;padding:2px;float:right;width:100px;height:30px;position:relative;top:-415px;right:-25px;\">close</div></div><script> var closebuttonjive = document.getElementById("closebuttonjive"); closebuttonjive.addEventListener("click",closeStory,false);var explanation = document.getElementById(\"explanation\");var digitize = document.getElementById(\"digitize\");var continue1 = document.getElementById(\"continue1\");var nutty = document.getElementById(\"nutty\");var hugo = document.getElementById(\"hugo\");var digitize2 = document.getElementById(\"digitize2\");var crater = document.getElementById(\"crater\");digitize2.addEventListener(\"mouseover\", showDigitize, false);digitize2.addEventListener(\"mouseout\", removeExplanation, false);continue1.addEventListener(\"mouseover\", showContinue1, false);continue1.addEventListener(\"mouseout\", removeExplanation, false);hugo.addEventListener(\"mouseover\", showHugo, false);hugo.addEventListener(\"mouseout\", removeExplanation, false);nutty.addEventListener(\"mouseover\", showNutty, false);nutty.addEventListener(\"mouseout\", removeExplanation, false);crater.addEventListener(\"mouseover\", showCrater, false);crater.addEventListener(\"mouseout\", removeExplanation, false);function showDigitize(){console.log(\"hover\");explanation.innerHTML = \"<p>Visual recognition technology allows kids to send pictures of healthy food to the app for in-game bonuses. </p>\";};function showContinue1(){console.log(\"hover\");explanation.innerHTML = \"<p>After unlocking powers by eating healthy in the real world, kids can go back to enjoying the Angry-Bird-esque gameplay</p>\";};function showHugo(){console.log(\"hover\");explanation.innerHTML = \"<p>Hugo is the main character in the app. Other characters are unlockable. The JiveHealth team hopes Hugo\'s face comes to commercially symbolize healthy eating.</p>\";};function showCrater(){console.log(\"hover\");explanation.innerHTML = \"<p>Crater Smash is an example of an unlockable power in the app. Kids can unlock powers by fulfilling the recipe requirements on the right side of the screen.</p>\";};function showNutty(){console.log(\"hover\");explanation.innerHTML = \"<p>Players must eat this recipe to unlock Crater Smash. This requires them to digitially send a picture of an apple to the app.</p>\";};function removeExplanation(){explanation.innerHTML = \"\";};function closeStory(){console.log(\"close\");$storybox.empty();storybox.setAttribute("class", "storyboxHidden");};</script>');
	

	
};

function writeJerryStory(){
	$storybox.empty();
	
	$("html, body").animate({ scrollTop: "+=400px" },2500);

	console.log("yay");
	$storybox.append('<div style="width:170px;height:139px;margin-right:auto;margin-left:auto;margin-top:20px;"><img src=\"bear1.png\"></div><div style=\"width:810px;margin-right:auto;margin-left:auto;padding:10px;\"><div style=\"margin-top:20px;font-size:60px;width:860px;font-family: \'Oswald\', sans-serif;line-height:1.2;padding:10px;color:black;\">HOW CAN WE TEACH DIABETIC KIDS HOW TO MONITOR THEIR INSULIN?</div><div style=\"color:rgb(70,83,300);width:860px;font-family: \'Roboto Condensed\', sans-serif;font-size:40px;">Jerry The Bear Finds Success Educating Diabetic Children</div><p>As the founder of Design for America and creator of Jerry the Bear, Hannah Chung championed the growth of social design and entrepreneurship at Northwestern. Leveraging the design, engineering, and art skills she developed as a student, she took on the task of making it easier for children diagnosed to with diabetes to understand their condition.</p><p>“My father’s family has diabetes,” Chung said. “When I was in 5th grade, my grandfather passed away from hypoglycemia. A couple years after, my dad was diagnosed [with diabetes]. He really didn’t like taking pills, so he decided to exercise and eat healthy. Since he changed his whole lifestyle, it affected the whole family. My mom and sister and I were able to go through the process indirectly and it was shocking to see my dad lose so much weight. I started thinking, \‘If my dad, in his 40s, was having a hard time not eating a donut, for a kid, it has to be even harder.”</p><p style="color:rgb(70,83,300);font-family: \'Roboto Condensed\', sans-serif;font-size:25px;">AN IDEA IS BORN</p><p> Design for America was founded in order to bring the concept of Jerry the Bear to fruition. Chung and her peers spoke with doctors, families, and were granted $5,000 to kick off the project at Northwestern. </p><p>“What happened was, the story of DFA started with me, two of my co-founders. We wanted to use the power of design to solve a social problem – \‘how can we help the lives of people with diabetes?\’" Chung said. "It was a good starting approach to see what kind of skill sets we have and ideas to come up with. The starting off point started with Jerry the Bear, and all of us realized [DFA] could be a great social design institute.”</p><p>Chung has since graduated from Northwestern and currently works from Providence, Rhode Island. The beta prototype of Jerry has a color touchscreen on his stomach, where children can immerse themselves in a story-based game through which they learn how to monitor blood glucose levels, identify symptoms, and count carbs.</p><p style="color:rgb(70,83,300);font-family: \'Roboto Condensed\', sans-serif;font-size:25px;">PLANNING AHEAD</p><p> Chung and her partners anticipate marketing the product to early diagnosed children ages 3-7, and have been testing various distribution channels such as diabetes camps, hospital waiting rooms, and interested families. They plan on launch 300 beta bears in June, and have sold 160 bears so far. </p><p>Chung and her team have painstakingly tested iteration after iteration of Jerry the Bear in order to perfect their product. </p><span style="color:rgb(70,83,300);font-size:30px;position:relative;left:-40px;"><p><em>“Build often, test often,” advised Chung. “Never make assumptions.”</em></p></span><p>The Jerry the Bear team has attended marathons, fundraisers, and conferences surrounding diabetes. At a workshop in a local diabetes camp in Providence, the team provided 50 diagnosed children with early Jerry prototypes to undergo a week-long alpha test. Along with the bear, they provided a journal and camera to the families to record anything “that worked or didn\’t”. Their results showed that diagnosed children played for about 21 hours per week. </p><p style="color:rgb(70,83,300);font-family: \'Roboto Condensed\', sans-serif;font-size:25px;">REFLECTING ON SUCCESS</p><p>Few start-ups ever reach the point Jerry the Bear has. Chung attributes her success to an understanding of the emotional side of her research.</p><p>“[Social] design is a method of taking a user-centric approach to solve real problems. Market-research approach – you don\’t really know the emotional side of why you\’d create this. User-centric, you go and talk to people about this," Chung said. "Research that you\’re doing is more emotionally compelling, and you want to build a relationship with the people you talk to.”</p><p>Through this methodology, Chung intends on making a lasting impact in her industry.</p><p>“I want to get Jerry out there, and have it become the standard of education for Type I diabetes.” </p><p style=\"color:rgb(70,83,300);font-family: \'Roboto Condensed\', sans-serif;font-size:25px;\">HOW IT WORKS </p><iframe width="560" height="315" style="margin-left:100px;" src="http://www.youtube.com/embed/FFwCigfzaak?rel=0" frameborder="0" allowfullscreen></iframe><div id=\"closebuttonjive\" style=\"color:rgb(70,83,300);border:0px solid white;text-align:center;padding:2px;float:right;width:100px;height:30px;position:relative;top:400px;\">close</div></div><script> var closebuttonjive = document.getElementById("closebuttonjive"); closebuttonjive.addEventListener("click",closeStory,false);function closeStory(){console.log(\"close\");$storybox.empty();storybox.setAttribute("class", "storyboxHidden");};</script>');
	

	
};


function writeLunaStory(){
	$storybox.empty();
	
	$("html, body").animate({ scrollTop: "+=400px" },2500);

	console.log("yay");
	$storybox.append('<div style="width:125px;height:139px;margin-right:auto;margin-left:auto;margin-top:20px;"><img src=\"crescent1.png\"></div><div style=\"width:810px;margin-right:auto;margin-left:auto;padding:10px;\"><div style=\"margin-top:20px;font-size:60px;width:860px;font-family: \'Oswald\', sans-serif;color:black;line-height:1.2;padding:10px;\">HOW CAN WE PREVENT AT-HOME FALLS AMONG OLDER ADULTS?</div><div style=\"color:rgb(70,83,300);width:860px;font-family: \'Roboto Condensed\', sans-serif;font-size:40px;">Luna Lights: A Guiding Light for Fall Prevention</div><p>Imagine a simple device with the power to cut through darkness, providing a soothing source of light that is perfectly placed to guide older adults to the bathroom, to the front door or even to the kitchen while increasing confidence and enabling independence when it matters most. That device may soon be Luna Lights, an automated lighting system currently being built by students at Northwestern University.</p>	<p>Catherine Chung, Donovan Morrison, Matt Wilcox and Wesley Youman came up with the idea while working as undergraduate fellows at Design for America this past summer.</p>	<p>“We talked to people about falling and heard their personal stories. We realized immediately that it was a really big problem,” said Morrison. “Our research found that a lot of older adults were scared of the outside environment even though the majority of falls would happen inside.”</p>	<p style=\"color:rgb(70,83,300);font-family: \'Roboto Condensed\', sans-serif;font-size:25px;\">A DEEPER INSIGHT </p>	<p>In fact, falls are the leading cause of nonfatal injury among adults ages 65 and older in the United States. According to the Centers for Disease Control and Prevention, there were more than 2.4 million reported cases of unintentional falls that led to either severe injury or a trip to the emergency room between the years of 2001 and 2011. For adults in this age group, that means accidental falls account for an overwhelming 62 percent of all unintentional injuries.</p>	<p>According to students, these falls are caused by misconceptions about risk and oftentimes, a tendency to leave the light off.</p><span style=\"color:rgb(70,83,300);font-size:30px;position:relative;left:-40px;\"><p><em>“When you think about it, you might wonder, ‘why not just turn the light on?’ Well, it’s not so simple.”</em></p></span>	<p> “When you think about it, you might wonder, ‘why not just turn the light on?’ Well, it’s not so simple,” said Chung.</p>	<p style=\"color:rgb(70,83,300);font-family: \'Roboto Condensed\', sans-serif;font-size:25px;\">TALKING WITH THE TARGET</p>	<p>The four-man project team spoke with professionals in assisted living, physical therapy and research to develop a strong understanding of falls, why they happen and how they can potentially be prevented. Among their references are Evanston-area healthcare providers and residents at the Mather Pavillion, Norshore Village and Mather Lifeways. Mather Lifeways is the teams\’ official partner and will be the premier beneficiary of the idea once it comes to fruition. Chung and her teammates agree that hearing the personal stories about falls firsthand was the most telling experience that led to the group\’s most key insights.</p>	<p> “We found that a lot of older adults don\’t want to turn on a light at night because then it will wake them up and they’ll have difficult time falling back to sleep,” said Morrison.</p><p>Therein lies the challenge—how to significantly decrease at-home falls?</p>	<p>“We attacked the home environment and there were a couple of places we looked into and the one thing that really intrigued us was dark rooms,” said Chung.</p><p>Designing a device that can fit comfortably into the lifestyles of older adults without becoming intrusive or jeopardizing independence was as important to the team as ensuring safety. Being able to use residents at Mather Pavillion, Norshore Village and Mather Lifeways as test subjects helped them narrow down their list of design options.</p><p>“We had a few ideas that we thought were really great so we brought them to the users and asked them about it. We asked a bunch of questions like, \‘Is this something you think you’d be interested in? Would it give you confidence at night? Do you think it would reduce your risk of falling?\’” said Youman. “Luna Lights stuck out and we went with it.”</p><p style=\"color:rgb(70,83,300);font-family: \'Roboto Condensed\', sans-serif;font-size:25px;\">FINDING GREATER SIGNIFICANCE</p>	<p>An idea like Luna Lights also comes with significant financial implications. Statistics reported by the Centers for Disease Control and Prevention estimate that Americans over the ages of 65 who suffered unintentional falls generated more than 1 billion dollars in medical costs in the year 2005. It goes without saying that strategies aimed at reducing the occurrences of these falls could lift a substantial financial burden off the American economy, not to mention off the elderly themselves.</p><p>Though still in the preliminary stages of the design process, the Luna Lights team looks forward to one day bringing their creation to life, illuminating homes and shedding light where it’s needed most.</p><p style=\"color:rgb(70,83,300);font-family: \'Roboto Condensed\', sans-serif;font-size:25px;\">HOW IT WORKS </p><img src="LunaLightsDiagram1.jpg" width="780" height="400"/><p>The user lies in bed soundly asleep. At this point, the room is completely dark. The Luna Lights product is pre-installed in the bedroom.</p><br></br><img src="LunaLightsDiagram2.jpg" width="780" height="400"/><p>A pressure pad placed beneath the user’s mattress awaits the removal of the user’s body weight before triggering the lights.</p><br></br><img src="LunaLightsDiagram3.jpg" width="780" height="400"/><p>When the user wakes and sits up in bed, the pressure pad will send a signal that will trigger the lights around the room. The lights illuminate a safe path and will turn off when the user returns to bed and applies weight to the pad.</p><div id=\"closebuttonjive\" style=\"color:rgb(70,83,300);border:0px solid white;text-align:center;padding:2px;float:right;width:100px;height:30px;position:relative;top:10px;\">close</div></div><script> var closebuttonjive = document.getElementById("closebuttonjive"); closebuttonjive.addEventListener("click",closeStory,false);var explanation = document.getElementById(\"explanation\");var digitize = document.getElementById(\"digitize\");var continue1 = document.getElementById(\"continue1\");var nutty = document.getElementById(\"nutty\");var hugo = document.getElementById(\"hugo\");var digitize2 = document.getElementById(\"digitize2\");var crater = document.getElementById(\"crater\");digitize2.addEventListener(\"mouseover\", showDigitize, false);digitize2.addEventListener(\"mouseout\", removeExplanation, false);continue1.addEventListener(\"mouseover\", showContinue1, false);continue1.addEventListener(\"mouseout\", removeExplanation, false);hugo.addEventListener(\"mouseover\", showHugo, false);hugo.addEventListener(\"mouseout\", removeExplanation, false);nutty.addEventListener(\"mouseover\", showNutty, false);nutty.addEventListener(\"mouseout\", removeExplanation, false);crater.addEventListener(\"mouseover\", showCrater, false);crater.addEventListener(\"mouseout\", removeExplanation, false);function showDigitize(){console.log(\"hover\");explanation.innerHTML = \"<p>THIS IS WHAT DIGITIZE DOES</p>\";};function showContinue1(){console.log(\"hover\");explanation.innerHTML = \"<p>THIS IS WHAT CONTINUE DOES</p>\";};function showHugo(){console.log(\"hover\");explanation.innerHTML = \"<p>THIS IS WHAT HUGO DOES</p>\";};function showCrater(){console.log(\"hover\");explanation.innerHTML = \"<p>THIS IS WHAT CRATER DOES</p>\";};function showNutty(){console.log(\"hover\");explanation.innerHTML = \"<p>THIS IS WHAT NUTTY DOES</p>\";};function removeExplanation(){explanation.innerHTML = \"\";};function closeStory(){console.log(\"close\");$storybox.empty();storybox.setAttribute("class", "storyboxHidden");};</script>');
	

	
};


