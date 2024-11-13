# Daily Diet - Projeto Fullstack: Gerenciamento de Refeições Diárias

![Desktop view](src/assets/screenShots/desktopView.png)

# Sumário

- [Bibliotecas](#bibliotecas)
  - [Dependências](#dependências)
  - [Dependências de Desenvolvimento](#dependências-de-desenvolvimento)
- [Imagens](#imagens)
- [Funcionalidades](#funcionalidades)
  - [Listagem de dados](#listagem-de-dados)
  - [Deletar registros de uma refeição](#deletar-registros-de-uma-refeição)
  - [Validação de formulários](#validação-de-formulários)
- [Como executar o projeto](#como-executar-o-projeto)
- [Autor](#autor)

# Bibliotecas

## Dependências

- [zod](https://zod.dev/): Biblioteca de validação de esquemas e dados, garantindo a segurança dos dados.

- [Axios](https://axios-http.com/ptbr/): Axios é um cliente HTTP simples baseado em `promisses` para o navegador e para o node.js. Axios fornece uma biblioteca simples de usar em um pacote pequeno com uma grande interface.

- [FontAwesome](https://fontawesome.com): Biblioteca responsável pela renderização de ícones.

- [TanStack Query](https://tanstack.com/query/latest): Gerenci e sincroniza dados remotos em aplicações React. Facilita a busca, cache e atualização de dados. Ideal para otimizar requisições assíncronas.

- [Recharts](https://recharts.org/en-US): Biblioteca que constroi gráficos como componentes React.

- [FontAwesome](https://fontawesome.com): Biblioteca de ícones.

- [Dayjs](https://www.npmjs.com/package/dayjs): Biblioteca Javascript minimalista que manipula, valida, converte e mostra datas e tempos de forma simplificada.

- [React-Collapse](https://www.npmjs.com/package/react-collapse): Wrapper de componente para animação de acordeão para elementos com altura variável (e dinâmica).

- [react-router-dom](https://reactrouter.com/en/main): Biblioteca que lida com rotas em aplicações web, mantendo a URL e a interface do usuário síncronas, evitando recarregamento de página.

- [TanStack Query](https://tanstack.com/query/latest): Gerencia e sincroniza dados remotos em aplicações React. Facilita a busca, cache e atualização de dados. Ideal para otimizar requisições assíncronas. Trabalha em conjunto com bibliotecas focadas em requisições HTTP como axios ou fetch de dados.

## Dependências de Desenvolvimento

- [ESLint](https://eslint.org/): Ferramenta para análise de código, responsável por identificar erros e inconsistências, como variáveis não utilizadas ou não declaradas.

- [Prettier](https://prettier.io/): Ferramenta de formatação de código como indentação, espaçamento, uso de aspas simples ou duplas, etc, garantindo consistência no estilo do código.

- [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss): Organiza automaticamente classes do Tailwind CSS em uma ordem consistente, agrupando utilitários relacionados (como responsividade e pseudo-classes) para manter o código mais legível e organizado.

- [TailwindCSS](https://tailwindcss.com): Framework CSS com classes utilitárias que facilita e acelera o processo de estilização de elementos HTML/JSX.

- [vite-tsconfig-paths](https://www.npmjs.com/package/vite-tsconfig-paths): Permite que o Vite reconheça e use os aliases de importação, simplificando importações como `@components` em vez de caminhos longos como `../../components`.

- [Tailwind-Merge](https://www.npmjs.com/package/tailwind-merge): Combina classes do Tailwind CSS, especialmente quando há conflitos de estilos. Ele mescla as classes, garantindo que as mais específicas prevaleçam, evitando a sobreposição incorreta de estilos.

- [Tailwind Variants](https://www.tailwind-variants.org): Biblioteca que ajuda a gerenciar e aplicar variantes de estilos no Tailwind CSS, permitindo criar estilos condicionais.

- [React Hook Form](https://react-hook-form.com): Biblioteca para gerenciamento de formulários em React, focada em validação e envio de dados.

- [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers): Pacote de resolvers para integrar bibliotecas de validação, como Zod, com o React Hook Form. Um resolver é uma função que traduz regras de validação para o formato usado pelo React Hook Form, simplificando a validação de formulários e o gerenciamento de erros.

## Imagens

**Funcionalidade**
![desktop preview](src/assets/screenShots/functionality.gif)

**Responsividade**
![desktop preview](src/assets/screenShots/desktop-view.gif)

## Funcionalidades

Esta aplicação Fullstack consome a API [Daily Diet - Node Restful API](https://github.com/SantiagoMorais/Daily-Diet---Node-Restful-API) que é a parte backend do projeto. Acesse o link para mais detalhes.

O principal da aplicação é focada no uso do [Axios](https://axios-http.com/ptbr/) que realizou o fetch de dados do nosso servidor, [zod](https://zod.dev/) que autenticou os dados recebidos e enviados para nosso servidor, além de verificar a validade de dados das nossas variáveis ambiente e o [TanStack Query](https://tanstack.com/query/latest) que facilita a execução das funções que utilizam do axios para realizar o fetch de dados, nos auxiliando com a renderização dos dados, manipulação de erros e de carregamentos da aplicação. Vamos ver cada um brevemente em uma das nossas rotas:

### Listagem de dados

```ts
export const handleListMeals = async (): Promise<IMealsList | null> => {
  return await axios
    .get<IMealsList>(env.VITE_DATABASE_URL + "/meals", {
      withCredentials: true,
    })
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      return null;
    });
};
```

Nesta função estamos utilizando do axios para receber os dados da nossa rota que lista todas as refeições registradas.

Para utilizarmos dessa função de forma mais proveitosa e fácil, utilizamos o tanstack como no exemplo abaixo:

```tsx
export const ListMeals = () => {
  const { data, error, isLoading } = useQuery<IMealsList | null>({
    queryFn: handleListMeals, // a função a ser executada para buscar os dados no backend
    queryKey: ["listMeals"], // Chave única que identifica a consulta para caching e refetching
    staleTime: 1000 * 60, // Tempo em que os dados são considerados "frescos" (60 segundos) e que não precisamos realizar outra consulta, já que estão no cache
  });

  return (
    <div className="flex w-full flex-col items-center justify-center">
      {isLoading ? (
        {
          /* Renderização de mensagem de carregamento enquanto o fetch de dados não foi concluido*/
        }
      ) : error ? (
        {
          /* Renderização de mensagem de erro caso o fetch de dados não foi bem sucedido */
        }
      ) : (
        <>
          {data && data.meals.length > 0
            ? {
                /* Renderização dos dados na tela caso o fetch seja bem sucedido e tenha, pelo menos, um dado registrado */
              }
            : {
                /* Renderização dos dados na tela caso o fetch seja bem sucedido e não tenha nenhum dado registrado ainda */
              }}
        </>
      )}
    </div>
  );
};
```

O `useQuery` é utilizado para fetch de dados, mas para realização de envio de dados, usamos `useMutation`, como criação de um novo usuário, de um registro ou ao deletar um dado. Todas essas rotas no backend precisam receber dados no `body` da requisição vindos do frontend.

## Deletar registros de uma refeição

```ts
export const handleDeleteMeal = async (mealId: string): Promise<null> => {
  return await axios.delete(env.VITE_DATABASE_URL + `/meals/${mealId}`, {
    withCredentials: true,
  });
};
```

```tsx
const queryClient = useQueryClient(); // hook query client
const [isLoading, setIsLoading] = useState<boolean>(false); // Manipular o processo de carregamento da mutation
const { mutate } = useMutation({
  mutationFn: handleDeleteMeal, // função a ser executada
  mutationKey: ["deleteMeal"], // A chave única que também usamos no useQuery
  onMutate: () => setIsLoading(true), // Quando o mutation iniciar, definimos o estado isLoading como true
  onSuccess: () => {
    // Caso o envio de dados seja um sucesso:
    setIsLoading(false); // Definimos o estado isLoading como false
    queryClient.invalidateQueries({ queryKey: ["listMeals", "summary"] }); // marcamos uma ou mais queries como "stale" (desatualizadas), forçando-as a serem refetch na próxima vez que forem acessadas. Resumidamente, isso faz com que os dados sejam renderizados assim que são registrados, não sendo necessário a atualização da página só para visualizar os novos dados.
  },
  onError: () => {
    // Caso o envio de dados não seja bem-sucedido:
    setIsLoading(false); // Definimos o estado isLoading como false
    alert(`An error occurred.\nPlease, try again later.`); // Enviamos uma mensagem de erro ao usuário
  },
});
```

Por fim, o uso do zod nos facilita muito, tanto na validação de formulários, quando nas variáveis ambiente:

**Validação de formulários**

```tsx
const mealDataSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Title must have at least 2 characteres" })
    .max(30, { message: "Title must have at most 30 characteres" }),
  description: z
    .string()
    .min(2, { message: "Description must have at least 2 characteres" })
    .max(100, { message: "Description must have at most 100 characteres" }),
  inTheDiet: z.string({ message: "Please select at least one option." }),
});

export type TMealDataSchema = z.infer<typeof mealDataSchema>;
```

Podemos criar um `type` sobre uma validação do zod para usarmos no `react-hook-form ou para validar variáveis ambiente`.

## Como executar o projeto

1. Primeiramente, certifique-se de verificar como executar o servidor [aqui](https://github.com/SantiagoMorais/Daily-Diet---Node-Restful-API)
2. Instalar as dependências executando o comando no terminal com `npm install`
3. Verificar o arquivo `.env.example` para que suas variáveis estejam de acordo com o que o projeto espera e criar a adicioná-las ao arquivo `.env`.
4. Executar o comando `npm run dev` para iniciar o projeto no `localhost:5173`, que é o padrão do `Vite` e abrir o seu navegador em `http://localhost:5173`.

## Autor

- GitHub - [Felipe Santiago Morais](https://github.com/SantiagoMorais)
- Linkedin - [Felipe Santiago](https://www.linkedin.com/in/felipe-santiago-873025288/)
- Instagram - [@felipe.santiago.morais](https://www.instagram.com/felipe.santiago.morais)
- Email - <a href="mailto:contatofelipesantiago@gmail.com" target="blank">contatofelipesantiago@gmail.com</a>
