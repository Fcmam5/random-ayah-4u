$("document").ready(function(){

        $("#rand-btn").on('click',function(){
        	var ayahNum = Math.floor(Math.random() * (6236-1) + 1);

$.getJSON("http://api.globalquran.com/ayah/" + ayahNum + "/quran-simple?key=c83fc6ec971746571f263bdfa69bec28",function(msg){
            $("#quote-block").html(JSON.stringify(msg.quran["quran-simple"][ayahNum].verse))
})
        });
         
        })