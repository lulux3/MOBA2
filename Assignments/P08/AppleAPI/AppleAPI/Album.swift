import Foundation

struct Album: Codable, Identifiable {
    let id: UUID = UUID()
    let collectionName: String
    let artworkUrl60: String
    
    enum CodingKeys: String, CodingKey {
        case collectionName
        case artworkUrl60
    }
}

struct AlbumResults: Codable {
    let results: [Album]
}
