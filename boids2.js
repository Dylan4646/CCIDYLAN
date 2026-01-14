const flock = [];

let alignStrength = 1.5;
let cohesionStrength = 1.0
let separationStrength = 2.0;

let bridge;
let sensor1Value = 0;
let sensor2Value = 0;
let sensor3Value = 0;



function setup() {
    createCanvas(windowWidth, windowHeight);
 
    bridge = new SerialBridge();
    bridge.onData('arduino_1', (data) => {
        let values = data.trim().split(",");
        if (values.length >= 3) {
          sensor1Value = int(values[0]);
          sensor2Value = int(values[1]);
          sensor3Value = int(values[2]);
        }
      });
    
  
    for (let i =0; i < 300; i++) {
        flock.push(new Boid());
   }

}

function draw() {
    background(0);

    alignStrength = map(sensor1Value, 0, 1023, 0, 2);
    cohesionStrength = map(sensor2Value, 0, 1023, 0, 2);
    separationStrength = map(sensor3Value, 0, 1023, 0, 2);
  


for (let boid of flock) {
   boid.edges ();
   boid.flock(flock);
    boid.update(); 
    boid.show();
   
}



}
