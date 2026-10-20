input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
let hito = 0
hito = randint(0, 10)
if ((0 as any) < (5 as any) == true) {
    music.play(music.stringPlayable("A G E G D G E F ", 140), music.PlaybackMode.UntilDone)
} else {
    music.play(music.stringPlayable("C5 E G E F A D G ", 120), music.PlaybackMode.UntilDone)
}
basic.forever(function () {
	
})
