var channels = ["ThijsHS", "MrYagut", "nl_Kripp", "Forsenlol", "Kolento", "AmazHS", "reynad27", "TrumpSC", "Firebat", "Savjz", "eloise_ailv", "HSdogdog", "Lifecoach1981", "itsHafu", "bmkibler", "StrifeCro"];


// make JSONP call
function apiCall(channel) {
    $.getJSON("https://api.twitch.tv/kraken/streams/" + channel+'/?client_id=22xj4zdfbfkqf210l5j956e59jtlogu', function(data) {

        var html, streamStatus;


        if (data.stream === null) {

            streamStatus = "offline";
						html = '<div class="col-md-3 text-center"><div class="thumbnail"><img src="shrug.jpg"></img><div class="caption caption-fixed-height"><h2>' + channel+ '</h2><p>Channel is offline.</p></div></div></div>';

        } else if (data.stream === undefined) {
            streamStatus = "closed";
						html = '<div class="col-md-3 text-center"><div class="thumbnail"><img src="shrug.jpg" ></img><div class="caption caption-fixed-height"><h2>' + channel+ '</h2><p>Channel is closed.</p></div></div></div>';
        } else {
            streamStatus = "online";
						html = '<div class="col-md-3 text-center"><div class="thumbnail"><img src="' +
								data.stream.channel.logo + '"><div class="caption caption-fixed-height"><h2>' + data.stream.channel.display_name+ '</h2><p>' + data.stream.channel.status + '</p>'
								+ '</div><p><a class="btn btn-success"    href="' + data.stream.channel.url + '" role="button"> watch &raquo;</a></p></div></div>';

        }
				console.log(html);
        // make html

        streamStatus === "online" ? $("#streamers").prepend(html) : $("#streamers").append(html);
			}
    );


};

function getChannels() {
    channels.forEach(function(channel){apiCall(channel)});
};

//jQuery stuff
$(document).ready(function() {
    getChannels();
});
