//This is the timerCode page
// file creator: James Tramel 
//email jamesltramel@gmail.com


//Creating a start function
function start() {
    // I updated my start function and stop function to handle my data on a timed interval
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;

    document.getElementById("stopButton").disabled = false;

}


//creating a stop function
function stop() {
    clearInterval(timer);
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}



//dom req
// We use this function to return the loadData when the function is called. We have to make a var to store the data in to be loaded
function getData() {
    var loadedData = loadData();
    return loadedData;
}

//this function sets up our row data giving it three values for modification in our HTML

function dataRow(legend, value, units) {
    msg = "<td>";
    msg += legend;
    msg += ": </td> <td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}




// Same function as version 2 with change order update the halfway point

function countDown3() { //set our var. starting position
    var count = 10;

    for (var i = 0; i <= 10; i++) { // iteration... I understand now

        if (i <= 4) {
            // as long as the iteration is less than or equal to 4 run the count down by 1 each step
            setTimeout(function() {
                //setting the timeout function refrencing 'countDownTimer' ID to go down 1 each second
                document.getElementById("countDownTimer").innerHTML = count;
                count--;
            }, 1000 * i);

        }
        // when the iteration greater than 4 less but not equal to 10 print out "Warning Less than ½ way to launch, time left + the current count down by 1 each step
        else if (i > 4 && i != 10) {
            setTimeout(function() {
                //setting the timeout function refrencing 'countDownTimer' ID to go down 1 each second
                document.getElementById("countDownTimer").innerHTML = "Warning Less than ½ way to launch, time left = " + count;
                count--;
            }, 1000 * i);
        }
        //when the count reaches the end "blast off"
        else {
            setTimeout(function() {
                //setting the timeout function refrencing 'countDownTimer' ID to go down 1 each second
                document.getElementById("countDownTimer").innerHTML = "Blast Off!!";
                count--;
            }, 1000 * i);


        }

    }
}



//our v2 countdown, more efficient
function countDown2() { //set our var. starting position
    var count = 10;
    for (var i = 1; i <= 10; i++) { // iteration... I understand now
        setTimeout(function() {
            document.getElementById("countDownTimer").innerHTML = count;
            count--;
        }, 1000 * i);

    } //setting the seconds for our timer cut in and cut out
    setTimeout(function() {
        document.getElementById("countDownTimer").innerHTML = "Blast Off!!";
        count--;
    }, 11000);

}
// When forming a class the name must be capitalized
//we need this class or block of memory set aside to handle our data. The class is a description or defines the class

class InputData {
    // The constructor is similar to a struct a 'Method' that runs automatically when an object or 'instance' of the class is created. In JavaScript constructor is required in order to set all of our properties or 'attributes'
    constructor(
            time_seconds,
            latitude,
            longitude,
            gps_altitude,
            bmpSensor_altitude,
            bmpSensor_pressure,
            bmpSensor_temp,
            digSensor_temp,
            cssSensor_temp,
            cssSensor_ec02,
            cssSensor_tvoc,
            uv,
            accel_x,
            accel_y,
            accel_z,
            magnetic_x,
            magnetic_y,
            magnetic_z,
            gyro_x,
            gyro_y,
            gyro_z,
        )
        // In order to use these constructors we have to now define them...'this.' is used to substantiate...or activate our constructors
        {
            this.time_seconds = time_seconds;
            this.latitude = latitude;
            this.longitude = longitude;
            this.gps_altitude = gps_altitude;
            this.bmpSensor_altitude = bmpSensor_altitude;
            this.bmpSensor_pressure = bmpSensor_pressure;
            this.bmpSensor_temp = bmpSensor_temp;
            this.digSensor_temp = digSensor_temp;
            this.cssSensor_temp = cssSensor_temp;
            this.cssSensor_ec02 = cssSensor_ec02;
            this.cssSensor_tvoc = cssSensor_tvoc;
            this.uv = uv;
            this.accel_x = accel_x;
            this.accel_y = accel_y;
            this.accel_z = accel_z;
            this.magnetic_x = magnetic_x;
            this.magnetic_y = magnetic_y;
            this.magnetic_z = magnetic_z;
            this.gyro_x = gyro_x;
            this.gyro_y = gyro_y;
            this.gyro_z = gyro_z;
        }
}