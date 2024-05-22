import Foundation

struct Holiday: Identifiable, Codable {
    let id: String
    let title: String
    let startDate: String
    let endDate: String
    let type: String
    let nationwide: Bool
    let subdivisions: [Subdivision]?

    enum CodingKeys: String, CodingKey {
        case id
        case name
        case startDate
        case endDate
        case type
        case nationwide
        case subdivisions
    }

    enum NameCodingKeys: String, CodingKey {
        case language
        case text
    }

    // Custom initializer to handle decoding
    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        
        id = try container.decode(String.self, forKey: .id)
        startDate = try container.decode(String.self, forKey: .startDate)
        endDate = try container.decode(String.self, forKey: .endDate)
        type = try container.decode(String.self, forKey: .type)
        nationwide = try container.decode(Bool.self, forKey: .nationwide)
        subdivisions = try container.decodeIfPresent([Subdivision].self, forKey: .subdivisions)
        
        var nameContainer = try container.nestedUnkeyedContainer(forKey: .name)
        var titleTemp: String?
        while !nameContainer.isAtEnd {
            let nameItemContainer = try nameContainer.nestedContainer(keyedBy: NameCodingKeys.self)
            let language = try nameItemContainer.decode(String.self, forKey: .language)
            if language == "DE" {
                titleTemp = try nameItemContainer.decode(String.self, forKey: .text)
                break
            }
        }
        
        guard let title = titleTemp else {
            throw DecodingError.dataCorruptedError(forKey: .name, in: container, debugDescription: "No DE title found")
        }
        self.title = title
    }

    // Method to encode the struct back to JSON
    func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        
        try container.encode(id, forKey: .id)
        try container.encode(startDate, forKey: .startDate)
        try container.encode(endDate, forKey: .endDate)
        try container.encode(type, forKey: .type)
        try container.encode(nationwide, forKey: .nationwide)
        try container.encodeIfPresent(subdivisions, forKey: .subdivisions)
        
        var nameContainer = container.nestedUnkeyedContainer(forKey: .name)
        var nameItemContainer = nameContainer.nestedContainer(keyedBy: NameCodingKeys.self)
        try nameItemContainer.encode("DE", forKey: .language)
        try nameItemContainer.encode(title, forKey: .text)
    }
}

struct Subdivision: Codable {
    let code: String
    let shortName: String
}
