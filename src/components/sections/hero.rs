use yew::{Html, function_component, html};

use crate::components::link::{Link, LinkStyle};

use super::nav_bar::NavBar;

#[function_component]
pub fn HeroSection() -> Html {
    return html! {
        <div class="h-screen">
            <div class="w-screen lg:h-9/10 h-7/8">
                <NavBar />
                <div class="flex lg:flex-row flex-col-reverse h-9/10">
                    <div class="flex lg:flex-col flex-row bg-[#DCFAFF] justify-end lg:w-1/3 w-full lg:overflow-hidden">
                        <img class="aspect-square" src="/static/profile.png" alt="profile" />
                    </div>
                    <div class="flex lg:flex-row flex-col-reverse bg-[#DCFAFF] lg:w-2/3 h-full">
                        <div class="lg:w-1/3 lg:h-full h-40 lg:bg-gradient-to-r bg-gradient-to-t from-transparent to-gray-950"></div>
                        <div class="flex lg:flex-row flex-col-reverse justify-center items-center lg:w-2/3 h-full bg-gray-950">
                            <div class="flex flex-col h-full items-center justify-center">
                                <a class="lg:text-4xl text-5xl mb-4">{"Hello, i am Alexander Cooper"}</a>
                                <a class="lg:text-xl text-4xl">{"Rust backend engineer"}</a>
                                <div class="h-0 w-full border dark:border-gray-600 border-black my-2"></div>
                                <div class="flex">
                                    <Link text="Email: coop.main@protonmail.com" style={LinkStyle::Primary} href="mailto:coop.main@protonmail.com" />
                                    <Link text="Github" style={LinkStyle::Secondary} href="https://github.com/ukcoop" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center items-center w-screen lg:h-1/10 h-5">
                //<a class="text-6xl">{"⌄"}</a> only needed if there is more content
            </div>
        </div>
    };
}
