/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class HomeSplash extends React.Component {
  render() {
    const {siteConfig} = this.props;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href=''>Get Started</Button>
            <Button href={siteConfig.repoUrl}>GitHub</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <div className="wrapper"> 
            <h2>What is DataHub</h2>
              <p>Datahub is a python library which helps you to produce synthetic datasets.</p>
              <p>Datahub has a slant towards financial services, but for the most it is generic.</p>
              <p>The core library is un-opinionated as to what you do with the generated data - it simply gives you a pandas dataframe or an object list - what you do with that dataset is up to you, Pandas for example has a vast array of support for persisitng dataframes. That said, we are working on service and UI capabilities which of course will persist data.</p>
              <p>The core library will however remain as vanilla and un-opinionated as possible</p>
              <p>Many of the features of datahub are drawn from existing python libraies dedicated to some facet of synthetic generation - Datahub while offering a lot of it's own functionality directly pulls in other libraries where applicable.</p>
              <h2>Overview of Synthetic data</h2>
              <ul>
                <li>Synthetic data is information that's is artificially manufactured rather than generated by *real-world events.</li>
                <li>Synthetic data is created algorithmically, and can be used as a stand-in for test datasets of production data.</li>
              </ul>
            </div>
          </div>
        </div>
    );
  }
}

module.exports = Index;