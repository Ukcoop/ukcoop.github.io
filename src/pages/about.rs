use yew::{Html, html};

pub fn about() -> Html {
    return html! {
        <div class="flex flex-col p-5 h-screen max-h-screen bg-white dark:bg-gray-950">
            <a class="text-2xl">{"This will be my about page."}</a>
        </div>
    };
}
