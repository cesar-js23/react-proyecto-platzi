(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/platziconf-logo.f246f5f1.svg"},,,,function(e,t,a){e.exports=a.p+"static/media/badge-header.973f5842.svg"},,,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.0026b862.svg"},function(e,t,a){e.exports=a.p+"static/media/astronauts.71addf45.svg"},,,function(e,t,a){e.exports=a(54)},,,,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),s=(a(34),a(35),a(56)),o=a(57),i=a(58),m=a(2),u=a(3),d=a(5),p=a(4),h=a(6),f=a(55),g=(a(36),a(24)),v=a.n(g),b=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Navbar"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(f.a,{className:"Navbar__brand",to:"/"},r.a.createElement("img",{className:"Navbar__brand-logo",src:v.a,alt:"Logo"}),r.a.createElement("span",{className:"font-weight-light"},"Platzi"),r.a.createElement("span",{className:"font-weight-bold"},"Conf"))))}}]),t}(r.a.Component);var E=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),e.children)},N=(a(39),a(12)),O=a.n(N),j=a(25),w=a.n(j),y=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"Home__col col-12 col-md-4"},r.a.createElement("img",{src:O.a,alt:"Platzi Conf Logo",className:"img-fluid mb-2"}),r.a.createElement("h1",null,"Badge Management System"),r.a.createElement(f.a,{className:"btn btn-primary",to:"/badges"},"Start")),r.a.createElement("div",{className:"Home__col d-none d-md-block col-md-8"},r.a.createElement("img",{src:w.a,alt:"Astronauts",className:"img-fluid p-4"})))))}}]),t}(n.Component),C=a(7),_=a.n(C),S=a(11),x=(a(42),a(16)),k=a.n(x),B=a(20),T=(a(43),a(26)),I=a.n(T);var M=function(e){var t=e.email,a=I()(t);return r.a.createElement("img",{className:e.className,src:"https://www.gravatar.com/avatar/".concat(a,"?d=identicon"),alt:"Avatar"})},D=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"BadgesListItem"},r.a.createElement(M,{className:"BadgesListItem__avatar",email:this.props.badge.email}),r.a.createElement("div",null,r.a.createElement("strong",null,this.props.badge.firstName," ",this.props.badge.lastName),r.a.createElement("br",null),"@",this.props.badge.twitter,r.a.createElement("br",null),this.props.badge.jobTitle))}}]),t}(r.a.Component);var L=function(e){var t=function(e){var t=r.a.useState(""),a=Object(B.a)(t,2),n=a[0],l=a[1],c=r.a.useState(e),s=Object(B.a)(c,2),o=s[0],i=s[1];return r.a.useMemo(function(){var t=e.filter(function(e){return"".concat(e.firstName," ").concat(e.lastName).toLowerCase().includes(n.toLowerCase())});i(t)},[e,n]),{query:n,setQuery:l,filteredBadges:o}}(e.badges),a=t.query,n=t.setQuery,l=t.filteredBadges;return 0===l.length?r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Filter Badges"),r.a.createElement("input",{type:"text",className:"form-control",value:a,onChange:function(e){n(e.target.value)}})),r.a.createElement("h3",null,"No badges were found"),r.a.createElement(f.a,{className:"btn btn-primary",to:"/badges/new"},"Create new badge")):r.a.createElement("div",{className:"BadgesList"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Filter Badges"),r.a.createElement("input",{type:"text",className:"form-control",value:a,onChange:function(e){n(e.target.value)}})),r.a.createElement("ul",{className:"list-unstyled"},l.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(f.a,{className:"text-reset text-decoration-none",to:"/badges/".concat(e.id)},r.a.createElement(D,{badge:e})))})))},A=(a(46),a(23),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"lds-grid"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}}]),t}(n.Component));var F=function(){return r.a.createElement("div",{className:"PageLoading"},r.a.createElement(A,null))};a(47);var P=function(e){return r.a.createElement("div",{className:"PageError"},e.error.message)},J=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"lds-grid"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}}]),t}(n.Component),V="http://localhost:3001",z=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500;return e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.floor(Math.random()*(t-e+1))+e}(t,a),new Promise(function(t){return setTimeout(t,e)})};function U(e){return H.apply(this,arguments)}function H(){return(H=Object(S.a)(_.a.mark(function e(t){var a,n,r,l,c=arguments;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:{},e.next=3,z();case 3:return a.headers={"Content-Type":"application/json",Accept:"application/json"},n=V+t,e.next=7,fetch(n,a);case 7:return r=e.sent,e.next=10,r.json();case 10:return l=e.sent,e.abrupt("return",l);case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}var q={badges:{list:function(){return U("/badges")},create:function(e){return U("/badges",{method:"POST",body:JSON.stringify(e)})},read:function(e){return U("/badges/".concat(e))},update:function(e,t){return U("/badges/".concat(e),{method:"PUT",body:JSON.stringify(t)})},remove:function(e){return U("/badges/".concat(e),{method:"DELETE"})}}},Q=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,error:null,data:void 0},a.fetchData=Object(S.a)(_.a.mark(function e(){var t;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0,error:null}),e.prev=1,e.next=4,q.badges.list();case 4:t=e.sent,a.setState({loading:!1,data:t}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a.setState({loading:!1,error:e.t0});case 11:case"end":return e.stop()}},e,null,[[1,8]])})),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchData(),this.intervalId=setInterval(this.fetchData,5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){return!0!==this.state.loading||this.state.data?this.state.error?r.a.createElement(P,{error:this.state.error}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Badges"},r.a.createElement("div",{className:"Badges__hero"},r.a.createElement("div",{className:"Badges__container"},r.a.createElement("img",{className:"Badges_conf-logo",src:k.a,alt:"Conf Logo"})))),r.a.createElement("div",{className:"Badges__container"},r.a.createElement("div",{className:"Badges__buttons"},r.a.createElement(f.a,{to:"/badges/new",className:"btn btn-primary"},"New Badge")),r.a.createElement(L,{badges:this.state.data}),this.state.loading&&r.a.createElement(J,null))):r.a.createElement(F,null)}}]),t}(r.a.Component),R=a(13),Y=a(17),W=(a(48),a(49),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Badge"},r.a.createElement("div",{className:"Badge__header"},r.a.createElement("img",{src:k.a,alt:"Logo de la conferencia"})),r.a.createElement("div",{className:"Badge__section-name"},r.a.createElement(M,{className:"Badge__avatar",email:this.props.email}),r.a.createElement("h1",null,this.props.firstName," ",r.a.createElement("br",null)," ",this.props.lastName)),r.a.createElement("div",{className:"Badge__section-info"},r.a.createElement("h3",null,this.props.jobTitle),r.a.createElement("div",null,"@",this.props.twitter)),r.a.createElement("div",{className:"Badge__footer"},"#platziconf"))}}]),t}(r.a.Component)),X=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){console.log("Button was clicked")},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.props.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"firstName",value:this.props.formValues.firstName})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"lastName",value:this.props.formValues.lastName})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"email",name:"email",value:this.props.formValues.email})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Job Title"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"jobTitle",value:this.props.formValues.jobTitle})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Twitter"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"twitter",value:this.props.formValues.twitter})),r.a.createElement("button",{onClick:this.handleClick,className:"btn btn-primary"},"Save"),this.props.error&&r.a.createElement("p",{className:"text-danger"},this.props.error.message)))}}]),t}(r.a.Component),G=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1,error:null,form:{firstName:"",lastName:"",email:"",jobTitle:"",twitter:""}},a.handleChange=function(e){a.setState({form:Object(Y.a)({},a.state.form,Object(R.a)({},e.target.name,e.target.value))})},a.handleSubmit=function(){var e=Object(S.a)(_.a.mark(function e(t){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({loading:!0,error:null}),e.prev=2,e.next=5,q.badges.create(a.state.form);case 5:a.setState({loading:!1}),a.props.history.push("/badges"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),a.setState({loading:!1,error:e.t0});case 12:case"end":return e.stop()}},e,null,[[2,9]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.state.loading?r.a.createElement(F,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"BadgeNew__hero"},r.a.createElement("img",{className:"BadgeNew__hero-image img-fluid",src:O.a,alt:"Logo"})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement(W,{firstName:this.state.form.firstName||"FIRST_NAME",lastName:this.state.form.lastName||"LAST_NAME",twitter:this.state.form.twitter||"twitter",jobTitle:this.state.form.jobTitle||"JOB_TITLE",email:this.state.form.email||"EMAIL",avatarUrl:"https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"})),r.a.createElement("div",{className:"col-6"},r.a.createElement("h1",null,"New Attendant"),r.a.createElement(X,{onChange:this.handleChange,onSubmit:this.handleSubmit,formValues:this.state.form,error:this.state.error})))))}}]),t}(r.a.Component);a(50),a(51);var K=function(e){return e.isOpen?c.a.createPortal(r.a.createElement("div",{className:"Modal"},r.a.createElement("div",{className:"Modal__container"},r.a.createElement("button",{onClick:e.onClose,className:"Modal__close-button"},"X"),e.children)),document.getElementById("modal")):null};var Z=function(e){return r.a.createElement(K,{isOpen:e.isOpen,onClose:e.onClose},r.a.createElement("div",{className:"DeleteBadgeModal"},r.a.createElement("h1",null,"Are You Sure?"),r.a.createElement("p",null,"You are about to delete this badge."),r.a.createElement("div",null,r.a.createElement("button",{onClick:e.onDeleteBadge,className:"btn btn-danger mr-4"},"Delete"),r.a.createElement("button",{onClick:e.onClose,className:"btn btn-primary"},"Cancel"))))};var $=function(e){var t=e.badge;return r.a.createElement("div",null,r.a.createElement("div",{className:"BadgeDetails__hero"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("img",{src:O.a,alt:"Logo de la Conferencia"})),r.a.createElement("div",{className:"col-6 BadgeDetails__hero-attendant-name"},r.a.createElement("h1",null,t.firstName," ",t.lastName))))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(W,{firstName:t.firstName,lastName:t.lastName,email:t.email,twitter:t.twitter,jobTitle:t.jobTitle})),r.a.createElement("div",{className:"col"},r.a.createElement("h2",null,"Actions"),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(f.a,{className:"btn btn-primary mb-4",to:"/badges/".concat(t.id,"/edit")},"Edit")),r.a.createElement("div",null,r.a.createElement("button",{onClick:e.onOpenModal,className:"btn btn-danger"},"Delete"),r.a.createElement(Z,{isOpen:e.modalIsOpen,onClose:e.onCloseModal,onDeleteBadge:e.onDeleteBadge})))))))},ee=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,error:null,data:void 0,modalIsOpen:!1},a.fetchData=Object(S.a)(_.a.mark(function e(){var t;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0,error:null}),e.prev=1,e.next=4,q.badges.read(a.props.match.params.badgeId);case 4:t=e.sent,a.setState({loading:!1,data:t}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a.setState({loading:!1,error:e.t0});case 11:case"end":return e.stop()}},e,null,[[1,8]])})),a.handleOpenModal=function(e){a.setState({modalIsOpen:!0})},a.handleCloseModal=function(e){a.setState({modalIsOpen:!1})},a.handleDeleteBadge=function(){var e=Object(S.a)(_.a.mark(function e(t){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0,error:null}),e.prev=1,e.next=4,q.badges.remove(a.props.match.params.badgeId);case 4:a.setState({loading:!1}),a.props.history.push("/badges"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a.setState({loading:!1,error:e.t0});case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return this.state.loading?r.a.createElement(F,null):this.state.error?r.a.createElement(P,{error:this.state.error}):r.a.createElement($,{onCloseModal:this.handleCloseModal,onOpenModal:this.handleOpenModal,modalIsOpen:this.state.modalIsOpen,onDeleteBadge:this.handleDeleteBadge,badge:this.state.data})}}]),t}(r.a.Component),te=(a(52),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,error:null,form:{firstName:"",lastName:"",email:"",jobTitle:"",twitter:""}},a.fetchData=function(){var e=Object(S.a)(_.a.mark(function e(t){var n;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0,error:null}),e.prev=1,e.next=4,q.badges.read(a.props.match.params.badgeId);case 4:n=e.sent,a.setState({loading:!1,form:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a.setState({loading:!1,error:e.t0});case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){a.setState({form:Object(Y.a)({},a.state.form,Object(R.a)({},e.target.name,e.target.value))})},a.handleSubmit=function(){var e=Object(S.a)(_.a.mark(function e(t){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({loading:!0,error:null}),e.prev=2,e.next=5,q.badges.update(a.props.match.params.badgeId,a.state.form);case 5:a.setState({loading:!1}),a.props.history.push("/badges"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),a.setState({loading:!1,error:e.t0});case 12:case"end":return e.stop()}},e,null,[[2,9]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return this.state.loading?r.a.createElement(F,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"BadgeEdit__hero"},r.a.createElement("img",{className:"BadgeEdit__hero-image img-fluid",src:O.a,alt:"Logo"})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement(W,{firstName:this.state.form.firstName||"FIRST_NAME",lastName:this.state.form.lastName||"LAST_NAME",twitter:this.state.form.twitter||"twitter",jobTitle:this.state.form.jobTitle||"JOB_TITLE",email:this.state.form.email||"EMAIL",avatarUrl:"https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"})),r.a.createElement("div",{className:"col-6"},r.a.createElement("h1",null,"Edit Attendant"),r.a.createElement(X,{onChange:this.handleChange,onSubmit:this.handleSubmit,formValues:this.state.form,error:this.state.error})))))}}]),t}(r.a.Component));var ae=function(){return r.a.createElement("h1",null,"404: Not Found")};var ne=function(){return r.a.createElement(s.a,null,r.a.createElement(E,null,r.a.createElement(o.a,null,r.a.createElement(i.a,{exact:!0,path:"/",component:y}),r.a.createElement(i.a,{exact:!0,path:"/badges",component:Q}),r.a.createElement(i.a,{exact:!0,path:"/badges/new",component:G}),r.a.createElement(i.a,{exact:!0,path:"/badges/:badgeId",component:ee}),r.a.createElement(i.a,{exact:!0,path:"/badges/:badgeId/edit",component:te}),r.a.createElement(i.a,{component:ae}))))},re=document.getElementById("app");c.a.render(r.a.createElement(ne,null),re)}],[[28,1,2]]]);
//# sourceMappingURL=main.dde4e753.chunk.js.map