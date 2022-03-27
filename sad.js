"use strict"
class plant {
	constructor(name,kin,summa,tmin,tmax,m2max,kmax,photo){
		this.name=name
		this.kin=kin
		this.t={ 
			summa,sum:0,wshod:15,min:tmin, opt:20, max:tmax	
		}
		this.lande=5		
		this.kolwo=1		
		this.posew="апрель, 12"		
		this.wshod="июль, 12"		
		this.day=0		
		this.plod=0		
		this.podkorm={
        m2:0, k:0, m2max, kmax
    }
    this.photo=photo
    this.photo_set=["img/Photo0164","img/Photo0165",photo]
  // wrapper
	// methods	
		this.print=println
		this.add_sum=add_sum
    this.add_plod=add_plod
    this.add_m2=add_m2
    this.add_k=add_k
    this.stat_plod_meter=stat_plod_meter
    this.stat_plod_plant=stat_plod_plant

    this.add_li=add_li
    this.foto=foto
	}
}

/*****************************/
/* создание списка растений  */

var ul_grow=document.getElementById("grow")
function add_element (parent, element, mes="",clas="",src="",ali="") {
     var m = document.createElement(element);
     m.textContent = mes;
     m.setAttribute('class', clas);
     m.setAttribute('align', ali);
//     m.className=clas;
     m.src = src;
     parent.appendChild(m);
}
function add_li() {
  add_element(ul_grow, "li")
  let li_t=document.getElementsByTagName("li")  
  let max=li_t.length-1
//    alert(max)
  let li=li_t[max]
  add_element(li,"details")
  let d_t=document.getElementsByTagName("details")
  let md=d_t.length-1
  let d=d_t[md]
	let new1=this.name
  add_element(d,"summary",new1)
  add_element(d,"p")
  let p_t=document.getElementsByTagName("details")
  let mp=p_t.length-1
  let p=p_t[md]
	let new2=this.photo
  add_element(p,"img","","prav",new2,"right")
  add_element(p,"i","семейство ")
  add_element(p,"b",this.kin)
  add_element(p,"br")
  add_element(p,"i","длина гряды, м:  ")
  add_element(p,"b",this.lande)
  add_element(p,"br")
  add_element(p,"i","количество растений, шт: ")
  add_element(p,"b",this.kolwo)
  add_element(p,"br")
  add_element(p,"i","посев: ")
  add_element(p,"b",this.posew)
  add_element(p,"br")
  add_element(p,"i","всходы: ")
  add_element(p,"b",this.wshod)
  add_element(p,"br")
  add_element(p,"i","возраст, дней: ")
  add_element(p,"b",this.day)
  add_element(p,"br")
  add_element(p,"i","сумма температур: ")
  add_element(p,"b",this.t.summa)
  add_element(p,"br")
  add_element(p,"i","текущая: ")
  add_element(p,"b",this.t.sum)
  add_element(p,"br")
  add_element(p,"i","остаток: ")
  add_element(p,"b",(this.t.summa-this.t.sum))
  add_element(p,"br")
  add_element(p,"i","плоды, кг: ")
  add_element(p,"b",this.plod)
  add_element(p,"br")
  add_element(p,"i","подкормки М2 (осталось), шт: ")
  add_element(p,"b",this.podkorm.m2)
  add_element(p,"i","(")
  add_element(p,"b",(this.podkorm.m2max-this.podkorm.m2))
  add_element(p,"i",")")
  add_element(p,"br")
  add_element(p,"i","подкормки K (осталось), шт: ")
  add_element(p,"b",this.podkorm.k)
  add_element(p,"i","(")
  add_element(p,"b",(this.podkorm.kmax-this.podkorm.k))
  add_element(p,"i",")")
  add_element(p,"br")
  add_element(p,"i","урожайность кг на метр: ")
  add_element(p,"b",this.stat_plod_meter())
  add_element(p,"br")
  add_element(p,"i","урожайность кг на растение: ")
  add_element(p,"b",this.stat_plod_plant())
  add_element(p,"br")
//  add_element(p,"i","")
//  add_element(p,"b",this.)
//  add_element(p,"br")

}
function println() {}
/*	console.log(this.name,"семейство:", this.kin)
	console.log("\tдлина гряды, м:", this.lande)
	console.log("\tколичество растений, шт:", this.kolwo)
	console.log("\tпосев:", this.posew)
	console.log("\tвсходы:", this.wshod)
	console.log("\tвозраст, дней:", this.day)
	console.log("\tсумма температур:", this.t.summa)
	console.log("\t\t текущая:",  this.t.sum)
	console.log("\t\t остаток:", this.t.summa-this.t.sum)
	console.log("\tплоды, кг:", this.plod)
	console.log("\tподкормки М2 (осталось), шт:", this.podkorm.m2,"(",this.podkorm.m2max-this.podkorm.m2,")")
	console.log("\tподкормки K (осталось), шт:", this.podkorm.k,"(",this.podkorm.kmax-this.podkorm.k,")")
	console.log("\tурожайность кг на метр:", this.stat_plod_meter())
	console.log("\tурожайность кг на растение:", this.stat_plod_plant())
}*/
function add_sum(t,n) {
//	console.log(t,n,this.t.sum)
    if (t<this.t.max && t>this.t.min) {
      this.t.sum+=(t-this.t.min)*n
 }
	this.day+=n
}
function add_plod(p) {
//	console.log("добавлен урожай, кг:",p)
	this.plod+=p
}
function add_m2(m) {
//	console.log("добавлена подкормка M2")
	this.podkorm.m2+=m
}
function add_k(n) {
//	console.log("добавлена подкормка K")
	this.podkorm.k+=n
}
function stat_plod_plant(){
  return this.plod/this.kolwo
}
function stat_plod_meter(){
  return this.plod/this.lande
}
function foto() {
  let a=document.getElementById("foto")
  a.setAttribute("src",this.photo)
  console.log(a)
}
const nbody=document.getElementsByTagName("body")[0]
function set_color() {
    nbody.style.color=btn_color.value
}
function set_back() {
    nbody.style.background=btn_back.value
            }
