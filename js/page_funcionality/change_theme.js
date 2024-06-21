var theme = 1
const css_theme = document.getElementById('theme');

function changeTheme() {

    switch (theme) {
        case 0: 
            css_theme.href = 'css/themes/dark_theme.css'
            theme++
        break;
        case 1: 
            css_theme.href = 'css/themes/light_theme.css'
            theme++
        break;
        case 2: 
            css_theme.href = 'css/themes/alfa_theme.css'
            theme = 0
        break;
    }

}