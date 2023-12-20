import Header from "./components/Header.js";
import { setPersonalInfo } from "./api/PersonalInfo.js";
import HomePage from "./page/HomePage.js";
import SignUpPage from "./page/SignupPage.js";

class App {
    constructor({ $target }) {
        this.$target = $target;
    }

    async render() {
        await setPersonalInfo();

        new Header({ $target: this.$target}).render();
        const $main = document.createElement('main');
        $main.setAttribute('id', 'page_content');
        this.$target.appendChild($main);

        const homePage = new HomePage({ $target: $main });
        const signUpPage = new SignUpPage({ $target : $main });
        
        homePage.render();
        
        document.addEventListener('urlChange', ({ detail: {url} }) => {
            $main.innerHTML = '';

            if(url == '/web'){
                homePage.render();
            } else if(url == 'web/signup'){
                signUpPage.render();
            }

        });
    }
}

export default App;