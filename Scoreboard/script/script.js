   var Data=[{
              id:0,
              name:"Akrem Hammami",
              score:"5",
              
          },{
              id:1,
              name:"ahmed Benjom3a",
              score:"12",
              
          },{
              id:2,
              name:"Karim Gharbi",
              score:"2",
              
          }];
            var tes=function(i) {
                var ul=document.getElementById("ul");
              var li=document.createElement("li");
            
             
              li.classList.add("listStyle");
              
              var div1=document.createElement("div");
              div1.classList.add("row");
             div1.classList.add("escore");
              var div2=document.createElement("div");
              div2.classList.add("col-md-8");
              var div3=document.createElement("div");
              div3.classList.add("ss");
              div3.classList.add("ktiba");
              var span1=document.createElement("span");
              span1.classList.add("esm");
              span1.appendChild(document.createTextNode(Data[i].name));
                var btn0=document.createElement("button");
                
                btn0.setAttribute("id",i);
                btn0.setAttribute("onclick","rem(this.id)");
                btn0.appendChild(document.createTextNode("Delete"));
                btn0.classList.add("specbtn");
                span1.appendChild(btn0);
              div3.appendChild(span1);
              div2.appendChild(div3);
              
              
              var div4 =document.createElement("div");
              div4.classList.add("col-md-4");
              div4.classList.add("test");
              var btn1=document.createElement("button");
              btn1.classList.add("btn");
              btn1.classList.add("btn-dark");
              btn1.classList.add("pos");
              btn1.setAttribute("type","button");
              btn1.setAttribute("onclick","addsc(this.id)");
              btn1.setAttribute("id","p"+i);

               var span2=document.createElement("span");
              span2.classList.add("ktiba");
              span2.appendChild(document.createTextNode("+"));
              btn1.appendChild(span2);
              div4.appendChild(btn1);
               
              var span3=document.createElement("span");
              span3.classList.add("ktiba");
              span3.setAttribute("id","scoreNbr"+i);
              span3.appendChild(document.createTextNode(Data[i].score));
              div4.appendChild(span3);
              
               var btn2=document.createElement("button");
              btn2.classList.add("btn");
              btn2.classList.add("btn-dark");
              btn2.classList.add("neg");
              btn2.setAttribute("onclick","remsc(this.id)");
              btn2.setAttribute("id","n"+i);

              btn2.setAttribute("type","button");
              
               var span2=document.createElement("span");
              span2.classList.add("ktiba");
              span2.appendChild(document.createTextNode("-"));
              btn2.appendChild(span2);
              div4.appendChild(btn2);
              
              div1.appendChild(div2);
              div1.appendChild(div4);
              
             
              li.appendChild(div1);

              
              
              ul.appendChild(li);
                           
}
      window.onload=function(){
         
          
          
          
        
          for(var i=0;i<Data.length;i++){
              tes(i);
    }
          
          document.getElementById("nbrOfPlayers").innerHTML=Data.length;
          document.getElementById("totalPoints").innerHTML=sum();

          
          
      }
       var addsc=function(a){
        var le_id=a.slice(1);
           console.log(le_id);
           console.log(Data);
           
        Data[le_id].score=Number(Data[le_id].score)+1;
        document.getElementById("scoreNbr"+le_id).innerHTML=Data[le_id].score;
                     document.getElementById("totalPoints").innerHTML=sum();

 }
          var remsc=function(a){
     var le_id=a.slice(1);
              
        Data[le_id].score=Number(Data[le_id].score)-1;
        document.getElementById("scoreNbr"+le_id).innerHTML=Data[le_id].score;
                document.getElementById("totalPoints").innerHTML=sum();

 }
          var addplayer=function(){
              var newplayer=document.getElementById("newplayer").value;
              if(newplayer==""){
                  alert("zid player");
              }else{
              document.getElementById("newplayer").value="";
              
              var obj={id:Data.length,
                        name:newplayer,
                        score:"0",
                     };

              Data.push(obj);
              tes(obj.id);
             document.getElementById("nbrOfPlayers").innerHTML=Data.length;

}
              
          }
          var rem=function(x){
             
              Data.splice(x,1);
              for(var i=Data.length;i>x;i--){
                  Data[i-1].id=(Data[i-1].id)-1;
                  var ad=document.getElementById(i).setAttribute("id",i-1);
                  var rm=document.getElementById("p"+i).setAttribute("id","p"+(i-1));
                  var rm=document.getElementById("n"+i).setAttribute("id","n"+(i-1));
                  var rm=document.getElementById("scoreNbr"+i).setAttribute("id","scoreNbr"+(i-1));

      
              }
       
                        
              var indice=Number(x)+1;
              
              var te=document.getElementById("ul").childNodes[indice].remove();
                            
          document.getElementById("nbrOfPlayers").innerHTML=Data.length;
                        document.getElementById("totalPoints").innerHTML=sum();

          }
          var sum=function(){
              var x=0;
              for(var i=0;i<Data.length;i++){
                x=x+Number(Data[i].score);  
              }
              return x;
          }