const EventEmitter = require('events');

class Vehicle extends EventEmitter {
  collide(collisionStatistics) {
    this.emit('collision', collisionStatistics)
  }
}

const myVehicle = new Vehicle();
myVehicle.on('collision', collisionStatistics => {
  console.log('WARNING! Vehicle Impact Detected: ', collisionStatistics);
  notifyVendor(collisionStatistics);
});

myVehicle.collide({ ... });