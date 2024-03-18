const addQuoteButton = document.querySelector('#submit-quote-button')
const quotePlaque = document.querySelector('.quote-plaque')
const quoteInput = document.querySelector('#quote-input')
const quoteType = document.querySelector('#quote-type')
const actorQuoteSection = document.querySelector('.actor-quotes')
const musicianQuoteSection = document.querySelector('.musician-quotes')
const authorQuoteSection = document.querySelector('.author-quotes')
const quoterInput = document.querySelector('#quoter-input')
const quoter = document.querySelector('#quoter-input')


addQuoteButton.onclick = function() {
    const clonedPlaque = quotePlaque.cloneNode(true);
    const clonedPlaqueQuote = clonedPlaque.querySelector('em')
    const clonedPlaqueQuoter = clonedPlaque.querySelector('small')
  
    clonedPlaqueQuoter.innerHTML = '- ' + quoterInput.value
    
    if (quoteType.value === 'author') {
        clonedPlaqueQuote.innerHTML = `"` + quoteInput.value + `"`
        authorQuoteSection.appendChild(clonedPlaque)
        return
    }

    if (quoteType.value === 'musician') {
        clonedPlaqueQuote.innerHTML = `"` + quoteInput.value + `"`
        musicianQuoteSection.appendChild(clonedPlaque)
        return
    }

    if (quoteType.value === 'actor') {
        clonedPlaqueQuote.innerHTML = `"` + quoteInput.value + `"`
        actorQuoteSection.appendChild(clonedPlaque)
        return
    }

}
