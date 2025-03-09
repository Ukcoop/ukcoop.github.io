use wasm_bindgen_futures::spawn_local;
use yew::{Html, function_component, html, use_effect_with, use_state};

use crate::core::fetch_projects::{Projects, fetch_projects};

use crate::components::portfolio::project::ProjectCard;

#[function_component]
pub fn Portfolio() -> Html {
    let projects = use_state(|| Projects { projects: vec![] });

    {
        let projects_clone = projects.clone();
        use_effect_with((), move |_| {
            spawn_local(async move {
                let result = fetch_projects().await;
                let projects_value = match result {
                    Ok(result) => result,
                    Err(_) => Projects { projects: vec![] },
                };
                projects_clone.set(projects_value);
            });
            || ()
        });
    }

    return html! {
        <div class="flex flex-col p-5 h-screen max-h-screen bg-white dark:bg-gray-950">
            <a class="text-2xl">{"This will be my portfolio page."}</a>
            {if projects.projects.is_empty() {
                html! { <a>{"loading"}</a> }
            } else {
                projects.projects.iter().map(|project| html! {
                    <ProjectCard project={project.clone()} />
                }).collect::<Html>()
            }}
        </div>
    };
}
