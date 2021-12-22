import Link from "next/link"
import DefaultLayout from "../components/default_layout"
import P from "../components/P"

export default function Running() {
  return <DefaultLayout title="Running">
    <P>I run a bunch, sometimes with my dog.</P>
    <P>Also, I maintain a list of all the running groups in Austin, TX at <Link href="/austin"><a>/austin</a></Link></P>
  </DefaultLayout>
}