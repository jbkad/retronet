import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Footer } from "../components/Footer";

describe('Footer component', () => {
    test('clicking button navigates to top of page', () => {
        // mocks scroll function 
        window.scrollTo = jest.fn();

        render(<Footer />);

        // simulates click on scroll btn
        fireEvent.click(screen.getByTestId('footer__scroll-btn'));

        // expects window.scrollTo to be called with expected arguments 
        expect(window.scrollTo).toHaveBeenCalledWith(
            expect.objectContaining({ top: 0, behavior: 'smooth' })
        )
    });
})
