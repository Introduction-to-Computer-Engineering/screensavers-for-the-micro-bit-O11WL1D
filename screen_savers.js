//if hits left wall, : left turns right, right turns left 
//if hits right wall, left turns right, right turns left
//if hits floor, down turns up, direction stays
//if hits ceil, up turns down, direction stays          --essentially invert varible based on wall, if(floor||ceil)(direction=!direction)

//if hits corner -- reset ball 


let x_axis = 3;
let y_axis = 1;

//neighboring values of direction indicate left or right
let direction = true;
//1=up
//0=down
let left_right = false;
//1=left
//0=right


let toggle = 2;
let rows = [-1, -1, -1, -1, -1];
//each row value specifys the position of a droplet

let selecTT;
let rain_x = 0;
let rain_y = 0;
if (toggle == 1) { led.toggle(x_axis, y_axis); }


let counter = 0;
let x_x = -1;
let y_y = 0;


//check, then increment. 
for (; ;) {






    if (toggle == 0) {
        basic.pause(1200)

        //randomly select row to add rain drops, the outer sides are kept free of rain

        selecTT = Math.randomRange(1, 3);
        if (rows[selecTT - 1] == -1 && rows[selecTT + 1] == -1) { rows[selecTT] = 0; }


        //for (let x = 0; x < 4; x++) {






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



    //multiples of screen_saver
    if (toggle == 2) {

        counter += 1
        for (let g = 1; g < 25; g++) {
            basic.pause(1200)
            if (x_x != 4) { x_x += 1 } else {
                x_x = 0;

                if (y_y != 4) { y_y += 1 } else { y_y = 0 }

            }
            console.log("x_val");
            console.log("" + x_x)
            console.log("y val")
            console.log("" + y_y);
            console.log("----------------count----------------")
            console.log("" + g)




            if ((counter % g) > 0) { led.unplot(0, 0) }
        }



    }



}