function set_restore() {
    nbody.style.background="#032020"
    nbody.style.color="white"
            }

// new klass
//
class tyqua extends plant {
    constructor(name) {
       super(name,"тыква",3000,10,35,8,8,"img/Photo0184.jpg")
    }
}
class pipo extends plant {
    constructor(name) {
       super(name,"кабачок",1400,10,35,8,8,"img/Photo0184.jpg")
    }
}
class ogurec extends plant {
    constructor(name) {
        super(name,"огурец",1400,15,35,8,8,"img/photo0184.jpg")
    }
}
class dynja extends plant {
    constructor(name) {
        super(name,"дыня",3000,15,35,8,8,"img/photo0184.jpg")
    }
}
class mare  extends plant {
    constructor(name) {
        super(name,"маревые",1500,4,25,3,8,"img/Photo0168.jpg")
    }
}
class selder  extends plant {
    constructor(name) {
        super(name,"сельдерейные",1500,6,25,4,8,"img/Photo0158.jpg")
    }
}
class kapust  extends plant {
    constructor(name) {
        super(name,"капустные",1700,4,25,4,8,"none")
    }
}
class repa  extends plant {
    constructor(name) {
        super(name,"капустные",1700,4,25,4,8,"none")
    }
}
class luk  extends plant {
    constructor(name) {
        super(name,"луковые",1700,7,30,6,8,"none")
    }
}
class astra  extends plant {
    constructor(name) {
        super(name,"астровые",2150,4,32,6,6,"img/Photo0182.jpg")
    }
}
class kartof  extends plant {
    constructor(name) {
        super(name,"картофель",1650,7,30,4,8,"none")
    }
}
class tomat  extends plant {
    constructor(name) {
        super(name,"томат_перец",2000,15,30,6,8,"none")
    }
}
class fasol  extends plant {
    constructor(name) {
        super(name,"фасоль",2000,10,30,6,8,"none")
    }
}

let c=new pipo("кабачок цукини свой-2")
c.kolwo=6
c.lande=2.5
c.add_sum(16,0)
c.wshod=""//"май, 25"
c.posew=""//"май, 14"
c.add_m2(0)
c.add_k(0)
c.add_plod(0)
c.print()
c.add_li()

let ck=new pipo("кабачок цукини круглый свой-1")
ck.kolwo=1
ck.lande=0.5
ck.add_sum(25,0)
ck.wshod=""//май, 25"
ck.posew=""//май, 14"
ck.add_m2(0)
ck.add_k(3)
ck.add_plod(0)
ck.print()
ck.add_li()

let k=new pipo("кабачок свой-2")
k.kolwo=5
k.lande=2.5
k.add_sum(25,0)
k.wshod=""//май, 25"
k.posew=""//май, 14"
k.add_m2(0)
k.add_k(0)
k.add_plod(0)
k.print()
k.add_li()

let kart=new kartof("картофель")
kart.kolwo=42
kart.lande=6
kart.add_sum(25,0)
kart.posew="апрель, май, 16-30; t=7"//май, 6"
kart.wshod=""//май, 14"
kart.add_m2(0)
kart.add_k(0)
kart.add_plod(0.000)
kart.print()
kart.add_li()


let l=new luk("лук барботир. семена ")
l.photo="img/Photo0181.jpg"
l.kolwo=50
l.lande=0.2
l.posew="на рассаду -- март, 20; t=26"
l.wshod="март, 26; t=26; солнце"
l.add_sum(26,1)
//add_sum.call(a,25,3)
l.add_plod(0.0)
l.add_m2(0)
l.add_k(0)
l.print()
l.add_li()

