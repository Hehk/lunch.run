export default function Container ({ children }) {
  return <div className="container main-container px-20">
    {children}
    <style jsx>{`
      .main-container {
        width: 40rem;
      }
    `}</style>
  </div>
}
