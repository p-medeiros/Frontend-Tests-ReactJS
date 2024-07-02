import { render, screen } from "@testing-library/react"
import PokemonDetail from "."
import { faker } from "@faker-js/faker";
import { fetchPokemonDetail } from "../../services/PokemonServices";
import * as rrd from 'react-router-dom'

const mockFn =vi.fn(fetchPokemonDetail);
const mockFetchPokemonDetailFn = mockFn.mockImplementation( async () => {
  return {
      "id": 1,
      "name": "Pikachu",
      "image": faker.image.urlPlaceholder(),
      "type": "Electric"
    }
  });



describe("testa o componente details", ()=> {

    vi.mock('react-router-dom',()=>{
        return{
            useParams: ()=>({
                id:1,
            }),
            Link: vi.fn().mockImplementation((props)=> props.children ),
        };
    });

    test ("deve haver um tilulo na pagina", async ()=>{
            render(<PokemonDetail fetchPokemonDetail={mockFetchPokemonDetailFn} />)

            const pikachu = await screen.findByText("Pikachu");
            expect(pikachu).toBeInTheDocument();
        }
        
    )

    test ("deve haver um link para voltar", async ()=>{
        render(<PokemonDetail fetchPokemonDetail={mockFetchPokemonDetailFn} />)

        const voltar = await screen.findByText("Voltar");
        expect(voltar).toBeInTheDocument();
    }
    
    )
    test ("deve validar quando nao houver um parametro na rota ", async ()=>{
        vi.spyOn(rrd, "useParams").mockImplementation(()=> ({ id: "0" }))
        render(<PokemonDetail fetchPokemonDetail={mockFetchPokemonDetailFn} />)

        const errorText = await screen.findByText("Id invaido")
        expect(errorText).toBeInTheDocument();
    })
});