
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
        { "name":"host2", "hostname": "nessus-xml.lab.com", "port": 3384, "username": "admin"},
        { "name":"host2", "hostname": "nessus-xml.lab.com", "port": 3384, "username": "admin"},
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

            var x=""; 
            var CreateDiv;
            var parentDiv = $("div#parentDiv");
            var toAdd = document.createDocumentFragment();

             for (i in rsp.configurations) {

                 CreateDiv = document.createElement('div');
                 CreateDiv.className = "newDiv"; 
                 x += "<h2 class='title'>Name: " + rsp.configurations[i].name + "</h2>"
                      +"<p class='hostName'>Hostname: " + rsp.configurations[i].hostname +"</p>"
                      +"<p class='portNum'>Port: " + rsp.configurations[i].port +"</p>"
                      +"<p class='username'>Username: " + rsp.configurations[i].username +"</p>";
                CreateDiv.innerHTML = x; 
                toAdd.appendChild(CreateDiv);

                parentDiv.append(toAdd); 

                x=""; 

            }
        }
    }  
} 