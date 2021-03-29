document.onkeydown = checkButton;

let cube = {
    x: 600,
    y: 500,
    id: 'main'
}



function checkButton(e) {

    let k = e || window.event;

    if (k.keyCode === 38) {
       //key: "ArrowUp"
       cube.y -= 10;

       render(cube.id, cube.x, cube.y);
    }

    else if (k.keyCode === 40) {
       //key: "ArrowDown"
       cube.y += 10;

       render(cube.id, cube.x, cube.y);
    }

    else if (k.keyCode === 37) {
        //key: "ArrowLeft"
        cube.x -= 10;

        render(cube.id, cube.x, cube.y);
    }

    else if (k.keyCode === 39) {
        //key: "ArrowRight"
        cube.x += 10;

        render(cube.id, cube.x, cube.y);
    }

}

function render(id, x, y) {
    document.getElementById(id).style.top = y + 'px';
    document.getElementById(id).style.left = x + 'px';
}

render(cube.id, cube.x, cube.y);