function load() {

//I am using a static JSON object here to represent what the output would be from the server.
    var rsp = {
         "configurations": [
            { "name":"host1", "hostName": "nessus-xml.lab.com", "port": 1241, "username": "toto"},
            { "name":"host2", "hostName": "nessus-xml.lab.com", "port": 3384, "username": "admin"}, 
            { "name":"host3", "hostName": "nassus.labexample.com", "port": 3000, "username": "rtruitt"}, 
            { "name":"host4", "hostName": "google.com", "port": 3001, "username": "rctruitt"}, 
            { "name":"host5", "hostName": "facebook.com", "port": 2008, "username": "rtruit1"}, 
            { "name":"host6", "hostName": "twitter.com", "port": 2122, "username": "rtruit2"}, 
            { "name":"host7", "hostName": "rei.com", "port": 3728, "username": "rtruit3"}, 
            { "name":"host8", "hostName": "bhphotovideo.com", "port": 6837, "username": "software"}, 
            { "name":"host9", "hostName": "nessus-lab-example.com", "port": 2111, "username": "engineer"}, 
            { "name":"host10", "hostName": "nessus-corp.com", "port": 4716, "username": "test"}, 
            { "name":"host11", "hostName": "nessus-lodge.com", "port": 7882, "username": "admin_local"}
            
        ]
    }

    var conn = new XMLHttpRequest();
    conn.open('GET', "http://md5.jsontest.com/?text=[text", true); 
    //conn.open('GET', "http://[yourserver]/download/request?host=2", true); 
    conn.send(); 

    conn.onreadystatechange = processRequest; 
    function processRequest(e){
        if (conn.readyState == 4 && conn.status == 200){

            // Parse through the returned JSON object, and save to a variable for use later
            var response = JSON.parse(conn.responseText);

            //start of external javascript library Dynatable
            var myRecords = rsp.configurations; 
            $('#dataTable').dynatable({
                dataset:{
                    records: myRecords
                },
                features: {
                    sort: false, 
                    search: false,
                    recordCount: true,
                    perPageSelect: false,
                    paginate: false
                }
                
            });
        }
    }    
} 


function filter(){
    var input, search, table, row, data, i; 
    
    input = document.getElementById('input');

    search = input.value.toUpperCase(); 
    
    table = document.getElementById('dataTable');
    row = table.getElementsByTagName('tr'); 

    for (i = 0; i < row.length; i++) {
    data = row[i].getElementsByTagName("td")[0]; // **  //
    if (data) {
      if (data.innerHTML.toUpperCase().indexOf(search) > -1) {
        row[i].style.display = "";
      } else {
        row[i].style.display = "none";
      }
    } 
  }
}

// ** in order to change the filter parameter, you would need to change this index with the following key: 

// 0: Filters on Name 
// 1: Filters on hostName
// 2: Filters on Port
// 3: Filters on Username 