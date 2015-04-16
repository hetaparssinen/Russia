$(document).ready(function() {
	// vaihda väriä et näkee paremmin mitä painetaan. :active ei oikein toimi oikein meidän tapauksessa.

	// letters
	$("#play_letters").mouseup(function() {
    $.ajax({
		url: "play_letters.html",
		type: "get",
		dataType: "html"
	}).done(function(data)  {
		$("body").html(data);
	});
	});
	// nouns
	$("#play_nouns").mouseup(function() {
    $.ajax({
		url: "play_nouns.html",
		type: "get",
		dataType: "html"
	}).done(function(data)  {
		$("body").html(data);
	});
	});
	//verbs
	$("#play_verbs").mouseup(function() {
    $.ajax({
		url: "play_verbs.html",
		type: "get",
		dataType: "html"
	}).done(function(data)  {
		$("body").html(data);
	});
	});
	// adjectives
	$("#play_adjectives").mouseup(function() {
    $.ajax({
		url: "play_adjectives.html",
		type: "get",
		dataType: "html"
	}).done(function(data)  {
		$("body").html(data);
	});
	});
	//adverbs
	$("#play_adverbs").mouseup(function() {
    $.ajax({
		url: "play_adverbs.html",
		type: "get",
		dataType: "html"
	}).done(function(data)  {
		$("body").html(data);
	});
	});
	// must knowns
	$("#play_mustKnowns").mouseup(function() {
    $.ajax({
		url: "play_mustKnowns.html",
		type: "get",
		dataType: "html"
	}).done(function(data)  {
		$("body").html(data);
	});
	});
});