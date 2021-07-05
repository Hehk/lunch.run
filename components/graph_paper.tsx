const size = '1rem'
const color = '#f4f4f4'
const css = `
.graph-paper {
  min-height: 100vh;
  background-color: #fff;
  background-size: ${size} ${size};
  background-image: 
    linear-gradient(0deg, transparent calc(${size} - 1px), ${color} calc(${size} - 1px), ${color} ${size}, transparent ${size}),
    linear-gradient(90deg, transparent calc(${ size } - 1px), ${color} calc(${ size } - 1px), ${color} ${ size }, transparent ${ size });
}
`
export default function GraphPaper () {
  return <style jsx>{css}</style>
}
