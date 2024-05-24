import Foundation

class DataLoader: ObservableObject {
    @Published var albums = [Album]()
    
    init() {
        load()
    }
    
    func load() {
        if let fileURL = Bundle.main.url(forResource: "stones", withExtension: "json") {
            do {
                let data = try Data(contentsOf: fileURL)
                let decoder = JSONDecoder()
                let albumResults = try decoder.decode(AlbumResults.self, from: data)
                DispatchQueue.main.async {
                    self.albums = albumResults.results
                }
            } catch {
                print("Error loading JSON data: \(error)")
            }
        }
    }
}
