window.onload = function() {
    var canvas = document.getElementById('my-canvas');
    var context = canvas.getContext('2d');

    // canvas 不要在css中设置宽高，得到的结果会与实际的不一致
    canvas.width = 1024;
    canvas.height = 768;


    // 使用beginPath()和closePath()可以绘制一个封闭的多边形，
    // 不会出现因为边框太框而导致出现缝合不够的问题
    // context.beginPath();
    // context.moveTo(100, 350);
    // context.lineTo(500, 350);
    // context.lineTo(500, 200);
    // context.lineTo(700, 400);
    // context.lineTo(500, 600);
    // context.lineTo(500, 450);
    // context.lineTo(100, 450);
    // 最后一条封闭的线条可以不需要写，使用closePath()会自动完成
    // context.lineTo(100,350);
    // context.closePath();

    // 填充与描边，需要先填充，后描边，这样子绘制的图形不会被覆盖部分
    // canvas是基于状态的，将定义状态的语句放到一起
    // context.lineWidth = 10;
    // context.fillStyle = 'yellow';
    // context.strokeStyle = '#058';

    // context.fill();
    // context.stroke();

    drawRect(context,100,100,300,200,10,'#058','red');
    drawRect2(context,200,200,300,200,10,'#058','rgba(0,255,0,0.5)');
}

/**
 * 绘制矩形
 * @param  {context} cxt        图形上下文
 * @param  {number} x           矩形起点x轴坐标
 * @param  {number} y           矩形起点y轴坐标
 * @param  {number} width       矩形宽度
 * @param  {number} height      矩形高度
 * @param  {number} borderWidth 矩形边框宽度
 * @param  {string} borderColor 边框颜色
 * @param  {string} fillColor   填充色
 * @return {[type]}             [description]
 */
function drawRect(cxt, x, y, width, height, borderWidth, borderColor, fillColor) {

    cxt.beginPath();
    cxt.moveTo(x, y);
    cxt.lineTo(x + width, y);
    cxt.lineTo(x + width, y + height);
    cxt.lineTo(x, y + height);
    cxt.closePath();

    cxt.lineWidth = borderWidth;
    cxt.fillStyle = fillColor;
    cxt.strokeStyle = borderColor;

    cxt.fill();
    cxt.stroke();
}

function drawRect2(cxt, x, y, width, height, borderWidth, borderColor, fillColor) {

    cxt.lineWidth = borderWidth;
    cxt.fillStyle = fillColor;
    cxt.strokeStyle = borderColor;

    cxt.fillRect(x,y,width,height);
    cxt.strokeRect(x,y,width,height);
}