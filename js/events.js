import {
    play,
    pause,
    stop,
    timeUp,
    timeDown,
    jungle,
    rain,
    coffeer,
    placefire,
    minutesDisplay
} from "./elements.js"

export function Events({
    time,
    buttons,
    sounds
}) {
    play.addEventListener('click', ()=>{
        time.TimeRun()
        buttons.Play()
        sounds.Click()
    })

    pause.addEventListener('click', ()=>{
        time.Pause()
        buttons.Pause()
        sounds.Click()
    })

    stop.addEventListener('click', ()=>{
        time.Reset()
        buttons.Reset()
        sounds.Click()
    })

    timeUp.addEventListener('click', ()=>{
        time.TimeUp()
        sounds.Click()
    })

    timeDown.addEventListener('click', ()=>{
        time.TimeDown()
        sounds.Click()
    })

    jungle.addEventListener('click', ()=>{
        sounds.Click()
        sounds.sjungle.play()
    })

    rain.addEventListener('click', ()=>{
        sounds.Click()
        sounds.srain.play()
    })

    coffeer.addEventListener('click', ()=>{
        sounds.Click()
        sounds.scoffeer.play()
    })

    placefire.addEventListener('click', ()=>{
        sounds.Click()
        sounds.splacefire.play()
    })

    minutesDisplay.addEventListener('click', ()=>{
        time.Select()
    })

    return {
        play,
        pause,
        stop,
        timeUp,
        timeDown,
        jungle,
        rain,
        coffeer,
        placefire,
        minutesDisplay
    }
}