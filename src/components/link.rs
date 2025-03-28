use yew::{Html, Properties, function_component, html};

#[derive(PartialEq)]
pub enum LinkStyle {
    Primary,
    Secondary,
}

#[derive(Properties, PartialEq)]
pub struct LinkParams {
    pub text: String,
    pub style: LinkStyle,
    pub href: String,
}

#[function_component]
pub fn Link(props: &LinkParams) -> Html {
    let applied_style = match props.style {
        LinkStyle::Primary => "flex items-center justify-center w-max lg:h-10 h-18 ml-2 bg-black dark:bg-gray-300 hover:bg-gray-900 hover:dark:bg-white text-white dark:text-black lg:text-lg text-3xl rounded-md p-2 px-4".to_string(),
        LinkStyle::Secondary => "flex items-center justify-center w-max lg:h-10 h-18 ml-2 bg-transparent border-2 border-black dark:border-gray-500 hover:bg-gray-200 hover:dark:bg-gray-900 text-black dark:text-white lg:text-lg text-3xl rounded-md p-2 px-4".to_string()
    };

    return html! {
        <a class={applied_style} target="_blank" href={props.href.clone()}>{props.text.clone()}</a>
    };
}
