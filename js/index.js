import { Buttons } from "./controls.js"
import { Events } from "./events.js"
import { Sounds } from "./sounds.js"
import { Timer } from "./timer.js"
import {
    play,
    pause,
    minutesDisplay,
    secondsDisplay,
    jungle,
    rain,
    coffeer,
    placefire
} from "./elements.js"

let buttons = Buttons({
    play,
    pause
})

let sounds = Sounds()

let time = Timer({
    minutesDisplay,
    secondsDisplay,
    buttons
})

Events({
    time,
    buttons,
    sounds
})

/* https://github.com/Guildguy/FocusTimer-2.0/blob/main/index.js */
/* https://github.com/devgustavosantos/focus-timer-2.0 */