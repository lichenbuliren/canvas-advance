// 抽象的向量
function Vector(x, y) {
  this.x = x || 0;
  this.y = y || 0;
}

Vector.prototype.add = function (vector) {
  this.x += vector.x;
  this.y += vector.y;
}

// 获取两个坐标点的距离
Vector.prototype.getMagnitude = function () {
  return Math.sqrt(this.x * this.x + this.y + this.y);
}

// 获取当前点的角度
Vector.prototype.getAngle = function () {
  return Math.atan2(this.y, this.x);
}

// 通过给定的角度和距离获取点坐标
Vector.fromAngle = function (angle, magnitude) {
  return new Vector(magnitude * Math.cos(angle), magnitude * Math.sin(angle));
}


function Particle(point, velocity, acceleration) {
  this.position = point || new Vector();
  this.velocity = velocity || new Vector();
  this.acceleration = acceleration || new Vector();
}

Particle.prototype.move = function() {
  // 速度 vx += av;
  this.velocity.add(this.acceleration);

  // 位移 x += vx;
  this.position.add(this.velocity);
}

function Emitter(point, velocity, spread) {
  this.position = point;
  this.velocity = velocity;
  this.spread = spread || Math.PI / 32;

  this.drawColor = '#999';
}

Emitter.prototype.emitParticle = function() {
  // 隨機發射角度
  var angle = this.velocity.getAngle() + this.spread - (Math.random() * this.spread * 2);

  var magnitude = this.velocity.getMagnitude();

  var position = new Vector(this.position.x, this.position.y);

  var velocity = Vector.fromAngle(angle, magnitude);

  return new Particle(position, velocity);
}