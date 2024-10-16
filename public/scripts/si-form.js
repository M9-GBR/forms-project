(async () => {
    let a = await fetch('./public/countries.json')
    let json = await a.json()

    let select = document.querySelector('#country')

    for (const countries of json) {
        let opt = new Option(countries.name, countries.iso2)

        select.appendChild(opt)
    }
})()