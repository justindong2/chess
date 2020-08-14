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
	//setTimeout(function() {board.move(convertVerbose(move))}, 250);
	board.move(convertVerbose(move));
	pgn = chess.pgn();
	chess.move(move);
	// pgn += move.san;
	pgnContainer.innerHTML = '<p>' + pgn + '</p>';
	
	setTimeout(makeRandomMove, 300);
}

var config = {
	position: 'start',
	draggable: true
};

// alert(config.position);

// creates chess board
var board = Chessboard('game', config);

// random chess game
var chess = new Chess();
// var moves = chess.moves();
var pgn = '';
// console.log(moves);
var pgnContainer = document.getElementById('pgnContainer');

makeRandomMove();
// for (i=0; i<200; i++) {
	// setTimeout(makeRandomMove, 300 * i);
// }
// var i=1; // ply counter
// while (!chess.game_over()) {
	// setTimeout(makeRandomMove, 300 * i);
	// i++;
// }

// for (i=0; i<100; i++) {
	// setTimeout(function() {
		// var moves = getMoves();
		// var move = moves[0];
		// board.move(convertVerbose(move));
		// pgn = chess.pgn();
		// chess.move(move);
		// pgnContainer.innerHTML = '<p>' + pgn + '</p>';
		// }, 300*i);
// }

// pgnContainer.innerHTML = '<p>' + pgn + '</p>';
// game.move('b4');
// console.log(pgn.innerHTML);
// document.getElementById('pgn').innerHTML = moves[0];
// pgnContainer.innerHTML = '<p>' + moves + '</p>';
// alert(moves[0]);

