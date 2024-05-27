import Constants from './Constants';


class Position{

    private row: number;
    private column: number;


    constructor(placeOnBoard: string){

        let placeToNum = parseInt(placeOnBoard.charAt(1));
        this.row = 8 - (placeToNum);
        this.column = 0;
        this.setColumnUsingLetters(placeOnBoard.charAt(0));

    }

    getColumn(){
        return this.column;
    }

    getRow(){
        return this.row;
    }

    setColumn(newColumn: number): void{

        this.column = newColumn;
        
    }


    setColumnUsingLetters(newColumn: string): void{

        this.column = Constants.LETTERS_TO_COLUMNS[newColumn];

    }

    setRow(newRow: number): void{
        this.row = newRow;
    }

    getPositionInRowsAndColumns(){

        return [this.row, this.column];

    }

    public static getPositionUsingBoardPlaces(column: number, row: number): string{

        return Constants.COLUMNS_TO_LETTERS[ column ] + ( 8 - row);

    }

    toString(): string{

        return Constants.COLUMNS_TO_LETTERS[ this.column ] + ( 8 - this.row);

    }
}


export default Position;