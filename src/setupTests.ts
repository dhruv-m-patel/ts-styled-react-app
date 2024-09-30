import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { setProjectAnnotations } from '@storybook/react';
import * as globalStorybookConfig from '../.storybook/preview';

setProjectAnnotations(globalStorybookConfig as any);
