import React from "react"
import { Link } from "gatsby"
import { css } from "theme-ui"

import useOptions from "gatsby-theme-notes/src/use-options"
import BreadcrumbDivider from "gatsby-theme-notes/src/components/breadcrumb-divider"
import BreadcrumbHome from "gatsby-theme-notes/src/components/breadcrumb-home"

export default ({ links }) => {
  const { homeText, breadcrumbSeparator } = useOptions()

  return (
    <nav
      css={css({
        mb: 3,
        "& a": {
          textDecoration: `none`,
          fontWeight: `bold`,
        },
      })}
    >
      <BreadcrumbHome text={homeText} />
      {links.map(link => (
        <>
          <BreadcrumbDivider text={breadcrumbSeparator} />
          <Link css={{
            "&:hover": {
              textDecoration: "underline"
            }
          }} to={link.url} key={link.url}>
            {link.name}
          </Link>
        </>
      ))}
    </nav>
  )
}