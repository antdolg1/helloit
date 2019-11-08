
const url = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";


$('#factBtn').click(function() {
  $.get(url, callback);
});

function callback(response) {
    $('#factText').html(response.message);
}

