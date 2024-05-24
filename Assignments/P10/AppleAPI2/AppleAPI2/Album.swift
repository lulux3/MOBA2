import Foundation

struct Album: Codable, Identifiable {
    let id: UUID = UUID()
    let collectionName: String
    let artworkUrl100: String
    
    enum CodingKeys: String, CodingKey {
        case collectionName
        case artworkUrl100
    }
}

struct AlbumResults: Codable {
    let results: [Album]
}
