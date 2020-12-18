import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import '../dropdown.sass';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    const { title } = this.props;

    this.state = {
      listOpen: false,
      headerTitle: title,
      keyword: '',
      gilad: true,
      jason: false,
      antoine: false,

    };

    this.searchField = React.createRef();
    this.close = this.close.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

 handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.checked });
  };

  static getDerivedStateFromProps(nextProps) {
    const { list, title } = nextProps;

    const selectedItem = list.filter((item) => item.selected);

    if (selectedItem.length) {
      return {
        headerTitle: selectedItem[0].title,
      };
    }
    return { headerTitle: title };
  }

  componentDidUpdate() {
    console.log('kepanggil')
    const { listOpen } = this.state;

    setTimeout(() => {
      if (listOpen) {
        window.addEventListener('click', this.close);
      } else {
        window.removeEventListener('click', this.close);
      }
    }, 0);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.close);
  }

  close() {
    this.setState({
      listOpen: false,
    });
  }

  selectItem(title, id, stateKey) {
    const { resetThenSet } = this.props;
    this.setState({
      headerTitle: title,
      listOpen: false,
    }, resetThenSet(id, stateKey));
  }

  toggleList() {
    console.log('TOGGLE')
    this.setState((prevState) => ({
      listOpen: !prevState.listOpen,
  }))
  }

   
 

  render() {
    const { searchable } = this.props;
    const { listOpen, headerTitle } = this.state;

    return (
            <div className="dd-wrapper">
              <button
                type="button"
                className="dd-header"
                onClick={() => this.toggleList()}
              >
                <div className="dd-header-title">{headerTitle}</div>
                {listOpen
                  ? <FontAwesome name="angle-up" size="2x" />
                  : <FontAwesome name="angle-down" size="2x" />}
              </button>
              {listOpen && (
                <div
                  role="list"
                  className={`dd-list ${searchable ? 'searchable' : ''}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="dd-scroll-list" style={{padding: 20}}>
                    <FormGroup>
                      <FormControlLabel
                        labelPlacement='start'
                        label="Gilad Gray"
                        control={<Checkbox checked={this.state.gilad} onChange={this.handleChange} name="gilad" />}
                      />
                      <FormControlLabel
                        labelPlacement='start'

                        control={<Checkbox checked={this.state.jason} onChange={this.handleChange} name="jason" />}
                        label="Jason Killian"
                      />
                      <FormControlLabel
                        labelPlacement='start'
                        control={<Checkbox checked={this.state.antoine} onChange={this.handleChange} name="antoine" />}
                        label="Antoine Llorca"
                      />
                    </FormGroup>
                  </div>
                </div>
              )}
            </div>
    );
  }
}

export default Dropdown;