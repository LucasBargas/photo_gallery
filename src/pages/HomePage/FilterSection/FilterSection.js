import React, { useState } from 'react';
import Container from '../../../styles/Container';
import * as S from './FilterSection.styles';

const FilterSection = () => {
  const [checked, setChecked] = useState(['Todos']);

  const handleCheckedChange = ({ target }) => {
    target.checked ? setChecked([...checked, target.value]) : setChecked(checked.filter(item => item !== target.value));
  }

  if (checked.length) console.log(checked);

  return (
    <S.FilterSectionContainer>
      <Container>
        <h2>Filtre as fotos que você quer visualizar</h2>
        <S.FilterArea>
          <label>
            <input 
              type="checkbox" 
              value='Todos'
              checked={checked.includes('Todos')} 
              onChange={handleCheckedChange} 
            />
            Todos
          </label>

          <label>
            <input 
              type="checkbox" 
              value='Leões'
              checked={checked.includes('Leões')}  
              onChange={handleCheckedChange} 
            />
            Leões
          </label>

          <label>
            <input 
              type="checkbox" 
              value='Gatos'
              checked={checked.includes('Gatos')}  
              onChange={handleCheckedChange} 
            />
            Gatos
          </label>

          <label>
            <input 
              type="checkbox" 
              value='Cães'
              checked={checked.includes('Cães')}  
              onChange={handleCheckedChange} 
            />
            Cães
          </label>

          <label>
            <input 
              type="checkbox" 
              value='Lobos'
              checked={checked.includes('Lobos')}  
              onChange={handleCheckedChange} 
            />
            Lobos
          </label>

          <label>
            <input 
              type="checkbox" 
              value='Pandas'
              checked={checked.includes('Pandas')}  
              onChange={handleCheckedChange} 
            />
            Pandas
          </label>

          <label>
            <input 
              type="checkbox" 
              value='Pinguins'
              checked={checked.includes('Pinguins')}  
              onChange={handleCheckedChange}
            />
            Pinguins
          </label>
        </S.FilterArea>

        <S.ClearFilter>
          {checked.length > 0 && (
            <span onClick={() => setChecked([])}>
              <strong>Limpar filtro</strong>
            </span>
          )}
        </S.ClearFilter>
      </Container>
    </S.FilterSectionContainer>
  )
}

export default FilterSection;
