import HeaderByAnima from "./components/Navbar"
import  HeroByAnima   from "./components/Hero"
import { AboutByAnima} from "./components/AboutMe"
import {WorkByAnima } from "./components/Projects"
import {TestimonialsByAnima} from "./components/Testimonial"
import {HoobiesByAnima } from "./components/Hobbies"

export default function Home() {
  return (
    <>
    <HeaderByAnima/>
    <HeroByAnima/>
    <AboutByAnima/>
    <WorkByAnima/>
    <TestimonialsByAnima/>
    <HoobiesByAnima/>
    </>
  );
}
