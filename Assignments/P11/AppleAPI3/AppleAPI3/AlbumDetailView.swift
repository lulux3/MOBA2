import SwiftUI

struct AlbumDetailView: View {
    let album: Album
    @ObservedObject var songDataLoader = SongDataLoader()
    
    var body: some View {
        VStack {
            AsyncImage(url: URL(string: album.artworkUrl100)) { image in
                image.resizable()
            } placeholder: {
                ProgressView()
            }
            .frame(width: 200, height: 200)
            .cornerRadius(10)
            .padding()
            
            Text(album.collectionName)
                .font(.title)
                .padding()
            
            List(songDataLoader.songs) { song in
                HStack {
                    Text("\(song.trackNumber).")
                    Text(song.trackName)
                }
            }
            .listStyle(PlainListStyle())
        }
        .onAppear {
            songDataLoader.fetchSongs(for: album.collectionId)
        }
        .navigationTitle("Album Details")
    }
}

