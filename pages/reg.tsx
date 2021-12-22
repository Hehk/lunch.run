import Image from "next/image"
import DefaultLayout from "../components/default_layout"
import regDumb from "../public/reg_dumb.jpg"
import regAndMe from "../public/me_and_reg.jpg"
import regForest from "../public/reg_forest.jpeg"
import P from "../components/P"

export default function Home() {
  return (
    <DefaultLayout title="Reg">
      <P>I have a dog named Reg.</P>
      <Image src={regDumb} alt="Reg being special" />
      <Image src={regForest} alt="Reg being special" />
      <Image src={regAndMe} alt="Reg and me" />
    </DefaultLayout>
  )
}
