window.onload = function(){
    var canvas = document.getElementById('my-canvas'),
        ctx = canvas.getContext('2d'),
        linearGrad;

    canvas.width = 800;
    canvas.height = 800;

    // linearGrad = ctx.createLinearGradient(0, 0, 800, 800);
    linearGrad = ctx.createRadialGradient(400, 400, 0, 400, 400, 600);

    // 渐变关键点从0.0 ~ 1.0
    linearGrad.addColorStop(0.0,'#fff');
    linearGrad.addColorStop(0.25,'yellow');
    linearGrad.addColorStop(0.5,'green');
    linearGrad.addColorStop(0.75,'blue');
    linearGrad.addColorStop(1.0,'#000');
    ctx.fillStyle = linearGrad;
    ctx.fillRect(0, 0, 800,800);
}