let m=new selder("морковь барботир.")
m.kolwo=200
m.lande=5
m.add_sum(25,0)
m.posew="апрель, май, 16-30; t=6"//май, 6"
m.wshod=""//май, 14"
m.add_m2(0)
m.add_k(0)
m.add_plod(0.000)
m.print()
m.add_li()

let o=new ogurec("огурец барботир.и пророщенные семена ")
o.photo="img/Photo0165.jpg"
o.kolwo=80
o.lande=0.4
o.posew="на рассаду --  май, 1-13"
o.wshod="-"
o.add_sum(1,0)
//add_sum.call(a,25,3)
o.add_plod(0.0)
o.add_m2(0)
o.add_k(0)
o.print()
o.add_li()

let po=new astra("подсолнечник масличный озимый")
po.kolwo=60
po.lande=3
po.posew="сентябрь, 29; t=8"
po.wshod=""
po.add_sum(0,0)
po.add_m2(0)
po.add_k(0)
po.add_plod(0)
po.print()
po.add_li()

let p=new astra("подсолнечник свой-1 барботир.,пророщ.")
p.kolwo=60
p.lande=6
p.posew="апрель, май, 1-13; t=4"// май 23
p.wshod="" // июнь, 6"
p.add_sum(0,0)
p.add_m2(0)
p.add_k(0)
p.add_plod(0)
p.print()
p.add_li()

let sw=new mare("свекла барботир.")
sw.photo="img/Photo0175.jpg"
sw.kolwo=40
sw.lande=2.5
sw.add_sum(25,0)
sw.posew="апрель, май, 16-30; t=4"//май, 9"
sw.wshod=""//май, 18"
sw.add_m2(0)
sw.add_k(0)
sw.add_plod(0.00)
sw.print()
sw.add_li()

let t=new tomat("томат барботир. семена ")
t.photo="img/Photo0181.jpg"
t.kolwo=80
t.lande=0.4
t.posew="на рассаду -- апрель, 2-14"
t.wshod="-"
t.add_sum(1,0)
//add_sum.call(a,25,3)
t.add_plod(0.0)
t.add_m2(0)
t.add_k(0)
t.print()
t.add_li()

let uo=new selder("укроп грибовский свой-1 озимый")
uo.photo="img/Photo0186.jpg"
uo.kolwo=300
uo.lande=3
uo.add_sum(0,0)
uo.wshod="" //июнь, 4"
uo.posew="сентябрь, 29; t=8" //"май, 23"
uo.add_m2(0)
uo.add_k(0)
uo.add_plod(0)
uo.print()
uo.add_li()

let u=new selder("укроп грибовский свой-1 барботир.")
u.photo="img/Photo0186.jpg"
u.kolwo=600
u.lande=6
u.add_sum(0,0)
u.posew="май 1-14; t=6" //"май, 23"
u.wshod="" //июнь, 4"
u.add_m2(0)
u.add_k(0)
u.add_plod(0)
u.print()
u.add_li()

let fas=new selder("фасоль сухие семена")
fas.photo="img/Photo0186.jpg"
fas.kolwo=600
fas.lande=6
fas.add_sum(0,0)
fas.posew="май, 16-30; t=10" 
fas.wshod="" 
fas.add_m2(0)
fas.add_k(0)
fas.add_plod(0)
fas.print()
fas.add_li()

let sp=new mare("шпинат барботир.")
sp.kolwo=30
sp.lande=2.5
sp.add_sum(20,0)
sp.posew="апрель, май, 16-30; t=6"//май, 9"
sp.wshod=""//май, 23"
sp.add_m2(0)
sp.add_k(0)
sp.add_plod(0.00)
sp.print()
sp.add_li()

let lo=new luk("чеснок озимый ")
lo.photo="img/Photo0181.jpg"
lo.kolwo=150
lo.lande=5
lo.posew="сентябрь, 29; t=8"
lo.wshod="-"
lo.add_sum(1,0)
//add_sum.call(a,25,3)
lo.add_plod(0.0)
lo.add_m2(0)
lo.add_k(0)
lo.print()
lo.add_li()


/*
let rp=new  repa("репа португальская")
rp.photo="img/Photo0187.jpg"
rp.kolwo=100
rp.lande=1
rp.posew="июль, 14"
rp.wshod="июль, 26"
rp.add_sum(20,9)
rp.add_sum(25,4)
rp.add_sum(30,9)
rp.add_sum(32,5)
rp.add_sum(15,7)
rp.add_sum(12,16)
rp.add_m2(3)
rp.add_k(1)
rp.add_plod(0)
rp.print()
rp.add_li()

*/
