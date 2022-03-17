const adviceId = document.querySelector("#advice-id")
const adviceContent = document.querySelector("#advice-content")

const fetchAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice')
    const advice = await response.json()
    console.log(advice)
    adviceId.innerHTML = advice.slip.id
    adviceContent.innerHTML = advice.slip.advice
}

fetchAdvice()