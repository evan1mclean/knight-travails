//factory function to create a node which will be used for each square the knight jumps to
const node = (x = null, y = null, parent = null) => {
  return { x, y, parent };
};

//function that takes in coordinates of a square and checks that they are within an 8x8 board
const isValid = (x, y) => {
  if (x >= 0 && y >= 0 && x <= 7 && y <= 7) {
    return true;
  } else {
    return false;
  }
}

//returns the shortest path of a knight from the start coordinate to the end coordinate
const knightMoves = (start, end) => {
  if (!isValid(start[0], start[1]) || !isValid(end[0], end[1])) {
    return console.log("Values must be between [0, 0] and [7, 7]");
  }
  if (start[0] === end[0] && start[1] === end[1]) {
    return console.log("The knight didn't have to travel at all...");
  }

  //array of all offsets a knight can make from any given position
  const knightOffset = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];

  //starts a queue with a node containing the starting position
  const queue = [node(start[0], start[1])];
  //results array to display the path taken at the end
  const results = [];

  while (queue.length > 0) {
    //remove front of queue and set to current node
    let currentNode = queue.shift();

    //checks if the current node equals the end square
    if (currentNode.x === end[0] && currentNode.y === end[1]) {
      //if it does, push the current node to the array
      results.push[[currentNode.x, currentNode.y]];
      //travel up the graph until there is no parent node
      while (currentNode.parent !== null) {
        //add each parent node to the beginning of the results array to show the path
        results.unshift([currentNode.parent.x, currentNode.parent.y]);
        currentNode = currentNode.parent;
      }
      //add the ending node to the results array, display message nicely and return the array
      results.push([end[0], end[1]]);
      console.log(`Congrats! You made it in ${results.length - 1} moves`);
      console.log("Your path was: ");
      let message = "";
      results.forEach(item => {
        message += `[${item}]\n`;
      })
      console.log(message);
      return results;
    }
    
    //If the current node did not match the end node, try each of the possible knight offset moves
    for (let i = 0; i <8; i++) {
      let dx = currentNode.x + knightOffset[i][0];
      let dy = currentNode.y + knightOffset[i][1];
      //if the knight offset move is valid, push it onto the queue as a new node with the current node as the parent
      if (isValid(dx, dy)) {
        queue.push(node(dx, dy, currentNode));
      }
    }
  }
};

knightMoves([1,1],[4,4]);
console.log("");
knightMoves([0,1], [7,7]);