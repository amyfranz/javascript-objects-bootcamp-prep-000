var playlist = {artistName : "songTitle" };

function updatePlaylist ( playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
 // var newObj = Object.assign({}, playlist)
 // delete newObj[artistName];
 // return newObj;
  
  delete playlist[artistName];
  return playlist;
}

