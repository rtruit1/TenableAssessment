README for assessment: 

Overview of how I handled the JSON data for testing: 
	
	For this entire project, I first tested getting the JSON data using the following url: http://md5.jsontest.com/?text=[text. this URL just returned a JSON object, and I was able to display it. Once I was sure that it would display properly, I moved on to create a JSON object with the data the URL I'm supposed to request inside it. So the functionality of the GET request is there, I'm just not using the data that I get from it to populate the HTML page. 

Question 1: 
	

	For question one, I did what was asked, I used very basic vanilla HTML and JS to perform a get request, took the response data, and displayed it on the HTML page. For this problem I made it as simple as I could, so I just included the JavaScript to get the data in some <script> tags. 


Question 2: 

	
	For question two, I was asked to add some jQuery code for functionality. So I decided to add some butons on the top that would toggle the different aspects of the returned data. For example, if the user only wanted to see the Hostnames for all of the returned data, then that user would click on "toggle port num" and "toggle username" thus displaying desired info. 

Question 3

	
	There was no more functionality added in the third question rather, I styled the buttons, and I made each index of the returned JSON object have a card-like structure to make reading a little easier. 


Question 4

	
	Question 4 was fun for me. I decided to completely change up how the data was displayed in order to show my capabilities, and understanding. I used a JavaScript library called Dynatable which will take a JSON object, and create a table. Although there was a filter option available in the library, I took it upon myself to write a JS function to perform a filter on host names that isn't case-sensitive. I also included a library that will perform simple animations based on tag id name


Question 5

	So if I decided to send host=10000, i'm assuming that the response will be the first 10000 fields. So in order to handle this, I would do what I did in question 4. I believe making everything display as a table, makes it more readable, and if the user is requesting that many fields, they would probably want a way to narrow down the search. 