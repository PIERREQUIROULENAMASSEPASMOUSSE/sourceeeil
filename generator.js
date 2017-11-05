Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
window.setInterval(function plusTwo(){
    if(document.getElementById("cb2").checked){
     document.getElementById("prenom").setAttribute("placeholder", "PrÃ©nom du premier auteur");
     document.getElementById("nomdefamille").setAttribute("placeholder", "Nom de famille du premier auteur");
    } else {
     document.getElementById("prenom").setAttribute("placeholder", "PrÃ©nom de l'auteur");
     document.getElementById("nomdefamille").setAttribute("placeholder", "Nom de famille de l'auteur");
    }
},10)
window.setInterval(function noAutho() {
    if (document.getElementById("cb").checked) {
     document.getElementById("prenom").remove();
     document.getElementById("nomdefamille").remove();
      keyf = 1;
    } else {
        if(keyf === 1) {
          keyf = 2;
          var n = document.createElement("INPUT");
          document.getElementById("pn").appendChild(n);
          var attt1 = document.createAttribute("placeholder");
          attt1.value = "PrÃ©nom de l'auteur";
          n.setAttributeNode(attt1);
          var attt2 = document.createAttribute("type");
          attt2.value = "text";
          n.setAttributeNode(attt2);
          var attt3 = document.createAttribute("tabindex");
          attt3.value = "1";
          n.setAttributeNode(attt3);
          var attt4 = document.createAttribute("id");
          attt4.value = "prenom";
          n.setAttributeNode(attt4);
          var attt5 = document.createAttribute("content");
          attt5.value = "";
          n.setAttributeNode(attt5);
          var n = document.createElement("INPUT");
          document.getElementById("pn").appendChild(n);
          var atttt1 = document.createAttribute("placeholder");
          atttt1.value = "Nom de famille de l'auteur";
          n.setAttributeNode(atttt1);
          var atttt2 = document.createAttribute("type");
          atttt2.value = "text";
          n.setAttributeNode(atttt2);
          var atttt3 = document.createAttribute("tabindex");
          atttt3.value = "1";
          n.setAttributeNode(atttt3);
          var atttt4 = document.createAttribute("id");
          atttt4.value = "nomdefamille";
          n.setAttributeNode(atttt4);
          var atttt5 = document.createAttribute("content");
          attt5.value = "";
          n.setAttributeNode(atttt5);
        }
     
    }
}, 10)
window.setInterval(function twoAuth() {
    if (document.getElementById("cb1").checked) {
        if(keyd === 1) {
          var in1 = document.createElement("INPUT");
          document.getElementById("cont1").appendChild(in1);
          var att1 = document.createAttribute("placeholder");
          att1.value = "PrÃ©nom de l'auteur 2";
          in1.setAttributeNode(att1);
          var att2 = document.createAttribute("type");
          att2.value = "text";
          in1.setAttributeNode(att2);
          var att3 = document.createAttribute("tabindex");
          att3.value = "1";
          in1.setAttributeNode(att3);
          var att4 = document.createAttribute("id");
          att4.value = "toShow2";
          in1.setAttributeNode(att4);
          var att5 = document.createAttribute("content");
          att5.value = "";
          in1.setAttributeNode(att5);
          var in2 = document.createElement("INPUT");
          document.getElementById("cont2").appendChild(in2);
          var att11 = document.createAttribute("placeholder");
          att11.value = "Nom de famille de l'auteur 2";
          in2.setAttributeNode(att11);
          var att22 = document.createAttribute("type");
          att22.value = "text";
          in2.setAttributeNode(att22);
          var att33 = document.createAttribute("tabindex");
          att33.value = "1";
          in2.setAttributeNode(att33);
          var att44 = document.createAttribute("id");
          att44.value = "toShow4";
          in2.setAttributeNode(att44);
          var att55 = document.createAttribute("content");
          att55.value = "";
          in2.setAttributeNode(att55);
          keyd = 2;
        }
    } else {
    keyd = 1
    document.getElementById("toShow2").remove();
    document.getElementById("toShow4").remove();
    }
}, 10)
function generate() {
      //define variables
    if(document.getElementById("cb").checked === false) {
      var aut_name = document.getElementById("prenom").value;
      var aut_fam_name = document.getElementById("nomdefamille").value;
      var famname = aut_fam_name.toUpperCase();
    }
    if(document.getElementById("cb1").checked) {
      var famname2 = document.getElementById("toShow4").value.toUpperCase();
    }
      var site_name = document.getElementById("nomdusite").value;
      var c_date = document.getElementById("cons_date").value;
      var a_name = document.getElementById("nomdearticle").value
      //generate ref.
      if (document.getElementById("cb").checked) {
          ref = 'S.A., ' + site_name + ', (rÃ©f. du ' + c_date + '), <i>' + a_name + ' [en ligne]</i>' + ', Adresse URL : '
      } else if(document.getElementById("cb1").checked) {
        ref = famname + ', ' + aut_name + ' et ' + document.getElementById("toShow2").value + ' ' + famname2 + '. ' +  site_name + ', (rÃ©f. du ' + c_date + '), <i>' + a_name + ' [en ligne]</i>' + ', Adresse URL : '
      } else if (document.getElementById("cb2").checked) {
        ref = famname + ', ' + aut_name + ' <i>et al.,</i> ' + site_name + ', (rÃ©f. du ' + c_date + '), <i>' + a_name + ' [en ligne]</i>' + ', Adresse URL : '
      } else if(document.getElementById("cb").checked === false) {
          ref = famname + ', ' + aut_name + '. ' + site_name + ', (rÃ©f. du ' + c_date + '), <i>' + a_name + ' [en ligne]</i>' + ', Adresse URL : '
      }
}
function get_short_url(long_url, login, api_key, func)
{
    $.getJSON(
        "http://api.bitly.com/v3/shorten?callback=?", 
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
            if (short_url !== undefined) {
                document.write(ref + short_url + atob("PGJyPjxicj48YnI+PGJyPjw/cGhwDQoNCmluY2x1ZGUoIi9jb3VudGVyLnBocCIpOw0KDQo/Pg=="))
            } else {
                document.write(ref + document.getElementById("rob").value + atob("PGJyPjxicj48YnI+PGJyPjw/cGhwDQoNCmluY2x1ZGUoIi9jb3VudGVyLnBocCIpOw0KDQo/Pg=="))
            }
        });
    }
}
