(this["webpackJsonpsearch-movies"]=this["webpackJsonpsearch-movies"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),s=a.n(c),o=(a(12),a(1)),l=a(2),i=a(4),u=a(3),m=(a(13),a(14),function(e){var t=e.children;return r.a.createElement("h1",{className:"title"}," ",t," ")}),h=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={inputMovie:""},e._handleChange=function(t){e.setState({inputMovie:t.target.value})},e._handleSubmit=function(t){t.preventDefault();var a=e.state.inputMovie;fetch("https://www.omdbapi.com/?apikey=".concat("4287ad07","&s=").concat(a)).then((function(e){return e.json()})).then((function(t){var a=t.Search,n=void 0===a?[]:a,r=t.totalResults,c=void 0===r?"0":r;console.log({Search:n,totalResults:c}),e.props.onResults(n)}))},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this._handleSubmit},r.a.createElement("div",{className:"field has-addons"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",onChange:this._handleChange,type:"text",placeholder:"Movie to Search.."})),r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"button is-info"},"Search"))))}}]),a}(n.Component),d=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.poster,a=e.title,n=e.year;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image"},r.a.createElement("img",{alt:a,src:t}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-4"},a),r.a.createElement("p",{className:"subtitle is-6"},n)))))}}]),a}(n.Component),v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.movies;return r.a.createElement("div",{className:"MoviesList"},e.map((function(e){return r.a.createElement("div",{className:" MoviesList-item",key:e.imdbID,s:!0},r.a.createElement(d,{title:e.Title,year:e.year,poster:e.Poster}))})))}}]),a}(n.Component),p=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={usedSearch:!1,results:[]},e._handleResults=function(t){e.setState({results:t,usedSearch:!0})},e._renderResults=function(){return 0===e.state.results.length?r.a.createElement("p",null,"Sorry! Results not found"):r.a.createElement(v,{movies:e.state.results})},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null,"Search Movies"),r.a.createElement("div",{className:"SearchForm-wrapper"},r.a.createElement(h,{onResults:this._handleResults})),!0===this.state.usedSearch?this._renderResults():r.a.createElement("small",null,"Use the form to search a movie"))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.16ad207c.chunk.js.map