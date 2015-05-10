var HTMLsalLogo = '<img id="logo" class="img-responsive" src="images/logo.png">'

var HTMLnavHome = '<li id="navHome"><a href="#"><img id="home" class="img-responsive" src="images/home.png" alt="Home"></a></li>'
var HTMLnavSched = '<li id="navSchedule"><a href="#"><img id="schedule" class="img-responsive" src="images/schedule.png" alt="Schedule"></a></li>'
var HTMLnavFighter = '<li id="navFighters"><a href="#"><img id="fighters" class="img-responsive" src="images/fighter.png" alt="Fighters"></a></li>'
var HTMLnavStat = '<li id="navStats"><a href="#"><img id="stats" class="img-responsive" src="images/stat.png" alt="Statistics"></a></li>'
var HTMLnavPodcast = '<li id="navPodcast"><a href="#"><img id="podcast"class="img-responsive" src="images/podcast.png" alt="Podcast"></a></li>'
var HTMLnavArchive = '<li id="navArchive"><a href="#"><img id="archive" class="img-responsive" src="images/archive.png" alt="Archive"></a></li>'

var HTMLsocFacebook = '<a href="https://www.facebook.com/superamiiboleague"><img id="facebook" class="img-responsive" src="images/facebook.png" alt="Facebook"></a>'
var HTMLsocTwitter = '<a href="https://twitter.com/SuperAmiiboLeag"><img id="twitter" class="img-responsive" src="images/twitter.png" alt="Twitter"></a>'
var HTMLsocYoutube = '<a href="https://www.youtube.com/channel/UC5o5MsuLhLZ45XbFVR1B7nQ"><img id="youtube" class="img responsive" src="images/youtube.png" alt="YouTube"></a>'


$('.toprow').append(HTMLsalLogo);

$('#navcontainer ul').append(HTMLnavHome)
.append(HTMLnavSched)
.append(HTMLnavFighter)
.append(HTMLnavStat)
.append(HTMLnavPodcast)
.append(HTMLnavArchive);

$('.social').append(HTMLsocYoutube)
.append(HTMLsocFacebook)
.append(HTMLsocTwitter);



var images = ['ssb.jpg', 'ssb2.jpg', 'ssb3.jpg', 'ssb4.jpg', 'ssb5.png', 'ssb6.jpg'];
$('#random').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});
