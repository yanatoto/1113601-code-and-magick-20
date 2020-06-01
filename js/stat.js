'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 10;
var BAR_WIDTH = 40;
var BAR_Y = CLOUD_Y + CLOUD_HEIGHT - GAP * 2 - FONT_GAP;
var barHeight = 150;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};


window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + (5 * GAP + BAR_WIDTH) * i, 2 * (BAR_Y - barHeight + FONT_GAP) - (barHeight * times[i]) / maxTime, BAR_WIDTH, (barHeight * times[i]) / maxTime);

    ctx.fillText(players[i], CLOUD_X + GAP + (5 * GAP + BAR_WIDTH) * i, BAR_Y + FONT_GAP);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {

      ctx.fillStyle = 'hsl(238, ' + Math.round(Math.random() * 100) + '%, 39%)';
    }

    ctx.fillRect(CLOUD_X + GAP + (5 * GAP + BAR_WIDTH) * i, 2 * (BAR_Y - barHeight + FONT_GAP + GAP) - (barHeight * times[i]) / maxTime, BAR_WIDTH, (barHeight * times[i]) / maxTime);
  }

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + 2 * GAP + FONT_GAP);

};


