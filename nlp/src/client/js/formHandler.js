function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    if(Client.checkForName(formText)==true){
    fetch('http://localhost:8081/analysis'),{
        method: 'POST',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "http://localhost:8081/"
        },
        body: JSON.stringify({text: formText})
    }
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('polarity').innerHTML=res.polarity
        document.getElementById('subjectivity').innerHTML=res.subjectivity
        document.getElementById('polarity-confidence').innerHTML=res.polarity_confidence
        document.getElementById('subjectivity-confidence').innerHTML=res.subjectivity_confidence
        document.getElementById('results').innerHTML = res.message
    })
} else{
    console.log('Text is invalid');
}
}

export { handleSubmit }
