let files = []
let queue = []
let showName = false
let currentAudio = null
const player = document.getElementById("player")

document.getElementById("folder").addEventListener("change", e => {
    files = Array.from(e.target.files).filter(f => f.type.startsWith("audio"))
    queue = files
    updateDOM()
})

function playRandom() {
    if (queue.length === 0) return

    currentAudio = queue[Math.floor(Math.random() * queue.length)]
    const url = URL.createObjectURL(currentAudio)

    player.src = url
    player.play()

    showName = false
    updateDOM()
}
function toggleShowName() {
    showName = !showName
    updateDOM()
}
function removeFromQueue() {
    const index = queue.indexOf(currentAudio)
    queue.splice(index, 1)

    if (queue.length == 0) {
        cellebrate()
    } else {
        playRandom()
    }
}
function cellebrate() {
    console.log("party time")
    player.pause()
    updateDOM()
}
function updateDOM() {
    queueLength.textContent = "Queue size: " + queue.length
    filename.textContent = showName ? currentAudio.name : ""
}