import { Games } from "./Games.js";
import { rowHTML } from "./index.js";
import { Details } from "./Details.js";
import { detailsSection } from "./index.js";

export class UI {



    async displayingData(ctg) {
        const gamesByCat = await new Games(ctg);
        const allGames = await gamesByCat.getGames();
        // console.log(allGames);
        rowHTML.html('');
        for (let i = 0; i < allGames.length; i++) {
            rowHTML.append(`
                <div class="col-lg-3 p-2 ">
                    <div class="inner card card-custom card-border p-0" id="${allGames[i].id}">
                        <img src="${allGames[i].thumbnail}" class="card-img-top">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h5 class="card-title card-title-custom">${allGames[i].title}</h5>
                                <a href="#"
                                    class="btn btn-custom d-flex justify-content-center align-items-center">Free</a>
                            </div>
                            <p class="card-text text-center mt-3">${allGames[i].short_description.split(" ", 8)}</p>
                        </div>
                        <div class="card-footer d-flex justify-content-between">
                         
                            <span class="badge badge-custom">${allGames[i].genre}</span>
                            <span class="badge badge-custom">${allGames[i].platform}</span>
                         
                        </div>
                    </div>
                </div>`);
        }

    }
    async displayingGameDetails(id) {
        const gameDetails = await new Details(id);
        const details = await gameDetails.getGameDetails();
        console.log(details);
        detailsSection.html(`
            <div class="d-flex justify-content-between align-items-center w-100 mb-5">
            <h3 class="">Game Details</h3>
            <i class="fa-solid fa-xmark close-btn"></i>   
        </div>
        <div class="row">
            <div class="col-lg-4">
                <div class="inner-image     ">
                    <img src="${details.thumbnail}">
                </div>
            </div>
            <div class="col-lg-8">
                <h3>Title : ${details.title}</h3>
                <h5 class="mb-3 ">Category : <span class="cyan-bg p-1 ps-2 pe-2"> ${details.genre}</span></h5>
                <h5 class="mb-3">Platform : <span class="cyan-bg p-1 ps-2 pe-2"> ${details.platform}</span></h5>
                <h5 class="mb-3">Status : <span class="cyan-bg p-1 ps-2 pe-2">${details.status}</span></h5>
                <p class="game-desc">${details.description}</p>
                <button class="btn button det-btn border-warning">Show Game</button>
            </div>
        </div>`);
        $('.det-btn').on('click' , function(){
            window.location.href=`${details.game_url}`;
        })
        $('.close-btn').on('click' , function(){
            $('.details-section').addClass('d-none');
            $('body').removeClass('overflow-hidden');
        })
    }
}