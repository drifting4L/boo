input.onGesture(Gesture.ScreenUp, function () {
    music.setVolume(255)
    music.setBuiltInSpeakerEnabled(false)
    for (let index = 0; index < 100; index++) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    }
})
