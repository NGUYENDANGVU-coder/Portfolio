import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Service from "../components/Service";
import Skill from "../components/Skill";
import Testimonial from "../components/Testimonial";
//import routes
import routes from "../config/routes";

const publicRoutes=[
    {path:routes.home,element:Home},
    {path:routes.about,element:About},
    {path:routes.contact,element:Contact},
    {path:routes.project,element:Projects},
    {path:routes.service,element:Service},
    {path:routes.skill,element:Skill},
    {path:routes.testimonial,element:Testimonial},
]
const privateRoutes=[
    
]
export {publicRoutes,privateRoutes};