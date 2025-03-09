use reqwasm::Error as ReqwasmError;
use std::io;

use reqwasm::http::Request;
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

fn convert_reqwasm_error<T>(result: Result<T, ReqwasmError>) -> Result<T, io::Error> {
    result.map_err(|e| match e {
        _ => io::Error::new(io::ErrorKind::Other, format!("Reqwasm error: {}", e)),
    })
}

pub async fn fetch_projects() -> Result<Projects, io::Error> {
    let response = convert_reqwasm_error(Request::get("/static/json/projects.json").send().await)?;

    return Ok(convert_reqwasm_error(response.json::<Projects>().await)?);
}
