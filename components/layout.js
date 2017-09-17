import Link from 'next/link'
import Head from 'next/head'
import Page from '@atlaskit/page';
//import StarterNavigation from '../containers/StarterNavigation';
import stylesheet from '@atlaskit/css-reset/dist/bundle.css';

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>

    <Page navigationWidth={false} navigation={[]}>
        { children }
    </Page>

  </div>
)