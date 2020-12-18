import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
// import { MockedProvider } from "react-apollo/test-utils";
import CourseForm from '../../pages/course/CourseForm'


describe('courseForm', () => {
    // it('renders button to show form', () => {
    //     render(<CourseForm />);
    //     expect(screen.getByRole('button')).toHaveTextContent(
    //       'Ajouter un cours'
    //     );
    //   });
    beforeEach(() => {
        render(<CourseForm />);
      });
    it('renders button to scroll to top', () => {
        expect(screen.getByRole('button')).toHaveTextContent('Ajouter un cours');
    });
    // it('should not render courseForm component', () => {
    //     render(
    //         <MockedProvider mocks={[GET_WILDERS_SUCCESS_MOCK]} addTypename={false}>
    //             <CourseForm />
    //         </MockedProvider>);
    //     // expect(screen.queryByRole('form')).not.toBeInTheDocument();
    // });
    // it('should triger form', () => {
    //     fireEvent.click(screen.getByText('Ajouter un cours'));
    // })
})