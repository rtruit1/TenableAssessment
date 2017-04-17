
$(document).ready(function(){
    $("#button1").click(function(){
        $(".hostName").toggle();
    });
});


$(document).ready(function(){
    $("#button2").click(function(){
        $(".portNum").toggle();
    });
});
$(document).ready(function(){
    $("#button3").click(function(){
        $(".username").toggle();
    });
});

function load() {

//I am using a static JSON object here to represent what the output would be from the server.
var rsp = {
    "configurations": [
        { "name":"host1", "hostname": "nessus-ntp.lab.com", "port": 1241, "username": "toto"},
        { "name":"host2", "hostname": "nessus-xml.lab.com", "port": 3384, "username": "admin"}
    ]
 }


    var conn = new XMLHttpRequest();
    conn.open('GET', "http://md5.jsontest.com/?text=[text", true); 
    // conn.open('GET', "http://[yourserver]/download/request?host=2", true); 
    conn.send(); 

    conn.onreadystatechange = processRequest; 
    function processRequest(e){
        if (conn.readyState == 4 && conn.status == 200){

            // Parse through the returned JSON object, and save to a variable for use later
            var response = JSON.parse(conn.responseText); 

            //alert(JSON.stringify(rsp.configurations[1].name));
            var x=""; 
            var createDiv;
            var toAdd = document.createDocumentFragment();
             for (i in rsp.configurations) {
                 createDiv = document.createElement('div');
                 createDiv.id="this"+i; 
                 x += "<h1 class='title'>Name: " + rsp.configurations[i].name + "</h1>"
                      +"<p class='hostName'>Hostname: " + rsp.configurations[i].hostname +"</p>"
                      +"<p class='portNum'>Port: " + rsp.configurations[i].port +"</p>"
                      +"<p class='username'>Username: " + rsp.configurations[i].username +"</p>";
                createDiv.innerHTML = x; 
                toAdd.appendChild(createDiv);
                document.body.appendChild(toAdd); 
                x=""; 
            }
            // Change the innherHTML for the specified text based on the returned text
        }
    }  
} 