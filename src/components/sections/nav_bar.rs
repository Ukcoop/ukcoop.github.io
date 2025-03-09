use yew::{Html, function_component, html};

#[function_component]
pub fn NavBar() -> Html {
    return html! {
        <div class="flex justify-end items-center h-14 pr-4">
            <a class="mx-2 text-xl" href="#/portfolio">{"Portfolio"}</a>
            <a class="mx-2 text-xl" href="#/writing">{"Writing"}</a>
            <a class="mx-2 text-xl" href="#/about">{"About me"}</a>
        </div>
    };
}
