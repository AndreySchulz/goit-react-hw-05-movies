import { usePokemonApi } from 'hooks/usePokemonApi';
import { useParams } from 'react-router-dom';

const OnePokemonPage = () => {
  const { name } = useParams();
  const result = usePokemonApi(name);
  console.log(result);
  return (
    <>
      <h3>{name.toLocaleUpperCase()}</h3>
      <div>
        <img src={result?.sprites?.front_default} alt={name} />
      </div>
    </>
  );
};
export default OnePokemonPage;
