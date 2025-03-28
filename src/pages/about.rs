use yew::{Html, html};

use crate::components::sections::{nav_bar::NavBar, sketch::Sketch};

pub fn about() -> Html {
    return html! {
        <div>
            <NavBar />
            <div class="flex flex-col p-5 h-screen max-h-screen bg-white dark:bg-gray-950">
                <div class="flex flex-col items-center">
                    <div class="lg:w-1/2 px-2">
                        <h1 class="text-3xl pb-5">{"About me"}</h1>
                        <p class="text-lg pb-2">{"Hello, i am Alexander Cooper, i am a rust backend engineer. I started programming in 2018 with javascript, i learned from daniel shiffman from the coding train, i watched the \"Start learning here\" playlist on learning to code in javascript."}</p>
                        <p class="text-lg pb-5">{"I found out about rust from bogdan from lets get rusty and he reccomended to me to be a rust backend engineer, i started my rust jurney with the asvent of code. i got pretty par, i got to day 15."}</p>
                        <p class="text-lg pb-5">{"My next project was a full stack rust app with actix web for the backend and yew for the frontend (Ukcoop/amazingCal), so i can learn how to build a industy grade porject so i can get a job."}</p>
                        <div class="h-0 border dark:border-gray-600 border-black my-2"></div>
                        <Sketch />
                    </div>
                </div>
            </div>
        </div>
    };
}
