import SwiftUI

struct ContentView: View {
    @ObservedObject var dataLoader = DataLoader()
    
    var body: some View {
        NavigationView {
            List(dataLoader.albums) { album in
                HStack {
                    AsyncImage(url: URL(string: album.artworkUrl60)) { image in
                        image.resizable()
                    } placeholder: {
                        ProgressView()
                    }
                    .frame(width: 60, height: 60)
                    
                    Text(album.collectionName)
                        .font(.headline)
                }
            }
            .navigationTitle("Rolling Stones Albums")
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
