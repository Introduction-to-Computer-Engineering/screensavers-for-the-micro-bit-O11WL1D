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
let toggle = 0;
let rows = [5];
let posi = [5];

for (let x = 0; x < 5; x++) {
    posi[x] = 5;

}

let selecTT;



//check, then increment. 
for (; ;) {






    if (toggle == 0) {
        basic.pause(1200)
        //randomly select row to add rain drops, the outer sides are kept free of rain 
        selecTT = Math.randomRange(0, 5);
        if (selecTT != 0 && selecTT != 4) {

            if (rows[selecTT - 1] == 0 && rows[selecTT + 1] == 0) { rows[selecTT] = 1 }
        }



        for (let i = 0; i < 5; i++) {
            if (rows[i] == 1) { led.toggle(i, posi[i]); posi[i] -= 1; led.toggle(i, posi[i]) }

        }



    }


}


if (toggle == 1) {
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








