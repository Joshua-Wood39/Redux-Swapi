import React from "react";
import { connect } from "react-redux";
import { fetching } from '../actions';
import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetching();
  }

  render() {  
    console.log(this.props.characters)  
    return (

      <div>
        {this.props.isLoading && (
          <h3>Loading Your People...</h3>
        )}
        {this.props.error && <p className="error">{this.props.error}</p>}
        <div className="CharactersList_wrapper">
          <CharacterList characters={this.props.characters} />
        </div>
      </div>

    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
    characters: state.characters,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  {
    fetching,
  }
)(CharacterListView);
