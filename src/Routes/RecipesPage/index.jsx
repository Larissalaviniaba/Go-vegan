import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card/index";
import ImgFoodMock from '/assets/img-food-mock.png'
import './index.css'
import { theme } from "../../utils/theme";

export function RecipesPage() {
  const recipes = [
    {
      img: ImgFoodMock,
      title: 'Título da Receita'
    },
    {
      img: ImgFoodMock,
      title: 'Título da Receita'
    },
    {
      img: ImgFoodMock,
      title: 'Título da Receita'
    },
    {
      img: ImgFoodMock,
      title: 'Título da Receita'
    },
  ]
  return(
    <div>
      <Header />
      <main className="recipes__main">
        <h1 className="recipes__title">
          Escolha uma das opções abaixo e mostraremos para você seleções incríveis!
        </h1>
        <div className="recipes__select-section">
          <Button
            value="SALGADAS"
            color={theme.colors.primary}
          />
          <div className="options-divisor">
            |
          </div>
          <Button 
            value="DOCES"
            color={theme.colors.secundary}
          />
        </div>
        <section className="recipes-section">
          {recipes.map((recipe, index) => (
            <Card
              key={index}
              item={recipe}
            />
          ))}
        </section>
        <Button 
          value="Carregar mais"
          color={theme.colors.secundary}
        />
      </main>
      <Footer />
    </div>
  )
}