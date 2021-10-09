(function(t){function e(e){for(var o,i,r=e[0],c=e[1],u=e[2],p=0,m=[];p<r.length;p++)i=r[p],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&m.push(s[i][0]),s[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(m.length)m.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],o=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(o=!1)}o&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var o={},s={app:0},n=[];function i(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=o,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/flibusta/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"24e1":function(t,e,a){},2637:function(t,e,a){},"31ef":function(t,e,a){},"39b7":function(t,e,a){"use strict";a("d7ae")},4148:function(t,e,a){"use strict";a("24e1")},"515d":function(t,e,a){"use strict";a("2637")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("keep-alive",[a("router-view")],1)],1)},n=[],i={name:"App",data:function(){return{}},components:{}},r=i,c=(a("5c0b"),a("2877")),u=Object(c["a"])(r,s,n,!1,null,null,null),l=u.exports,p=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-books"},[a("router-link",{attrs:{to:{name:"cart",params:{cart_data:t.CART}}}},[a("div",{staticClass:"link_to_cart"},[a("i",{staticClass:"material-icons"},[t._v("shopping_cart")]),a("span",[t._v(": "+t._s(t.CART.length))])])]),a("div",{staticClass:"query"},[a("h1",{staticClass:"title"},[t._v("Flibusta - simple book search")]),a("form",{ref:"form",staticClass:"query-form",on:{submit:function(e){return e.preventDefault(),t.search(t.searchQuery)}}},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.searchQuery,expression:"searchQuery",modifiers:{trim:!0}}],staticClass:"query-input",attrs:{type:"text",placeholder:"Search...",required:""},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._m(0)])]),a("div",{staticClass:"content"},[t.BOOKS.length?a("BookList"):t._e()],1)],1)},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn-search",attrs:{type:"submit"}},[a("i",{staticClass:"material-icons"},[t._v("search")])])}],d=a("5530"),f=a("2f62"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list-wrapper"},[a("div",{staticClass:"book-list"},t._l(this.BOOKS,(function(e){return a("BookItem",{key:e.id,attrs:{book_data:e},on:{addToCart:t.addToCart}})})),1),t.isLoadMoreVisible?a("button",{staticClass:"btn-load-more",on:{click:t.loadMoreSearch}},[t._v("Load more")]):t._e()])},v=[],b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"book-item"},[t.isInfoPopupVisible?a("Popup",{attrs:{popup_data:t.book_data},on:{closePopup:t.closeInfoPopup,checkForm:t.addToCart}}):t._e(),a("button",{staticClass:"book-item__show-info",on:{click:t.showPopupInfo}},[a("i",{staticClass:"material-icons"},[t._v("info")])]),a("div",{staticClass:"book-item__header"},[a("h4",{staticClass:"book-item__title"},[t._v(t._s(t.book_data.volumeInfo.title))])]),a("div",{staticClass:"book-item__body"},[t.book_data.volumeInfo.imageLinks?[a("img",{attrs:{src:t.book_data.volumeInfo.imageLinks.thumbnail,alt:t.book_data.volumeInfo.title,height:"150"}})]:[a("img",{attrs:{src:"https://upittpress.org/wp-content/themes/pittspress/images/no_cover_available.png",alt:t.book_data.volumeInfo.title,height:"300"}})],a("div",{staticClass:"book-item__content"},[a("p",{staticClass:"author"},[t.book_data.volumeInfo.authors?a("span",[t._v(" By "),t._l(t.book_data.volumeInfo.authors,(function(e,o){return a("span",{key:o},[a("em",[t._v(" "+t._s(o+1!==t.book_data.volumeInfo.authors.length&&o+1!==t.book_data.volumeInfo.authors.length-1?e+", ":o+1==t.book_data.volumeInfo.authors.length&&o+1!==1?" and "+e:e)+" ")])])}))],2):a("span",[t._v("No authors to display")])]),t.book_data.volumeInfo.publishedDate?a("div",{staticClass:"published"},[a("p",[t._v("Published "+t._s(t.book_data.volumeInfo.publishedDate.slice(0,4)))]),t.book_data.volumeInfo.publisher?a("p",[t._v(" by "+t._s(t.book_data.volumeInfo.publisher))]):t._e()]):t._e()])],2),a("div",{staticClass:"book-item__footer"},[a("p",{staticClass:"price"},[t._v(" "+t._s(Math.round(t.book_data.saleInfo.listPrice.amount)+" "+t.book_data.saleInfo.retailPrice.currencyCode)+" ")]),a("button",{staticClass:"book-item__order",on:{click:t.addToCart}},[a("i",{staticClass:"material-icons"},[t._v("add_shopping_cart")])])])],1)},C=[],O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"popup-wrapper",staticClass:"popup-wrapper"},[a("div",{staticClass:"popup"},[a("p",{staticClass:"popup__title"},[t._v(t._s(t.popup_data.volumeInfo.title))]),a("span",{staticClass:"popup__icon"},[a("i",{staticClass:"material-icons",staticStyle:{cursor:"pointer"},on:{click:t.closePopup}},[t._v("close")])]),a("div",{staticClass:"popup__content"},[t.popup_data.volumeInfo.imageLinks?[a("img",{attrs:{src:t.popup_data.volumeInfo.imageLinks.thumbnail,alt:t.popup_data.volumeInfo.title,height:"200"}})]:[a("img",{attrs:{src:"https://upittpress.org/wp-content/themes/pittspress/images/no_cover_available.png",alt:t.popup_data.volumeInfo.title,height:"200"}})],a("p",{staticClass:"popup__description"},[t._v(t._s(t.popup_data.volumeInfo.description))])],2),a("form",{staticClass:"popup__form",attrs:{novalidate:"true"},on:{submit:function(e){return e.preventDefault(),t.checkForm()}}},[t.errors.length?a("p",{staticClass:"popup__form-errors"},[a("b",[t._v("Please correct your mistakes:")]),a("ol",t._l(t.errors,(function(e,o){return a("li",{key:o+e,staticClass:"errors-item"},[t._v(" "+t._s(e)+" ")])})),0)]):t._e(),a("label",{staticClass:"popup__label"},[t._v("Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"popup__input",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),a("label",{staticClass:"popup__label"},[t._v("Email:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"popup__input",attrs:{type:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("label",{staticClass:"popup__label"},[t._v("Phone:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"popup__input",attrs:{type:"tel"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),a("button",{staticClass:"submit-btn",on:{click:t.checkForm}},[t._v(" Add to cart ")])])])])},T=[],E=(a("b0c0"),{name:"popup",props:{popup_data:{type:Object,default:function(){return{}}}},data:function(){return{errors:[],name:"",email:"",phone:""}},methods:{closePopup:function(){this.$emit("closePopup")},checkForm:function(){this.errors=[],(!this.name||this.name.length<2)&&this.errors.push("Name required or should contains more than 2 chars."),this.email?this.validEmail(this.email)||this.errors.push("Valid email required."):this.errors.push("Email required."),this.phone?this.validPhone(this.phone)||this.errors.push("Valid phone required."):this.errors.push("Phone required."),this.errors.length||this.$emit("checkForm")},validEmail:function(t){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)},validPhone:function(t){var e=/^((\+)380|0)[1-9](\d{2}){4}$/;return e.test(t)}},mounted:function(){var t=this;document.addEventListener("click",(function(e){e.target===t.$refs["popup-wrapper"]&&t.closePopup()}))}}),k=E,I=(a("515d"),Object(c["a"])(k,O,T,!1,null,null,null)),g=I.exports,y={name:"BookItem",components:{Popup:g},data:function(){return{isInfoPopupVisible:!1}},props:{book_data:{type:Object,default:function(){return{}}}},methods:{addToCart:function(){this.$set(this.book_data,"quantity",1),this.$toast.success("Added to cart",{timeout:3e3}),this.$emit("addToCart",this.book_data),this.isInfoPopupVisible=!1},showPopupInfo:function(){this.isInfoPopupVisible=!0},closeInfoPopup:function(){this.isInfoPopupVisible=!1}},watch:{isInfoPopupVisible:function(){this.isInfoPopupVisible?document.body.style.overflow="hidden":document.body.style.overflow="auto"}}},R=y,A=(a("d12c"),Object(c["a"])(R,b,C,!1,null,null,null)),M=A.exports,S={name:"BookList",props:{},components:{BookItem:M},computed:Object(d["a"])({},Object(f["c"])(["BOOKS","CART","isLoadMoreVisible"])),methods:Object(d["a"])(Object(d["a"])({},Object(f["b"])(["ADD_TO_CART","LOAD_MORE_BOOKS"])),{},{addToCart:function(t){this.ADD_TO_CART(t)},loadMoreSearch:function(){this.LOAD_MORE_BOOKS()}})},P=S,w=(a("e8e1"),Object(c["a"])(P,h,v,!1,null,null,null)),L=w.exports,j={name:"BookSearch",components:{BookList:L},data:function(){return{searchQuery:""}},computed:Object(d["a"])({},Object(f["c"])(["SEARCH_QUERY","BOOKS","CART"])),methods:Object(d["a"])(Object(d["a"])({},Object(f["b"])(["GET_SEARCH_QUERY_TO_VUEX","GET_BOOKS_FROM_API"])),{},{search:function(t){""!=this.searchQuery?(this.GET_BOOKS_FROM_API(t),this.searchQuery=""):this.$toast.warning("Ooops, you need to type search query",{timeout:3e3})}})},B=j,x=(a("4148"),Object(c["a"])(B,m,_,!1,null,null,null)),D=x.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cart"},[a("router-link",{attrs:{to:{name:"bookSearch"}}},[a("div",{staticClass:"link_to_cart"},[a("i",{staticClass:"material-icons"},[t._v("arrow_back")]),t._v("Back to store ")])]),a("h2",[t._v("Cart")]),t.cart_data.length?t._e():a("p",[t._v("There are no books in cart...")]),t._l(t.cart_data,(function(e,o){return a("CartItem",{key:e.id,attrs:{cart_item_data:e},on:{deleteFromCart:function(e){return t.deleteFromCart(o)},increment:function(e){return t.increment(o)},decrement:function(e){return t.decrement(o)}}})})),a("p",{staticClass:"total-price"},[t._v("Total price: "+t._s(t.cartTotalCost)+" UAH")]),this.cart_data.length?a("button",{staticClass:"submit-btn",on:{click:t.submitBooksOrder}},[t._v("Place your order")]):t._e()],2)},$=[],N=a("b85c"),V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cart-item"},[t.cart_item_data.volumeInfo.imageLinks?[a("img",{staticClass:"v-cart-item__image",attrs:{src:t.cart_item_data.volumeInfo.imageLinks.thumbnail,alt:t.cart_item_data.volumeInfo.title}})]:[a("img",{staticClass:"v-cart-item__image",attrs:{src:"https://upittpress.org/wp-content/themes/pittspress/images/no_cover_available.png",alt:t.cart_item_data.volumeInfo.title}})],a("div",{staticClass:"cart-item__info"},[a("p",[t._v(t._s(t.cart_item_data.volumeInfo.title))])]),a("div",{staticClass:"price"},[a("p",[t._v(" "+t._s(Math.round(t.cart_item_data.saleInfo.retailPrice.amount)+" "+t.cart_item_data.saleInfo.retailPrice.currencyCode)+" ")])]),a("div",{staticClass:"cart-item__quantity"},[a("span",{staticClass:"crement",on:{click:t.decrementItem}},[a("i",{staticClass:"material-icons"},[t._v("arrow_left")])]),a("span",[a("p",[t._v("Qty: "+t._s(t.cart_item_data.quantity)+" ")])]),a("span",{staticClass:"crement",on:{click:t.incrementItem}},[a("i",{staticClass:"material-icons"},[t._v("arrow_right")])])]),a("button",{staticClass:"btn",on:{click:t.deleteFromCart}},[a("i",{staticClass:"material-icons"},[t._v("delete_forever")])])],2)},q=[],K={name:"CartItem",props:{cart_item_data:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{deleteFromCart:function(){this.$emit("deleteFromCart")},decrementItem:function(){this.$emit("decrement")},incrementItem:function(){this.$emit("increment")}},computed:{}},Q=K,U=(a("5bff"),Object(c["a"])(Q,V,q,!1,null,null,null)),H=U.exports,G={name:"cart",components:{CartItem:H},data:function(){return{}},props:{cart_data:{type:Array,default:function(){return[]}}},methods:Object(d["a"])(Object(d["a"])({},Object(f["b"])(["DELETE_FROM_CART","INCREMENT_CART_ITEM","DECREMENT_CART_ITEM","CLEAR_CART_AFTER_SUBMIT"])),{},{increment:function(t){this.INCREMENT_CART_ITEM(t)},decrement:function(t){this.DECREMENT_CART_ITEM(t)},deleteFromCart:function(t){this.DELETE_FROM_CART(t),this.$toast.success("Deleted from cart",{timeout:2e3})},isNumber:function(t){var e=/[0-9]/;e.test(t.key)||(t.returnValue=!1,t.preventDefault&&t.preventDefault())},submitBooksOrder:function(){this.$router.push({name:"bookSearch"}),this.$toast.success("Your order for the amount of ".concat(this.cartTotalCost," UAH has been successfully completed"),{timeout:15e3}),this.CLEAR_CART_AFTER_SUBMIT()}}),computed:{cartTotalCost:function(){var t=[];if(this.cart_data.length){var e,a=Object(N["a"])(this.cart_data);try{for(a.s();!(e=a.n()).done;){var o=e.value;t.push(Math.round(o.saleInfo.retailPrice.amount)*o.quantity)}}catch(s){a.e(s)}finally{a.f()}return t=t.reduce((function(t,e){return t+e})),t}return 0}}},Y=G,z=(a("39b7"),Object(c["a"])(Y,F,$,!1,null,null,null)),J=z.exports;o["a"].use(p["a"]);var Z=new p["a"]({routes:[{path:"/",name:"bookSearch",component:D,props:!0},{path:"/cart",name:"cart",component:J,props:!0}]}),X=Z,W=(a("99af"),a("bc3a")),tt=a.n(W),et={GET_BOOKS_FROM_API:function(t,e){var a=this,o=t.commit,s=t.state;return tt()("https://www.googleapis.com/books/v1/volumes?q=intitle:".concat(e,"&filter=paid-ebooks&startIndex=0&maxResults=40")).then((function(t){return s.totalItems=t.data.totalItems,0==t.data.totalItems?(s.isLoadMoreVisible=!1,s.startIndex=0,void a._vm.$toast.warning("Ooops, try another search query",{timeout:3e3})):t.data.totalItems<=40?(s.isLoadMoreVisible=!1,void o("SET_BOOKS_TO_STATE",t.data.items)):(s.searchQuery=e,s.isLoadMoreVisible=!0,void o("SET_BOOKS_TO_STATE",t.data.items))})).catch((function(t){return console.log(t),t}))},LOAD_MORE_BOOKS:function(t){var e=t.commit,a=t.state;return a.startIndex+=40,tt()("https://www.googleapis.com/books/v1/volumes?q=intitle:".concat(a.searchQuery,"&filter=paid-ebooks&startIndex=").concat(a.startIndex,"&maxResults=40")).then((function(t){a.startIndex+40>a.totalItems&&(a.isLoadMoreVisible=!1),e("LOAD_MORE_BOOKS_TO_STATE",t.data.items)})).catch((function(t){return console.log(t),t}))},ADD_TO_CART:function(t,e){var a=t.commit;a("SET_CART",e)},DELETE_FROM_CART:function(t,e){var a=t.commit;a("REMOVE_FROM_CART",e)},INCREMENT_CART_ITEM:function(t,e){var a=t.commit;a("INCREMENT",e)},DECREMENT_CART_ITEM:function(t,e){var a=t.commit;a("DECREMENT",e)},CLEAR_CART_AFTER_SUBMIT:function(t){var e=t.commit;e("CLEAR_CART")}},at=a("2909"),ot=(a("4de4"),a("d81d"),a("a434"),{SET_BOOKS_TO_STATE:function(t,e){t.books=e.filter((function(t){return"FOR_SALE"===t.saleInfo.saleability}))},LOAD_MORE_BOOKS_TO_STATE:function(t,e){var a,o=e.filter((function(t){return"FOR_SALE"===t.saleInfo.saleability}));(a=t.books).push.apply(a,Object(at["a"])(o))},SET_CART:function(t,e){if(t.cart.length){var a=!1;t.cart.map((function(t){t.id===e.id&&(a=!0,t.quantity++)})),a||t.cart.push(e)}else t.cart.push(e)},REMOVE_FROM_CART:function(t,e){t.cart.splice(e,1)},INCREMENT:function(t,e){t.cart[e].quantity++},DECREMENT:function(t,e){t.cart[e].quantity>1&&t.cart[e].quantity--},CLEAR_CART:function(t){t.cart=[]}}),st={SEARCH_QUERY:function(t){return t.searchQuery},BOOKS:function(t){return t.books},CART:function(t){return t.cart},isLoadMoreVisible:function(t){return t.isLoadMoreVisible}};o["a"].use(f["a"]);var nt=new f["a"].Store({state:{searchQuery:"",startIndex:0,totalItems:null,isLoadMoreVisible:!1,books:[],cart:[]},mutations:ot,actions:et,getters:st}),it=nt,rt=(a("d1e78"),a("6c42")),ct=(a("da96"),{transition:"Vue-Toastification__bounce",maxToasts:5,newestOnTop:!0,position:"top-right",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1});o["a"].use(rt["a"],ct),o["a"].config.productionTip=!1,new o["a"]({router:X,store:it,render:function(t){return t(l)}}).$mount("#app")},"5bff":function(t,e,a){"use strict";a("31ef")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"755e":function(t,e,a){},"8a92":function(t,e,a){},"9c0c":function(t,e,a){},d12c:function(t,e,a){"use strict";a("755e")},d7ae:function(t,e,a){},e8e1:function(t,e,a){"use strict";a("8a92")}});
//# sourceMappingURL=app.9a3e208b.js.map