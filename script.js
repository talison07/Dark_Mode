//Problema: Trocar o valor das variáveis sempre que houver alteração no switch

//Passos

//1-Pegar as variáveis css e o switch

//2-Criar um objeto com as variáveis para Dark e Light mode

//3-Criar função que troque as variáveis de acordo com a situação do switch: checked ou não

const html = document.querySelector("html")
const checkbox = document.querySelector("input[type='checkbox']")

const getStyle = (element, style) => {
    return window
        .getComputedStyle(element)
        .getPropertyValue(style)
}


const lightMode = {
    bg: getStyle(html, "--bg"),
    cardColor: getStyle(html, "--card-color"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorButton: getStyle(html, "--color-button"),
    colorText: getStyle(html, "--color-text"),
    boxShadow: getStyle(html, "--box-shadow")

}

const darkMode = {
    bg: "#010f22",
    cardColor: "#31007598",
    colorHeadings: "#6200ffd4",
    colorButton: "#09080fbd",
    colorText: "#fff",
    boxShadow: "0 -15px 15px rgba(10, 10, 50, 0.5), inset 0 -15px 15px rgba(10, 10, 50, 0.3), 0 15px 15px rgba(10, 10, 50, 0.5), inset 0 -15px 15px rgba(10, 10, 50, 0.3)",
}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => {
        html.style.setProperty(transformKey(key), colors[key])
    })

}



checkbox.addEventListener("change", ({ target }) => {
    target.checked ? changeColors(darkMode) : changeColors(lightMode)
})