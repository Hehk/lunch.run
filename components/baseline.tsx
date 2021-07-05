export default function Baseline ({ cls, top }) {
  return <style jsx>{`
    .${cls}-baseline {
      position: relative;
      top: ${top}px;
    }
  `}</style>
}
