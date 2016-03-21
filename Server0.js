#!/usr/bin/env node
var WebSocketServer = require('websocket').server;
var http = require('http');
//var io = require('socket.io');

var clients = [];
 var temp =  {};
var t = false;
var draw_ = false;
var drew_ = false;
var shuffle = false;
var countdown = 10;  
var cards = ["diamond","heart","club","spade"];
var Player_score = 0;
var Banker_score = 0;
var draws_ = 0;
var p1 = 0 ;
var p2 = 0 ;
var p3 = 0 ;
var b1 = 0 ;
var b2 = 0 ;
var b3 = 0 ;
var tot1 = 0;
var tot2 = 0;
var get_ = true;
var tim = false;
var interval = 0;

var game_num = 1;	
var game_ = "DB" + game_num;	
var temp_amount = {amount:0};
var id;

var card_face=[];
var card_value=[];

var g = 0;
var cards_drew={};
var won={};
var won_ = false;
var win_counter= [0,0,0,0,0,0,0];
var cards_drew_={};
var won_all={};
var cards_drew_a={};

var b_0=[];
var b_1=[];
var b_2=[];
var b_3=[];
var b_4=[];
var b_5=[];
var b_6=[];
var b_7=[];
var b_8=[];
var b_9=[];

var b_tot=[];

var event_text = "欢迎 The quick brown fox jumps over the lazy dog";
var info_text = ["","GT钻石厅","百家乐1","","+639166676111",""];
var money_info_text = ["1 - 100, 000","1 - 100, 000","1 - 12, 500","1 - 9, 090","1 - 9, 090", "1 - 188, 679", "1 - 66, 666","1 - 20, 000","1 - 4, 000","1 - 85, 025"];
var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();

});
server.listen(8010, function() {
    console.log((new Date()) + ' Server is listening on port 8010');
});
 

wsServer = new WebSocketServer({
    httpServer: server,
    // You should not use autoAcceptConnections for production 
    // applications, as it defeats all standard cross-origin protection 
    // facilities built into the protocol and the browser.  You should 
    // *always* verify the connection's origin and decide whether or not 
    // to accept it. 
    autoAcceptConnections: false
});
 
function originIsAllowed(origin) {
  // put logic here to detect whether the specified origin is allowed. 
  return true;
}
   var count = 0;
var clients = {};
var clients_data = {};
var clients_data_bet = {};
var total_bets = {};

 b_0[count]= 0;
 b_1[count]= 0;
 b_2[count]= 0;
 b_3[count]= 0;
 b_4[count]= 0;
 b_5[count]= 0;
 b_6[count]= 0;
 b_7[count]= 0;
 b_8[count]= 0;
 b_9[count]= 0;

 b_tot[count]= 0;
 
