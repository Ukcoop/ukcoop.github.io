use yew::{Html, Properties, function_component, html};

use crate::components::link::{Link, LinkStyle};

use crate::shared::Project;

#[derive(Properties, PartialEq)]
pub struct ProjectParams {
    pub project: Project,
}

#[function_component]
pub fn ProjectCard(params: &ProjectParams) -> Html {
    let project: Project = params.project.clone();

    html! {
        <div class="flex flex-col  sm:flex-row border-4 dark:border-gray-600 border-black rounded-md h-max w-full max-w-full">
            <div class="min-h-full w-full sm:w-80 min-w-80 overflow-hidden">
                <img src={format!("/static/images/{}", project.image)} alt={project.title.clone()} class="h-full w-full object-cover object-left" />
            </div>
            <div class="flex flex-col justify-between h-max w-full">
                <div class="p-2">
                    <a class="lg:text-xl text-4xl">{project.title}</a>
                    <div class="h-0 border dark:border-gray-600 border-black my-2"></div>
                    <a class="lg:text-lg text-3xl">{project.discription}</a>
                </div>
                <div class="p-2">
                    <a class="lg:text-xl text-4xl">{"Tech used"}</a>
                    <div class="h-0 border dark:border-gray-600 border-black my-2"></div>
                    <div class="flex flex-row flex-wrap">
                    {
                        project.tech_used.iter().map(|name| html! {
                            <a class="lg:px-3 lg:py-1 px-5 py-2 dark:bg-white bg-black dark:text-gray-950 text-white lg:text-lg text-3xl rounded-full m-1">{name}</a>
                        }).collect::<Html>()
                    }
                    </div>
                    <div class="h-0 border dark:border-gray-600 border-black my-2"></div>
                    <div class="flex flex-row flex-wrap">
                    {
                        if project.live_demo != *"" { html! {<Link text="Live demo" style={LinkStyle::Primary} href={project.live_demo}/>}} else {html! {}}
                    }
                    {
                        if project.source_code != *"" { html! {<Link text="Source code" style={LinkStyle::Secondary} href={project.source_code}/>} } else {html! {}}
                    }
                    </div>
                </div>
            </div>
        </div>
    }
}
