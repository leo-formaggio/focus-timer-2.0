export function Sounds() {
    const sjungle = new Audio("https://github.com/devgustavosantos/focus-timer-dark-mode/blob/main/assets/sound/forest.wav?raw=true")
    const srain = new Audio("https://github.com/devgustavosantos/focus-timer-dark-mode/blob/main/assets/sound/rain.wav?raw=true")
    const scoffeer = new Audio("https://github.com/devgustavosantos/focus-timer-dark-mode/blob/main/assets/sound/coffee-shop.wav?raw=true")
    const splacefire = new Audio("https://github.com/devgustavosantos/focus-timer-dark-mode/blob/main/assets/sound/fire-pit.wav?raw=true")
    const press = new Audio ("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const timeOverSound = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")


    function timeOver() {
        timeOverSound.play()
    }
    
    function Click() {
        press.play()
    }

    sjungle.loop

    srain.loop

    scoffeer.loop

    splacefire.loop
    
    return {
        timeOver,
        Click,
        sjungle,
        srain,
        scoffeer,
        splacefire
    }
}