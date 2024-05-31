import Figure from "./Figure";
import HelpingFunctions from "./HelpingFunctions";
import History from "./History";
import { BoardConstants, Color } from "./Constants";

class Board {
	private matrix: (Figure | Color.EMPTY_PLACE)[][];
	private blackCounter: number;
	private whiteCounter: number;
	private history: History;
	private whosTurn: Color.BLACK | Color.WHITE;

	constructor() {
		this.matrix = new Array(BoardConstants.ROWS).fill(
            null).map(() => new Array(BoardConstants.COLUMNS));
        this.history = new History();
        HelpingFunctions.constructBoard(this.matrix);
        this.whosTurn = Color.WHITE;
        this.blackCounter = BoardConstants.PAWN_COUNT;
        this.whiteCounter = BoardConstants.PAWN_COUNT;
	}

	decrementWhiteCounter() {
		this.whiteCounter--;
	}

	decrementBlackCounter() {
		this.blackCounter--;
	}

	getWhiteCounter(): number {
		return this.whiteCounter;
	}

	getBlackCounter(): number {
		return this.blackCounter;
	}

	getWhosTurn(): Color {
		return this.whosTurn;
	}

	getBoard(): (Figure | Color.EMPTY_PLACE)[][] {
		return this.matrix;
	}

	getHistory(): History {
	    return this.history;
	}

    setWhiteCount(count: number) {
		this.whiteCounter = count;
	}

	setBlackCount(count: number) {
		this.blackCounter = count;
	}

	setBoard(newBoard: (Figure | Color.EMPTY_PLACE)[][]) {
		this.matrix = newBoard;
	}

    setHistory(history: History) {
        this.history = history;
    }

	changeTurn() {
		this.whosTurn = this.whosTurn === Color.WHITE ? Color.BLACK : Color.WHITE;
	}

	DoesGameEnd(): boolean {
		return this.blackCounter === 0 || this.whiteCounter === 0;
	}
}

export default Board;
