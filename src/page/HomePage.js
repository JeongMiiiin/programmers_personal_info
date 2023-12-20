import ContentTitle from "../components/ContentTitle.js";
import CardView from "../components/CardView.js";

class HomePage {
    constructor({ $target }){
        this.$target = $target;
    }

    render() {
        new ContentTitle({ $target: this.$target, title: 'Great People' }).render();
        new CardView({ $target: this.$target }).render();
    }
}

export default HomePage;