import { render, screen } from "@testing-library/react"
import Dashboard from ".";

describe ("Testa o Componente de Login", ()=> {
    test(" deve haver um titulo ", async ()=>{
        render (<Dashboard/>);

        const title  = await screen.findByRole("heading");

        expect(title.textContent).toBe("Dashboard")
    })
}
)