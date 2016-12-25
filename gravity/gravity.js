window.onload = function () {
  var canvas = document.getElementById('my-canvas');
  var ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // 最大粒子数
  var maxParticles = 200;
  // 每帧发射粒子数
  var emissionRate = 4;

  var particles = [];
  var particleSize = 1;
  var emitters = [new Emitter(new Vector(100, 230), Vector.fromAngle(0, 2))];

  function loop() {
    clear();
    update();
    draw();
    queue();
  }

  function clear(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function update() {
    addNewParticles();
    plotParticles(canvas.width, canvas.height);
  }

  function addNewParticles() {
    if (particles.length > maxParticles) return;

    for(var i = 0, len = emitters.length; i < len; i++) {
      for (var j = 0; j < emissionRate; j++) {
        particles.push(emitters[i].emitterParticle());
      }
    }
  }


  // 过滤重置粒子，当粒子位置超出给定的 x, y 界限之后
  function plotParticles(boundX, boundY) {
    var currentParticles = [];

    for (var i = 0; i < particles.length; i++) {
      var particle = particles[i];
      var pos = particle.position;

      if (pos.x < 0 || pos.x > boundX || pos.y < 0 || pos.y > boundY) continue;

      // 粒子移动
      particle.move();

      currentParticles.push(paritcle);
    }

    particles = currentParticles;
  }

  // 绘制一个粒子，这里我们绘制一个方块
  function drawParticles() {
    ctx.fillStyle = 'rgb(0, 0, 255)';
    for (var i = 0; i < particles.length; i++) {
      var position = particles[i].position;

      ctx.fillRect(position.x, position.y, particleSize, particleSize);
    }
  }

  function queue() {
    window.requestAnimationFrame(loop);
  }
}



