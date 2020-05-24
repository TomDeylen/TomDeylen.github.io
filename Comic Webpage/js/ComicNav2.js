var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

current = comics.length-1;

const urlParams = new URLSearchParams(window.location.search);
if(urlParams.has('pageLink') == true)
{
	current = getUrlParameter('pageLink');
}

var title = comics[current].chapter +": "+ comics[current].title;
var comic = $('<img/>').attr('src', comics[current].Link);

$('#Comics').append(comic);
$('#ComicTitle').text(title);


var trace = traces[Math.floor(Math.random()*traces.length)];
$('#HeadingTxt').text(trace);


$("#FirstLnk").each(function()
{
	this.href +='?pageLink=' + 0;
})
$("#LastLnk").each(function()
{
	var newVal =comics.length-1;
	this.href +='?pageLink=' + newVal;
})
$("#RandLnk").each(function()
{
	var newVal = Math.floor(Math.random() * comics.length);
	this.href +='?pageLink=' + newVal;
})

$("#NextLnk").each(function()
{
	var newVal = current;
	newVal++;
    if (newVal > comics.length -1) newVal = comics.length-1;
	this.href +='?pageLink=' + newVal;
})
$("#PrevLnk").each(function()
{
	var newVal = current;
	newVal--;
    if (newVal < 0) newVal = 0;
	this.href +='?pageLink=' + newVal;
})

function FindFirstofTitle()
{
	
}



function SetArchive()
{
	var chapter = "";
	for	(i =0; i < comics.length; i++)
	{
		
		if(chapter != comics[i].chapter)
		{
			var archiveList = $('<h2>').text(comics[i].chapter);
			chapter = comics[i].chapter;
			$('#Archive').append(archiveList);
		}
		
		var archiveList = $('<a>').attr('href', 'index.html?pageLink=' + comics[i].id).text(comics[i].title);
		$('#Archive').append(archiveList);
		$('#Archive').append($('<br/>'));
	}
	
}

