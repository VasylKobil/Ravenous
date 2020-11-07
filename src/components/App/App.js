import React from 'react'
import './App.css';
import '../BusinessList/BusinessList';
import '../SearchBar/SearchBar';
import SearchBar from "../SearchBar/SearchBar";
import BusinessList from "../BusinessList/BusinessList";
import Yelp from "../../util/Yelp";



class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            businesses: [],
            loading: false,
        };

        this.searchYelp = this.searchYelp.bind(this);

        this.myRef = React.createRef();
    }

    scrollToMyRef = () => {
        const {offsetTop} = document.querySelector('.BusinessList');
        window.scrollTo(0, offsetTop);
    }

    searchYelp(term,location,sortBy){
        this.setState({loading: true});
        const promise = Yelp.searchYelp(term,location,sortBy);
        promise.then((businesses) => {
            this.setState({
                businesses: businesses,
                loading: false,
            });
            this.scrollToMyRef();
        });
        return promise;
    }

    render() {
        const {loading, businesses} = this.state;

      return (
          <div className="App">
              <h1>ravenous</h1>
              <SearchBar
                  searchYelp={this.searchYelp}
                  loading={loading}
              />
              <BusinessList
                  businesses={businesses}
                  ref={this.myRef}
              />
          </div>
      );
    }
}

export default App;