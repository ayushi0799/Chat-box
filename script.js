

function timeSince(date) {

     var seconds = Math.floor((new Date() - date) / 1000);
   
     var interval = seconds / 31536000;
   
     if (interval > 1) {
       return Math.floor(interval) + " years";
     }
     interval = seconds / 2592000;
     if (interval > 1) {
       return Math.floor(interval) + " months";
     }
     interval = seconds / 86400;
     if (interval > 1) {
       return Math.floor(interval) + " days";
     }
     interval = seconds / 3600;
     if (interval > 1) {
       return Math.floor(interval) + " hours";
     }
     interval = seconds / 60;
     if (interval > 1) {
       return Math.floor(interval) + " minutes";
     }
     return Math.floor(seconds) + " seconds";
   }
   
data= [{message:"Hello User! ",createdAt: '2021-09-14T13:23:02.298Z', sender:'agent',_id:1},
{message:'Hi ',createdAt: '2021-09-14T13:23:02.298Z', sender:'user',_id:2},
{message:'How are you doing today?',createdAt: '2021-09-14T13:23:02.298Z', sender:'agent',_id:3},
{message:'I am good, how about you?',createdAt: '2021-09-14T13:23:02.298Z', sender:'user',_id:4},
{message:'I am good, thanks for asking',createdAt: '2021-09-14T13:23:02.298Z', sender:'agent',_id:5}]

function getdatabyserver(){
     return data;
}


var messages=getdatabyserver();

for(var i=0;i<messages.length;i++){
  messages[i].createdAt=new Date(messages[i].createdAt)
  messages[i].timeAgo=timeSince(messages[i].createdAt)
}
 

class Box{
  constructor(){
    var messages=getdatabyserver();
    for(var i=0;i<messages.length;i++){
      if(messages[i].sender=="user"){
          var msg=messages[i].message
          $("ul").append("<p align='right'class='user-text'>"+msg+"<br>" +"<span class='date'>"+messages[i].timeAgo+" ago"+"</span>"+"</p");
         
        
      }
     
      else{
           var msg=messages[i].message
           $("ul").append("<p class='client-text'>"+msg+"<br>" +"<span class='date'>"+messages[i].timeAgo+" ago"+"</span>"+"</p");
      }
 }
  }
}
final=new Box();



var chats = document.getElementById("chats");
var textbox = document.getElementById("text");
var button = document.getElementById("button");


button.addEventListener("click", function(){
  if(textbox.value!=''){
  var newMessage = document.createElement("p");
  newMessage = textbox.value;
  var msgObj={message: textbox.value, createdAt: new Date(), sender: 'user', _id: data.length+1, timeAgo: '0 min ago'}
  $("ul").append("<p align='right' class='user-text'>"+newMessage+"<br>" +"<span class='date'>"+"Just now"+"</span>"+"</p");
  textbox.value = "";
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
  data.push(msgObj)
  }
});













