use yew::{html, Html};

pub fn home() -> Html {
    return html! {
        <div class="flex flex-col p-5 h-screen max-h-screen bg-white dark:bg-gray-950">
            <a class="text-2xl">{"Hello there, this is the homepage of my personal website."}</a>
        </div>
    };
}
