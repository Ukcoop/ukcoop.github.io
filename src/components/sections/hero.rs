use yew::{Html, function_component, html};

use super::nav_bar::NavBar;

#[function_component]
pub fn HeroSection() -> Html {
    return html! {
        <div class="w-screen h-9/10">
            <NavBar />
            <div class="flex h-full">
                <div class="flex flex-col bg-[#DCFAFF] justify-end w-1/3">
                    <img class="aspect-square" src="/static/profile.png" alt="profile" />
                </div>
                <div class="flex bg-[#DCFAFF] w-2/3">
                    <div class="w-1/3 h-full bg-gradient-to-r from-transparent to-gray-950"></div>
                    <div class="flex flex-col justify-center items-center w-2/3 h-full bg-gray-950">
                        <div class="flex flex-col">
                            <a class="text-4xl mb-4">{"Hello, i am Alexander Cooper"}</a>
                            <a class="text-xl">{"Rust backend engineer"}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    };
}
