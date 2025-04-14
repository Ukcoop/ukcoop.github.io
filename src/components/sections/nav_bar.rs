use yew::{function_component, html, Html};

#[function_component]
pub fn NavBar() -> Html {
    return html! {
        <div class="flex justify-between items-center w-full lg:h-14 h-20 pl-4">
            <a class="flex items-center lg:h-14 h-20 mx-2 lg:text-xl text-3xl" href="#/">{"Alexander Cooper"}</a>
            <div class="flex justify-end items-center pr-4">
                <a class="flex items-center lg:h-14 h-20 mx-2 lg:text-xl text-3xl" href="#/portfolio">{"Portfolio"}</a>
                //<a class="flex items-center lg:h-14 h-20 mx-2 lg:text-xl text-3xl" href="#/writing">{"Writing"}</a>
                <a class="flex items-center lg:h-14 h-20 mx-2 lg:text-xl text-3xl" href="#/about">{"About me"}</a>
            </div>
        </div>
    };
}
