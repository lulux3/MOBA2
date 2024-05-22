import SwiftUI

struct ResultsView: View {
    let holidays: [Holiday]
    
    var body: some View {
        List(holidays) { holiday in
            NavigationLink(destination: DetailView(holiday: holiday)) {
                VStack(alignment: .leading) {
                    Text(holiday.title)
                        .font(.headline)
                    Text("Start Date: \(holiday.startDate)")
                        .font(.subheadline)
                    Text("End Date: \(holiday.endDate)")
                        .font(.subheadline)
                }
                .padding()
            }
        }
        .navigationBarTitle("Results")
    }
}
