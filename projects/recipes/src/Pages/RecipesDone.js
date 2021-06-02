import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import './Details+css/Details.css';
import '../Styles/RecipesDone.css';
// import ShareIcon from '../images/shareIcon.svg';
import Share from '../Components/Share';

class RecipesDone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doneRecipes: [],
      food: [],
      drink: [],
      bebida: false,
      comida: false,
      all: true,
    };
    this.auxiar = this.auxiar.bind(this);
    this.all = this.all.bind(this);
    this.renderComidas = this.renderComidas.bind(this);
    this.renderBebidas = this.renderBebidas.bind(this);
  }

  componentDidMount() {
    this.auxiar();
  }

  auxiar() {
    const recipesDone = JSON.parse(localStorage.getItem('doneRecipes'));
    if (recipesDone !== null) {
      const filterFood = recipesDone.filter((food) => food.type === 'comida');
      const filterDrink = recipesDone.filter((drink) => drink.type === 'bebida');
      this.setState({
        doneRecipes: recipesDone,
        food: filterFood,
        drink: filterDrink,
      });
    }
  }

  all() {
    const { all, doneRecipes } = this.state;
    let alcolicORcategory = '';
    doneRecipes.forEach((value) => {
      if (value.category === 'comida') {
        alcolicORcategory = [...alcolicORcategory, value.category];
      } else alcolicORcategory = [...alcolicORcategory, value.alcoholicOrNot];
    });
    if (all) {
      return (
        <div className="containerAllDone">
          { doneRecipes.map((value, index) => (
            <div key={ index } className="cardRecipe done">
              <Share
                value={ `/${value.type}s/${value.id}` }
                id={ `${index}-horizontal-share-btn` }
              />
              <Link to={ `/${value.type}s/${value.id}` }>
                <img
                  className="Imagem"
                  data-testid={ `${index}-horizontal-image` }
                  src={ value.image }
                  alt="img-recipe"
                />
                <p className="horizontalName" data-testid={ `${index}-horizontal-name` }>
                  {value.name}
                </p>
              </Link>
              <p className="topText" data-testid={ `${index}-horizontal-top-text` }>
                { value.type === 'comida'
                  ? (`${value.area} - ${value.category}`)
                  : value.alcoholicOrNot }
              </p>
              <p className="doneDate" data-testid={ `${index}-horizontal-done-date` }>
                {value.doneDate}
              </p>
              { value.tags.map((tag) => (
                <span
                  className="doneTag"
                  key={ tag }
                  data-testid={ `${index}-${tag}-horizontal-tag` }
                >
                  {tag}
                </span>)) }
            </div>
          ))}
        </div>
      );
    }
    return null;
  }

  renderComidas() {
    const { food, comida } = this.state;
    if (comida) {
      return (
        <div className="foodDone">
          { food.map((value, index) => (
            <div key={ index } className="cardRecipe done">
              <Share id={ `${index}-horizontal-share-btn` } />
              <Link to={ `/comidas/${value.id}` }>
                <img
                  className="Imagem"
                  data-testid={ `${index}-horizontal-image` }
                  src={ value.image }
                  alt="img-recipe"
                />
                <p className="horizontalName" data-testid={ `${index}-horizontal-name` }>
                  {value.name}
                </p>
              </Link>
              <p className="topText" data-testid={ `${index}-horizontal-top-text` }>
                { `${value.area} - ${value.category}` }
              </p>
              <p className="doneDate" data-testid={ `${index}-horizontal-done-date` }>
                {value.doneDate}
              </p>
              <span
                className="doneTag"
                data-testid={ `${index}-${value.tags[0]}horizontal-tag` }
              >
                {value.tags[0]}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return false;
  }

  renderBebidas() {
    const { drink, bebida } = this.state;
    if (bebida) {
      return (
        <div className="drinksDone">
          { drink.map((value, index) => (
            <div key={ index } className="cardRecipe done">
              <Share id={ `${index}-horizontal-share-btn` } />
              <Link to={ `/bebidas/${value.id}` }>
                <img
                  className="Imagem"
                  data-testid={ `${index}-horizontal-image` }
                  src={ value.image }
                  alt="img-recipe"
                />
                <p className="horizontalName" data-testid={ `${index}-horizontal-name` }>
                  {value.name}
                </p>
              </Link>
              <p className="topText" data-testid={ `${index}-horizontal-top-text` }>
                { value.alcoholicOrNot }
              </p>
              <p className="doneDate" data-testid={ `${index}-horizontal-done-date` }>
                {value.doneDate}
              </p>
              <span
                className="doneTag"
                data-testid={ `${index}-${value.name}horizontal-tag` }
              >
                {value.tags[0]}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return false;
  }

  render() {
    return (
      <div className="doneRecipes">
        <Header name="Receitas Feitas" />
        <div className="buttonsContainerDone">
          <button
            className="categoryBtn"
            type="button"
            onClick={ () => this.setState({
              comida: false,
              all: true,
              bebida: false,
            }) }
            data-testid="filter-by-all-btn"
          >
            All
          </button>
          <button
            className="categoryBtn"
            type="button"
            onClick={ () => this.setState({
              comida: false,
              all: false,
              bebida: true,
            }) }
            data-testid="filter-by-drink-btn"
          >
            Drinks
          </button>
          <button
            className="categoryBtn"
            type="button"
            onClick={ () => this.setState({
              comida: true,
              all: false,
              bebida: false,
            }) }
            data-testid="filter-by-food-btn"
          >
            Food
          </button>
        </div>
        { this.renderComidas() }
        { this.renderBebidas() }
        { this.all() }
      </div>
    );
  }
}

export default RecipesDone;
