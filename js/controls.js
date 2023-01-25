export function Buttons({
    play,
    pause
}) {

    function Play() {
        play.classList.toggle('hide')
        pause.classList.toggle('hide')
    }
    
    function Pause() {
        pause.classList.toggle('hide')
        play.classList.toggle('hide')
    }
    
    function Reset() {
        play.classList.remove('hide')
        pause.classList.add('hide')
    }
    
    return {
        Play,
        Pause,
        Reset
    }
}