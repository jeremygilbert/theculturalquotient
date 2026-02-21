console.log("bye");

//window.onload=getKickstarter();


function search() {
	$('#text').empty(); 
	var query = $('#query_box').val();
	var url = 'http://www.kickstarter.com/projects/search.json?search=&term=' + query + '&callback=handleKickstarterData';
	$.getScript(url);
	//$.getScript("http://www.kickstarter.com/projects/search.json?search=&term=diabetes&callback=handleKickstarterData");
}

function handleKickstarterData(info) {
	console.log(info);
	
	
	for (var i = 0; i < info.projects.length; i++) {
		var name1 = info.projects[i].name;
		var name2 = "empty";
		
		if(name1.indexOf("&quot;") !== -1){
		 	name2 = name1.replace("&quot;","\"");
		}
		
		if(name2.indexOf("&quot;") !== -1){
		 	name2 = name2.replace("&quot;","\"");
		}
		
		else if(name1.indexOf("&#39;") !== -1){
		 	name2 = name1.replace("&#39;","\'");
		}
		
		else if(name2.indexOf("&#39;") !== -1){
		 	name2 = name2.replace("&#39;","\'");
		}
		
		else if(name1.indexOf("&amp;") !== -1){
		 	name2 = name1.replace("&amp;","&");
		}
		else{ name2 = name1}
		
		console.log(name2);
		
		var string1 = info.projects[i].card_html; 
		var string2 = string1.substring(90, string1.indexOf('target'));
		var string3 = string2.substring(0,10) + "http://www.kickstarter.com/" + string2.substring(11) + "target=\"blank\"" + ">";
		console.log(string3);
		
		var p_tag = string3 + name2 + "</a></p>";
		
		$('#text').append(p_tag);
		
	}
}