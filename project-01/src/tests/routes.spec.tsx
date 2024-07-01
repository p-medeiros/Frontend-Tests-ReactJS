import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import MainRoutes from "../routes"

describe("Testa o componente MainRoutes", () => {


    test("Renderizar pagina login", async () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <MainRoutes />
            </MemoryRouter>
        );
        expect(screen.getByText('Sign In'))
    });

    test("Renderizar pagina Sign Up", async () => {
        render(
            <MemoryRouter initialEntries={["/sign-up"]}>
                <MainRoutes />
            </MemoryRouter>
        );
        expect(screen.getByText('Cadastre-se'))
    });
    

    test("Renderizar pagina Sign Up", async () => {
        render(
            <MemoryRouter initialEntries={["/dashboard"]}>
                <MainRoutes />
            </MemoryRouter>
        );
        expect(screen.getByText('Dashboard'))
    });

    test("Renderizar pagina Sign Up", async () => {
        render(
            <MemoryRouter initialEntries={["/error"]}>
                <MainRoutes />
            </MemoryRouter>
        );
        expect(screen.getByText('404 Page Not Found'))
    });

})