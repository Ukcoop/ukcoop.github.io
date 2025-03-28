use yew::{Html, function_component, html};

#[function_component(Code)]
pub fn code() -> Html {
    html! {
        <div class="flex font-mono bg-gray-950 text-[#d4d4d4]">
            <pre>
                <span class="text-[#569cd6]">{"var"}</span>{" "}
                <span class="text-[#9cdcfe]">{"d"}</span>{" "}
                <span class="text-[#d4d4d4]">{"="}</span>{" "}
                <span class="text-[#b5cea8]">{"0"}</span>
                <span class="text-[#d4d4d4]">{";"}</span>
                <br/>
                <span class="text-[#569cd6]">{"function"}</span>{" "}
                <span class="text-[#9cdcfe]">
                    <span class="text-[#dcdcaa]">{"setup"}</span>
                </span>
                <span class="text-[#d4d4d4]">{"() {"}</span>
                <br/>
                {"  "}<span class="text-[#9cdcfe]">{"createCanvas"}</span>{"("}
                <span class="text-[#b5cea8]">{"400"}</span>{", "}
                <span class="text-[#b5cea8]">{"400"}</span>{")"}
                <span class="text-[#d4d4d4]">{";"}</span>
                <br/>
                {"  "}<span class="text-[#9cdcfe]">{"background"}</span>{"("}
                <span class="text-[#b5cea8]">{"100"}</span>{")"}
                <span class="text-[#d4d4d4]">{";"}</span>
                <br/>
                {"  "}<span class="text-[#9cdcfe]">{"noStroke"}</span>{"()"}
                <span class="text-[#d4d4d4]">{";"}</span>
                <br/>
                <span class="text-[#d4d4d4]">{"}"}</span>
                <br/>
                <span class="text-[#569cd6]">{"function"}</span>{" "}
                <span class="text-[#9cdcfe]">
                    <span class="text-[#dcdcaa]">{"draw"}</span>
                </span>
                <span class="text-[#d4d4d4]">{"() {"}</span>
                <br/>
                {"  "}<span class="text-[#c586c0]">{"if"}</span>{"("}
                <span class="text-[#9cdcfe]">{"d"}</span>{" "}
                <span class="text-[#d4d4d4]">{" > "}</span>
                <span class="text-[#b5cea8]">{"400"}</span>{") {"}
                <br/>
                {"    "}<span class="text-[#9cdcfe]">{"d"}</span>{" = "}
                <span class="text-[#b5cea8]">{"0"}</span>
                <span class="text-[#d4d4d4]">{";"}</span>
                <br/>
                <span class="text-[#d4d4d4]">{"  }"}</span>
                <br/>
                {"  "}<span class="text-[#dcdcaa]">{"rect"}</span>{"("}
                <span class="text-[#dcdcaa]">{"random"}</span>{"("}
                <span class="text-[#b5cea8]">{"10"}</span>{", "}
                <span class="text-[#b5cea8]">{"400"}</span>{")"}
                <span class="text-[#d4d4d4]">{", "}</span>
                <span class="text-[#9cdcfe]">{"d"}</span>
                <span class="text-[#d4d4d4]">{", "}</span>
                <span class="text-[#b5cea8]">{"10"}</span>
                <span class="text-[#d4d4d4]">{", "}</span>
                <span class="text-[#b5cea8]">{"20"}</span>
                <span class="text-[#d4d4d4]">{");"}</span>
                <br/>
                {"  "}<span class="text-[#9cdcfe]">{"d"}</span>{" = "}
                <span class="text-[#9cdcfe]">{"d"}</span>{" + "}
                <span class="text-[#b5cea8]">{"1"}</span>
                <span class="text-[#d4d4d4]">{";"}</span>
                <br/>
                <span class="text-[#c586c0]">{"if"}</span>{"("}
                <span class="text-[#9cdcfe]">{"d"}</span>{" "}
                <span class="text-[#d4d4d4]">{"=== "}</span>
                <span class="text-[#b5cea8]">{"400"}</span>{") {"}
                <br/>
                {"  "}<span class="text-[#dcdcaa]">{"fill"}</span>{"("}
                <span class="text-[#dcdcaa]">{"random"}</span>{"("}
                <span class="text-[#b5cea8]">{"0"}</span>{", "}
                <span class="text-[#b5cea8]">{"255"}</span>{")"}
                <span class="text-[#d4d4d4]">{", "}</span>
                <span class="text-[#dcdcaa]">{"random"}</span>{"("}
                <span class="text-[#b5cea8]">{"0"}</span>{", "}
                <span class="text-[#b5cea8]">{"255"}</span>{")"}
                <span class="text-[#d4d4d4]">{", "}</span>
                <span class="text-[#dcdcaa]">{"random"}</span>{"("}
                <span class="text-[#b5cea8]">{"0"}</span>{", "}
                <span class="text-[#b5cea8]">{"255"}</span>{")"}
                <span class="text-[#d4d4d4]">{");"}</span>
                <br/>
                <span class="text-[#d4d4d4]">{"  }"}</span>
                <br/>
                <span class="text-[#d4d4d4]">{"}"}</span>
            </pre>
        </div>
    }
}

#[function_component]
pub fn Sketch() -> Html {
    return html! {
        <div class="">
            <script>{"myCanvas.parent('canvas-container')"}</script>
            <h1 class="text-3xl pb-5">{"My first program"}</h1>
            <p class="text-lg pb-5">{"Here is the first piece of code i wrote, it is a simple p5js sketch."}</p>
            <div class="pb-5" id="canvas-container"></div>
            <div class="h-0 border dark:border-gray-600 border-black my-2"></div>
            <p class="text-lg pb-5">{"Below is the original code."}</p>
            <Code />
        </div>
    };
}
