window.onload = function() {
    var canvas = document.getElementById('my-canvas');
    var context = canvas.getContext('2d');

    // canvas 不要在css中设置宽高，得到的结果会与实际的不一致
    canvas.width = 1024;
    canvas.height = 768;
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < 200; i++) {
        var r = Math.random() * 10 + 10;
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        var a = Math.random() * 360;
        drawStar(context, r, x, y, a);
    }
}

/**
 * 绘制五角星
 * @param  {context} cxt canvas上下文
 * @param  {number} R   五角星大圆半径
 * @param  {number} r   五角星小圆半径
 * @param  {number} x   x轴偏移量
 * @param  {number} y   y轴偏移量
 * @param  {number} rot 旋转角度，计算角度的时候，用的是逆时针方向，所以要减去rot角度
 * @return {[type]}     [description]
 */
function drawStar(cxt, r, x, y, rot) {

    cxt.save();

    cxt.translate(x, y);
    cxt.rotate(rot / 180 * Math.PI);
    cxt.scale(r, r);

    starPath(cxt);

    cxt.fillStyle = '#fb3';
    // cxt.strokeStyle = '#fd5';
    // cxt.lineWidth = 3;
    // cxt.lineJoin = 'round';

    cxt.fill();
    // cxt.stroke();

    cxt.restore();
}

/**
 * 绘制一个五角星
 * @param  {[type]} cxt [description]
 * @return {[type]}     [description]
 */
function starPath(cxt) {
    cxt.beginPath();
    for (var i = 0; i < 5; i++) {
        cxt.lineTo(Math.cos((18 + i * 72) / 180 * Math.PI), -Math.sin((18 + i * 72) / 180 * Math.PI));
        cxt.lineTo(Math.cos((54 + i * 72) / 180 * Math.PI) * 0.5, -Math.sin((54 + i * 72) / 180 * Math.PI) * 0.5);
    }
    cxt.closePath();
}