import { spinner } from "./index.js";
export class Details {
    constructor(id) {
        this.id = id;

    }

    async getGameDetails() {

        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '463527c278mshd1bb3a99711fd69p1660c6jsncb7a94338836',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            spinner.removeClass('d-none');
            $('body').addClass('overflow-hidden');
            const response = await fetch(url, options);
            const result = await response.json();
            spinner.addClass('d-none');
            $('body').removeClass('overflow-hidden');
            $('.details-section').removeClass('d-none');
            $('body').addClass('overflow-hidden');
            
            return result
        } catch (error) {
            console.error(error);
        }


    }

}   