wsServer.on('request', function(request) {
  

    if (!originIsAllowed(request.origin)) {
      // Make sure we only accept requests from an allowed origin 
      request.reject();
      console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
      return;
    }
    
    var connection = request.accept('echo-protocol', request.origin);

	

// Specific id for this client & increment count
id = count++;
// Store the connection method so we can loop through & contact all clients
clients[id] = connection;
clients_data[id] = {server:2,function_:"Account",ID:id,amount: 2000};
clients_data_bet[id] = {server:2,function_:"Account_bet",ID:id,total_bet:0,bet:{ 0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0}};
info_text[0] = "Player"+id;
temp_amount[id] = {amount:0};
 console.log((new Date()) + ' Connection accepted [' + id + ']');
  
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
 var p =  {};
p = JSON.parse(message.utf8Data);
for(var u = 0 ;u <count;u++){
if(p.function_ == "Bet" && p.ID == u){
 b_0[p.ID]= Number(p.bet[0]);
 b_1[p.ID]= Number(p.bet[1]);
 b_2[p.ID]= Number(p.bet[2]);
 b_3[p.ID]= Number(p.bet[3]);
 b_4[p.ID]= Number(p.bet[4]);
 b_5[p.ID]= Number(p.bet[5]);
 b_6[p.ID]= Number(p.bet[6]);
 b_7[p.ID]= Number(p.bet[7]);
 b_8[p.ID]= Number(p.bet[8]);
 b_9[p.ID]= Number(p.bet[9]);

 b_tot[p.ID]= Number(p.total_bet);
 console.log({server:2,function_:"Bet",ID:p.ID,total_bet:b_tot[p.ID],bet:{ 0:b_0[p.ID],1:b_1[p.ID],2:b_2[p.ID],3:b_3[p.ID],4:b_4[p.ID],5:b_5[p.ID],6:b_6[p.ID],7:b_7[p.ID],8:b_8[p.ID],9:b_9[p.ID]}});
clients_data_bet[p.ID] = {server:2,function_:"Bet",ID:p.ID,total_bet:b_tot[p.ID],bet:{ 0:b_0[p.ID],1:b_1[p.ID],2:b_2[p.ID],3:b_3[p.ID],4:b_4[p.ID],5:b_5[p.ID],6:b_6[p.ID],7:b_7[p.ID],8:b_8[p.ID],9:b_9[p.ID]}};
//{server:2,function_:"Account_bet",ID:id,total_bet:0,bet:{ 0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0}};
temp_amount[p.ID].amount +=  b_tot[p.ID];

p.bet[0]= 0 ;
p.bet[1]= 0 ;
p.bet[2]= 0 ;
p.bet[3]= 0 ;
p.bet[4]= 0 ;
p.bet[5]= 0 ;
p.bet[6]= 0 ;
p.bet[7]= 0 ;
p.bet[8]= 0 ;
p.bet[9]= 0 ;

p.total_bet= 0 ;
}
}

if(p.Server == "Connect"){
	clients[id].sendUTF(JSON.stringify(clients_data[id]));	
	//clients[id].sendUTF(JSON.stringify(clients_data_bet[id]));
	clients[id].sendUTF(JSON.stringify({server:2,function_:"Win_counter",win_count:win_counter}));	
	clients[id].sendUTF(JSON.stringify({server:2,function_:"Big_road",won_count: game_num,won_all}));
	clients[id].sendUTF(JSON.stringify({server:2,function_:"Info",info_text:info_text,event_text:event_text,money_info_text:money_info_text}));

	if(t){
clients[id].sendUTF(JSON.stringify(temp));
}else{
   	clients[id].sendUTF(JSON.stringify({server:2,function_:"Bet",Game:game_,bet:{ 0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0}}));
}
clients[id].sendUTF(JSON.stringify({server:2,function_:"Countdown",countdown:countdown,status:draw_}));
	if(drew_ && draws_ !=0){
		clients[id].sendUTF(JSON.stringify({server:2,function_:"Drew",draw:draws_,cards_drew}));
		drew_ = false;
	}
		if(won_){
			clients[id].sendUTF(JSON.stringify(won));
			won_ = false;
		}
}
else{
t = true;
temp = JSON.parse(message.utf8Data);

 for(var i in clients){
            	console.log('Received Message: ' + message.utf8Data);
 clients[i].sendUTF(message.utf8Data);
 	 
}}
        }


        else if (message.type === 'binary') {
 for(var i in clients){
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
           clients[i].sendBytes(message.binaryData);
        }}
    });
	
	

    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});
	 
	setInterval(function() {  

  if(countdown == 0){
	  draw_ = true;
	   countdown = 10;
	   for(var i in clients){
    	clients[i].sendUTF(JSON.stringify({server:2,function_:"Countdown",countdown:countdown,status:draw_}));
   }
	}
	
	if(draw_ && get_){
		game();
		draws_++;
			drew_ = true;
	}

	 if(tim){
if(!shuffle){
	for(var i in clients){
    	clients[i].sendUTF(JSON.stringify({server:2,function_:"Interval",count:interval}));
		 b_0[i]= 0;
 b_1[i]= 0;
 b_2[i]= 0;
 b_3[i]= 0;
 b_4[i]= 0;
 b_5[i]= 0;
 b_6[i]= 0;
 b_7[i]= 0;
 b_8[i]= 0;
 b_9[i]= 0;

 b_tot[i]= 0;
   }
		 interval++;
		 if(interval == 8){
				draw_ = false;
				get_= true;
				 cards_drew = {};
				 won_ = false;
				 won = {};
				  draws_ = 0;
				    interval = 0;	
					
				
			if(game_num == 5 ){
				game_num =1;
				shuffle = true;
			}
game_ = "DB" + game_num;
temp = {server:2,function_:"Bet",Game:game_,bet:{ 0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0}};
 for(var i in clients){
    	clients[i].sendUTF(JSON.stringify({server:2,function_:"Bet",Game:game_,bet:{ 0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0}}));
   }					
	
		 
}
}
if(shuffle){
		 for(var i in clients){
						  clients[i].sendUTF(JSON.stringify({server:2,function_:"Shuffle"}));
					  }
					  g++;
					  
					  		if(g == 5){
shuffle = false;			
			game_num =1;
					  cards_drew_={};
						won_all={};
						win_counter= [0,0,0,0,0,0,0];
						g = 0;
						for(var i in clients){
    	clients[i].sendUTF(JSON.stringify({server:2,function_:"Win_counter",win_count:win_counter}));
		clients[i].sendUTF(JSON.stringify({server:2,function_:"Reset"}));
		}
		
	}
		 }
				  
			
					
		
				  
				
		 
	 }
	
	if(!draw_ && interval == 0 && !shuffle){
 countdown--;
	  tim = false;
   for(var i in clients){
    	clients[i].sendUTF(JSON.stringify({server:2,function_:"Countdown",countdown:countdown,status:draw_}));
   }
	}
	}, 1000);

