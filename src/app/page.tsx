import HeaderByAnima from "./components/Navbar"
import  HeroByAnima   from "./components/Hero"
import { AboutByAnima} from "./components/AboutMe"
import {WorkByAnima } from "./components/Projects"

export default function Home() {
  return (
    <>
    <HeaderByAnima/>
    <HeroByAnima/>
    <AboutByAnima/>
    <WorkByAnima/>
    </>
  );
}
