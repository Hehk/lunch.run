type props = {
  cls: string
  top: number
}

export default function Baseline ({ cls, top }: props) {
  return <style jsx>{`
    .${cls}-baseline {
      position: relative;
      top: ${top}px;
    }
  `}</style>
}
