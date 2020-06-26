/** @jsx h */
import { h } from 'preact'
import { Helmet } from 'react-helmet'
import Header from './components/header.js'
import Footer from './components/footer.js'
import { MDXProvider } from '@mdx-js/preact'
import Warning from './components/warning.js'
import Video from './components/video.js'
import Home from './components/feather/home.js'
import SEO from './components/seo.js'

export default ({ children, ...props }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Helmet>
        <link rel="stylesheet" href="/style.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter"
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </Helmet>
      <Header />

      <main className="flex-grow flex-shrink-0 py-5 px-4 w-full mx-auto max-w-7xl">
        <MDXProvider
          components={{
            Warning,
            Video,
            h1: (props) => <h1 className="text-4xl" {...props} />,
            inlineCode: ({ children }) => (
              <code
                style={{
                  backgroundColor: 'rgb(1,22,39)',
                  padding: 3,
                  margin: 3,
                  borderRadius: 5,
                  color: '#f0f0f0',
                }}
              >
                {children}
              </code>
            ),
            img: (props) => {
              return <img className="max-w-3xl mx-auto" {...props} />
            },
            pre: (props) => {
              return (
                <div
                  dangerouslySetInnerHTML={{
                    __html: props.children.props.children,
                  }}
                />
              )
            },
          }}
        >
          <div className="max-w-7xl mx-auto px-2">
            {props.title && (
              <a className="inline-flex items-center mb-4" href="/garden">
                <Home className="mr-2" />
                Blog Home
              </a>
            )}
            {props.title && <h1>{props.title}</h1>}
            {props.title && (
              <SEO
                title={props.title}
                description={props.description}
                ogImage={props.slug}
              />
            )}
            {children}
          </div>
        </MDXProvider>
      </main>
      <Footer />
      <script
        dangerouslySetInnerHTML={{
          __html: `function checkDarkMode() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return true;
  }
  return false;
}

if (checkDarkMode()) {
  document.documentElement.classList.add('mode-dark');
} else {
  document.documentElement.classList.remove('mode-dark');
}`,
        }}
      />
    </div>
  )
}
