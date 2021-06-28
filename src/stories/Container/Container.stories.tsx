import React from 'react';
import { Story, Meta } from '@storybook/react';
import './container.scss';

import { Container } from '../../components/Container/Container';
import { Link } from '../../components/Link/Link';

export default {
  title: 'Example/Container',
  component: Container,
} as Meta;

const Template: Story<ContainerProps> = args => (
  <Container {...args}>
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu rhoncus lectus. Nulla
        vestibulum fermentum ligula, quis pulvinar arcu consequat vitae. Aliquam eget enim
        dignissim, accumsan nulla sit amet, tincidunt sem. Fusce molestie varius malesuada. Nam nec
        pretium dolor, nec congue enim. Nullam sem sapien, finibus at ultrices accumsan, cursus sed
        ligula. Donec vel dui interdum, fringilla leo sollicitudin, dictum erat.
      </p>

      <p>
        Maecenas iaculis justo ac libero fringilla pellentesque. Donec ultricies eu nulla vel
        sodales. Proin vestibulum consequat tincidunt. Praesent molestie, erat a condimentum
        pulvinar, diam dui tempor justo, eget rhoncus dui leo id dolor. Ut varius lectus eget massa
        finibus euismod. Curabitur aliquet volutpat odio sed efficitur. Integer a urna ut felis
        consequat accumsan at vitae eros. Integer aliquam ac ligula non sollicitudin. Duis quis erat
        elementum, dictum augue eget, ultricies velit. Fusce porttitor dui vitae egestas commodo.
        Quisque bibendum eu augue sed feugiat. Vivamus consequat augue sit amet leo interdum, ac
        accumsan erat ornare.
      </p>

      <p>
        Proin nisl nisi, fringilla eget erat non, laoreet porttitor ante. Ut ut felis varius,
        eleifend sem nec, laoreet est. Proin ut tincidunt dui. Aliquam nibh tortor, semper eget est
        at, tempor convallis lorem. Sed feugiat, augue bibendum efficitur pharetra, dui nisl feugiat
        ex, id pellentesque risus magna id dui. Curabitur commodo lectus in sapien placerat
        placerat. Cras fringilla luctus accumsan. Phasellus eu nisl venenatis, placerat justo quis,
        sollicitudin ante. Maecenas sodales posuere risus, a gravida ipsum gravida eu.
      </p>
    </div>
  </Container>
);

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = { size: 'small' };

export const Large = Template.bind({});
Large.args = { size: 'large' };

export const Expand = Template.bind({});
Expand.args = { size: 'expand' };
