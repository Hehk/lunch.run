import NextLink, { LinkProps } from "next/link"

export default function Link({
  children,
  ...props
}: React.PropsWithChildren<LinkProps>) {
  return (
    <>
      <NextLink {...props}>
        <a>{children}</a>
      </NextLink>
      <style jsx>{`
        a {
          color: black;
        }
      `}</style>
    </>
  )
}
