import React from "react"
import DefaultLayout from "../components/default_layout"
import H3 from "../components/h3"
import List from "../components/list"
import P from "../components/P"
import Link from "../components/Link"

export default function Home() {
  return (
    <DefaultLayout hideHome>
      <P>
        This is the website of Kyle Henderson. I am a software engineer at
        Superhuman that is obsessed with checklists and serif fonts.
      </P>
      <P>
        I spend most of my free time running and learning. Below are the things
        I am currently working on.
      </P>
      <H3>Current Projects</H3>
      <List>
        <li>
          <Link href="https://github.com/Hehk/roam-css">Roam Theme</Link>, I am
          actively iterating on my own roam theme after a couple years of using
          a bunch.
        </li>
        <li>
          <Link href="/austin">/austin</Link>, a collected list of all the
          running groups I have found in Austin, TX.
        </li>
        <li>
          <Link href="https://github.com/Hehk/Scripts">Personal Script</Link>, I
          am on a personal crusade over the next couple months to automate a
          bunch of the things I do regularly.
        </li>
      </List>
      <H3>Current Learning</H3>
      <List>
        <li>
          <Link href="https://craftinginterpreters.com/">
            Crafting Interpreters
          </Link>
          , I am going through this book and also using it as a project to get
          better at OCaml
        </li>
        <li>
          <Link href="https://course.fast.ai/">Fast.ai</Link>, I am learning to
          curve fit like a champ!
        </li>
        <li>Nederlands. Ik hou van klompen.</li>
      </List>
    </DefaultLayout>
  )
}
