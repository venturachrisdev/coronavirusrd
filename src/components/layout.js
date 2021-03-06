/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container">
        <br />
        <main>{children}</main>
        <br />
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              Construido con ❤ por <a href="https://twitter.com/zerquix18">Luis</a>. El código fuente está disponible en <a href="https://github.com/zerquix18/coronavirusrd">Github</a>.
            </p>
            <p>
              Este sitio no está afiliado a Salud Pública ni a ninguna institución. Tampoco pretende hacer recomendaciones o predecir el futuro. Su objetivo principal es el análisis de los datos, provenientes directamente de Salud Pública. Para más información sobre el coronavirus, por favor visitar el <a href="http://coronavirusrd.gob.do/">sitio oficial de Salud Pública</a>.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
