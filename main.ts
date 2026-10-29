radio.onReceivedNumber(function (receivedNumber) {
	
})
function _7 () {
    nexusbit.servoTo(1, 顯示)
    nexusbit.servoTo(2, 不顯示)
    nexusbit.servoTo(3, 顯示)
    nexusbit.servoTo(4, 不顯示)
    nexusbit.servoTo(5, 不顯示)
    nexusbit.servoTo(6, 顯示)
    nexusbit.servoTo(7, 不顯示)
}
function _2 () {
    nexusbit.servoTo(1, 顯示)
    nexusbit.servoTo(2, 不顯示)
    nexusbit.servoTo(3, 顯示)
    nexusbit.servoTo(4, 顯示)
    nexusbit.servoTo(5, 顯示)
    nexusbit.servoTo(6, 不顯示)
    nexusbit.servoTo(7, 顯示)
}
function _6 () {
    nexusbit.servoTo(1, 顯示)
    nexusbit.servoTo(2, 顯示)
    nexusbit.servoTo(3, 不顯示)
    nexusbit.servoTo(4, 顯示)
    nexusbit.servoTo(5, 顯示)
    nexusbit.servoTo(6, 顯示)
    nexusbit.servoTo(7, 顯示)
}
input.onButtonPressed(Button.A, function () {
    不顯示 = 0
    顯示 = 75
})
function _9 () {
    nexusbit.servoTo(1, 顯示)
    nexusbit.servoTo(2, 顯示)
    nexusbit.servoTo(3, 顯示)
    nexusbit.servoTo(4, 顯示)
    nexusbit.servoTo(5, 不顯示)
    nexusbit.servoTo(6, 顯示)
    nexusbit.servoTo(7, 不顯示)
}
function _5 () {
    nexusbit.servoTo(1, 顯示)
    nexusbit.servoTo(2, 顯示)
    nexusbit.servoTo(3, 不顯示)
    nexusbit.servoTo(4, 顯示)
    nexusbit.servoTo(5, 不顯示)
    nexusbit.servoTo(6, 顯示)
    nexusbit.servoTo(7, 顯示)
}
function _3 () {
    nexusbit.servoTo(1, 顯示)
    nexusbit.servoTo(2, 不顯示)
    nexusbit.servoTo(3, 顯示)
    nexusbit.servoTo(4, 顯示)
    nexusbit.servoTo(5, 不顯示)
    nexusbit.servoTo(6, 顯示)
    nexusbit.servoTo(7, 顯示)
}
function _8 () {
    nexusbit.servoTo(1, 顯示)
    nexusbit.servoTo(2, 顯示)
    nexusbit.servoTo(3, 顯示)
    nexusbit.servoTo(4, 顯示)
    nexusbit.servoTo(5, 顯示)
    nexusbit.servoTo(6, 顯示)
    nexusbit.servoTo(7, 顯示)
}
input.onButtonPressed(Button.B, function () {
    不顯示 = 75
    顯示 = 0
})
function _0 () {
    nexusbit.servoTo(1, 顯示)
    nexusbit.servoTo(2, 顯示)
    nexusbit.servoTo(3, 顯示)
    nexusbit.servoTo(4, 不顯示)
    nexusbit.servoTo(5, 顯示)
    nexusbit.servoTo(6, 顯示)
    nexusbit.servoTo(7, 顯示)
}
function _4 () {
    nexusbit.servoTo(1, 不顯示)
    nexusbit.servoTo(2, 顯示)
    nexusbit.servoTo(3, 顯示)
    nexusbit.servoTo(4, 顯示)
    nexusbit.servoTo(5, 不顯示)
    nexusbit.servoTo(6, 顯示)
    nexusbit.servoTo(7, 不顯示)
}
function _1 () {
    nexusbit.servoTo(1, 不顯示)
    nexusbit.servoTo(2, 不顯示)
    nexusbit.servoTo(3, 顯示)
    nexusbit.servoTo(4, 不顯示)
    nexusbit.servoTo(5, 不顯示)
    nexusbit.servoTo(6, 顯示)
    nexusbit.servoTo(7, 不顯示)
}
let 不顯示 = 0
let 顯示 = 0
顯示 = 75
不顯示 = 0
_3()
radio.setGroup(1)
let 十位 = 3
basic.forever(function () {
    _0()
    basic.pause(1000)
    十位 += -1
    radio.sendNumber(十位)
    _9()
    basic.pause(1000)
    _8()
    basic.pause(1000)
    _7()
    basic.pause(1000)
    _6()
    basic.pause(1000)
    _5()
    basic.pause(1000)
    _4()
    basic.pause(1000)
    _3()
    basic.pause(1000)
    _2()
    basic.pause(1000)
    _1()
    basic.pause(1000)
    if (十位 == 0) {
        _0()
        basic.pause(1000)
        for (let index = 0; index < 30; index++) {
            nexusbit.buzzer(262, 100)
            basic.pause(100)
        }
        十位 = 3
    }
})
