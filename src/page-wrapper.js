/** @jsx h */
import { h } from 'preact'
import { Helmet } from 'react-helmet'
import Header from './components/header.js'
import Footer from './components/footer.js'
import { MDXProvider } from '@mdx-js/preact'
import Warning from './components/warning.js'
import Video from './components/video.js'
import { Loadable } from './components/loadable.js'
import Home from './components/feather/home.js'
import SEO from './components/seo.js'

export default ({ children, ...props }) => {
  return (
    <div id="pageWrapper" class="min-h-screen grid overflow-x-hidden">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/style.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
        />
        <meta name="theme-color" content="#663399" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </Helmet>
      <Header />

      <main
        class="py-4"
        style={{
          gridColumn: '2 / span 2',
        }}
      >
        <MDXProvider
          components={{
            Warning,
            Video,
            Loadable,
            h1: (props) => <h1 class="text-4xl" {...props} />,
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
              return <img class="md:max-w-3xl mx-auto" {...props} />
            },
            blockquote: ({ children }) => {
              return <blockquote class="px-8 italic">{children}</blockquote>
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
          <div class="max-w-7xl mx-auto px-2 md:px-0">
            {props.title && (
              <a class="inline-flex items-center mb-4" href="/garden">
                <Home class="mr-2" alt="" />
                Digital Garden Home
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
