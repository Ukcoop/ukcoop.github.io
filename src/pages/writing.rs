use yew::{Html, html};

pub fn writing() -> Html {
    return html! {
        <div class="flex flex-col p-5 h-screen max-h-screen bg-white dark:bg-gray-950">
            <a class="text-2xl">{"This is where i am going to put stuff i write about like how i built a backend in rust."}</a>
        </div>
    };
}
