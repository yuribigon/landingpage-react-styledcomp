import Hero from '../components/Hero';
import heroBackground from '../assets/water.jpg';
import Advantages from '../components/Advantages';
import ContentImage, { ContentTextImageProps } from '../components/ContentImage';
import dog1 from '../assets/dog1.jpg';
import dog2 from '../assets/dog2.jpg';
import dog3 from '../assets/dog3.jpg';

const Home: React.FC = () => {
  const TextData: ContentTextImageProps[] = [
    {
      imgSide: 'right',
      data: {
        title: 'CSS crítico automático',
        text: 'Styled-components controla quais componentes são renderizados em uma página e injeta seus estilos e nada mais, de forma totalmente automática. Combinado com a divisão de código, isso significa que seus usuários carregam a menor quantidade de código necessária.',
        image: dog1,
      },
    },
    {
      imgSide: 'left',
      data: {
        title: 'Sem erros de nome de classe / Exclusão mais fácil de CSS',
        text: 'Styled-components gera nomes de classe exclusivos para seus estilos. Você nunca precisa se preocupar com duplicação, sobreposição ou erros ortográficos. Pode ser difícil saber se um nome de classe é usado em algum lugar da sua base de código. styled-components torna isso óbvio, pois cada parte do estilo está vinculada a um componente específico. Se o componente não for usado (que ferramenta pode detectar) e for excluído, todos os seus estilos serão excluídos com ele.',
        image: dog2,
      },
    },
    {
      imgSide: 'right',
      data: {
        title: 'Estilo dinâmico simples',
        text: 'Adaptar o estilo de um componente com base em seus props ou em um tema global é simples e intuitivo, sem a necessidade de gerenciar manualmente dezenas de classes.',
        image: dog3,
      },
    },
  ];

  return (
    <>
      <main>
        <Hero background={heroBackground} title="Landing page React with styled components." />
        <Advantages />
        <section>
          {TextData.map((item, index) => (
            <ContentImage key={index} imgSide={item.imgSide} data={item.data} />
          ))}
        </section>
        <Hero background={heroBackground} title="Contato" small />
      </main>
    </>
  );
};

export default Home;
