import Player from '../player'

let airplay = function () {
  let player = this
  if(!player.config.airplay || !window.WebKitPlaybackTargetAvailabilityEvent) return

  function onAirplayBtnClick () {
    player.video.webkitShowPlaybackTargetPicker()
  }
  player.on('airplayBtnClick', onAirplayBtnClick)

  function onDestroy () {
    player.off('airplayBtnClick', onAirplayBtnClick)
    player.off('destroy', onDestroy)
  }
  player.once('destroy', onDestroy)
}

Player.install('airplay', airplay)
