export default function (...args: (string | undefined)[]) {
  return args.filter(x => x).join(' ')
}
