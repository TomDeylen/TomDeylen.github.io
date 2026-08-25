var imgs = [
		'Comics/Comic1.png',
		'Comics/Comic2.png',
		'Comics/Comic3.png',
		'Comics/Comic4.png',
		'Comics/Comic5.png',
		'Comics/Comic6.png',
		'Comics/Comic7.png',
		'Comics/Comic8.png',
		'Comics/Comic9.png',
		'Comics/Comic10.png',
		'Comics/Comic11.png',
		'Comics/Comic12.png',
		'Comics/Comic13.png',
		'Comics/Comic14.png',
		'Comics/Comic15.png',
		'Comics/Comic16.png'
]

current = 0;

function first() {
	current = 0;
	return imgs[current];
}

function last() {
	current = imgs.length-1;
	return imgs[current];
}

function next() {
    current++;
    if (current > imgs.length) current = imgs.length-1;
    return imgs[current];
}

function previous() {
    current--;
    if (current < 0) current = 0;
    return imgs[current];
}

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams('PageID');
console.log(urlParams.has('PageID'));


var comic = $('<img/>').attr('src', imgs[0]);

$('#Comics').append(comic);

$('#Prev').on('click', function(){
    comic.attr('src', previous());
});

$('#Next').on('click', function(){
    comic.attr('src', next());
});

$('#First').on('click', function(){
    comic.attr('src', first());
});

$('#Last').on('click', function(){
    comic.attr('src', last());
});