//if hits left wall, : left turns right, right turns left 
//if hits right wall, left turns right, right turns left
//if hits floor, down turns up, direction stays
//if hits ceil, up turns down, direction stays



let x_axis;
let y_axis;
//neighboring values of direction indicate left or right
let direction=0;
let left_right=0; 


//define protocals for left/right ascent and descent
function travel() {
	//upwards left
    if(direction==1 && left_right==1){}
    //upwards right
	if(direction==1 && left_right==0){}
   	
led.toggle(x_axis,y_axis);
} 


