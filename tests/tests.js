QUnit.module( "module A", {
  
  beforeEach: function() {
    // prepare something for all following tests
    
    initializeGame(gameBoard);
  },
  afterEach: function() {
    // clean up after each test
    
  }
});
test ("score test", function (assert) {
    assert.equal(score(["E", "E", "X", "O","O", "X", "O", "X", "X"], "X"), 10, "Player X shows 10");
    assert.equal(score(["E", "E", "X", "O","O", "X", "O", "X", "X"], "O"), null, "Player O shows null");
    assert.equal(score(["X", "E", "O", "E", "X", "O", "X", "E", "O"], "O"), -10, "Player O shows -10");
    assert.equal(score(["X", "E", "O", "E", "X", "O", "X", "E", "O"], "X"), null, "Player X shows null");
    assert.equal(score(["O", "O", "O", "E", "X", "X", "X", "E", "O"], "O"), -10, "Player O shows -10");
    assert.equal(score(["O", "X", "O", "E", "X", "X", "X", "E", "O"], "O"), null, "No win or draw should return null");
    assert.equal(score(["O", "X", "O", "O", "X", "X", "X", "O", "O"], "O"), 0, "Draw should return 0");
});

var testBoard = ["E", "E", "X", "O","O", "X", "O", "X", "X"];
var testBoard2 = ["E", "E", "X", "O","O", "X", "O", "X", "X"];
var advancedTestBoard = ["X", "E", "X", "O","O", "X", "O", "X", "X"]
test ("advance test", function(assert){
    assert.deepEqual(advanceTurn(testBoard, 0), advancedTestBoard, "Advances correctly");
});

test ("find empty squares", function(assert){
    assert.deepEqual(emptySquares(testBoard2), [0,1], "Finds the empty squares");
});

test("game turns", function(assert){
   assert.equal(gameBoard.turns, 0); 
});

test("sequence", function(assert){
    //initializeGame();
    advanceTurn(gameBoard.state, 1);
    assert.equal(gameBoard.turns, 1, "Turns is 1");
    assert.deepEqual(gameBoard.state, ["E", "X", "E", "E","E", "E", "E", "E", "E"]);
    advanceTurn(gameBoard.state, 0);
    assert.equal(gameBoard.turns, 2, "Turns is 2");
    assert.deepEqual(gameBoard.state, ["X", "X", "E", "E","E", "E", "E", "E", "E"]);
});