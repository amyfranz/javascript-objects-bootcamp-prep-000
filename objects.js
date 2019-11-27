var playlist = {artistName : "songTitle" };

function updatePlaylist ( playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  console.log(playlist);
  return playlist;
  
  function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({},object)
  delete newObj[key];
  return newObj;
}
}

