import SwiftUI

struct DetailView: View {
    let holiday: Holiday
    
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 10) {
                Text(holiday.title)
                    .font(.largeTitle)
                    .padding(.bottom, 10)
                
                Text("Start Date: \(holiday.startDate)")
                    .font(.headline)
                Text("End Date: \(holiday.endDate)")
                    .font(.headline)
                Text("Type: \(holiday.type)")
                    .font(.headline)
                Text("Nationwide: \(holiday.nationwide ? "Yes" : "No")")
                    .font(.headline)
                
                if let subdivisions = holiday.subdivisions {
                    Text("Subdivisions:")
                        .font(.headline)
                    
                    // Use a LazyVGrid to display subdivisions in a grid format
                    let columns = [GridItem(.flexible()), GridItem(.flexible()), GridItem(.flexible())]
                    
                    LazyVGrid(columns: columns, spacing: 10) {
                        ForEach(subdivisions, id: \.code) { subdivision in
                            Text(subdivision.shortName)
                                .font(.subheadline)
                                .padding(5)
                                .background(Color.gray.opacity(0.2))
                                .cornerRadius(5)
                        }
                    }
                }
                
                Spacer()
            }
            .padding()
        }
        .navigationBarTitle("Holiday Details", displayMode: .inline)
    }
}
