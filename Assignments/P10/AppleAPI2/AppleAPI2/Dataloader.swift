import Foundation

class DataLoader: ObservableObject {
    @Published var albums = [Album]()
    
    func fetchAlbums(for searchTerm: String) {
        let encodedTerm = searchTerm.addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed) ?? ""
        let urlString = "https://itunes.apple.com/search?term=\(encodedTerm)&entity=album"
        guard let url = URL(string: urlString) else {
            return
        }
        
        URLSession.shared.dataTask(with: url) { data, response, error in
            if let data = data {
                do {
                    let decoder = JSONDecoder()
                    let albumResults = try decoder.decode(AlbumResults.self, from: data)
                    DispatchQueue.main.async {
                        self.albums = albumResults.results
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
