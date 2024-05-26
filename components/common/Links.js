import NextLink from 'next/link'

export const Link = ({ children, ...props }) => {
  return (
    <NextLink {...props}>
      <a className="px-2 text-sky-600 hover:underline">{children}</a>
    </NextLink>
  )
}

export const NavLink = ({ children, ...props }) => {
  return (
    <NextLink {...props}>
      <a className="ease my-2  p-2 text-center text-white hover:text-sky-300 hover:shadow-sm">
        {children}
      </a>
    </NextLink>
  )
}
