basic.showString("HOLA MUNDO")
basic.forever(function () {
    basic.showIcon(IconNames.No)
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(500)
})
