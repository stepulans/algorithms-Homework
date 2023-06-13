function hanoiRecursive(n, source, target, auxiliary) {
  if (n === 1) {
    moveDisk(source, target);
  } else {
    hanoiRecursive(n - 1, source, auxiliary, target);
    moveDisk(source, target);
    hanoiRecursive(n - 1, auxiliary, target, source);
  }
}

function moveDisk(source, target) {
  console.log(`Move disk from ${source} to ${target}`);
}

hanoiRecursive(3, 'left', 'right', 'middle');

//----------------------------------------------------------------------------

function hanoiIterative(n, source, target, auxiliary) {
  if (n % 2 === 0) {
    [target, auxiliary] = [auxiliary, target];
  }

  const totalMoves = Math.pow(2, n) - 1;
  for (let move = 1; move <= totalMoves; move++) {
    if (move % 3 === 1) {
      moveDisk(source, target);
    } else if (move % 3 === 2) {
      moveDisk(source, auxiliary);
    } else {
      moveDisk(auxiliary, target);
    }
  }
}

function moveDisk(source, target) {
  console.log(`Move disk from ${source} to ${target}`);
}


hanoiIterative(3, 'left', 'right', 'middle');


