var HTMLsalLogo = '<img id="logo" class="img-responsive" src="images/logo.png">'

var HTMLnavHome = '<li id="navHome"><a href="#"><img id="home" class="img-responsive" src="images/home.png" alt="Home" onmouseover="onHover();" onmouseout="offHover();"></a></li>'
//var HTMLnavHomeHover = 'images/homeA.png'
var HTMLnavSched = '<li id="navSchedule"><a href="#"><img id="schedule" class="img-responsive" src="images/schedule.png" alt="Schedule" onmouseover="onHover2();" onmouseout="offHover2();"></a></li>'
//var HTMLnavSchedHover = 'images/scheduleA.png'
var HTMLnavFighter = '<li id="navFighters"><a href="#"><img id="fighters" class="img-responsive" src="images/fighter.png" alt="Fighters" onmouseover="onHover3();" onmouseout="offHover3();"></a></li>'
//var HTMLnavFighterHover = '<li id="navFighters"><a href="#"><img id="fighters" class="img-responsive" src="images/fighterA.png" alt="Fighters"></a></li>'
var HTMLnavStat = '<li id="navStats"><a href="#"><img id="stats" class="img-responsive" src="images/stat.png" alt="Statistics" onmouseover="onHover4();" onmouseout="offHover4();"></a></li>'
var HTMLnavStatHover = '<li id="navStats"><a href="#"><img id="stats" class="img-responsive" src="images/statA.png" alt="Statistics"></a></li>'
//var HTMLnavPodcast = '<li id="navPodcast"><a href="#"><img id="podcast"class="img-responsive" src="images/podcast.png" alt="Podcast"></a></li>'
//var HTMLnavArchive = '<li id="navArchive"><a href="#"><img id="archive" class="img-responsive" src="images/archive.png" alt="Archive"></a></li>'

var HTMLsocFacebook = '<a href="https://www.facebook.com/superamiiboleague"><img id="facebook" class="img-responsive" src="images/facebook.png" alt="Facebook"></a>'
var HTMLsocTwitter = '<a href="https://twitter.com/SuperAmiiboLeag"><img id="twitter" class="img-responsive" src="images/twitter.png" alt="Twitter"></a>'
var HTMLsocYoutube = '<a href="https://www.youtube.com/channel/UC5o5MsuLhLZ45XbFVR1B7nQ"><img id="youtube" class="img responsive" src="images/youtube.png" alt="YouTube"></a>'

var HTMLfootAbout = '<li id="about"><a href="#">About</a></li>'
var HTMLfootContact = '<li id="contact"><a href="#">Contact</a></li>'

$('.toprow').append(HTMLsalLogo);

$('#navcontainer ul').append(HTMLnavHome)
.append(HTMLnavSched)
.append(HTMLnavFighter)
.append(HTMLnavStat);
//.append(HTMLnavPodcast)
//.append(HTMLnavArchive);

$('.social').append(HTMLsocYoutube)
.append(HTMLsocFacebook)
.append(HTMLsocTwitter);

$('#bottomrow ul').append(HTMLfootAbout)
.append(HTMLfootContact);


function onHover() {
    $("#home").attr('src', 'images/homeA.png')
  }
function onHover2() {
    $("#schedule").attr('src', 'images/scheduleA.png')
  }
function onHover3() {
    $("#fighters").attr('src', 'images/fighterA.png')
  }
function onHover4() {
    $("#stats").attr('src', 'images/statA.png')
  }

function offHover() {
  	$("#home").attr('src', 'images/home.png')
  }
function offHover2() {
    $("#schedule").attr('src', 'images/schedule.png')
  }
function offHover3() {
    $("#fighters").attr('src', 'images/fighter.png')
  }
function offHover4() {
    $("#stats").attr('src', 'images/stat.png')
  }


 