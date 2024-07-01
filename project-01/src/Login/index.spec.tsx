import { fireEvent, render, screen } from "@testing-library/react"
import Login from ".";

const navigateMock = vi.fn();


describe ("Testa o Componente de Login", ()=> {
    vi.mock("react-router-dom", ()=> ({
        useNavigate(){
            return navigateMock;
        },
    }));

    test("Deve haver um titulo escito 'Sing In' ", async ()=>{
        render (<Login/>)

        const title = await screen.findByRole("heading", {
            name: "Sign In"
        });

        expect(title).toBeInTheDocument()

    })
    test("Deve haver 2 inputs na tela  ", async ()=>{
        render (<Login/>)

        const inputs = await screen.findAllByRole("textbox");

        // console.log(inputs);

        expect(inputs).toHaveLength(2)

    })
    test("Deve haver um botao Login  ", async ()=>{
        render (<Login/>)

        const button = await screen.findByRole("button");

        // console.log(button);

        expect(button.textContent).toBe('Login')
    })

    test("Deve haver um input para email  ", async ()=>{
        render (<Login/>)

        const inputs = await screen.findByPlaceholderText("Insira seu e-mail");

        // console.log(inputs);

        expect(inputs).toBeInTheDocument();

    })

    test("Deve haver um input para email  ", async ()=>{
        render (<Login/>)

       const button = await screen.findByRole("button");
       fireEvent.click(button)

       expect(navigateMock).toHaveBeenCalledTimes(1);

    })

}
)