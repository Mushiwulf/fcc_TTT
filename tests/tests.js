
test ("score test", function (assert) {
    assert.equal(score(["E", "E", "X", "O","O", "X", "O", "X", "X"], "X"), 10, "Player X shows 10");
    assert.equal(score(["E", "E", "X", "O","O", "X", "O", "X", "X"], "O"), null, "Player O shows null");
    assert.equal(score(["X", "E", "O", "E", "X", "O", "X", "E", "O"], "O"), -10, "Player O shows -10");
    assert.equal(score(["X", "E", "O", "E", "X", "O", "X", "E", "O"], "X"), null, "Player X shows null");
    assert.equal(score(["O", "O", "O", "E", "X", "X", "X", "E", "O"], "O"), -10, "Player O shows -10");
    assert.equal(score(["O", "X", "O", "E", "X", "X", "X", "E", "O"], "O"), null, "No win or draw should return null");
    assert.equal(score(["O", "X", "O", "O", "X", "X", "X", "O", "O"], "O"), 0, "Draw should return 0");
});

