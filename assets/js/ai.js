// POST REQUEST NAAR DE SERVER
export async function askFetch(ask) {
    let text = ""
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question : ask })
    }
    //const response = await fetch("http://localhost:3000/ask", options)
    // https://serverless-ai-api.vercel.app/api/hello geeft hello world
    const response = await fetch("https://serverless-ai-api.vercel.app/api/hello", options)
    if (response.ok) {
        text = await response.text()
    } else {
        console.log(response)
        text = "Error 😱"
    }

    //text = "dit is een antwoord\nvolgende regel\n`javascript`en hier een block```dodument```en nu\ndit"

    text = text.replace(/```([^`]+)```/g, '<code class="block">$1</code>')

    const converter = new showdown.Converter()
    let html = converter.makeHtml(text) 

    html = html.replace(/\\n/g, "<br>")
    html = html.replace(/\\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;") 
    html = html.replace(/    /g, "&nbsp;&nbsp;&nbsp;&nbsp;")

    // nog steeds \" karakters in de tekst :(
    //console.log(html)
    return html
    
}