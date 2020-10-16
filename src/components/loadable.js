/** @jsx h */
import { Fragment, h } from 'preact'
import { Suspense, lazy } from 'preact/compat'
import { useState } from 'preact/hooks'

/**
 * Example usage
 * ---
 *
 * <Loadable location="/src/components/graph.js" data={someData} />
 *
 * This will load in `graph.js` when you click the "load component button"
 * and all other props will be passed to this component
 */

const importComponent = (location) => lazy(() => import(location))

const Loadable = ({ location, ...props }) => {
  const Fallback = () => <div>Loading...</div>

  const [Component, setComponent] = useState()
  const handleClick = () => {
    let Comp = importComponent(location)
    setComponent(
      <Suspense fallback={<Fallback />}>
        <div>
          <Comp {...props} />
        </div>
      </Suspense>
    )
  }

  try {
    if (!window) {
      console.log('this')
    }

    return (
      <Fragment>
        {Component}
        <button onClick={handleClick}>Load Component</button>
      </Fragment>
    )
  } catch (e) {
    return <Fallback />
  }
}

export { Loadable }
