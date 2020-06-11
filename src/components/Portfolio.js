import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import SectionHeader from './SectionHeader';
import PortfolioItem from './PortfolioItem';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 50px;
  /* justify-items: center; */
  padding: 100px;
`;

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          title: 'Deaf Fire Art',
          summary:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error asperiores qui accusantium, fugiat non est incidunt nobis quis consequatur quidem labore, minima deleniti sed amet aut? Dolores quas ex odit temporibus nostrum, voluptatum beatae quidem nam ipsa veniam deleniti earum velit porro quis doloremque similique ducimus! Minima accusantium id quia.',
          url: 'www.deaf-fire-art.ca',
          source: 'https://github.com/JeMorriso/deaf-fire-art',
        },
        {
          title: 'Deaf Fire Art',
          summary:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error asperiores qui accusantium, fugiat non est incidunt nobis quis consequatur quidem labore, minima deleniti sed amet aut? Dolores quas ex odit temporibus nostrum, voluptatum beatae quidem nam ipsa veniam deleniti earum velit porro quis doloremque similique ducimus! Minima accusantium id quia.',
          url: 'www.deaf-fire-art.ca',
          source: 'https://github.com/JeMorriso/deaf-fire-art',
        },
      ],
    };
  }

  renderItems() {
    const { items } = this.state;
    return items.map((item) => (
      <PortfolioItem
        title={item.title}
        summary={item.summary}
        url={item.url}
        source={item.source}
        key={uuidv4()}
      />
    ));
  }

  render() {
    return (
      <section>
        <SectionHeader title="Portfolio" />
        <Grid>{this.renderItems()}</Grid>
      </section>
    );
  }
}

export default Portfolio;