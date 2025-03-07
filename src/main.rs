use yew::prelude::*;
use yew_router::prelude::*;

mod components;
mod pages;

#[derive(Clone, Routable, PartialEq)]
enum Route {
    #[at("/")]
    Home,
    #[not_found]
    #[at("/404")]
    NotFound,
}

fn switch(routes: Route) -> Html {
    return match routes {
        Route::Home => pages::home::home(),
        Route::NotFound => pages::not_found::not_found(),
    };
}

#[function_component(Main)]
fn app() -> Html {
    return html! {
        <BrowserRouter>
            <Switch<Route> render={switch} />
        </BrowserRouter>
    };
}

fn main() {
    yew::Renderer::<Main>::new().render();
}
