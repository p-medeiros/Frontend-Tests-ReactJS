import { fireEvent, render, screen } from "@testing-library/react"
import SignUp from ".";
import { useNavigate } from "react-router-dom";

const navigateMock = vi.fn();

describe("Testa o componete SignUp", () => {

    vi.mock('react-router-dom', ()=> ({
        useNavigate(){
            return navigateMock;
        }
    })
    )

    test("devem haver 3 inputs na tela", async () => {
        render(<SignUp />);

        const inputs = await screen.findAllByRole("textbox");

        expect(inputs).toHaveLength(3);
    })

    test("devem haver 1 input pra nome, email e senha ", async () => {
        render(<SignUp />);

        const inputName = await screen.findByPlaceholderText("Insira o seu nome");
        const inputEMail = await screen.findByPlaceholderText("Insira o seu e_mail");
        const inputSenha = await screen.findByPlaceholderText("Insira a senha");

        expect(inputName).toBeInTheDocument;
        expect(inputEMail).toBeInTheDocument;
        expect(inputSenha).toBeInTheDocument;
    })

    test("devem haver 1 botao com a lable Sign Up ", async () => {
        render(<SignUp />);

        const button = await screen.findByRole("button")

        expect(button).toHaveTextContent("Sign Up");
    })

    test("devem haver 1 Titulo Cadastre-se ", async () => {
        render(<SignUp />);

        const title = await screen.findByRole("heading",{
            level: 1,
        })

        expect(title).toHaveTextContent("Cadastre-se");
    })

    test("deve navegar para a pagina dashboard", async ()=>{
        render (<SignUp/>)

        const button = await screen.findByRole("button");
        fireEvent.click(button)
 
        expect(navigateMock).toHaveBeenCalledTimes(1);
    } )
})
