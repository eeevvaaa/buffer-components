import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import Input from './index';

storiesOf('Input', module)
  .addDecorator(checkA11y)
  .add('default', () => <Input />)
  .add('with custom onFocus handler', () => <Input onFocus={action('onFocus')} />)
  .add('type=textarea', () => <Input type="textarea" />);
