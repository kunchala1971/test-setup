import { fireEvent, render } from '@testing-library/react';
import App from '../App';

describe('App component renders all elements', () => {
  test('renders getAllByLabel Text', () => {
    const { getAllByLabelText } = render(<App />);
    const prog1Label = getAllByLabelText('prog1');
    //console.log(screen.debug);
    expect(prog1Label).toHaveLength(3);
  });

  test('render single getbylabeltext', () => {
    const { getByLabelText } = render(<App />);
    const programLabel = getByLabelText('program');
    expect(programLabel).toBeInTheDocument();
  });
});
describe('should render program-id', () => {
  test('should render program id', () => {
    const { getByTestId } = render(<App />);
    const idProgramming = getByTestId('myid');
    expect(idProgramming).toBeInTheDocument();
  });
  test('should render button1', () => {
    const { getByTestId } = render(<App />);
    const button1Element = getByTestId('button1');
    expect(button1Element).toBeInTheDocument();
    fireEvent.click(button1Element);
  });
  test('should render button1 by role', () => {
    const { getByRole } = render(<App />);
    const button1Element = getByRole('button');
    expect(button1Element).toBeInTheDocument();
    fireEvent.click(button1Element);
  });
});
