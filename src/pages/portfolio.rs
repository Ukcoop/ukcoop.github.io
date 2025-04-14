use yew::{function_component, html, use_state, Html};

use crate::components::portfolio::project::ProjectCard;
use crate::components::sections::nav_bar::NavBar;

use crate::shared::Projects;

#[function_component]
pub fn Portfolio() -> Html {
    let projects =
        use_state(
            || match serde_json::from_str(include_str!("../../json/projects.json")) {
                Ok(projects) => projects,
                Err(_) => Projects { projects: vec![] },
            },
        );

    return html! {
        <div>
            <NavBar />
            <div class="flex flex-col p-5 h-screen max-h-screen bg-white dark:bg-gray-950">
                <div class="flex flex-col justify-center items-center w-full lg:h-30 h-64 pb-5">
                    <a class="lg:text-3xl text-5xl font-bold text-center">{"This is my portfolio"}</a>
                    <a class="lg:text-xl text-3xl text-center">{"Here you can find all of my relavant projects"}</a>
                </div>
                {
                projects.projects.iter().map(|project| html! {
                    <ProjectCard project={project.clone()} />
                }).collect::<Html>()
                }
            </div>
        </div>
    };
}
