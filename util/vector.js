function Vector(x, y) {
  this.x = x || 0;
  this.y = y || 0;
}

Vector.prototype.add = function(vector) {
  this.x += vector.x;
  this.y += vector.y;
}

// 获取两个坐标点的距离
Vector.prototype.getMagnitude = function() {
  return Math.sqrt(this.x * this.x + this.y + this.y);
}

// 获取当前点的角度
Vector.prototype.getAngle = function() {
  return Math.atan2(this.y, this.x);
}

// 通过给定的角度和距离获取点坐标
Vector.fromAngle = function(angle, magnitude) {
  return new Vector(magnitude * Math.cos(angle), magnitude * Math.sin(angle));
}