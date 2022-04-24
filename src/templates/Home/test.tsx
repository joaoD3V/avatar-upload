import 'jest-canvas-mock';
import { screen } from '@testing-library/react';
import { AvatarContext, AvatarContextProvider } from 'contexts/AvatarContext';
import { renderWithTheme } from 'utils/tests/helpers';

import { Home } from '.';

describe('<Home />', () => {
  it('should render top-level wrapper correctly', () => {
    const { container } = renderWithTheme(<Home />);

    expect(screen.getByLabelText(/Home template/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render AvatarUpload when status is initial', () => {
    renderWithTheme(
      <AvatarContextProvider>
        <AvatarContext.Consumer>
          {(value) => (
            <>
              {value.handleChangeStatus('initial')}
              <Home />
            </>
          )}
        </AvatarContext.Consumer>
      </AvatarContextProvider>
    );

    expect(screen.queryByLabelText(/close button/i)).not.toBeInTheDocument();
    expect(screen.getByLabelText(/wrapper/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/Avatar canva/i)).not.toBeInTheDocument();
    expect(
      screen.getByAltText(
        /Illustration of mountains and sun, symbolizing a picture icon/i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/Organization Logo/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Drop the image here or click to browse./i)
    ).toBeInTheDocument();
    expect(screen.getByTestId(/drop-input/i)).toBeInTheDocument();
    expect(screen.getByTestId(/drop-wrapper/i)).toBeInTheDocument();
  });

  it('should not render AvatarEditing when status is editing and avatarImage is undefined', () => {
    renderWithTheme(
      <AvatarContextProvider>
        <AvatarContext.Consumer>
          {(value) => (
            <>
              {value.handleChangeStatus('editing')}
              <Home />
            </>
          )}
        </AvatarContext.Consumer>
      </AvatarContextProvider>
    );

    expect(screen.queryByLabelText(/Avatar canva/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/Crop slider/i)).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'Save' })
    ).not.toBeInTheDocument();
  });

  it('should render AvatarError when status is error', () => {
    renderWithTheme(
      <AvatarContextProvider>
        <AvatarContext.Consumer>
          {(value) => (
            <>
              {value.handleChangeStatus('error')}
              <Home />
            </>
          )}
        </AvatarContext.Consumer>
      </AvatarContextProvider>
    );

    expect(
      screen.getByRole('img', { name: 'Exclamation icon' })
    ).toBeInTheDocument();
    expect(screen.getByText(/Sorry, the upload failed./i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Try again' })
    ).toBeInTheDocument();
  });
});
