import { fireEvent, render, screen } from "@testing-library/react"
import Dashboard from ".";
import { fetchPokemonList } from "../../services/PokemonServices";
import { faker } from '@faker-js/faker'

const mockFetchListPokemonFn = vi
.fn(fetchPokemonList)
.mockImplementation( async () => {
  return [
    {
      "id": 1,
      "name": "Pikachu",
      "image": faker.image.urlPlaceholder(),
      "type": "Electric"
    },
    {
      "id": 2,
      "name": "Charmander",
      "image": faker.image.urlPlaceholder(),
      "type": "Fire"
    },
  ];
});

const navigateMock =vi.fn();

describe("Testa o Componente de Login", () => {

  vi.mock('react-router-dom', ()=> {
    return{
      useNavigate(){
        return navigateMock;
      }
    }
  })

  test(" deve haver um titulo ", async () => {
    render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />);

    const title = await screen.findByRole("heading");

    expect(title.textContent).toBe("Dashboard")
  })
  test("deve haver uma lista com 10 pok", async () => {
    render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />)

    const itens = await screen.findAllByRole("listitem");

    expect(itens).toHaveLength(2);
  })
  test("deve haver uma pikachu na lista", async () => {
    render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />)

    const itens = await screen.findByText("Pikachu");

    expect(itens).toBeInTheDocument;
  })

  test("deve ser possivel clicar no li para abrir a pagina do pokemon", async () => {
    render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />)

    const link = await screen.findByText("Pikachu");
    fireEvent.click(link)
    expect(navigateMock).toHaveBeenCalledTimes(1);
  })
}
)