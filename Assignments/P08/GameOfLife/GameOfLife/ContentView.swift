import SwiftUI

struct ContentView: View {
    let rows = 10
    let cols = 10
    
    @State private var oldBoard: [[Int]] = []
    @State private var newBoard: [[Int]] = []
    
    var body: some View {
        VStack {
            Text("Old Board")
                .font(.headline)
            BoardView(board: oldBoard)
            Text("New Board")
                .font(.headline)
            BoardView(board: newBoard)
        }
        .onAppear {
            oldBoard = createRandomBoard(rows: rows, cols: cols)
            newBoard = applyGameOfLifeRules(oldBoard: oldBoard)
            print("Old Board:")
            printBoard(board: oldBoard)
            print("New Board:")
            printBoard(board: newBoard)
        }
    }
    
    func createRandomBoard(rows: Int, cols: Int) -> [[Int]] {
        var board = [[Int]]()
        for _ in 0..<rows {
            var row = [Int]()
            for _ in 0..<cols {
                row.append(Int(arc4random_uniform(2)))
            }
            board.append(row)
        }
        return board
    }
    
    func printBoard(board: [[Int]]) {
        for row in board {
            print(row.map { $0 == 1 ? "⬛️" : "⬜️" }.joined(separator: " "))
        }
    }
    
    func applyGameOfLifeRules(oldBoard: [[Int]]) -> [[Int]] {
        var newBoard = oldBoard
        
        for row in 0..<rows {
            for col in 0..<cols {
                let liveNeighbors = countLiveNeighbors(board: oldBoard, row: row, col: col)
                
                if oldBoard[row][col] == 1 {
                    // Rule 1 or Rule 3
                    if liveNeighbors < 2 || liveNeighbors > 3 {
                        newBoard[row][col] = 0
                    }
                    // Rule 2 remains unchanged
                } else {
                    // Rule 4
                    if liveNeighbors == 3 {
                        newBoard[row][col] = 1
                    }
                }
            }
        }
        
        return newBoard
    }
    
    func countLiveNeighbors(board: [[Int]], row: Int, col: Int) -> Int {
        var count = 0
        for i in max(0, row-1)...min(rows-1, row+1) {
            for j in max(0, col-1)...min(cols-1, col+1) {
                if !(i == row && j == col) {
                    count += board[i][j]
                }
            }
        }
        return count
    }
}

struct BoardView: View {
    let board: [[Int]]
    
    var body: some View {
        VStack(spacing: 0) {
            ForEach(0..<board.count, id: \.self) { row in
                HStack(spacing: 0) {
                    ForEach(0..<board[row].count, id: \.self) { col in
                        Rectangle()
                            .fill(board[row][col] == 1 ? Color.black : Color.white)
                            .frame(width: 20, height: 20)
                            .border(Color.gray)
                    }
                }
            }
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
