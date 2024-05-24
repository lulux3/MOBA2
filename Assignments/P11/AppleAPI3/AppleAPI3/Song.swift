import Foundation

struct Song: Codable, Identifiable {
    let id: UUID = UUID()
    let trackId: Int
    let trackName: String
    let trackNumber: Int
    
    enum CodingKeys: String, CodingKey {
        case trackId
        case trackName
        case trackNumber
    }
}

struct SongResults: Codable {
    let results: [Song]
}
