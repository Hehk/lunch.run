import Baseline from '../components/baseline'

export default function H1 ({children}) {
  return <h1 className="font-mono text-5xl py-4 h1-baseline">
    {children}
    <Baseline cls='h1' top={7} />
  </h1>
}
