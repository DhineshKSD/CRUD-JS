var Database;
var disp=[];
var disp1=[];
var ticket_id=[];var slideIndex = 0;
var choice = []; 
var choice_Price = [];
var table="";var table1="";
var date=[];var trip=[];
var traveller=[];var trav_name= [];var trav_email= [];var trav_num= [];var trav_gender= []; var govt_id=[];
var start_city=[];var end_city =[];
var key1=[];var key2=[];
var a1=[];var a2=[];var a3=[];var a4=[];var a5=[];var a6=[];var dd=[];var pp=[];



Database=
[
    {
    from: "Chennai", to: "Trichy",
    flight: [
    {flight_details: "Flight Name: IndiGo , Flight No : 6E 7143,  Departure: 04.55 AM,  Arrival: 06.25AM", Price: "3672"},
    {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 02.55 PM, Arrival: 04.25PM", Price: "3812"},
    {flight_details: "Flight Name: AirAsia , Flight No : I5 9945 ,  Departure: 01.15 PM, Arrival: 02.25PM", Price: "4259"},
    {flight_details: "Flight Name: Air-India , Flight No : AI 591 ,  Departure: 07.20 AM, Arrival: 08.20AM", Price: "3950"},
    ]
    },
    {
    from: "Chennai", to: "Bangalore",
    flight: [
    {flight_details: "Flight Name: Air-India , Flight No : AI 563 ,  Departure: 01.20 PM, Arrival: 02.25PM", Price: "1751"},
    {flight_details: "Flight Name: IndiGo , Flight No : 6E 806,  Departure: 07.40 PM,  Arrival: 08.45PM", Price: "2149"},
    {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 05.00 PM, Arrival: 05.55PM", Price: "1812"},
    {flight_details: "Flight Name: AirAsia , Flight No : I5 2345 ,  Departure: 08.40 AM, Arrival: 09.40AM", Price: "2459"},
    ]
    },
    {
    from: "Chennai", to: "Cochin",
    flight: [
    {flight_details: "Flight Name: Air-India , Flight No : AI 513 ,  Departure: 08.25 AM, Arrival: 09.35PM", Price: "2751"},
    {flight_details: "Flight Name: Spicejet , Flight No : SG 7345 ,  Departure: 09.10 PM, Arrival: 10.25PM", Price: "2812"},
    {flight_details: "Flight Name: AirAsia , Flight No : I5 2015 ,  Departure: 12.40 PM, Arrival: 01.55PM", Price: "2859"},
    {flight_details: "Flight Name: IndiGo , Flight No : 6E 776,  Departure: 07.40 PM,  Arrival: 08.45PM", Price: "2949"},
    ]
    },
    {
    from: "Trichy", to: "Chennai",
    flight: [
    {flight_details: "Flight Name: AirAsia , Flight No : I5 9945 ,  Departure: 01.15 PM, Arrival: 02.25PM", Price: "4259"},
    {flight_details: "Flight Name: IndiGo , Flight No : 6E 7143,  Departure: 06.55 AM,  Arrival: 07.25AM", Price: "3672"},
    {flight_details: "Flight Name: Air-India , Flight No : AI 591 ,  Departure: 07.30 AM, Arrival: 08.30AM", Price: "3950"},
    {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 02.55 PM, Arrival: 04.05PM", Price: "3812"},
    ]
    },
    {
    from: "Trichy", to: "Bangalore",
    flight: [
    {flight_details: "Flight Name: Air-India , Flight No : AI 563 ,  Departure: 01.20 PM, Arrival: 02.25PM", Price: "2251"},
    {flight_details: "Flight Name: IndiGo , Flight No : 6E 806,  Departure: 07.40 PM,  Arrival: 08.45AM", Price: "2149"},
    {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 05.00 PM, Arrival: 05.55PM", Price: "1812"},
    {flight_details: "Flight Name: AirAsia , Flight No : I5 2345 ,  Departure: 08.40 AM, Arrival: 09.40PM", Price: "2459"},
    ]
    },
    {
    from: "Trichy", to: "Cochin",
    flight: [
    {flight_details: "Flight Name: Air-India , Flight No : AI 563 ,  Departure: 01.20 PM, Arrival: 02.25PM", Price: "2051"},
    {flight_details: "Flight Name: IndiGo , Flight No : 6E 806,  Departure: 07.40 PM,  Arrival: 08.45AM", Price: "2149"},
    {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 05.00 PM, Arrival: 05.55PM", Price: "1912"},
    {flight_details: "Flight Name: AirAsia , Flight No : I5 2345 ,  Departure: 08.40 AM, Arrival: 09.40PM", Price: "2659"},
    ]
    },
    {
    from: "Bangalore", to: "Chennai",
    flight: [
    {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 05.00 PM, Arrival: 05.55PM", Price: "1812"},
    {flight_details: "Flight Name: Air-India , Flight No : AI 563 ,  Departure: 01.20 PM, Arrival: 02.25PM", Price: "1751"},
    {flight_details: "Flight Name: IndiGo , Flight No : 6E 806,  Departure: 07.40 PM,  Arrival: 08.45PM", Price: "2149"},
    {flight_details: "Flight Name: AirAsia , Flight No : I5 2345 ,  Departure: 08.40 AM, Arrival: 09.40AM", Price: "2459"},
    ]
    },
    {
    from: "Bangalore", to: "Trichy",
    flight: [
    {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 05.00 PM, Arrival: 05.55PM", Price: "1812"},
    {flight_details: "Flight Name: Air-India , Flight No : AI 563 ,  Departure: 01.20 PM, Arrival: 02.25PM", Price: "2251"},
    {flight_details: "Flight Name: IndiGo , Flight No : 6E 806,  Departure: 07.40 PM,  Arrival: 08.45AM", Price: "2149"},
    {flight_details: "Flight Name: AirAsia , Flight No : I5 2345 ,  Departure: 08.40 AM, Arrival: 09.40PM", Price: "2459"},
    ]
    },
    {
    from: "Bangalore", to: "Cochin",
    flight: [
    {flight_details: "Flight Name: Air-India , Flight No : AI 563 ,  Departure: 01.20 PM, Arrival: 02.25PM", Price: "2751"},
    {flight_details: "Flight Name: IndiGo , Flight No : 6E 806,  Departure: 07.40 PM,  Arrival: 08.45AM", Price: "2549"},
    {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 05.00 PM, Arrival: 05.55PM", Price: "2812"},
    {flight_details: "Flight Name: AirAsia , Flight No : I5 2345 ,  Departure: 08.40 AM, Arrival: 09.40PM", Price: "2459"},
    ]
    },
    {
    from: "Cochin", to: "Chennai",
    flight: [
    {flight_details: "Flight Name: AirAsia , Flight No : I5 2015 ,  Departure: 12.40 PM, Arrival: 01.55PM", Price: "2859"},
    {flight_details: "Flight Name: Air-India , Flight No : AI 513 ,  Departure: 08.25 AM, Arrival: 09.35PM", Price: "2751"},
    {flight_details: "Flight Name: Spicejet , Flight No : SG 7345 ,  Departure: 09.10 PM, Arrival: 10.25PM", Price: "2812"},
    {flight_details: "Flight Name: IndiGo , Flight No : 6E 776,  Departure: 07.40 PM,  Arrival: 08.45PM", Price: "2949"}, 
    ]
    },
    {
    from: "Cochin",to: "Trichy",
    flight: [
    {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 05.00 PM, Arrival: 05.55PM", Price: "1912"},
    {flight_details: "Flight Name: Air-India , Flight No : AI 563 ,  Departure: 01.20 PM, Arrival: 02.25PM", Price: "2051"},
    {flight_details: "Flight Name: IndiGo , Flight No : 6E 806,  Departure: 07.40 PM,  Arrival: 08.45AM", Price: "2149"},
    {flight_details: "Flight Name: AirAsia , Flight No : I5 2345 ,  Departure: 08.40 AM, Arrival: 09.40PM", Price: "2659"},
    ]
    },
    {
    from: "Cochin", to: "Bangalore",
    flight: [
    {flight_details: "Flight Name: IndiGo , Flight No : 6E 806,  Departure: 07.40 PM,  Arrival: 08.45AM", Price: "2549"},
    {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 05.00 PM, Arrival: 05.55PM", Price: "2812"},
    {flight_details: "Flight Name: Air-India , Flight No : AI 563 ,  Departure: 01.20 PM, Arrival: 02.25PM", Price: "2751"},
    {flight_details: "Flight Name: AirAsia , Flight No : I5 2345 ,  Departure: 08.40 AM, Arrival: 09.40PM", Price: "2459"},
    ]
    },
    {
    from: "Chennai", to: "Singapore",
    flight: [
    {flight_details: "Flight Name: Air-Mail, Flight No : AIE 573 ,  Departure: 05.20 AM, Arrival: 12.25 PM", Price: "6662"},
    {flight_details: "Flight Name: Spicejet , Flight No : SG 529,  Departure: 11.40 PM,  Arrival: 05.45 AM", Price: "7549"},
    {flight_details: "Flight Name: Air-India , Flight No : AI 863 ,  Departure: 11.35 AM, Arrival: 06.05 PM", Price: "8512"},
    ]
   },
   {
    from: "Singapore", to: "Bangalore",
    flight: [
    {flight_details: "Flight Name: Air-Mail, Flight No : AIE 580 ,  Departure: 07.20 PM, Arrival: 02.25 AM", Price: "7562"},
    {flight_details: "Flight Name: Spicejet , Flight No : SG 5329,  Departure: 11.40 AM,  Arrival: 05.45 PM", Price: "7549"},
    {flight_details: "Flight Name: Air-India , Flight No : AI 753 ,  Departure: 11.35 AM, Arrival: 06.05 PM", Price: "8512"},
    ]
   }
]

localStorage.setItem("Database", JSON.stringify(Database));
Database = JSON.parse(localStorage.getItem("Database"));
console.log(typeof Database); 
console.log(Database);

function welcome() //To display the user name in the booking page
{
    var id=localStorage.getItem("user_id");
    var name=JSON.parse(window.localStorage.getItem("username"));
    var msg=document.getElementById("message").innerHTML;
    var message="Welcome";
    document.getElementById("message").innerHTML=msg+message+"<br>"+name[id]; 
}

function validate() //To validate the fields during flight search
{
    var g = document.getElementById("start");
    var strUser = g.options[g.selectedIndex].value;
    var h = document.getElementById("end");
    var strUser2 = h.options[h.selectedIndex].value;
    var p = document.getElementById("trip");
   	var strUser4 = p.options[p.selectedIndex].value;

    if(strUser==0 && strUser2==0)
    {
    alert("Please Enter the Journey Details");
    }
    else if(strUser2==0)
    {
	alert("Please select the Destination city");
    }
    else if(strUser4==0)
    {
    alert("Please select type of trip");
    }
    else if(document.getElementById("travel").value=="")
    {
    alert("Please enter the no.of.travellers");
    }
    else if(document.getElementById("travel").value<=0 || document.getElementById("travel").value>5)
    {
    alert("Please enter no.of.travellers between 1-5");
    }
    else if(document.getElementById("day1").value=="")
    {
    alert("Please enter the date");
    }
    else
    {
        if(window.localStorage["startcity"] !=null)
 
        start_city = JSON.parse(window.localStorage["startcity"]);
        start_city.push(document.getElementById("start").value);
        window.localStorage["startcity"] = JSON.stringify(start_city);

        if(window.localStorage["endcity"] !=null)
 
        end_city = JSON.parse(window.localStorage["endcity"]);
        end_city.push(document.getElementById("end").value);
        window.localStorage["endcity"] = JSON.stringify(end_city);

        if(window.localStorage["trip"] !=null)
 
        trip = JSON.parse(window.localStorage["triptype"]);
        trip.push(document.getElementById("trip").value);
        window.localStorage["triptype"] = JSON.stringify(trip);

        if(window.localStorage["traveller_count"] !=null)
 
        traveller = JSON.parse(window.localStorage["traveller_count"]);
        traveller.push(document.getElementById("travel").value);
        window.localStorage["traveller_count"] = JSON.stringify(traveller);

        if(window.localStorage["date"] !=null)
 
        date = JSON.parse(window.localStorage["date"]);
        date.push(document.getElementById("day1").value);
        window.localStorage["date"] = JSON.stringify(date);
        
        compare();
    }
}

function compare() // Compare user search request with local database
{
    var ff;
    var id=localStorage.getItem("user_id");
    key1 =  JSON.parse(window.localStorage.getItem("startcity"));
    console.log(key1)
    key2 = JSON.parse(window.localStorage.getItem("endcity"));
  
    for(var i=0;i<Database.length;i++)
    {
      if(key1[id]==Database[i].from && key2[id]==Database[i].to)
       {
        for(var j=0;j<Database[i].flight.length;j++)
        {
            var x = Database[i].flight[j].flight_details;
            var y = Database[i].flight[j].Price; 
            dd.push(x);
            window.localStorage["output"] = JSON.stringify(dd);
            pp.push(y);
            window.localStorage["output_price"]=JSON.stringify(pp);
        }
            console.log(dd);
            console.log(pp);
            alert("Searching Flights..."); 
            window.location.assign("../Source/redirect.html"); 
            ff=1;
            break;
       }
       else
       {
        ff=2;
       }
    }    
        if(ff==2)
        { 
        alert("Flights not available");
        var id=localStorage.getItem("user_id");
    
        var a = JSON.parse(localStorage.getItem("startcity"));
        a.splice(id, 1);
        start_city = JSON.stringify(a);
        localStorage.setItem("startcity", start_city);

        var b = JSON.parse(localStorage.getItem("endcity"));
        b.splice(id, 1);
        end_city = JSON.stringify(b);
        localStorage.setItem("endcity", end_city);

        var c = JSON.parse(localStorage.getItem("date"));
        c.splice(id, 1);
        date = JSON.stringify(c);
        localStorage.setItem("date", date);

        var d = JSON.parse(localStorage.getItem("triptype"));
        d.splice(id, 1);
        trip = JSON.stringify(d);
        localStorage.setItem("triptype",trip);

        var g = JSON.parse(localStorage.getItem("traveller_count"));
        g.splice(id, 1);
        traveller = JSON.stringify(g);
        localStorage.setItem("traveller_count",traveller);

        window.location.assign("../Source/index.html");
        ff=0;
        }
}

 function display() // Display the available flights for the user request
{ 
   carousel();
   disp = JSON.parse(window.localStorage.getItem("output"));
   disp1 = JSON.parse(window.localStorage.getItem("output_price"));
  for(i=0;i<disp.length;i++)
  {
    var html=document.getElementById("Result").innerHTML;
    document.getElementById("Result").innerHTML= html+"<br>"+ "<input type='radio' id='r' value='disp' name='radio[]'>"+"&nbsp"+disp[i]+' '+"Price:Rs. "+ disp1[i]+'<br>';
    console.log("<input type='radio' id='r' value='disp' name='radio[]'>"+disp[i]+' '+"<br>"+"Price: "+disp1[i]+'<br>');
  }
}

function carousel() //slideshow
{
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

function booking() 
{
  var flight=new Array();
  var flag=0;
  flight = document.getElementsByName("radio[]");
  for(var i=0;i<4;i++)
    {
        if (flight[i].checked == true) 
        {
        flag=1;
        alert("You have chosen a flight");
        console.log(disp[i]);
        if(window.localStorage["choice"] !=null)
        choice = JSON.parse(window.localStorage["choice"]); 
        choice.push(disp[i]);
        window.localStorage["choice"] = JSON.stringify(choice); //user choice stored in a array (flight details)
        
        if(window.localStorage["choiceprice"] !=null)
        choice_Price = JSON.parse(window.localStorage["choiceprice"]);
        choice_Price.push(disp1[i]);
        window.localStorage["choiceprice"] = JSON.stringify(choice_Price); //user choice stored in a array (flight price)

        window.location.assign("../Source/redirect1.html");
        }
    }   
    if (flag==0)
    {
        alert("Please select a flight");
    }          
}

function userchoice() //to review the booked flight details
{
    var id=localStorage.getItem("user_id");
    var space="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
    var l="<br>"
    var m="Date. of. Journey - "
    var n="No. of. Travellers - "
    var o="Total Fare - "
    a1=JSON.parse(window.localStorage.getItem("startcity"));
    a2=JSON.parse(window.localStorage.getItem("endcity"));
    a3=JSON.parse(window.localStorage.getItem("traveller_count"));
    a4=JSON.parse(window.localStorage.getItem("date"));
    a5=JSON.parse(window.localStorage.getItem("choice"));
    a6=JSON.parse(window.localStorage.getItem("choiceprice"));

    html2 = document.getElementById("Result1").innerHTML;
    table+="<table border ='1'><tr><th>From</th><th>To</th><th>Flight Details</th><th>Price</th></tr>";
    table+="<tr><td>" +a1[id]+ "</td>" +"<td>" + a2[id]+ "</td>" + "<td>"+ a5[id] +"</td>" + "<td>"+"Rs."+ a6[id] +"</td></tr></table>";
    document.getElementById("Result1").innerHTML= html2+l+table+l+m+a4[id]+l+l+n+a3[id]+l+l+o+a6[id]*a3[id];
}

function print_content()  //to get the traveller details
{
    window.location.assign("../Source/traveller.html");

    if((document.getElementById("name").value)=="")
    {
        alert("please enter the name");
    }
    else if(document.getElementById("email").value=="")
    {
        alert("please enter the mail id");
    }
    else if(document.getElementById("mobileno").value=="")
    {
        alert("please enter mobile.no");
    }
    else if(document.getElementById("gov_id").value=="")
    {
        alert("please enter Govt Id no");
    }
    else{
        if(window.localStorage["traveller_name"] !=null)
        trav_name = JSON.parse(window.localStorage["traveller_name"]);
        trav_name.push(document.getElementById("name").value);
        window.localStorage["traveller_name"] = JSON.stringify(trav_name);

        if(window.localStorage["traveller_email"] !=null)
        trav_email = JSON.parse(window.localStorage["traveller_email"]);
        trav_email .push(document.getElementById("email").value);
        window.localStorage["traveller_email"] = JSON.stringify(trav_email );
        
        if(window.localStorage["traveller_mob"] !=null)
        trav_num = JSON.parse(window.localStorage["traveller_mob"]);
        trav_num .push(document.getElementById("mobileno").value);
        window.localStorage["traveller_mob"] = JSON.stringify(trav_num );

        if(window.localStorage["traveller_gender"] !=null)
        trav_gender = JSON.parse(window.localStorage["traveller_gender"]);
        trav_gender .push(document.getElementById("gender").value);
        window.localStorage["traveller_gender"] = JSON.stringify(trav_gender );

        if(window.localStorage["govt_id"] !=null)
        govt_id = JSON.parse(window.localStorage["govt_id"]);
        govt_id .push(document.getElementById("gov_id").value);
        window.localStorage["govt_id"] = JSON.stringify(govt_id );
    
        window.location.assign("../Source/print.html");
        alert("Ticket Booked");

        var x = Math.floor((Math.random() * 1000) + 1); //to generate ticket id dynamically
        console.log(x);
        if(window.localStorage["ticket"] !=null)
            ticket_id = JSON.parse(window.localStorage["ticket"]);
            ticket_id.push(x);
            window.localStorage["ticket"] = JSON.stringify(ticket_id);
    }
}

function ticket()       //to print the ticket
{
     var id=localStorage.getItem("user_id");
     var space="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
     var space1="&nbsp&nbsp&nbsp&nbsp&nbsp";
     var l="<br>"
     var m="   Date. of. Journey : "

     var tid= JSON.parse(window.localStorage.getItem("ticket"));
     var b1=JSON.parse(window.localStorage.getItem("startcity"));
     var b2=JSON.parse(window.localStorage.getItem("endcity"));
     var b3=JSON.parse(window.localStorage.getItem("traveller_count"));
     var b4=JSON.parse(window.localStorage.getItem("date"));
     var b5=JSON.parse(window.localStorage.getItem('traveller_name'));
     var b6=JSON.parse(window.localStorage.getItem("choice"));
     var b7=JSON.parse(window.localStorage.getItem("choiceprice"));
    html3 = document.getElementById("Result2").innerHTML;
    
    document.getElementById("Result2").innerHTML= html3+"Ticket-Id : "+tid[id]+space+space+"From : "+b1[id]+space+space+"To : "+b2[id]+space+space+"Name : "+b5[id]+l+l+"Class : Economy"+space+space1+m+b4[id]+l+l+"Flight Details - "+b6[id]+l+l+"No. of. Travellers : "+b3[id]+l+l+"Price : "+b3[id]*b7[id];
}   

function update() //to edit trip selection
{   
    var id=localStorage.getItem("user_id");
    
    var a = JSON.parse(localStorage.getItem("startcity"));
    a.splice(id, 1);
    start_city = JSON.stringify(a);
    localStorage.setItem("startcity", start_city);

    var b = JSON.parse(localStorage.getItem("endcity"));
    b.splice(id, 1);
    end_city = JSON.stringify(b);
    localStorage.setItem("endcity", end_city);

    var c = JSON.parse(localStorage.getItem("date"));
    c.splice(id, 1);
    date = JSON.stringify(c);
    localStorage.setItem("date", date);

    var d = JSON.parse(localStorage.getItem("triptype"));
    d.splice(id, 1);
    trip = JSON.stringify(d);
    localStorage.setItem("triptype",trip);

    var e = JSON.parse(localStorage.getItem("choice"));
    e.splice(id, 1);
    choice = JSON.stringify(e);
    localStorage.setItem("choice",choice);

    var f = JSON.parse(localStorage.getItem("choiceprice"));
    f.splice(id, 1);
    choice_price = JSON.stringify(f);
    localStorage.setItem("choiceprice",choice_price);

    var g = JSON.parse(localStorage.getItem("traveller_count"));
    g.splice(id, 1);
    traveller = JSON.stringify(g);
    localStorage.setItem("traveller_count",traveller);

    window.location.assign("../Source/index.html");
}

function Deletefn() //to delete the planned trip 
{
    var id=localStorage.getItem("user_id");
    
    var a = JSON.parse(localStorage.getItem("startcity"));
    a.splice(id, 1);
    start_city = JSON.stringify(a);
    localStorage.setItem("startcity", start_city);

    var b = JSON.parse(localStorage.getItem("endcity"));
    b.splice(id, 1);
    end_city = JSON.stringify(b);
    localStorage.setItem("endcity", end_city);

    var c = JSON.parse(localStorage.getItem("date"));
    c.splice(id, 1);
    date = JSON.stringify(c);
    localStorage.setItem("date", date);

    var d = JSON.parse(localStorage.getItem("triptype"));
    d.splice(id, 1);
    trip = JSON.stringify(d);
    localStorage.setItem("triptype",trip);

    var e = JSON.parse(localStorage.getItem("choice"));
    e.splice(id, 1);
    choice = JSON.stringify(e);
    localStorage.setItem("choice",choice);

    var f = JSON.parse(localStorage.getItem("choiceprice"));
    f.splice(id, 1);
    choice_price = JSON.stringify(f);
    localStorage.setItem("choiceprice",choice_price);

    var g = JSON.parse(localStorage.getItem("traveller_count"));
    g.splice(id, 1);
    traveller = JSON.stringify(g);
    localStorage.setItem("traveller_count",traveller);

    var h = JSON.parse(localStorage.getItem("traveller_name"));
    h.splice(id,1);
    trav_name = JSON.stringify(h);
    localStorage.setItem("traveller_name",trav_name);

    var i = JSON.parse(localStorage.getItem("traveller_email"));
    i.splice(id,1);
    trav_email = JSON.stringify(i);
    localStorage.setItem("traveller_email",trav_email);

    var j = JSON.parse(localStorage.getItem("traveller_mob"));
    j.splice(id,1);
    trav_num = JSON.stringify(j);
    localStorage.setItem("traveller_mob",trav_num);

    var k = JSON.parse(localStorage.getItem("traveller_gender"));
    k.splice(id,1);
    trav_gender = JSON.stringify(k);
    localStorage.setItem("traveller_gender",trav_gender);

    var l = JSON.parse(localStorage.getItem("ticket"));
    l.splice(id,1);
    ticket_id = JSON.stringify(l);
    localStorage.setItem("ticket",ticket_id);

    var m = JSON.parse(localStorage.getItem("govt_id"));
    m.splice(id, 1);
    traveller = JSON.stringify(m);
    localStorage.setItem("govt_id",govt_id);

    alert("Your ticket has been deleted")

    window.location.assign("../Source/index.html");
}




 
    



