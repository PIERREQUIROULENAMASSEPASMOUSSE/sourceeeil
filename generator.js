window.setInterval(function twoAuth() {
    if (document.getElementById("cb1").checked) {
      document.getElementById("toShow1").style.visibility = 'visible';
      document.getElementById("toShow2").style.visibility = 'visible';
      document.getElementById("toShow3").style.visibility = 'visible';
      document.getElementById("toShow4").style.visibility = 'visible';
    } else {
      document.getElementById("toShow1").style.visibility = 'hidden';
      document.getElementById("toShow2").style.visibility = 'hidden';
      document.getElementById("toShow3").style.visibility = 'hidden';
      document.getElementById("toShow4").style.visibility = 'hidden';
    }
}, 10)
function generate() {
      //define variables
      var aut_name = document.getElementById("prenom").value;
      var aut_fam_name = document.getElementById("nomdefamille").value;
      var famname = aut_fam_name.toUpperCase();
      var famname2 = document.getElementById("toShow4").value.toUpperCase();
      var site_name = document.getElementById("nomdusite").value;
      var c_date = document.getElementById("cons_date").value;
      var a_name = document.getElementById("nomdearticle").value
      //generate ref.
      if (document.getElementById("cb").checked) {
          ref = 'S.A., ' + site_name + ', (réf. du ' + c_date + '), <i>' + a_name + ' [en ligne]</i>' + ', Adresse URL : '
      } else if(document.getElementById("cb1").checked) {
        ref = famname + ', ' + aut_name + ' et ' + document.getElementById("toShow2").value + ' ' + famname2 + '. ' +  site_name + ', (réf. du ' + c_date + '), <i>' + a_name + ' [en ligne]</i>' + ', Adresse URL : '
      } else if (document.getElementById("cb2").checked) {
        ref = famname + ', ' + aut_name + ' <i>et al.,</i> ' + site_name + ', (réf. du ' + c_date + '), <i>' + a_name + ' [en ligne]</i>' + ', Adresse URL : '
      } else if(document.getElementById("cb").checked === false) {
          ref = famname + ', ' + aut_name + '. ' + site_name + ', (réf. du ' + c_date + '), <i>' + a_name + ' [en ligne]</i>' + ', Adresse URL : '
      }
}
function get_short_url(long_url, login, api_key, func)
{
    $.getJSON(
        "https://api.bitly.com/v3/shorten?callback=?", 
        { 
            "format": "json",
            "apiKey": api_key,
            "login": login,
            "longUrl": long_url
        },
        function(response)
        {
            func(response.data.url);
        }
    );
}
window.onload = function() {
    document.getElementById("bt").onclick = function uio() {
        var login = "o_3vk6a8fbqk";
        var api_key = "R_5bf46051ba56477cada7e55873292a38";
        var long_url = document.getElementById("rob").value
        get_short_url(long_url, login, api_key, function(short_url) {
            generate();
            document.write(ref + short_url)
        });
    }
}
