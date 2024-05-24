import Foundation

struct Album: Codable, Identifiable {
    let id: UUID = UUID()
    let collectionId: Int
    let collectionName: String
    let artworkUrl100: String
    
    enum CodingKeys: String, CodingKey {
        case collectionId
        case collectionName
        case artworkUrl100
    }
}

struct AlbumResults: Codable {
    let results: [Album]
}
