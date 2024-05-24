import Foundation

class SongDataLoader: ObservableObject {
    @Published var songs = [Song]()
    
    func fetchSongs(for collectionId: Int) {
        let urlString = "https://itunes.apple.com/lookup?id=\(collectionId)&entity=song"
        guard let url = URL(string: urlString) else {
            return
        }
        
        URLSession.shared.dataTask(with: url) { data, response, error in
            if let data = data {
                do {
                    let decoder = JSONDecoder()
                    let songResults = try decoder.decode(SongResults.self, from: data)
                    DispatchQueue.main.async {
                        self.songs = songResults.results.filter { $0.trackId != collectionId }
                    }
                } catch {
                    print("Error decoding JSON: \(error)")
                }
            } else if let error = error {
                print("Network error: \(error)")
            }
        }.resume()
    }
}
