import matchers from "@testing-library/jest-dom/matchers";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Login } from "./Login";

expect.extend(matchers);

describe("Login test", () => {
  afterEach(cleanup);
  it("Check if the form is rendered", () => {
    render(<Login />);
    screen.getAllByText("Bienvenido a mi tienda");
  });

  it("check if the onChange function is working", () => {
    render(<Login />);
    let emailInput = screen.getByLabelText("Ingresa tu email");
    expect(emailInput).toHaveValue("");
    fireEvent.change(emailInput, { target: { value: "Lilo" } });
    expect(emailInput).toHaveValue("Lilo");
  });
});
