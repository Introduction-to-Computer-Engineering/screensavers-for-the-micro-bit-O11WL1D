//if hits left wall, : left turns right, right turns left 
//if hits right wall, left turns right, right turns left
//if hits floor, down turns up, direction stays
//if hits ceil, up turns down, direction stays          --essentially invert varible based on wall, if(floor||ceil)(direction=!direction)

//if hits corner -- reset ball 

let selection = [-1, 5];
let x_axis = 3;
let y_axis = 1;

//neighboring values of direction indicate left or right
let direction = true;
//1=up
//0=down
let left_right = false;
//1=left
//0=right


let toggle = 4;
let rows = [-1, -1, -1, -1, -1];
//each row value specifys the position of a droplet

let selecTT;
let rain_x = 0;
let rain_y = 0;
if (toggle == 1) { led.toggle(x_axis, y_axis); }


let counter = 0;
let x_x = -1;
let y_y = 0;

let rand_x = -2
let rand_y = -2

let quad = 3;

let counterr = 0;
let led_list = [25]
let xI = 0;


//check, then increment. 
for (; ;) {






    if (toggle == 0) {
        basic.pause(1200)

        //randomly select row to add rain drops, the outer sides are kept free of rain

        selecTT = Math.randomRange(1, 3);
        if (rows[selecTT - 1] == -1 && rows[selecTT + 1] == -1) { rows[selecTT] = 0; }


        //for (let x = 0; x < 4; x++) {






    }






    //bouncing ball screen saver 
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

        console.log("-------------Selected number")
        console.log("" + counter)

        for (let g = 1; g < 26; g++) {
            basic.pause(100)
            if (x_x != 4) { x_x += 1 } else {
                x_x = 0;

                if (y_y != 4) { y_y += 1 } else { y_y = 0 }


            }

            //console.log("----------------count----------------")
            //console.log("" + g)

            //console.log("x_val");
            //console.log("" + x_x)
            //console.log("y val")
            //console.log("" + y_y);



            if ((counter % g) > 0) { led.unplot(x_x, y_y) } else { led.plot(x_x, y_y); console.log("multiple"); console.log("" + g) };
        }



    }



    //random line generator screen_saver 
    if (toggle == 3) {


        rand_y = selection[Math.randomRange(0, 1)]
        if (rand_y == -1) { direction = true } else { direction = false }
        rand_x = Math.randomRange(-2, 5)
        left_right = !left_right

        for (let x = 0; x < 2; x++) {

            x_axis = rand_x;
            y_axis = rand_y;


            for (let i = 0; i < 5; i++) {
                basic.pause(50)








                //upwards left
                if (direction == true && left_right == true) {



                    y_axis += 1;
                    x_axis -= 1;
                    led.toggle(x_axis, y_axis);
                    console.log("up_left")
                }

                //upwards right
                if (direction == true && left_right == false) {


                    y_axis += 1;
                    x_axis += 1;
                    led.toggle(x_axis, y_axis);

                    console.log("up_right")
                }


                //Downwards left
                if (direction == false && left_right == true) {



                    y_axis -= 1;
                    x_axis -= 1;
                    led.toggle(x_axis, y_axis);

                    console.log("down_left")

                }
                //Downwards right
                if (direction == false && left_right == false) {



                    y_axis -= 1;
                    x_axis += 1;
                    led.toggle(x_axis, y_axis);
                    console.log("down_right")

                }
            }
        }


    }



    if (toggle == 4) {

        //basic.pause(100)



        counterr += 1
        //console.log("" + counterr)
        if (counterr == 800) {
            xI += 1; quad = Math.randomRange(1, 4); counterr = 0

            if (quad == 1) { led.unplot(0, 0); led.unplot(1, 0); led.unplot(0, 1); led.unplot(1, 1); led_list[(0 * 5) + 0] = xI; led_list[(0 * 5) + 1] = xI; led_list[(1 * 5) + 0] = xI; led_list[(1 * 5) + 1] = xI; }
            if (quad == 2) { led.unplot(3, 0); led.unplot(4, 0); led.unplot(3, 1); led.unplot(4, 1); led_list[3 + (0 * 5)] = xI; led_list[4 + (0 * 5)] = xI; led_list[3 + (1 * 5)] = xI; led_list[4 + (1 * 5)] = xI; }
            if (quad == 3) { led.unplot(0, 3); led.unplot(1, 3); led.unplot(0, 4); led.unplot(1, 4); led_list[0 + (3 * 5)] = xI; led_list[1 + (3 * 5)] = xI; led_list[0 + (4 * 5)] = xI; led_list[1 + (4 * 5)] = xI; }
            if (quad == 4) { led.unplot(3, 3); led.unplot(4, 3); led.unplot(3, 4); led.unplot(4, 4); led_list[3 + (3 * 5)] = xI; led_list[4 + (3 * 5)] = xI; led_list[3 + (4 * 5)] = xI; led_list[4 + (4 * 5)] = xI; }



        }
        //quad = 4 //Math.randomRange(1, 4); 
        console.log("" + xI)

        x_x = Math.randomRange(0, 4)
        y_y = Math.randomRange(0, 4)
        //console.log("" + led_list[x_ + (y_y * 5)]);
        if (led_list[x_x + (y_y * 5)] != xI) { led.toggle(x_x, y_y) }
    }


}






