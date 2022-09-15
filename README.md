# Knight Travails

This project is my solution to the knight travails problem. A knight on a chessboard can travel from one square to any other given enough moves. The knightMoves function in this project lets you put in a starting and ending coordinate and provides you the with the shortest path between the squares. The solution uses a graph data structure where each possible move that still lies on the board, gets turned into a node and is linked to the previous move. To find the shortest path, I used breadth-first traversal until I found a node that matched the end square. I then added all of the nodes in that path to a results array and returned that.