use yew::{Html, html};

use crate::components::sections::hero::HeroSection;

pub fn home() -> Html {
    return html! {
        <div class="h-screen">
            <HeroSection />
        </div>
    };
}
