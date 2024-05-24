import SwiftUI

struct ContentView: View {
    @ObservedObject var dataLoader = DataLoader()
    @State private var searchTerm = "rolling stones"
    
    var body: some View {
        NavigationView {
            VStack {
                SearchBar(text: $searchTerm, onSearchButtonClicked: {
                    dataLoader.fetchAlbums(for: searchTerm)
                })
                List(dataLoader.albums) { album in
                    HStack {
                        AsyncImage(url: URL(string: album.artworkUrl100)) { image in
                            image.resizable()
                        } placeholder: {
                            ProgressView()
                        }
                        .frame(width: 60, height: 60)
                        
                        Text(album.collectionName)
                            .font(.headline)
                    }
                }
                .navigationTitle("iTunes Albums")
            }
            .onAppear {
                dataLoader.fetchAlbums(for: searchTerm)
            }
        }
    }
}

struct SearchBar: View {
    @Binding var text: String
    var onSearchButtonClicked: () -> Void
    
    var body: some View {
        HStack {
            TextField("Search", text: $text, onCommit: onSearchButtonClicked)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .padding(.horizontal)
            Button(action: onSearchButtonClicked) {
                Text("Search")
            }
            .padding(.trailing)
        }
        .padding(.vertical)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
