import SwiftUI

struct HomeView: View {
    @State private var query = ""
    @State private var holidays = [Holiday]()
    @State private var showingResults = false
    
    var body: some View {
        NavigationView {
            VStack {
                TextField("Enter Holiday Name", text: $query)
                    .padding()
                    .textFieldStyle(RoundedBorderTextFieldStyle())
                
                Button("Search") {
                    APIService().fetchHolidays(query: query) { holidays in
                        self.holidays = holidays
                        self.showingResults = true
                    }
                }
                .padding()
                
                NavigationLink(destination: ResultsView(holidays: holidays), isActive: $showingResults) {
                    EmptyView()
                }
            }
            .navigationBarTitle("Holiday Search")
        }
    }
}

struct HomeView_Previews: PreviewProvider {
    static var previews: some View {
        HomeView()
    }
}