function game(){
	var drawing; 
	var a ; 
	var b ;
	var c ;
	var f = false;
var g = false;
	a= cards[randomIntFromInterval(0,3)];
	b =randomIntFromInterval(1,13);
	c = b;
	if(b >=10 && b<=13){
		c = 0;
	}
	if(draws_ == 0){
		drawing = "Player";
		p1 = c;
		tot1 = p1;
		card_face.push(a);
	card_value.push(b);
	}
	else if(draws_ == 1){
		drawing = "Banker";
			b1 = c;
			tot2 = b1;
			card_face.push(a);
	card_value.push(b);
	}
	else if(draws_ == 2){
		drawing = "Player";
			p2 = c;
			tot1 += p2;
			card_face.push(a);
	card_value.push(b);
	}
	else if(draws_ == 3){
		drawing = "Banker";
			b2 = c;
				tot2 += b2;
				g = true;
	card_face.push(a);
	card_value.push(b);
}
else{}
	
if(g){
	if(tot1 >9){
		tot1 -= 10;
	}
	if(tot2 >9){
		tot2 -= 10;
	}
	if(tot1 == 9 && tot2 == 9  || tot1 == 8 && tot1 == 8 ){
	
		f = true;
	}
	else if(tot1 == 9  || tot1 == 8 ){
	
		f = true;
	}
	else if (tot2 == 9 || tot2 == 8 ){
		
		f = true;
	}
	
	else{
	if(tot1 >=6 && tot1<=7 && tot2 >=6 && tot2<=7 ){
		f = true;
	}
}
}
	
	if(draws_ == 4){
		if(tot1 >=0 && tot1 <= 5 && tot2 != 8 && tot2 != 9){
		drawing = "Player";
		p3 = c;
		tot1 += p3;
		}
		if(tot1 == 6 || tot1 == 7){
			if( tot2 >=0 && tot2 <= 5){
		drawing = "Banker";
		b3 = c;
		tot2 += b3;
		f = true;
			}
	}
 if(tot2 == 6 || tot2 == 7){
		f = true;
	}
	
		
	
	}
	if(draws_ == 5 ){
		drawing = "Banker";
		if(p3 == 9  && tot2 >=0 && tot2 <=3 || p3 == 1 && tot2 >=0 && tot2 <=3|| p3 == 0 && tot2 >=0 && tot2 <=3){
				b3 = c;
				tot2 += b3;
		}
		else if(p3 == 8 && tot2 >= 0 && tot2 <= 2){
				b3 = c;
				tot2 += b3;
		}
		else if (p3 == 6 && tot2 >=0 && tot2 <=6 || p3 == 7 && tot2 >=0 && tot2 <=6){
				b3 = c;
				tot2 += b3;
		}
		else if(p3 == 4 && tot2 >=0 && tot2 <=5 || p3 == 5 && tot2 >=0 && tot2 <=5){
				b3 = c;
				tot2 += b3;
		}
		else if (p3 == 2 && tot2 >=0 && tot2 <=4 || p3 == 3 && tot2 >=0 && tot2 <=4){
				b3 = c;
				tot2 += b3;
		}
		else{
			f = true;
		}
		f = true;
	}

	
	
	for(var i in clients){
    	clients[i].sendUTF(JSON.stringify({server:2,function_:"Draw",draws:drawing,card:a,card_value:b,draw: draws_}));
   }
   cards_drew[draws_] = {server:2,function_:"Drew",draws:drawing,card:a,card_value:b,draw: draws_}; 
	//cards_drew = {server:2,function_:"Drew",draws:drawing,card:a,card_value:b,draw: draws_,Game:game_};
	if(f ||draws_ == 5){
		if(tot1 >9){
		tot1 -= 10;
	}
	if(tot2 >9){
		tot2 -= 10;
	}
		calc(tot1,tot2);
		f = false;
	}
}
function calc(o,p){
	var win =[];
	var win_num=0;
	console.log(o,p);
	if(o == 9 && p == 9){
		win.push("Tie");
		win_num = o;
	}
	else if( o == 8 && p == 8 ){
		win.push("Tie");
		win_num = o;
	}
	else if(o == 9 ){
		win.push("Player");
		win_num = o;
	}
	else if( o == 8){
		win.push("Player");
		win_num = o;
	}
	else if(p == 9){
		win.push("Banker");
		win_num = p;
	}
	else if(p == 8){
		win.push("Banker");
		win_num = p;
	}
	else{
		if( o == p){
				win.push("Tie");
				win_num = o;
		}
		else if(o>p){
			win.push("Player");
			win_num = o;
		}
		else if (o<p){
				win.push("Banker");
				win_num = p;
		}
		
	else{
	}
	}
	if( card_value[0] == card_value[2]  ||  card_value[1] == card_value[3]){
		win.push("Either-Pair");
	}
	if( card_value[0] == card_value[2]){
		win.push("Player-Pair");
	}
	if( card_value[1] == card_value[3]){
		win.push("Banker-Pair");
	}
	if(card_face[0] == card_face[2] && card_value[0] == card_value[2] || card_face[1] == card_face[3] && card_value[1] == card_value[3]){
		win.push("Perfect-Pair");
	}
	if(((tot1 + tot2)%10)==4){
		win.push("Small");
	}
	if(((tot1 + tot2)%10)==5 ||((tot1 + tot2)%10)==6){
		win.push("Big");
	}
	if(tot2 == 6 && tot1 <6){
		win.push("Super 6");
	}
	console.log(win);
	bets(win);
	 
	
	for(var i in clients){
    	clients[i].sendUTF(JSON.stringify({server:2,function_:"Win",Game:game_,win:win,win_num:win_num,draws:draws_,cards:cards_drew}));
   }
   won = {server:2,function_:"Won",win:win,win_num:win_num};
   won_ = true;
	cards_drew_ =cards_drew;
   won_all[game_num]= {Game:game_,win:win,win_num:win_num,draws:draws_,cards:cards_drew_};
   clear();

}
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
function bets(win){
	var i=["Either-Pair","Big","Player-Pair","Player","Tie","Super 6","Banker","Banker-Pair","Small","Perfect-Pair"];
	var u=[5,0.53,11,1,8,12,1,11,1.5,1.25];
	

		for( o = 0 ; o <= id;o++){
			if(temp_amount[o].amount !=0){
			clients_data[o].amount -= temp_amount[o].amount;
			temp_amount[o].amount = 0;
			
		for(p = 0 ; p < i.length; p++){
			
			for(l = 0 ; l <win.length;l++){
			
			if(win[l] == i[p]){
			if(clients_data_bet[o].bet[p]!=0){
			
			temp_amount[o].amount += clients_data_bet[o].bet[p] + (clients_data_bet[o].bet[p] * u[p]);
	
			}
				
			}
		
			}
			clients_data_bet[o].bet[p] = 0;
		}
		
		clients[o].sendUTF(JSON.stringify({server:2,function_:"Account",ID:o,amount:clients_data[o].amount+temp_amount[o].amount}));
		clients_data[o].amount = clients_data[o].amount+temp_amount[o].amount;
		temp_amount[o].amount = 0;
			}
		
		}

		for(p = 0 ; p < i.length; p++){
			
			for(l = 0 ; l <win.length;l++){
			if(win[l] == i[p]){
				
			if(i[p] == "Big"){
			win_counter[0] += 1; 
			}
			if(i[p] == "Player-Pair"){
			win_counter[1] += 1; 
			}
		 if(i[p] == "Player"){
			win_counter[2] += 1; 
			}
			if(i[p] == "Tie"){
			win_counter[3] += 1; 
			}
		 if(i[p] == "Banker"){
			win_counter[4] += 1; 
			}
				 if(i[p] == "Banker-Pair"){
			win_counter[5] += 1; 
			}
				 if(i[p] == "Small"){
			win_counter[6] += 1; 
			}
		
			}
			}
		}
		for(var i in clients){
    	clients[i].sendUTF(JSON.stringify({server:2,function_:"Win_counter",win_count:win_counter}));
		}
	
	
}
function clear(){
	
		card_face = [];
	card_value = [];
	
		get_ = false;
		p1 = 0;
		p2 = 0;
		p3 = 0;
		b1 = 0;
		b2 = 0;
		b3 = 0;
		tot1 = 0;
		tot2 = 0;
		Player_score = 0;
Banker_score = 0;
game_num++;
win = [];
tim = true;
interval = 0;

	
  	
}