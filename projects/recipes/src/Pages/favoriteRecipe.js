import React from 'react';
import copy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import ShareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import './Details+css/Details.css';
import '../Styles/RecipesDone.css';
import '../Styles/Favorites.css';

class Favorite extends React.Component {
  constructor() {
    super();
    this.favorites = this.favorites.bind(this);
    this.renderAll = this.renderAll.bind(this);
    this.update = this.update.bind(this);
    this.shareUrl = this.shareUrl.bind(this);
    this.state = {
      recipes: [],
      p: '',
      filter: '',
    };
  }

  componentDidMount() {
    this.update();
  }

  update() {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    this.setState({ recipes: favoriteRecipes });
    this.renderAll();
  }

  shareUrl(url2) {
    let url = window.location.href;
    if (url.includes('receitas-favoritas')) {
      url = url.replaceAll('receitas-favoritas', '');
    }
    copy(`${url}${url2}`)
      .then(() => this.setState({ p: 'Link copiado!' }));
  }

  favorites(id) {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const newObj = favoriteRecipes.filter((value) => value.id !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newObj));
    this.update();
  }

  renderAll() {
    const { recipes, p, filter } = this.state;
    let alcolicORcategory = '';
    recipes.forEach((value) => {
      if (value.type === 'comida') alcolicORcategory = [...alcolicORcategory, value.area];
      else alcolicORcategory = [...alcolicORcategory, value.alcoholicOrNot];
    });
    let newRecipes;
    if (filter === 'comida' || filter === 'bebida') {
      newRecipes = recipes.filter((value) => value.type === filter);
    } else newRecipes = recipes;
    return (
      <div className="allFavoritesContainer">
        { newRecipes.map((value, index) => (
          <div className="favoriteContainer" key={ index }>
            <Link to={ `/${value.type}s/${value.id}` }>
              <img
                className="Imagem"
                data-testid={ `${index}-horizontal-image` }
                src={ value.image }
                alt="img-recipe"
              />
              <p
                className="horizontalName"
                data-testid={ `${index}-horizontal-name` }
              >
                {value.name}
              </p>
            </Link>
            <p
              className="topText"
              data-testid={ `${index}-horizontal-top-text` }
            >
              {`${alcolicORcategory[index]} - ${value.category}`}
            </p>
            <div className="favoriteBtns">
              <button
                type="button"
                onClick={ () => this.favorites(value.id) }
                data-testid={ `${index}-horizontal-favorite-btn` }
                src={ blackHeartIcon }
              >
                <img src={ blackHeartIcon } alt="button favorite" />
              </button>
              <button
                type="button"
                onClick={ () => this.shareUrl(`${value.type}s/${value.id}`) }
                data-testid={ `${index}-horizontal-share-btn` }
                src={ ShareIcon }
              >
                <p>{p}</p>
                <img src={ ShareIcon } alt="button share" />
              </button>
            </div>
          </div>
        )) }
      </div>
    );
  }

  render() {
    return (
      <div className="doneRecipes">
        <Header name="Receitas Favoritas" />
        <div className="buttonsContainerDone">
          <button
            className="categoryBtn"
            type="button"
            onClick={ () => this.setState({ filter: '' }) }
            data-testid="filter-by-all-btn"
          >
            All
          </button>
          <button
            className="categoryBtn"
            type="button"
            onClick={ () => this.setState({ filter: 'bebida' }) }
            data-testid="filter-by-drink-btn"
          >
            Drinks
          </button>
          <button
            className="categoryBtn"
            type="button"
            onClick={ () => this.setState({ filter: 'comida' }) }
            data-testid="filter-by-food-btn"
          >
            Food
          </button>
        </div>
        {this.renderAll()}
      </div>
    );
  }
}

export default (Favorite);
