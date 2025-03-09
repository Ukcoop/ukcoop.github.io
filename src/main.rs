use yew::prelude::*;
use yew_router::prelude::*;

mod components;
mod core;
mod pages;

#[derive(Clone, Routable, PartialEq)]
enum Route {
    #[at("/")]
    Home,
    #[at("/portfolio")]
    Portfolio,
    #[at("/writing")]
    Writing,
    #[at("/about")]
    About,
    #[not_found]
    #[at("/404")]
    NotFound,
}

fn switch(routes: Route) -> Html {
    match routes {
        Route::Home => pages::home::home(),
        Route::Portfolio => html! {<pages::portfolio::Portfolio />},
        Route::Writing => pages::writing::writing(),
        Route::About => pages::about::about(),
        Route::NotFound => pages::not_found::not_found(),
    }
}

#[function_component]
fn App() -> Html {
    html! {
        <HashRouter>
            <Switch<Route> render={switch} />
        </HashRouter>
    }
}

fn main() {
    yew::Renderer::<App>::new().render();
}
