(self.webpackChunkNubankClone=self.webpackChunkNubankClone||[]).push([[3952],{3952:(n,t,o)=>{"use strict";o.r(t),o.d(t,{HomePageModule:()=>_});var i=o(8583),e=o(3083),c=o(665),a=o(2316),r=o(639);const s=["blocks"],g=["background"],l=["swipeDown"];function p(n,t){if(1&n&&(r.TgZ(0,"ion-item",41),r._UZ(1,"ion-icon",42),r.TgZ(2,"ion-label"),r._uU(3),r.qZA(),r.qZA()),2&n){const n=t.$implicit;r.xp6(1),r.Q6J("name",n.icon),r.xp6(2),r.Oqu(n.text)}}function d(n,t){if(1&n&&(r.TgZ(0,"ion-slide"),r.TgZ(1,"div",43),r._UZ(2,"ion-icon",44),r.TgZ(3,"span"),r._uU(4),r.qZA(),r.qZA(),r.qZA()),2&n){const n=t.$implicit;r.xp6(2),r.Q6J("name",n.icon),r.xp6(2),r.Oqu(n.text)}}const u=[{path:"",component:(()=>{class n{constructor(n,t,o,i){this.animationCtrl=n,this.platform=t,this.renderer=o,this.getureCrtl=i,this.options=[{icon:"person-add-outline",text:"Indicar amigos"},{icon:"phone-portrait-outline",text:"Recarga de Celular"},{icon:"wallet-outline",text:"Depositar"},{icon:"options-outline",text:"Ajustar limite"},{icon:"help-circle-outline",text:"Me ajuda"},{icon:"barcode-outline",text:"Pagar"},{icon:"lock-open-outline",text:"Bloquear cart\xe3o"},{icon:"card-outline",text:"Cart\xe3o virtual"}],this.slidesOptions={slidesPerView:3,freeMode:!0},this.items=[{icon:"help-circle-outline",text:"Me ajuda"},{icon:"person-outline",text:"Perfil"},{icon:"cash-outline",text:"Configurar conta"},{icon:"card-outline",text:"Configurar cart\xe3o"},{icon:"phone-portrait-outline",text:"Configura\xe7\xf5es do app"}],this.initialStep=0,this.swiping=!1,this.maxTranslate=this.platform.height()-200}ngAfterViewInit(){this.createAnimation(),this.detectSwipe()}detectSwipe(){this.gesture=this.getureCrtl.create({el:this.swipeDown.el,gestureName:"swipe-down",threshold:0,onMove:n=>this.onMove(n),onEnd:n=>this.onEnd(n)},!0),this.gesture.enable(!0)}onMove(n){this.swiping||(this.animation.direction("normal").progressStart(!0),this.swiping=!0);const t=this.getStep(n);this.animation.progressStep(t),this.setBackgroundOpacity(t)}onEnd(n){if(!this.swiping)return;this.gesture.enable(!1);const t=this.getStep(n),o=t>.5;this.animation.progressEnd(o?1:0,t),this.initialStep=o?this.maxTranslate:0,this.setBackgroundOpacity(),this.swiping=!1}getStep(n){return(this.initialStep+n.deltaY)/this.maxTranslate}toogleBlocks(){this.initialStep=0===this.initialStep?this.maxTranslate:0,this.gesture.enable(!1),this.animation.direction(0===this.initialStep?"reverse":"normal").play(),this.setBackgroundOpacity()}createAnimation(){this.animation=this.animationCtrl.create().addElement(this.blocks.nativeElement).duration(300).fromTo("transform","translateY(0)",`translateY(${this.maxTranslate}px)`).onFinish(()=>this.gesture.enable(!0))}setBackgroundOpacity(n=null){this.renderer.setStyle(this.background.nativeElement,"opacity",n||(0===this.initialStep?"0":"1"))}fixedBlocks(){return this.swiping||this.initialStep===this.maxTranslate}}return n.\u0275fac=function(t){return new(t||n)(r.Y36(e.vB),r.Y36(e.t4),r.Y36(r.Qsj),r.Y36(e.TH))},n.\u0275cmp=r.Xpm({type:n,selectors:[["app-home"]],viewQuery:function(n,t){if(1&n&&(r.Gf(s,5),r.Gf(g,5),r.Gf(l,5)),2&n){let n;r.iGM(n=r.CRH())&&(t.blocks=n.first),r.iGM(n=r.CRH())&&(t.background=n.first),r.iGM(n=r.CRH())&&(t.swipeDown=n.first)}},decls:89,vars:7,consts:[[1,"ion-no-border"],["color","primary"],[1,"ion-text-center"],["src","assets/logonubankcerto.png","alt","logo nubank"],["color","light","fill","clear","size","small",3,"click"],["slot","icon-only",3,"name"],["color","primary",1,"ion-padding",3,"scrollY"],[1,"background","opacity-transition"],["background",""],[1,"bank-information","ion-text-center"],["src","assets/qrcode.png","alt","qr code image",1,"qrCode"],["lines","full"],["detail","",4,"ngFor","ngForOf"],["color","light","expand","block","fill","outline",1,"logout"],[1,"blocks",3,"ngClass"],["blocks",""],["lines","none",1,"ion-margin-vertical"],["swipeDown",""],["slot","start","name","card-outline"],[1,"ion-no-padding"],[1,"ion-padding","ion-margin-vertical","cash"],[1,"blue"],[1,"blue","value"],[1,"green"],[1,"footer","padding-vertical"],["color","light","lines","none","detail",""],["slot","start","name","pizza-outline"],[1,"ion-text-wrap"],["color","dark","fill","clear","slot","end"],["slot","icon-only","name","eye-off-outline"],["color","dark"],[1,"value"],["slot","start","name","barcode-outline"],["name","gift-outline",1,"gift"],[1,"ion-margin-vertical"],[1,"title"],["expand","block","fill","outline"],[1,"ion-no-border",3,"ngClass"],["color","primary",1,"ion-no-margin","ion-padding-vertical"],[1,"opacity-transition",3,"options"],[4,"ngFor","ngForOf"],["detail",""],["slot","start","color","#fff",3,"name"],[1,"container","ion-text-left"],[3,"name"]],template:function(n,t){1&n&&(r.TgZ(0,"ion-header",0),r.TgZ(1,"ion-toolbar",1),r.TgZ(2,"ion-title",2),r._UZ(3,"img",3),r.TgZ(4,"span"),r._uU(5,"Rodrigo"),r.qZA(),r.TgZ(6,"ion-button",4),r.NdJ("click",function(){return t.toogleBlocks()}),r._UZ(7,"ion-icon",5),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(8,"ion-content",6),r.TgZ(9,"div",7,8),r.TgZ(11,"div",9),r._UZ(12,"img",10),r.TgZ(13,"span"),r._uU(14,"Banco "),r.TgZ(15,"strong"),r._uU(16,"000 - Nu Pagamentos S.A"),r.qZA(),r.qZA(),r.TgZ(17,"span"),r._uU(18,"Ag\xeancia "),r.TgZ(19,"strong"),r._uU(20,"0000"),r.qZA(),r.qZA(),r.TgZ(21,"span"),r._uU(22,"Conta "),r.TgZ(23,"strong"),r._uU(24,"000000000-0"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(25,"ion-list",11),r.YNc(26,p,4,2,"ion-item",12),r.qZA(),r.TgZ(27,"ion-button",13),r.TgZ(28,"strong"),r._uU(29,"SAIR DA CONTA"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(30,"div",14,15),r.TgZ(32,"ion-card"),r.TgZ(33,"ion-item",16,17),r._UZ(35,"ion-icon",18),r.TgZ(36,"ion-label"),r._uU(37,"Cart\xe3o de cr\xe9dito"),r.qZA(),r.qZA(),r.TgZ(38,"ion-card-content",19),r.TgZ(39,"div",20),r.TgZ(40,"span",21),r._uU(41,"Fatura atual"),r.qZA(),r.TgZ(42,"span",22),r._uU(43,"R$ 57,55"),r.qZA(),r.TgZ(44,"span"),r._uU(45,"Limite disponivel "),r.TgZ(46,"span",23),r._uU(47,"Infinty"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(48,"div",24),r.TgZ(49,"ion-item",25),r._UZ(50,"ion-icon",26),r.TgZ(51,"ion-label",27),r._uU(52,"Compra mais recente em Ifood *Ifood no valor de R$ 54,00"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(53,"ion-card"),r.TgZ(54,"ion-item",16),r._UZ(55,"ion-icon",18),r.TgZ(56,"ion-label"),r._uU(57,"Conta"),r.qZA(),r.TgZ(58,"ion-button",28),r._UZ(59,"ion-icon",29),r.qZA(),r.qZA(),r.TgZ(60,"ion-card-content",19),r.TgZ(61,"div",20),r.TgZ(62,"span"),r._uU(63,"Saldo disponivel"),r.qZA(),r.TgZ(64,"ion-text",30),r.TgZ(65,"span",31),r._uU(66,"R$ 200.000.000,00"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(67,"div",24),r.TgZ(68,"ion-item",25),r._UZ(69,"ion-icon",32),r.TgZ(70,"ion-label",27),r._uU(71,"Boleto de R$ 322,55 pago na segunda"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(72,"ion-card"),r.TgZ(73,"ion-card-content",2),r._UZ(74,"ion-icon",33),r.TgZ(75,"div",34),r.TgZ(76,"ion-text",30),r.TgZ(77,"p",35),r.TgZ(78,"strong"),r._uU(79,"Nubank Rewards"),r.qZA(),r.qZA(),r.TgZ(80,"p"),r._uU(81,"Acumule pontos que nunca expiram e troque por passagens a\xe9reas ou servi\xe7os que voc\xea realmente usa."),r.qZA(),r.qZA(),r.qZA(),r.TgZ(82,"ion-button",36),r.TgZ(83,"strong"),r._uU(84,"ATIVE O SEU REWARDS"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(85,"ion-footer",37),r.TgZ(86,"ion-toolbar",38),r.TgZ(87,"ion-slides",39),r.YNc(88,d,5,2,"ion-slide",40),r.qZA(),r.qZA(),r.qZA()),2&n&&(r.xp6(7),r.Q6J("name",t.initialStep>0?"arrow-up-outline":"arrow-down-outline"),r.xp6(1),r.Q6J("scrollY",!t.swiping),r.xp6(18),r.Q6J("ngForOf",t.items),r.xp6(4),r.Q6J("ngClass",t.fixedBlocks()?"fixed":null),r.xp6(55),r.Q6J("ngClass",t.fixedBlocks()>0?"hidden":null),r.xp6(2),r.Q6J("options",t.slidesOptions),r.xp6(1),r.Q6J("ngForOf",t.options))},directives:[e.Gu,e.sr,e.wd,e.YG,e.gu,e.W2,e.q_,i.sg,i.mk,e.PM,e.Ie,e.Q$,e.FN,e.yW,e.fr,e.Hr,e.A$],styles:["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--min-height:150px}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{align-items:flex-end}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;vertical-align:middle;margin-right:10px}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{display:block}ion-content[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]{opacity:0}ion-content[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .bank-information[_ngcontent-%COMP%]   .qrCode[_ngcontent-%COMP%]{width:100px;margin:16px auto;display:block}ion-content[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .bank-information[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:5px 0;font-size:14px;display:block}ion-content[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{margin-top:33px;background:#0000}ion-content[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{color:#fff;--background:#0000;--detail-icon-opacity:1;border-bottom:.55px solid #ffffffb3}ion-content[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:first-of-type{border-top:.55px solid #ffffffb3}ion-content[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff}ion-content[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   .logout[_ngcontent-%COMP%]{margin-top:32px;margin-bottom:100px}ion-content[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:999}ion-content[_ngcontent-%COMP%]   .blocks.fixed[_ngcontent-%COMP%]{position:fixed;top:110px;overflow-y:hidden}ion-content[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .cash[_ngcontent-%COMP%]   span.value[_ngcontent-%COMP%]{font-size:30px;display:block}ion-content[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .cash[_ngcontent-%COMP%]   span.blue[_ngcontent-%COMP%]{color:#0ab9cd}ion-content[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .cash[_ngcontent-%COMP%]   span.green[_ngcontent-%COMP%]{color:#94c22b}ion-content[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{background:#f4f5f8}ion-content[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:20px}ion-content[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .gift[_ngcontent-%COMP%]{font-size:30px}ion-footer.hidden[_ngcontent-%COMP%]{height:0}ion-footer.hidden[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]{opacity:0}ion-footer[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{width:100%;height:100px;background:var(--ion-color-primary-tint);padding:10px;margin:0 5px;display:flex;flex-direction:column;justify-content:space-between}ion-footer[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:24px}ion-footer[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px}.opacity-transition[_ngcontent-%COMP%]{transition:opacity .8s}"]}),n})()}];let Z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[[a.Bz.forChild(u)],a.Bz]}),n})(),_=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[[i.ez,c.u5,e.Pc,Z]]}),n})()}}]);