import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);


function App() {
    return (
        <div className={"flex-center h-[100vh]"}>
            <h1 className={"text-5xl text-blue-400"}>Hello, GSAP</h1>
        </div>
    );
}
export default App;