(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Xdgr:function(t,e,r){"use strict";r.r(e),r.d(e,"UsersPageModule",(function(){return tt}));var a=r("tyNb"),n=r("Tj/N"),i=r("XNiG"),o=r("fXoL"),s=r("3Pt+"),c=r("tLlE"),l=r("kmnG"),m=r("qFsG"),u=r("ofXK"),b=r("iadO");function d(t,e){1&t&&(o.Ub(0,"mat-error"),o.Bc(1,"Please enter at least 3 characters"),o.Tb())}function f(t,e){1&t&&(o.Ub(0,"mat-error"),o.Bc(1,"Please enter at least 3 characters"),o.Tb())}function p(t,e){1&t&&(o.Ub(0,"mat-error"),o.Bc(1,"This field required"),o.Tb())}function h(t,e){1&t&&(o.Ub(0,"mat-error"),o.Bc(1,"Enter a valid email"),o.Tb())}function g(t,e){1&t&&(o.Ub(0,"mat-error"),o.Bc(1,"Please enter at least 3 characters"),o.Tb())}function C(t,e){1&t&&(o.Ub(0,"mat-error"),o.Bc(1,"Please enter at least 3 characters"),o.Tb())}var U=function(t){return t.SENDING="SENDING",t.OK="OK",t.ERROR="ERROR",t}({});let T=(()=>{class t{constructor(t,e){this.formBuilder=t,this.http=e,this.submit=new i.a,this.result=new o.o,this.hide=!0,this.userFormGroup=this.formBuilder.group({firstName:[null,[s.o.required,s.o.minLength(3),s.o.maxLength(30)]],lastName:[null,[s.o.required,s.o.minLength(3),s.o.maxLength(30)]],username:[null,[s.o.required,s.o.minLength(3),s.o.maxLength(20)]],email:[null,[s.o.required,s.o.email,s.o.maxLength(30)]],password:[null,[s.o.required,s.o.minLength(3),s.o.maxLength(30)]],birthDate:[null,[s.o.required]]})}ngOnInit(){this.submit.subscribe(()=>this.submitRegister())}submitRegister(){this.userFormGroup.valid?(this.result.emit({status:U.SENDING,result:null}),this.http.create("users",this.userFormGroup.value).subscribe(t=>{setTimeout(()=>{this.result.emit({status:U.OK,result:t})},1e3)},()=>{setTimeout(()=>{this.result.emit({status:U.ERROR,result:null})},1e3)})):this.userFormGroup.markAllAsTouched()}}return t.\u0275fac=function(e){return new(e||t)(o.Ob(s.c),o.Ob(c.a))},t.\u0275cmp=o.Ib({type:t,selectors:[["user-form"]],inputs:{default:"default",submit:"submit"},outputs:{result:"result"},decls:39,vars:9,consts:[[3,"formGroup","ngSubmit"],["appearance","fill",1,"register__field"],["matInput","","formControlName","firstName","placeholder","Enter your first name","required",""],[4,"ngIf"],["matInput","","formControlName","lastName","placeholder","Enter your last name","required",""],["matInput","","formControlName","birthDate","format","yyyy-MM-dd","required","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["matInput","","formControlName","email","placeholder","Enter your email","required",""],["matInput","","formControlName","username","placeholder","Enter your username","required",""],["matInput","","type","password","autocomplete","off","formControlName","password","placeholder","Enter password","required",""]],template:function(t,e){if(1&t&&(o.Ub(0,"form",0),o.cc("ngSubmit",(function(){return e.submitRegister()})),o.Ub(1,"mat-form-field",1),o.Ub(2,"mat-label"),o.Bc(3,"First name"),o.Tb(),o.Pb(4,"input",2),o.Ac(5,d,2,0,"mat-error",3),o.Tb(),o.Pb(6,"br"),o.Ub(7,"mat-form-field",1),o.Ub(8,"mat-label"),o.Bc(9,"Last name"),o.Tb(),o.Pb(10,"input",4),o.Ac(11,f,2,0,"mat-error",3),o.Tb(),o.Pb(12,"br"),o.Ub(13,"mat-form-field",1),o.Ub(14,"mat-label"),o.Bc(15,"Birth Date"),o.Tb(),o.Pb(16,"input",5),o.Pb(17,"mat-datepicker-toggle",6),o.Pb(18,"mat-datepicker",null,7),o.Ac(20,p,2,0,"mat-error",3),o.Tb(),o.Pb(21,"br"),o.Ub(22,"mat-form-field",1),o.Ub(23,"mat-label"),o.Bc(24,"Email"),o.Tb(),o.Pb(25,"input",8),o.Ac(26,h,2,0,"mat-error",3),o.Tb(),o.Pb(27,"br"),o.Ub(28,"mat-form-field",1),o.Ub(29,"mat-label"),o.Bc(30,"Username"),o.Tb(),o.Pb(31,"input",9),o.Ac(32,g,2,0,"mat-error",3),o.Tb(),o.Pb(33,"br"),o.Ub(34,"mat-form-field",1),o.Ub(35,"mat-label"),o.Bc(36,"Enter password"),o.Tb(),o.Pb(37,"input",10),o.Ac(38,C,2,0,"mat-error",3),o.Tb(),o.Tb()),2&t){const t=o.rc(19);o.mc("formGroup",e.userFormGroup),o.Cb(5),o.mc("ngIf",e.userFormGroup.controls.firstName.invalid),o.Cb(6),o.mc("ngIf",e.userFormGroup.controls.lastName.invalid),o.Cb(5),o.mc("matDatepicker",t),o.Cb(1),o.mc("for",t),o.Cb(3),o.mc("ngIf",e.userFormGroup.controls.birthDate.invalid),o.Cb(6),o.mc("ngIf",e.userFormGroup.controls.email.invalid),o.Cb(6),o.mc("ngIf",e.userFormGroup.controls.username.invalid),o.Cb(6),o.mc("ngIf",e.userFormGroup.controls.password.invalid)}},directives:[s.p,s.k,s.e,l.c,l.f,m.b,s.b,s.j,s.d,s.n,u.l,b.b,b.d,l.g,b.a,l.b],styles:["[_nghost-%COMP%]   .register[_ngcontent-%COMP%]{width:100%;max-width:400px}[_nghost-%COMP%]   .register__field[_ngcontent-%COMP%]{width:100%;margin-bottom:10px}[_nghost-%COMP%]   .register__button-field[_ngcontent-%COMP%]{width:100%;margin-top:10px}"]}),t})();var w=r("0IaG"),y=r("bTqV");let P=(()=>{class t{constructor(t){this.dialogRef=t,this.submit=new i.a,this.formStatus=U}submitForm(){this.submit.next()}resultForm(t){this.result=t,this.result.status===this.formStatus.OK&&this.onClose(t)}onClose(t){this.dialogRef.close(t)}}return t.\u0275fac=function(e){return new(e||t)(o.Ob(w.f))},t.\u0275cmp=o.Ib({type:t,selectors:[["nat-user-dialog"]],decls:9,vars:2,consts:[["mat-dialog-title",""],[1,"mat-typography"],[3,"submit","result"],[1,"actions"],["mat-flat-button","","color","accent",3,"disabled","click"],["mat-button","","mat-dialog-close","","cdkFocusInitial",""]],template:function(t,e){1&t&&(o.Ub(0,"h2",0),o.Bc(1,"User"),o.Tb(),o.Ub(2,"mat-dialog-content",1),o.Ub(3,"user-form",2),o.cc("result",(function(t){return e.resultForm(t)})),o.Tb(),o.Tb(),o.Ub(4,"mat-dialog-actions",3),o.Ub(5,"button",4),o.cc("click",(function(){return e.submitForm()})),o.Bc(6,"Register"),o.Tb(),o.Ub(7,"button",5),o.Bc(8,"Close"),o.Tb(),o.Tb()),2&t&&(o.Cb(3),o.mc("submit",e.submit),o.Cb(2),o.mc("disabled",(null==e.result?null:e.result.status)===e.formStatus.SENDING))},directives:[w.g,w.d,T,w.b,y.a,w.c],styles:[".actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding-bottom:24px}"]}),t})();var _=r("Xa2L");const v=["*"];let D=(()=>{class t{constructor(){this.diameter=30,this.width="auto",this.loading=!0}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Ib({type:t,selectors:[["loading"]],inputs:{diameter:"diameter",width:"width",loading:"loading"},ngContentSelectors:v,decls:5,vars:5,consts:[[1,"loading"],[1,"loading__cover"],[3,"diameter"]],template:function(t,e){1&t&&(o.lc(),o.Ub(0,"div",0),o.Ub(1,"div",1),o.Pb(2,"mat-spinner",2),o.Tb(),o.Ub(3,"div"),o.kc(4),o.Tb(),o.Tb()),2&t&&(o.zc("width",e.width),o.Cb(1),o.zc("visibility",e.loading?"visible":"hidden"),o.Cb(1),o.mc("diameter",e.diameter))},directives:[_.b],styles:[".loading[_ngcontent-%COMP%]{position:relative}.loading__cover[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%;background-color:hsla(0,0%,100%,.6);z-index:1;display:flex;justify-content:center;align-items:center}"]}),t})();var N=r("+0xr"),O=r("M9IT");function B(t,e){1&t&&(o.Ub(0,"th",19),o.Bc(1,"No."),o.Tb())}function R(t,e){if(1&t&&(o.Ub(0,"td",20),o.Bc(1),o.Tb()),2&t){const t=e.$implicit;o.Cb(1),o.Cc(t.id)}}function I(t,e){1&t&&(o.Ub(0,"th",19),o.Bc(1,"First Name"),o.Tb())}function x(t,e){if(1&t&&(o.Ub(0,"td",20),o.Bc(1),o.Tb()),2&t){const t=e.$implicit;o.Cb(1),o.Cc(t.firstName)}}function M(t,e){1&t&&(o.Ub(0,"th",19),o.Bc(1,"Last Name"),o.Tb())}function S(t,e){if(1&t&&(o.Ub(0,"td",20),o.Bc(1),o.Tb()),2&t){const t=e.$implicit;o.Cb(1),o.Cc(t.lastName)}}function k(t,e){1&t&&(o.Ub(0,"th",19),o.Bc(1,"Username"),o.Tb())}function A(t,e){if(1&t&&(o.Ub(0,"td",20),o.Bc(1),o.Tb()),2&t){const t=e.$implicit;o.Cb(1),o.Cc(t.username)}}function F(t,e){1&t&&(o.Ub(0,"th",21),o.Bc(1,"Email"),o.Tb())}function G(t,e){if(1&t&&(o.Ub(0,"td",20),o.Bc(1),o.Tb()),2&t){const t=e.$implicit;o.Cb(1),o.Cc(t.email)}}function L(t,e){1&t&&(o.Ub(0,"th",19),o.Bc(1,"Birth Date"),o.Tb())}function E(t,e){if(1&t&&(o.Ub(0,"td",20),o.Bc(1),o.hc(2,"date"),o.Tb()),2&t){const t=e.$implicit;o.Cb(1),o.Cc(o.jc(2,1,t.birthDate,"dd.MM.yyyy"))}}function q(t,e){1&t&&(o.Ub(0,"td",22),o.Bc(1,"No data"),o.Tb())}function z(t,e){1&t&&o.Pb(0,"tr",23)}function j(t,e){1&t&&o.Pb(0,"tr",24)}function K(t,e){if(1&t&&o.Pb(0,"tr",25),2&t){const t=o.gc();o.Fb("hidden",t.users.length>0)}}const $=function(){return["no-data"]},X=function(){return[1,5,10,25,100]},H=[{path:"",component:(()=>{class t{constructor(t,e){this.http=t,this.dialog=e,this.users=[],this.loading=!1,this.pagination={length:0,pageSize:10,pageIndex:0},this.displayedColumns=["id","username","firstName","lastName","email","birthDate"]}ngOnInit(){this.getUsers()}openUserDialog(){this.dialog.open(P,{width:"calc(100% - 32px)",maxWidth:"500px"}).afterClosed().subscribe(t=>{t.status===U.OK&&this.getUsers()})}getUsers(){this.loading=!0,this.http.find("users",[{key:"size",value:this.pagination.pageSize},{key:"page",value:this.pagination.pageIndex+1}]).subscribe(t=>{setTimeout(()=>{this.users=n.a.initArray(t.body),this.pagination.length=+t.headers.get("x-total-count"),this.loading=!1},200)},()=>{this.loading=!1})}changePage(t){this.pagination=t,this.getUsers()}}return t.\u0275fac=function(e){return new(e||t)(o.Ob(c.a),o.Ob(w.a))},t.\u0275cmp=o.Ib({type:t,selectors:[["nat-users-page"]],decls:29,vars:10,consts:[[1,"button-block"],["mat-raised-button","","color","primary",3,"click"],[3,"loading"],["mat-table","",1,"users-table","mat-elevation-z1",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","firstName"],["matColumnDef","lastName"],["matColumnDef","username"],["matColumnDef","email"],["mat-header-cell","","class","users-grid__email",4,"matHeaderCellDef"],["matColumnDef","birthDate"],["matColumnDef","no-data"],["mat-footer-cell","","colspan","6","class","users-table__no-data",4,"matFooterCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-footer-row","",3,"hidden",4,"matFooterRowDef"],[1,"pagination-block","mat-elevation-z1",3,"length","pageSize","pageSizeOptions","page"],["mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"users-grid__email"],["mat-footer-cell","","colspan","6",1,"users-table__no-data"],["mat-header-row",""],["mat-row",""],["mat-footer-row",""]],template:function(t,e){1&t&&(o.Ub(0,"div",0),o.Ub(1,"button",1),o.cc("click",(function(){return e.openUserDialog()})),o.Bc(2,"Create user"),o.Tb(),o.Tb(),o.Ub(3,"loading",2),o.Ub(4,"table",3),o.Sb(5,4),o.Ac(6,B,2,0,"th",5),o.Ac(7,R,2,1,"td",6),o.Rb(),o.Sb(8,7),o.Ac(9,I,2,0,"th",5),o.Ac(10,x,2,1,"td",6),o.Rb(),o.Sb(11,8),o.Ac(12,M,2,0,"th",5),o.Ac(13,S,2,1,"td",6),o.Rb(),o.Sb(14,9),o.Ac(15,k,2,0,"th",5),o.Ac(16,A,2,1,"td",6),o.Rb(),o.Sb(17,10),o.Ac(18,F,2,0,"th",11),o.Ac(19,G,2,1,"td",6),o.Rb(),o.Sb(20,12),o.Ac(21,L,2,0,"th",5),o.Ac(22,E,3,4,"td",6),o.Rb(),o.Sb(23,13),o.Ac(24,q,2,0,"td",14),o.Rb(),o.Ac(25,z,1,0,"tr",15),o.Ac(26,j,1,0,"tr",16),o.Ac(27,K,1,2,"tr",17),o.Tb(),o.Tb(),o.Ub(28,"mat-paginator",18),o.cc("page",(function(t){return e.changePage(t)})),o.Tb()),2&t&&(o.Cb(3),o.mc("loading",e.loading),o.Cb(1),o.mc("dataSource",e.users),o.Cb(21),o.mc("matHeaderRowDef",e.displayedColumns),o.Cb(1),o.mc("matRowDefColumns",e.displayedColumns),o.Cb(1),o.mc("matFooterRowDef",o.nc(8,$)),o.Cb(1),o.mc("length",e.pagination.length)("pageSize",e.pagination.pageSize)("pageSizeOptions",o.nc(9,X)))},directives:[y.a,D,N.n,N.c,N.i,N.b,N.e,N.k,N.m,N.g,O.a,N.h,N.a,N.d,N.j,N.l,N.f],pipes:[u.e],styles:[".users-table[_ngcontent-%COMP%]{width:100%}.users-table__no-data[_ngcontent-%COMP%]{text-align:center}.button-block[_ngcontent-%COMP%]{margin-bottom:1rem}.button-block[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:first-child){margin-left:9px}.pagination-block[_ngcontent-%COMP%]{margin-top:1rem;border-bottom:1px solid rgba(0,0,0,.12)}.users-grid__email[_ngcontent-%COMP%]{width:200px}"]}),t})()}];let J=(()=>{class t{}return t.\u0275mod=o.Mb({type:t}),t.\u0275inj=o.Lb({factory:function(e){return new(e||t)},imports:[[a.d.forChild(H)],a.d]}),t})();var V=r("PCNd"),W=r("5dmV");let Q=(()=>{class t{}return t.\u0275mod=o.Mb({type:t}),t.\u0275inj=o.Lb({factory:function(e){return new(e||t)},imports:[[V.a,W.a]]}),t})(),Y=(()=>{class t{}return t.\u0275mod=o.Mb({type:t}),t.\u0275inj=o.Lb({factory:function(e){return new(e||t)},imports:[[V.a,W.a,Q]]}),t})(),Z=(()=>{class t{}return t.\u0275mod=o.Mb({type:t}),t.\u0275inj=o.Lb({factory:function(e){return new(e||t)},imports:[[V.a,W.a]]}),t})(),tt=(()=>{class t{}return t.\u0275mod=o.Mb({type:t}),t.\u0275inj=o.Lb({factory:function(e){return new(e||t)},imports:[[J,V.a,W.a,Y,Z]]}),t})()}}]);