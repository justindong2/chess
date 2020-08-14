// adds first move in list to pgn string
function addMove(pgn) {
	var moves = chess.moves();
	if (moves.length > 0) {
		pgn += moves[0];
	}
	return pgn;
}

function getMoves() {
	// returns verbose legal moves
	return chess.moves({verbose: true});
}

function convertVerbose(move) {
	var from = move.from;
	var to = move.to;
	return from + '-' + to;
}

function makeRandomMove() {
	var moves = getMoves();
	var index = Math.floor(Math.random() * moves.length);
	console.log(index);
	var move = moves[index];
	board.move(convertVerbose(move));
	pgn = chess.pgn();
	chess.move(move);
	$('#pgnContainer').text(pgn);
	if (chess.game_over()) {
		return;
	}
	setTimeout(makeRandomMove, 300);
}

var config = {
	position: 'start',
	draggable: true
};

// creates chess board
var board = Chessboard('game', config);

// random chess game
var chess = new Chess();
var pgn = '';

makeRandomMove();
