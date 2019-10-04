//if hits left wall, : left turns right, right turns left 
//if hits right wall, left turns right, right turns left
//if hits floor, down turns up, direction stays
//if hits ceil, up turns down, direction stays          --essentially invert varible based on wall, if(floor||ceil)(direction=!direction)

//if hits corner -- reset ball 


let x_axis = 3;
let y_axis = 1;
led.toggle(x_axis, y_axis);
//neighboring values of direction indicate left or right
let direction = true;
//1=up
//0=down
let left_right = false;
//1=left
//0=right



//check, then increment. 
for (; ;) {
    //console.log("cycle")
    //console.log(""+x_axis);
    //console.log(""+y_axis);


    basic.pause(200)
    if (y_axis == 0) { direction = (!direction) };
    if (y_axis == 4) { direction = (!direction) };

    if (x_axis == 0) { left_right = (!left_right) };
    if (x_axis == 4) { left_right = (!left_right) };

    //upwards left
    if (direction == true && left_right == true) {

        led.toggle(x_axis, y_axis);
        y_axis += 1;
        x_axis -= 1;
        led.toggle(x_axis, y_axis);
        console.log("up_left")
    }

    //upwards right
    if (direction == true && left_right == false) {

        led.toggle(x_axis, y_axis);
        y_axis += 1;
        x_axis += 1;
        led.toggle(x_axis, y_axis);

        console.log("up_right")
    }


    //Downwards left
    if (direction == false && left_right == true) {


        led.toggle(x_axis, y_axis);
        y_axis -= 1;
        x_axis -= 1;
        led.toggle(x_axis, y_axis);

        console.log("down_left")

    }
    //Downwards right
    if (direction == false && left_right == false) {


        led.toggle(x_axis, y_axis);
        y_axis -= 1;
        x_axis += 1;
        led.toggle(x_axis, y_axis);
        console.log("down_right")

    }


    //console.log(""+direction)
    //console.log(""+left_right)




}





