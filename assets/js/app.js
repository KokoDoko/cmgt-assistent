import { testFetch, askFetch } from "./ai.js"

const form = document.querySelector("#form")
const formbtn = document.querySelector("#update")
const feedback = document.querySelector("#feedback")
const chatfield = document.querySelector("#chatinput")
const progress = document.querySelector("progress")

form.addEventListener("submit", (e) => askQuestion(e))

async function askQuestion(e) {
    e.preventDefault()
    let str = chatfield.value
    domShowQuestion(str)
    const answer = await askFetch(str)
    chatfield.value = ""
    domShowAnswer(answer)
}

export function domShowQuestion(value) {
    enableUI(false)
    const div = document.createElement("div")
    div.classList.add("mr-6", "m-1", "p-3", "has-left-bubble", "is-size-5", "bubble-left", "animate-left")
    div.innerText = value
    feedback.appendChild(div)
}

export function domShowAnswer(value) {
    enableUI(true)
    const div = document.createElement("div")
    div.classList.add("ml-6", "m-1", "p-3", "has-right-bubble", "is-size-5", "bubble-right", "animate-right")
    div.innerHTML = value.trim()
    feedback.appendChild(div)
}

function enableUI(enabled) {
    if(enabled) {
        form.classList.remove("disabledform")
        progress.classList.add("hidden")
    } else {
        form.classList.add("disabledform")
        progress.classList.remove("hidden")
    }
    chatfield.disabled = !enabled
    formbtn.disabled = !enabled
}
