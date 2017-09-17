import Layout from './../components/layout'

import React, { PureComponent } from 'react';
import Button from '@atlaskit/button';
import CupcakeIpsum from '../containers/CupcakeIpsum';
import ContentWrapper from '../containers/ContentWrapper';
import PageTitle from '../containers/PageTitle';

export default class HomePage extends PureComponent {

  render() {
    return (
    <Layout>
      <ContentWrapper>
        <PageTitle>My awesome app</PageTitle>
        <CupcakeIpsum paragraphs={5} />
        <p>
          <Button
            appearance="primary"
            onClick={this.context.showModal}
          >Click for cupcakes</Button>
        </p>
        <p>
          <Button onClick={this.context.addFlag}>Fire a Flag</Button>
        </p>
      </ContentWrapper>
      </Layout>
    );
  }
}