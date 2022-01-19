import { render, screen } from '@testing-library/react';
import BirthWindow from './Components/BirthWindow';

test('renders Employees birthday text', () => {
  //Arrange
  render(<BirthWindow />);

  //Act

  //Assert
  const birthElement = screen.getByText(/Employees birthday/);
  expect(birthElement).toBeInTheDocument();
});
