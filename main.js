let cube = {
    x: 0,
    y: 500,
    id: 'cube',
    width: 46,
    height: 93,
    trn: .25,
    step: 56,
}

let map = {
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight,
    color: '#f5f5f5'
}

let bots = [];

let bot = {
    x: 0,
    y:0,
    id: 1,
    width: 46,
    height: 93,
    trn: .25,
    step: 56,
}

for (let i = randomInteger(2,4); i != 0; i--) {
    bots.push(bot);
}

renderMap(map); // Рендер карты
renderCube(spawnCube(map, cube)); // Рендер куба
renderBots(bots);