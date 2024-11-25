// centimeters
function moveForward (speed: number, time: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, speed)
    neZha.setMotorSpeed(neZha.MotorList.M2, speed)
    basic.pause(time)
    neZha.stopMotor(neZha.MotorList.M1)
    neZha.stopMotor(neZha.MotorList.M2)
}
function move_time (speed: number, time: number) {
    moveForward(speed, time)
}
function missionB () {
	
}
input.onButtonPressed(Button.A, function () {
    missionA()
})
function move_dist (speed: number, dist: number) {
    time = dist / (2 * 3.14159 * wheel * speed)
    moveForward(speed, time)
}
function missionC () {
	
}
function missionA () {
	
}
input.onButtonPressed(Button.AB, function () {
    missionC()
})
input.onButtonPressed(Button.B, function () {
    missionB()
})
let time = 0
let wheel = 0
// centimeters
wheel = 3
