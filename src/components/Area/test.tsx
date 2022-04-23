import { screen } from '@testing-library/react';
import { AvatarContext, AvatarContextProvider } from 'contexts/AvatarContext';
import { renderWithTheme } from 'utils/tests/helpers';

import { Area } from '.';
import React from 'react';

describe('<Area />', () => {
  it('should render with border and without close button by default', () => {
    const { container } = renderWithTheme(
      <AvatarContextProvider>
        <AvatarContext.Consumer>
          {(value) => (
            <>
              {value.handleChangeStatus('initial')}
              <Area>Test</Area>
            </>
          )}
        </AvatarContext.Consumer>
      </AvatarContextProvider>
    );

    expect(screen.queryByLabelText(/close button/i)).not.toBeInTheDocument();
    expect(screen.getByLabelText(/wrapper/i)).toHaveStyle({
      border: '2px dashed #C7CDD3',
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with close button when it passed', () => {
    renderWithTheme(<Area hasClose>Teste</Area>);

    expect(screen.getByLabelText(/close button/i)).toBeInTheDocument();
  });

  it('should render without border when status is editing', () => {
    renderWithTheme(
      <AvatarContextProvider>
        <AvatarContext.Consumer>
          {(value) => (
            <>
              {value.handleChangeStatus('editing')}
              <Area>Test</Area>
            </>
          )}
        </AvatarContext.Consumer>
      </AvatarContextProvider>
    );

    expect(screen.getByLabelText(/wrapper/i)).toHaveStyle({
      border: '0',
    });
  });

  it('should render without border when status is error', () => {
    renderWithTheme(
      <AvatarContextProvider>
        <AvatarContext.Consumer>
          {(value) => (
            <>
              {value.handleChangeStatus('error')}
              <Area>Test</Area>
            </>
          )}
        </AvatarContext.Consumer>
      </AvatarContextProvider>
    );

    expect(screen.getByLabelText(/wrapper/i)).toHaveStyle({
      border: '0',
    });
  });

  it('should render with border when status is saved', () => {
    renderWithTheme(
      <AvatarContextProvider>
        <AvatarContext.Consumer>
          {(value) => (
            <>
              {value.handleChangeStatus('saved')}
              <Area>Test</Area>
            </>
          )}
        </AvatarContext.Consumer>
      </AvatarContextProvider>
    );

    expect(screen.getByLabelText(/wrapper/i)).toHaveStyle({
      border: '2px dashed #C7CDD3',
    });
  });
});
