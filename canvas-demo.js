window.onload = function() {
    var canvas = document.getElementById('my-canvas'),
        ctx = canvas.getContext('2d');

    // canvas 不要在css中设置宽高，得到的结果会与实际的不一致
    canvas.width = 1024;
    canvas.height = 768;

    drawRect(ctx, 100, 100, 200, 100, 10, 'red', '#ccc');

    var stopObj = {
        0.0: '#fff',
        0.25: 'yellow',
        0.5: 'green',
        0.75: 'blue',
        1.0: '#000'
    }

    drawLinearRect(ctx, 100, 250, 350, 350, stopObj);
    drawRadialGradient(ctx,500,500,0,500,500,200,stopObj);
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
function drawRect(ctx, x, y, width, height, borderWidth, borderColor, fillColor) {
    ctx.lineWidth = borderWidth;
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = borderColor;

    ctx.fillRect(x, y, width, height);
    ctx.strokeRect(x, y, width, height);
}


/**
 * 绘制线性渐变
 * @param  {context} cxt        图形上下文
 * @param  {[type]} x1      [description]
 * @param  {[type]} y1      [description]
 * @param  {[type]} x2      [description]
 * @param  {[type]} y2      [description]
 * @param  {[type]} stopObj [关键点键值对象]
 * @return {[type]}         [description]
 */
function drawLinearRect(ctx, x1, y1, x2, y2, stopObj) {
    var linearGrad = ctx.createLinearGradient(x1, y1, x2, y2);
    var keys = Object.keys(stopObj);
    for (var i = 0, len = keys.length; i < len; i++) {
        linearGrad.addColorStop(keys[i], stopObj[keys[i]]);
    }
    ctx.fillStyle = linearGrad;
    ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
}

/**
 * 绘制径向渐变
 * @param  {[type]} x1 [第一个圆X坐标]
 * @param  {[type]} y1 [第一个圆Y坐标]
 * @param  {[type]} r1 [第一个圆半径]
 * @param  {[type]} x2 [description]
 * @param  {[type]} y2 [description]
 * @param  {[type]} r2 [description]
 * @return {[type]}    [description]
 */
function drawRadialGradient(ctx, x1, y1, r1, x2, y2, r2, stopObj) {
    var radialGrad = ctx.createRadialGradient(x1, y1, r1, x2,y2,r2);
    var keys = Object.keys(stopObj);
    console.dir(keys);
    for (var i = 0, len = keys.length; i < len; i++) {
        radialGrad.addColorStop(keys[i], stopObj[keys[i]]);
    }
    ctx.fillStyle = radialGrad;
    ctx.arc(x1, y1, r2, Math.PI*2,false);
    ctx.fill();
}