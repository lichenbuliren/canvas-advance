function Ball(radius, color) {
  if (!radius) radius = 40;
  if (!color) color = '#ofo';

  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
  this.radius = radius;
  this.rotation = 0;
  this.mass = 1;
  this.scaleX = 1;
  this.scaleY = 1;
  this.color = color;
  this.lineWidth = 1;
}

Ball.prototype.draw = function(ctx) {
  ctx.save();
  ctx.translate(this.x, this.y);
  ctx.rotate(this.rotation);
  ctx.scale(this.scaleX, this.scaleY);
  ctx.lineWidth = this.lineWidth;
  ctx.fillStyle = this.color;
  ctx.strokeStyle = this.color;
  ctx.beginPath();
  ctx.arc(0, 0, this.radius, 0, Math.PI*2, false);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

// 获取小球基准信息，包括左上角的坐标 x,y; 小球大小 widht, height
Ball.prototype.getBounds = function() {
  return {
    x: this.x - this.radius,
    y: this.y - this.radius,
    width: this.radius*2,
    height: this.radius*2
  }
};