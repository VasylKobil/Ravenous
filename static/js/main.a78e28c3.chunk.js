(this.webpackJsonpravenous=this.webpackJsonpravenous||[]).push([[0],{13:function(e,t,a){e.exports=a(48)},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(10),i=a.n(s),o=(a(18),a(4)),c=a(5),l=a(3),u=a(7),h=a(6),m=(a(19),a(20),a(21),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.business;return r.a.createElement("div",{className:"Business"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:this.props.business.imageSrc,alt:""})),r.a.createElement("h2",null,e.name),r.a.createElement("div",{className:"Business-information"},r.a.createElement("div",{className:"Business-address"},r.a.createElement("p",null,e.address),r.a.createElement("p",null,e.city),r.a.createElement("p",null,e.state," ",e.zipCode)),r.a.createElement("div",{className:"Business-reviews"},r.a.createElement("h3",null,e.category),r.a.createElement("h3",{className:"rating"},e.rating," stars"),r.a.createElement("p",null,e.reviewCount," reviews"))))}}]),a}(r.a.Component)),d=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"BusinessList"},this.props.businesses.map((function(e){return r.a.createElement(m,{key:e.id,business:e})})))}}]),a}(r.a.Component),p=(a(22),a(11)),v={"Best Match":"best_match","Highest Rated":"rating","Most Reviewed":"review_count"},f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).keyPressed=function(e){"Enter"===e.key&&n.handleSearch()},n.validateFun=function(){var e=n.state,t=e.term,a=e.location;t||a||(n.setState({termError:!1}),n.setState({locationError:!1})),t||n.setState({termError:!1}),a||n.setState({locationError:!1}),t&&!a&&(n.setState({termError:!0}),n.setState({locationError:!1})),!t&&a&&(n.setState({termError:!1}),n.setState({locationError:!0}))},n.state={term:"",location:"",sortBy:"best_match",termError:!0,locationError:!0},n.handleTermChange=n.handleTermChange.bind(Object(l.a)(n)),n.handleLocationChange=n.handleLocationChange.bind(Object(l.a)(n)),n.handleSearch=n.handleSearch.bind(Object(l.a)(n)),n.keyPressed=n.keyPressed.bind(Object(l.a)(n)),n.validateFun=n.validateFun.bind(Object(l.a)(n)),n}return Object(c.a)(a,[{key:"handleSearch",value:function(e){var t=this.state,a=t.term,n=t.location,r=t.sortBy;a&&n?(a&&n&&(this.setState({termError:!0}),this.setState({locationError:!0})),this.props.searchYelp(a,n,r),e&&e.preventDefault()):this.validateFun()}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"handleLocationChange",value:function(e){this.setState({location:e.target.value})}},{key:"getSortByClass",value:function(e){return e===this.state.sortBy?"active":""}},{key:"handleSortByChange",value:function(e){var t=this;this.setState({sortBy:e},(function(){t.handleSearch()}))}},{key:"renderSortByOptions",value:function(){var e=this;return Object.keys(v).map((function(t){var a=v[t];return r.a.createElement("li",{key:a,onClick:e.handleSortByChange.bind(e,a),className:e.getSortByClass(a)},t," ")}))}},{key:"render",value:function(){var e=this.props.loading;return r.a.createElement("div",{className:"SearchBar"},r.a.createElement("div",{className:"SearchBar-sort-options"},r.a.createElement("ul",null,this.renderSortByOptions())),r.a.createElement("div",{className:"SearchBar-fields"},r.a.createElement("input",{className:this.state.termError?"":"input",placeholder:"Search Businesses",onChange:this.handleTermChange,onKeyPress:this.keyPressed}),r.a.createElement("input",{className:this.state.locationError?"":"input",placeholder:"Where?",onChange:this.handleLocationChange,onKeyPress:this.keyPressed})),r.a.createElement("div",{className:"SearchBar-submit"},r.a.createElement("a",{onClick:this.handleSearch},"Let's Go")),r.a.createElement("div",{className:"sweet-loading"},r.a.createElement(p.ClipLoader,{css:"\n    margin-top: 1.5rem;\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    left: calc(50% - 20px);\n    ",color:"#cca353",loading:e})))}}]),a}(r.a.Component),y={searchYelp:function(e,t,a){return fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=".concat(e,"&location=").concat(t,"&sort_by=").concat(a),{headers:{Authorization:"Bearer ".concat("A9YYPjKvfpu_n0Uyd597LRkQGFNbwIT7BHl7sf1WoOjpBfp3SSWt-q3X1jhgXJK4Z_80NLzwpDSfYt3oBhH46p8gRI-HfzPClZaVAyjWj-tf5jl9CIbUiH1S85h7X3Yx")}}).then((function(e){return e.json()})).then((function(e){if(e.businesses)return e.businesses.map((function(e){return{id:e.id,imageSrc:e.image_url,name:e.name,address:e.location.address1,city:e.location.city,state:e.location.state,zipCode:e.location.zip_code,category:e.categories[0].title,rating:e.rating,reviewCount:e.review_count}}))}))}},b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).scrollToMyRef=function(){var e=document.querySelector(".BusinessList").offsetTop;window.scrollTo(0,e)},n.state={businesses:[],loading:!1},n.searchYelp=n.searchYelp.bind(Object(l.a)(n)),n.myRef=r.a.createRef(),n}return Object(c.a)(a,[{key:"searchYelp",value:function(e,t,a){var n=this;this.setState({loading:!0});var r=y.searchYelp(e,t,a);return r.then((function(e){n.setState({businesses:e,loading:!1}),n.scrollToMyRef()})),r}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.businesses;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"ravenous"),r.a.createElement(f,{searchYelp:this.searchYelp,loading:t}),r.a.createElement(d,{businesses:a,ref:this.myRef}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.a78e28c3.chunk.js.map