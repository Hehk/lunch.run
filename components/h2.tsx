import Baseline from '../components/baseline'

export default function H2 ({children}) {
  return <h2 className="font-mono text-3xl leading-8 py-4 h2-baseline">
    {children}
    <Baseline cls='h2' top={6} />
  </h2>
}
