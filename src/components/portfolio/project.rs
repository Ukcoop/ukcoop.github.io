use crate::core::fetch_projects::Project;
use yew::{Html, Properties, function_component, html};

#[derive(Properties, PartialEq)]
pub struct ProjectParams {
    pub project: Project,
}

#[function_component]
pub fn ProjectCard(params: &ProjectParams) -> Html {
    let project: Project = params.project.to_owned();

    html! {
        <div class="flex flex-col sm:flex-row h-max w-full max-w-full">
            <div class="min-h-full w-full sm:w-80 min-w-80 overflow-hidden">
                <img src={format!("/static/images/{}", project.image)} alt={project.title.clone()} class="h-full w-full object-cover object-left" />
            </div>
            <div class="flex flex-col justify-between h-max w-full bg-gray-800 dark:bg-gray-800">
                <div class="p-2">
                    <a class="text-xl">{project.title}</a>
                    <div class="h-0 border border-gray-600 my-2"></div>
                    <a class="text-md">{project.discription}</a>
                </div>
                <div class="p-2">
                    <a class="text-xl">{"Tech used"}</a>
                    <div class="h-0 border border-gray-600 my-2"></div>
                    <div class="flex flex-row flex-wrap">
                    {
                        project.tech_used.iter().map(|name| html! {
                            // this is temporary
                            <a class="p-1">{name}</a>
                        }).collect::<Html>()
                    }
                    </div>
                    <div class="h-0 border border-gray-600 my-2"></div>
                    <div class="flex flex-row flex-wrap">
                    {
                        if project.live_demo != "".to_string() { html! {<a href={project.live_demo}>{"Live demo"}</a>}} else {html! {}}
                    }
                        <a href={project.source_code}>{"Source code"}</a>
                    </div>
                </div>
            </div>
        </div>
    }
}
