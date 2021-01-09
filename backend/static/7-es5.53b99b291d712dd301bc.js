function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Xdgr:function(t,e,i){"use strict";i.r(e),i.d(e,"UsersPageModule",(function(){return yt}));var n=i("tyNb"),a=i("jtHE"),r=i("1G5W"),o=i("Tj/N"),s=i("0IaG"),c=i("XNiG"),l=i("fXoL"),u=i("3Pt+"),m=i("tLlE"),b=i("kmnG"),d=i("qFsG"),f=i("ofXK"),h=i("iadO");function p(t,e){1&t&&(l.Ub(0,"mat-error"),l.Bc(1,"Please enter at least 3 characters"),l.Tb())}function g(t,e){1&t&&(l.Ub(0,"mat-error"),l.Bc(1,"Please enter at least 3 characters"),l.Tb())}function C(t,e){1&t&&(l.Ub(0,"mat-error"),l.Bc(1,"This field required"),l.Tb())}function v(t,e){1&t&&(l.Ub(0,"mat-error"),l.Bc(1,"Enter a valid email"),l.Tb())}function y(t,e){1&t&&(l.Ub(0,"mat-error"),l.Bc(1,"Please enter at least 3 characters"),l.Tb())}function U(t,e){1&t&&(l.Ub(0,"mat-error"),l.Bc(1,"Please enter at least 3 characters"),l.Tb())}function _(t,e){if(1&t&&(l.Ub(0,"mat-form-field",1),l.Ub(1,"mat-label"),l.Bc(2,"Enter password"),l.Tb(),l.Pb(3,"input",11),l.Ac(4,U,2,0,"mat-error",3),l.Tb()),2&t){var i=l.gc();l.Cb(4),l.mc("ngIf",i.userFormGroup.controls.password.invalid)}}var w,T=function(t){return t.SENDING="SENDING",t.OK="OK",t.ERROR="ERROR",t}({}),k=((w=function(){function t(e,i){_classCallCheck(this,t),this.fb=e,this.http=i,this.submit=new c.a,this.result=new l.o,this.hide=!0,this.userFormGroup=this.fb.group({firstName:[null,[u.p.required,u.p.minLength(3),u.p.maxLength(30)]],lastName:[null,[u.p.required,u.p.minLength(3),u.p.maxLength(30)]],username:[null,[u.p.required,u.p.minLength(3),u.p.maxLength(20)]],email:[null,[u.p.required,u.p.email,u.p.maxLength(30)]],password:[null,[u.p.required,u.p.minLength(3),u.p.maxLength(30)]],birthDate:[null,[u.p.required]]})}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;if(this.submit.subscribe((function(){return t.isEdit?t.submitUpdate():t.submitRegister()})),this.user){var e=function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(i[n[a]]=t[n[a]])}return i}(this.user,["id","registerDate"]);this.userFormGroup.setValue(e),this.userFormGroup.removeControl("password"),this.userFormGroup.setControl("username",new u.d({value:this.user.username,disabled:!0}))}}},{key:"submitRegister",value:function(){var t=this;this.userFormGroup.valid?(this.result.emit({status:T.SENDING,result:null}),this.http.create("users",this.userFormGroup.value).subscribe((function(e){setTimeout((function(){t.result.emit({status:T.OK,result:e})}),300)}),(function(){setTimeout((function(){t.result.emit({status:T.ERROR,result:null})}),300)}))):this.userFormGroup.markAllAsTouched()}},{key:"submitUpdate",value:function(){var t=this;this.userFormGroup.valid?(this.result.emit({status:T.SENDING,result:null}),this.http.update("users",this.user.id,this.userFormGroup.value).subscribe((function(e){setTimeout((function(){t.result.emit({status:T.OK,result:e})}),300)}),(function(){setTimeout((function(){t.result.emit({status:T.ERROR,result:null})}),300)}))):this.userFormGroup.markAllAsTouched()}},{key:"isEdit",get:function(){var t;return!!(null===(t=this.user)||void 0===t?void 0:t.id)}}]),t}()).\u0275fac=function(t){return new(t||w)(l.Ob(u.c),l.Ob(m.a))},w.\u0275cmp=l.Ib({type:w,selectors:[["user-form"]],inputs:{user:"user",submit:"submit"},outputs:{result:"result"},decls:35,vars:9,consts:[[3,"formGroup","ngSubmit"],["appearance","fill",1,"register__field"],["matInput","","formControlName","firstName","placeholder","Enter your first name","required",""],[4,"ngIf"],["matInput","","formControlName","lastName","placeholder","Enter your last name","required",""],["matInput","","formControlName","birthDate","format","yyyy-MM-dd","required","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["matInput","","formControlName","email","placeholder","Enter your email","required",""],["matInput","","formControlName","username","placeholder","Enter your username","required",""],["class","register__field","appearance","fill",4,"ngIf"],["matInput","","type","password","autocomplete","off","formControlName","password","placeholder","Enter password","required",""]],template:function(t,e){if(1&t&&(l.Ub(0,"form",0),l.cc("ngSubmit",(function(){return e.isEdit?e.submitUpdate():e.submitRegister()})),l.Ub(1,"mat-form-field",1),l.Ub(2,"mat-label"),l.Bc(3,"First name"),l.Tb(),l.Pb(4,"input",2),l.Ac(5,p,2,0,"mat-error",3),l.Tb(),l.Pb(6,"br"),l.Ub(7,"mat-form-field",1),l.Ub(8,"mat-label"),l.Bc(9,"Last name"),l.Tb(),l.Pb(10,"input",4),l.Ac(11,g,2,0,"mat-error",3),l.Tb(),l.Pb(12,"br"),l.Ub(13,"mat-form-field",1),l.Ub(14,"mat-label"),l.Bc(15,"Birth Date"),l.Tb(),l.Pb(16,"input",5),l.Pb(17,"mat-datepicker-toggle",6),l.Pb(18,"mat-datepicker",null,7),l.Ac(20,C,2,0,"mat-error",3),l.Tb(),l.Pb(21,"br"),l.Ub(22,"mat-form-field",1),l.Ub(23,"mat-label"),l.Bc(24,"Email"),l.Tb(),l.Pb(25,"input",8),l.Ac(26,v,2,0,"mat-error",3),l.Tb(),l.Pb(27,"br"),l.Ub(28,"mat-form-field",1),l.Ub(29,"mat-label"),l.Bc(30,"Username"),l.Tb(),l.Pb(31,"input",9),l.Ac(32,y,2,0,"mat-error",3),l.Tb(),l.Pb(33,"br"),l.Ac(34,_,5,1,"mat-form-field",10),l.Tb()),2&t){var i=l.rc(19);l.mc("formGroup",e.userFormGroup),l.Cb(5),l.mc("ngIf",e.userFormGroup.controls.firstName.invalid),l.Cb(6),l.mc("ngIf",e.userFormGroup.controls.lastName.invalid),l.Cb(5),l.mc("matDatepicker",i),l.Cb(1),l.mc("for",i),l.Cb(3),l.mc("ngIf",e.userFormGroup.controls.birthDate.invalid),l.Cb(6),l.mc("ngIf",e.userFormGroup.controls.email.invalid),l.Cb(6),l.mc("ngIf",e.userFormGroup.controls.username.invalid),l.Cb(2),l.mc("ngIf",!e.isEdit)}},directives:[u.q,u.l,u.f,b.c,b.f,d.b,u.b,u.k,u.e,u.o,f.l,h.b,h.d,b.g,h.a,b.b],styles:["[_nghost-%COMP%]   .register[_ngcontent-%COMP%]{width:100%;max-width:400px}[_nghost-%COMP%]   .register__field[_ngcontent-%COMP%]{width:100%;margin-bottom:10px}[_nghost-%COMP%]   .register__button-field[_ngcontent-%COMP%]{width:100%;margin-top:10px}"]}),w),O=i("bTqV");function P(t,e){1&t&&(l.Ub(0,"span"),l.Bc(1,"Register"),l.Tb())}function D(t,e){1&t&&(l.Ub(0,"span"),l.Bc(1,"Update"),l.Tb())}var N,S,I=((N=function(){function t(e,i){_classCallCheck(this,t),this.dialogRef=e,this.data=i,this.submit=new c.a,this.formStatus=T}return _createClass(t,[{key:"submitForm",value:function(){this.submit.next()}},{key:"resultForm",value:function(t){this.result=t,this.result.status===this.formStatus.OK&&this.onClose(t)}},{key:"onClose",value:function(t){this.dialogRef.close(t)}}]),t}()).\u0275fac=function(t){return new(t||N)(l.Ob(s.g),l.Ob(s.a))},N.\u0275cmp=l.Ib({type:N,selectors:[["nat-user-dialog"]],decls:10,vars:5,consts:[["mat-dialog-title",""],[1,"mat-typography"],[3,"submit","user","result"],[1,"actions"],["mat-flat-button","","color","accent",3,"disabled","click"],[4,"ngIf"],["mat-button","","mat-dialog-close","","cdkFocusInitial",""]],template:function(t,e){1&t&&(l.Ub(0,"h2",0),l.Bc(1,"User"),l.Tb(),l.Ub(2,"mat-dialog-content",1),l.Ub(3,"user-form",2),l.cc("result",(function(t){return e.resultForm(t)})),l.Tb(),l.Tb(),l.Ub(4,"mat-dialog-actions",3),l.Ub(5,"button",4),l.cc("click",(function(){return e.submitForm()})),l.Ac(6,P,2,0,"span",5),l.Ac(7,D,2,0,"span",5),l.Tb(),l.Ub(8,"button",6),l.Bc(9,"Close"),l.Tb(),l.Tb()),2&t&&(l.Cb(3),l.mc("submit",e.submit)("user",e.data),l.Cb(2),l.mc("disabled",(null==e.result?null:e.result.status)===e.formStatus.SENDING),l.Cb(1),l.mc("ngIf",!e.data),l.Cb(1),l.mc("ngIf",e.data))},directives:[s.h,s.e,k,s.c,O.a,f.l,s.d],styles:[".actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding-bottom:24px}"]}),N),B=i("OaWH"),R=i("Xa2L"),A=["*"],x=((S=function t(){_classCallCheck(this,t),this.diameter=30,this.width="auto",this.loading=!0}).\u0275fac=function(t){return new(t||S)},S.\u0275cmp=l.Ib({type:S,selectors:[["loading"]],inputs:{diameter:"diameter",width:"width",loading:"loading"},ngContentSelectors:A,decls:5,vars:5,consts:[[1,"loading"],[1,"loading__cover"],[3,"diameter"]],template:function(t,e){1&t&&(l.lc(),l.Ub(0,"div",0),l.Ub(1,"div",1),l.Pb(2,"mat-spinner",2),l.Tb(),l.Ub(3,"div"),l.kc(4),l.Tb(),l.Tb()),2&t&&(l.zc("width",e.width),l.Cb(1),l.zc("visibility",e.loading?"visible":"hidden"),l.Cb(1),l.mc("diameter",e.diameter))},directives:[R.b],styles:[".loading[_ngcontent-%COMP%]{position:relative}.loading__cover[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%;background-color:hsla(0,0%,100%,.6);z-index:1;display:flex;justify-content:center;align-items:center}"]}),S),F=i("+0xr"),G=i("Dh3D"),E=i("M9IT"),M=i("NFeN");function j(t,e){1&t&&(l.Ub(0,"th",21),l.Bc(1,"No."),l.Tb())}function L(t,e){if(1&t&&(l.Ub(0,"td",22),l.Bc(1),l.Tb()),2&t){var i=e.$implicit;l.Cb(1),l.Cc(i.id)}}function q(t,e){1&t&&(l.Ub(0,"th",21),l.Bc(1,"First Name"),l.Tb())}function z(t,e){if(1&t&&(l.Ub(0,"td",22),l.Bc(1),l.Tb()),2&t){var i=e.$implicit;l.Cb(1),l.Cc(i.firstName)}}function $(t,e){1&t&&(l.Ub(0,"th",21),l.Bc(1,"Last Name"),l.Tb())}function K(t,e){if(1&t&&(l.Ub(0,"td",22),l.Bc(1),l.Tb()),2&t){var i=e.$implicit;l.Cb(1),l.Cc(i.lastName)}}function H(t,e){1&t&&(l.Ub(0,"th",21),l.Bc(1,"Username"),l.Tb())}function X(t,e){if(1&t&&(l.Ub(0,"td",22),l.Bc(1),l.Tb()),2&t){var i=e.$implicit;l.Cb(1),l.Cc(i.username)}}function V(t,e){1&t&&(l.Ub(0,"th",23),l.Bc(1,"Email"),l.Tb())}function W(t,e){if(1&t&&(l.Ub(0,"td",22),l.Bc(1),l.Tb()),2&t){var i=e.$implicit;l.Cb(1),l.Cc(i.email)}}function J(t,e){1&t&&(l.Ub(0,"th",21),l.Bc(1,"Birth Date"),l.Tb())}function Q(t,e){if(1&t&&(l.Ub(0,"td",22),l.Bc(1),l.hc(2,"date"),l.Tb()),2&t){var i=e.$implicit;l.Cb(1),l.Cc(l.jc(2,1,i.birthDate,"mediumDate"))}}function Y(t,e){1&t&&l.Pb(0,"th",24)}function Z(t,e){if(1&t){var i=l.Vb();l.Ub(0,"td",22),l.Ub(1,"button",25),l.cc("click",(function(){l.uc(i);var t=e.$implicit;return l.gc().openEditUserDialog(t)})),l.Ub(2,"mat-icon"),l.Bc(3,"edit"),l.Tb(),l.Tb(),l.Tb()}}function tt(t,e){if(1&t&&(l.Ub(0,"td",26),l.Bc(1,"No data"),l.Tb()),2&t){var i=l.gc();l.Db("colspan",i.displayedColumns.length)}}function et(t,e){1&t&&l.Pb(0,"tr",27)}function it(t,e){1&t&&l.Pb(0,"tr",28)}function nt(t,e){if(1&t&&l.Pb(0,"tr",29),2&t){var i=l.gc();l.Fb("hidden",i.users.length>0)}}var at,rt,ot,st,ct,lt,ut=function(){return["no-data"]},mt=function(){return[5,10,25]},bt={width:"calc(100% - 32px)",maxWidth:"500px"},dt=[{path:"",component:(at=function(){function t(e,i,n){_classCallCheck(this,t),this.http=e,this.app=i,this.dialog=n,this.destroyed$=new a.a(1),this.users=[],this.loading=!1,this.dialogConfig=bt,this.pagination={length:0,pageSize:10,pageIndex:0},this.sort={direction:"asc",active:"id"}}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.app.width.pipe(Object(r.a)(this.destroyed$)).subscribe((function(e){return t.width=e})),this.getUsers()}},{key:"openCreateUserDialog",value:function(){var t=this;this.dialog.open(I,this.dialogConfig).afterClosed().subscribe((function(e){e&&e.status===T.OK&&t.getUsers()}))}},{key:"openEditUserDialog",value:function(t){var e=this;this.dialog.open(I,Object.assign(Object.assign({},this.dialogConfig),{data:new o.a(t)})).afterClosed().subscribe((function(t){t&&t.status===T.OK&&e.getUsers()}))}},{key:"handleSort",value:function(t){this.sort=t,this.getUsers()}},{key:"getUsers",value:function(){var t=this;this.loading=!0,this.http.find("users",[{key:"size",value:this.pagination.pageSize},{key:"page",value:this.pagination.pageIndex+1},{key:"sort",value:this.sort.active+","+this.sort.direction}]).subscribe((function(e){setTimeout((function(){t.users=o.a.initArray(e.body),t.pagination.length=+e.headers.get("x-total-count"),t.loading=!1}),200)}),(function(){t.loading=!1}))}},{key:"changePage",value:function(t){this.pagination=t,this.getUsers()}},{key:"ngOnDestroy",value:function(){this.destroyed$.next(!0),this.destroyed$.complete()}},{key:"mobile",get:function(){return this.width<=960}},{key:"displayedColumns",get:function(){return this.mobile?["id","firstName","lastName","edit"]:["id","username","firstName","lastName","email","birthDate","edit"]}}]),t}(),at.\u0275fac=function(t){return new(t||at)(l.Ob(m.a),l.Ob(B.a),l.Ob(s.b))},at.\u0275cmp=l.Ib({type:at,selectors:[["nat-users-page"]],decls:32,vars:12,consts:[[1,"button-block"],["mat-raised-button","","color","primary",3,"click"],[3,"loading"],["mat-table","","matSort","",1,"users-table","mat-elevation-z1",3,"dataSource","matSortChange"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","firstName"],["matColumnDef","lastName"],["matColumnDef","username"],["matColumnDef","email"],["mat-header-cell","","mat-sort-header","","class","users-grid__email",4,"matHeaderCellDef"],["matColumnDef","birthDate"],["matColumnDef","edit"],["mat-header-cell","","class","users-table__edit-header",4,"matHeaderCellDef"],["matColumnDef","no-data"],["mat-footer-cell","","class","users-table__no-data",4,"matFooterCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-footer-row","",3,"hidden",4,"matFooterRowDef"],[1,"pagination-block","mat-elevation-z1",3,"length","pageSize","pageSizeOptions","page"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell","","mat-sort-header","",1,"users-grid__email"],["mat-header-cell","",1,"users-table__edit-header"],["mat-icon-button","","color","accent",3,"click"],["mat-footer-cell","",1,"users-table__no-data"],["mat-header-row",""],["mat-row",""],["mat-footer-row",""]],template:function(t,e){1&t&&(l.Ub(0,"div",0),l.Ub(1,"button",1),l.cc("click",(function(){return e.openCreateUserDialog()})),l.Bc(2,"Create user"),l.Tb(),l.Tb(),l.Ub(3,"loading",2),l.Ub(4,"table",3),l.cc("matSortChange",(function(t){return e.handleSort(t)})),l.Sb(5,4),l.Ac(6,j,2,0,"th",5),l.Ac(7,L,2,1,"td",6),l.Rb(),l.Sb(8,7),l.Ac(9,q,2,0,"th",5),l.Ac(10,z,2,1,"td",6),l.Rb(),l.Sb(11,8),l.Ac(12,$,2,0,"th",5),l.Ac(13,K,2,1,"td",6),l.Rb(),l.Sb(14,9),l.Ac(15,H,2,0,"th",5),l.Ac(16,X,2,1,"td",6),l.Rb(),l.Sb(17,10),l.Ac(18,V,2,0,"th",11),l.Ac(19,W,2,1,"td",6),l.Rb(),l.Sb(20,12),l.Ac(21,J,2,0,"th",5),l.Ac(22,Q,3,4,"td",6),l.Rb(),l.Sb(23,13),l.Ac(24,Y,1,0,"th",14),l.Ac(25,Z,4,0,"td",6),l.Rb(),l.Sb(26,15),l.Ac(27,tt,2,1,"td",16),l.Rb(),l.Ac(28,et,1,0,"tr",17),l.Ac(29,it,1,0,"tr",18),l.Ac(30,nt,1,2,"tr",19),l.Tb(),l.Tb(),l.Ub(31,"mat-paginator",20),l.cc("page",(function(t){return e.changePage(t)})),l.Tb()),2&t&&(l.Cb(3),l.mc("loading",e.loading),l.Cb(1),l.mc("dataSource",e.users),l.Cb(24),l.mc("matHeaderRowDef",e.displayedColumns),l.Cb(1),l.mc("matRowDefColumns",e.displayedColumns),l.Cb(1),l.mc("matFooterRowDef",l.nc(10,ut)),l.Cb(1),l.Fb("mobile",e.mobile),l.mc("length",e.pagination.length)("pageSize",e.pagination.pageSize)("pageSizeOptions",l.nc(11,mt)))},directives:[O.a,x,F.n,G.a,F.c,F.i,F.b,F.e,F.k,F.m,F.g,E.a,F.h,G.b,F.a,M.a,F.d,F.j,F.l,F.f],pipes:[f.e],styles:[".users-table[_ngcontent-%COMP%]{width:100%}.users-table__no-data[_ngcontent-%COMP%]{text-align:center}.users-table__edit-header[_ngcontent-%COMP%]{width:64px}.button-block[_ngcontent-%COMP%]{margin-bottom:1rem}.button-block[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:first-child){margin-left:9px}.pagination-block[_ngcontent-%COMP%]{margin-top:1rem;border-bottom:1px solid rgba(0,0,0,.12)}.pagination-block.mobile[_ngcontent-%COMP%]     .mat-paginator-page-size{display:none}.users-grid__email[_ngcontent-%COMP%]{width:200px}"]}),at)}],ft=((rt=function t(){_classCallCheck(this,t)}).\u0275mod=l.Mb({type:rt}),rt.\u0275inj=l.Lb({factory:function(t){return new(t||rt)},imports:[[n.d.forChild(dt)],n.d]}),rt),ht=i("PCNd"),pt=i("5dmV"),gt=((lt=function t(){_classCallCheck(this,t)}).\u0275mod=l.Mb({type:lt}),lt.\u0275inj=l.Lb({factory:function(t){return new(t||lt)},imports:[[ht.a,pt.a]]}),lt),Ct=((ct=function t(){_classCallCheck(this,t)}).\u0275mod=l.Mb({type:ct}),ct.\u0275inj=l.Lb({factory:function(t){return new(t||ct)},imports:[[ht.a,pt.a,gt]]}),ct),vt=((st=function t(){_classCallCheck(this,t)}).\u0275mod=l.Mb({type:st}),st.\u0275inj=l.Lb({factory:function(t){return new(t||st)},imports:[[ht.a,pt.a]]}),st),yt=((ot=function t(){_classCallCheck(this,t)}).\u0275mod=l.Mb({type:ot}),ot.\u0275inj=l.Lb({factory:function(t){return new(t||ot)},imports:[[ft,ht.a,pt.a,Ct,vt]]}),ot)}}]);