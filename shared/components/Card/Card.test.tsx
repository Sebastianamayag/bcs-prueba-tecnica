import { render, screen } from '@testing-library/react';
import { Card } from './Card';

const mockChildren = (
    <div data-testid='children'/>
)

describe('test <Card /> component', () => {
  beforeEach(() =>{
    render(<Card >
        {mockChildren}
    </Card>);
  })
  it('render children', () => {
    const children = screen.getByTestId('children');
    expect(children).toBeInTheDocument();
  })

});
