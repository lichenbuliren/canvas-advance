var stars = [];
window.onload = function() {
    var canvas = document.getElementById('my-canvas');
    var context = canvas.getContext('2d');

    // canvas 不要在css中设置宽高，得到的结果会与实际的不一致
    canvas.width = 1024;
    canvas.height = 768;
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < 200; i++) {
        var starObj = {};
        starObj.r = Math.random() * 10 + 10;
        starObj.x = Math.random() * canvas.width;
        starObj.y = Math.random() * canvas.height;
        starObj.a = Math.random() * 360;
        // 界定绘制的星星在画布内部
        if ((starObj.x - starObj.r) > 0 && (starObj.y - starObj.r) > 0 && (starObj.x + starObj.r) < canvas.width && (starObj.y + starObj.r) < canvas.height) {

            // 如何和已经绘制的星星有重叠，则当前的星星不绘制
            if (checkOverflow(starObj)) {
                drawStar(context, starObj.r, starObj.x, starObj.y, starObj.a);
                stars.push(starObj);
            }
        }
    }
}

/**
 * 判断当前的星星与已经绘制IDE星星是否重叠
 * @param  {[type]} cxt [description]
 * @return {[type]}     [description]
 */
function checkOverflow(obj) {

    if (stars.length == 0) {
        return true;
    }

    // 判断两个星星是否重叠，只要判断两点之间的距离是否小于r2 + r1
    for (var i = 0; i < stars.length; i++) {
        var r = stars[i].r + obj.r,
            x = stars[i].x - obj.x,
            y = stars[i].y - obj.y,
            result;
        result = Math.pow(r, 2) - Math.pow(x, 2) - Math.pow(y, 2);
        if (result > 0) {
            return false;
        }
    }
    return true;
}

/**
 * 绘制五角星
 * @param  {context} cxt canvas上下文
 * @param  {number} r   五角星大圆半径
 * @param  {number} x   x轴偏移量
 * @param  {number} y   y轴偏移量
 * @param  {number} rot 旋转角度，计算角度的时候，用的是逆时针方向，所以要减去rot角度
 * @return {[type]}     [description]
 */
function drawStar(cxt, r, x, y, rot) {

    // 保存上下文初态
    cxt.save();

    // 位移到x,y处
    cxt.translate(x, y);
    // 旋转角度，参数需要转化为弧度
    cxt.rotate(rot / 180 * Math.PI);
    // 缩放r，相当于外圆半径为r
    cxt.scale(r, r);

    // 绘制五角星顶点坐标
    drawPentacle(cxt);

    cxt.fillStyle = '#fb3';

    // 由于scale具有继承效果，会导致边框也同步放大，所以这里取消边框
    // cxt.strokeStyle = '#fd5';
    // cxt.lineWidth = 3;
    // cxt.lineJoin = 'round';

    cxt.fill();
    // cxt.stroke();

    // 恢复初始状态，如果不这么做，前面的操作都将是在上一次操作的基础上进行缩放的
    cxt.restore();
}

/**
 * 绘制一个五角星
 * 计算每个顶点的坐标
 * 其中内园半径为外圆半径的一半
 * @param  {[type]} cxt [description]
 * @return {[type]}     [description]
 */
function drawPentacle(cxt) {
    cxt.beginPath();
    for (var i = 0; i < 5; i++) {
        cxt.lineTo(Math.cos((18 + i * 72) / 180 * Math.PI), -Math.sin((18 + i * 72) / 180 * Math.PI));
        cxt.lineTo(Math.cos((54 + i * 72) / 180 * Math.PI) * 0.5, -Math.sin((54 + i * 72) / 180 * Math.PI) * 0.5);
    }
    cxt.closePath();
}