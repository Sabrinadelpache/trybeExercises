import React, { Component } from 'react'


class Form extends Component {
  constructor() {
    super();
    // this.fileInputChecker = this.fileInputChecker.bind(this);
    this.fileInput = React.createRef();
    this.state = {
      favoriteState: '',
      yesOrNoChoice: 'Selecione',
      age: 0,
      japaneseChoice: false,
      archive: ''
    };
  }


  changeHandler = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({[name]: value})
  }
  // fileInputChecker(){
  //   alert(`Selected file - ${this.fileInput.current.files[0].name}`)
  // }


  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">

          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
              <textarea name="favoriteState" value={this.state.favoriteState} onChange={this.changeHandler}/>
          </label>

          <select name="yesOrNoChoice" value={this.state.yesOrNoChoice} onChange={this.changeHandler}>
            <option defaultValue>Selecione</option>
            <option value='sim'>sim</option>
            <option value='nao'>não</option>
          </select>

          <label>Insira um valor:
            <input type="number" name="age" value={this.state.age} onChange={this.changeHandler}/>
          </label>
            <br/>
          <label>家
            <input type="checkbox" name="japaneseChoice" value={this.state.japaneseChoice} onChange={this.changeHandler}/>
          </label>

          <label>Upload file
            <input type="file" ref={this.fileInput} name="archive" value={this.state.archive} onChange={this.changeHandler} />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;