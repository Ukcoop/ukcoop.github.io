use serde::Deserialize;

#[derive(Deserialize, PartialEq, Clone)]
pub struct Project {
    pub title: String,
    pub discription: String,
    pub tech_used: Vec<String>,
    pub image: String,
    pub live_demo: String,
    pub source_code: String,
}

#[derive(Deserialize)]
pub struct Projects {
    pub projects: Vec<Project>,
}
