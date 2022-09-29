input.onButtonPressed(Button.A, function () {
    Chance = randint(0, 20)
})
let Chance = 0
Chance = 0
let Mogus = 0
basic.forever(function () {
    if (Mogus == 1) {
    	
    }
})
basic.forever(function () {
    if (Chance >= 0 && Chance < 5) {
        basic.showIcon(IconNames.Tortoise)
    }
    if (Chance >= 5 && Chance < 10) {
        basic.showIcon(IconNames.Square)
    }
    if (Chance >= 10 && Chance < 15) {
        basic.showIcon(IconNames.StickFigure)
    }
    if (Chance >= 15 && Chance < 20) {
        music.setTempo(40)
        music.setVolume(255)
        basic.showLeds(`
            . # # # .
            . . . # #
            . # # # #
            . # # # #
            . # . # .
            `)
        music.playTone(220, music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.playTone(311, music.beat(BeatFraction.Quarter))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(220, music.beat(BeatFraction.Half))
        basic.pause(100)
        music.setTempo(60)
        music.playTone(196, music.beat(BeatFraction.Quarter))
        music.playTone(247, music.beat(BeatFraction.Quarter))
        music.playTone(220, music.beat(BeatFraction.Half))
        basic.pause(100)
        music.setTempo(40)
        music.playTone(165, music.beat(BeatFraction.Quarter))
        music.playTone(220, music.beat(BeatFraction.Quarter))
        basic.pause(200)
        music.playTone(220, music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.playTone(311, music.beat(BeatFraction.Quarter))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.setTempo(50)
        music.playTone(311, music.beat(BeatFraction.Half))
        music.setTempo(70)
        music.playTone(311, music.beat(BeatFraction.Quarter))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(311, music.beat(BeatFraction.Quarter))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(220, music.beat(BeatFraction.Whole))
    }
})
