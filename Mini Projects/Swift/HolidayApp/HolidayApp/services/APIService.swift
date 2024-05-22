import Foundation

class APIService {
    func fetchHolidays(query: String, completion: @escaping ([Holiday]) -> ()) {
        guard let url = URL(string: "https://openholidaysapi.org/PublicHolidays?countryIsoCode=CH&languageIsoCode=DE&validFrom=2024-01-01&validTo=2024-12-31&subdivisionCode=CH-ZH") else { return }
        
        URLSession.shared.dataTask(with: url) { (data, _, _) in
            guard let data = data else { return }
            do {
                let holidays = try JSONDecoder().decode([Holiday].self, from: data)
                let filteredHolidays = holidays.filter { $0.title.lowercased().contains(query.lowercased()) }
                DispatchQueue.main.async {
                    completion(filteredHolidays)
                }
            } catch {
                print("Error decoding data: \(error)")
            }
        }
        .resume()
    }
}
