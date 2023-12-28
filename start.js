const start = () => {

    let canvas = document.querySelector('#canvas');
    const backgroundCanvas = document.createElement('div');
    backgroundCanvas.id = 'background-canvas';
    canvas.append(backgroundCanvas);

    const finalTimerCanvas = document.createElement('div');
    finalTimerCanvas.id = 'final-timer-canvas';
    const finalTimerCanvasP = document.createElement('p');
    finalTimerCanvasP.id = 'final-timer-text';
    finalTimerCanvasP.style.cssText = 'position: absolute; font-family: "Bungee Spice", cursive; font-size: 100pt; text-align: center; width: 100%;';
    finalTimerCanvas.append(finalTimerCanvasP);
    canvas.append(finalTimerCanvas);

    const restartBtn = document.createElement('img');
    restartBtn.id = 'restartBtn';
    restartBtn.src = 'assets/refresh.png';
    restartBtn.style.cssText = 'width: 40px; height: 40px; position: absolute; top: 20px; right: 80px;';
    canvas.append(restartBtn);

    const fsBtn = document.createElement('img');
    fsBtn.id = 'fsBtn';
    fsBtn.src = 'assets/refresh.png';
    fsBtn.style.cssText = 'width: 40px; height: 40px; position: absolute; top: 20px; right: 20px;';
    canvas.append(fsBtn);

    const imgBlock = document.createElement('div');
    imgBlock.id = 'img-block';
    imgBlock.style.cssText = 'width: 96px; height: 96px; overflow: hidden; position: absolute; left: 0px; bottom: 64px;';
    const imgBlockImg = document.createElement('img');
    imgBlockImg.id = 'hero-img';
    imgBlockImg.src = 'hero-sprite.png';
    imgBlockImg.style.cssText = 'width: 576px; height: 384px; position: relative; top: 0px; left: -96px; transform: scale(-1,1);';
    imgBlock.append(imgBlockImg);
    canvas.append(imgBlock);

    const jumpBlock = document.createElement('div');
    jumpBlock.id = 'jump-block';
    jumpBlock.style.cssText = 'position: absolute; top: 0; left: 0; width: 144px; height: 144px; overflow: hidden; opacity: 0.5;';
    const jumpBlockImg = document.createElement('img');
    jumpBlockImg.src = 'hero-sprite.png';
    jumpBlockImg.style.cssText = 'position: absolute; top: -144px; left: -144px; width: 864px; height: 576px; transform: scale(-1,1);';
    const jumpBlockDiv = document.createElement('div');
    jumpBlockDiv.style.cssText = 'position: absolute; top: 0; left: 0; width: 140px; height: 140px; border: 2px solid rgb(0, 119, 255); border-radius: 50%;';
    jumpBlock.append(jumpBlockImg);
    jumpBlock.append(jumpBlockDiv);
    canvas.append(jumpBlock);

    const hitBlock = document.createElement('div');
    hitBlock.id = 'hit-block';
    hitBlock.style.cssText = 'position: absolute; top: 0; right: 0; width: 144px; height: 144px; overflow: hidden; opacity: 0.5;';
    const hitBlockImg = document.createElement('img');
    hitBlockImg.src = 'hero-sprite.png';
    hitBlockImg.style.cssText = 'position: absolute; top: -452px; left: -442px; width: 864px; height: 576px; transform: scale(-1,1);';
    const hitBlockDiv = document.createElement('div');
    hitBlockDiv.style.cssText = 'position: absolute; top: 0; right: 0; width: 140px; height: 140px; border: 2px solid rgb(0, 119, 255); border-radius: 50%;';
    hitBlock.append(hitBlockImg);
    hitBlock.append(hitBlockDiv);
    canvas.append(hitBlock);

    const info = document.createElement('p');
    info.id = 'info';
    info.style.cssText = 'display: none; position: absolute; left: 64px; top: 96px; background-color: black; color: white; font-size: 20pt; padding: 20px;';
    canvas.append(info);
}
start();